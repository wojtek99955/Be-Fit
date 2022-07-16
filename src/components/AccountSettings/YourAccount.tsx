import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { Formik, Form, ErrorMessage } from "formik";
import {
  Container,
  ImageContainer,
  Button,
  Wrapper,
  NameContainer,
  Divider,
  Image,
  EmailContainer,
  StyledField,
  FileInput,
  ConfirmPassword,
} from "./AccountSettingsStyle";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateEmail, updateProfile } from "firebase/auth";
import Loader from "../../assets/Loader";
import {
  getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { CorrectIcon } from "./Security/SecurityStyle";
import styled from "styled-components";

const YourAccount = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const LoaderContainer = styled.div``;

  const auth = getAuth();

  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  const handleEditName = () => {
    setEditName((prev) => !prev);
  };
  const handleEditEmail = () => {
    setEditEmail((prev) => !prev);
  };

  const nameValidationSchema = yup.object().shape({
    name: yup.string().min(3, "minimum 3 characters").required("required"),
  });
  const emailValidationSchema = yup.object().shape({
    email: yup.string().email("invalid email format").required("required"),
  });

  const passwordValidationSchema = yup.object().shape({
    password: yup.string().min(6, "minimum 6 characters").required("required"),
  });

  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const onChangeSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setFile(e.target.files![0]);
    }
  };

  const uploadFile = async () => {
    try {
      setLoading(true);
      const name = uid + file.name;
      const storageRef = ref(storage, `avatars/${name}`);
      setFile(null);
      const snapshot = await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      console.log(photoURL);
      const userRef = doc(db, `users/${uid}`);
      await updateDoc(userRef, { avatarImg: photoURL });
      await updateProfile(ctx?.currentUser, {
        photoURL: photoURL,
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <h2>Your account</h2>
      <ImageContainer>
        <Wrapper>
          <Image url={data.avatarImg}>
            {data?.avatarImg ? null : data?.name?.toUpperCase().slice(0, 1)}
          </Image>
          {data.avatarImg ? null : (
            <div>
              <h3>Upload your profile image</h3>
              <p>This helps your teammates recognise you </p>
            </div>
          )}
          {loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : null}
          <FileInput>
            {file !== null ? (
              <Button onClick={uploadFile} save>
                UPLOAD
              </Button>
            ) : null}
            {!file && !loading ? (
              <>
                <label htmlFor="file">Upload image</label>
                <input
                  type="file"
                  id="file"
                  onChange={onChangeSetFile}
                  onSubmit={uploadFile}
                />
              </>
            ) : null}
          </FileInput>
        </Wrapper>
        <Divider />
      </ImageContainer>
      <NameContainer>
        <h3>Name</h3>

        <Formik
          initialValues={{ name: data.name }}
          enableReinitialize={true}
          onSubmit={async (values) => {
            const userRef = doc(db, `users/${uid}`);
            await updateDoc(userRef, { name: values.name });
            setEditName(false);
          }}
          validationSchema={nameValidationSchema}
        >
          <Form>
            <Wrapper>
              {editName ? (
                <StyledField type="text" name="name" id="name" />
              ) : (
                <span>{data.name}</span>
              )}

              <div>
                {editName ? (
                  <Button type="submit" save>
                    Save
                  </Button>
                ) : null}
                {!editName ? (
                  <Button onClick={handleEditName}>Edit</Button>
                ) : null}
              </div>
            </Wrapper>
            <ErrorMessage name="name" component={ErrorMsg} />
          </Form>
        </Formik>

        <Divider />
      </NameContainer>
      <EmailContainer>
        <h3>Email</h3>
        <Wrapper>
          <span>{data.email}</span>
          <Button onClick={handleEditEmail}>Edit</Button>
          {/* {editEmail ? (
                <StyledField type="text" name="email" id="email" />
              ) : (
                <span>{data.email}</span>
              )}
              {editEmail ? (
                <Button save type="submit">
                  Save
                </Button>
              ) : null}
              {!editEmail ? (
                <Button onClick={handleEditEmail}>Edit</Button>
              ) : null} */}
        </Wrapper>
        <Formik
          initialValues={{ password: "" }}
          validationSchema={passwordValidationSchema}
          onSubmit={async (values) => {
            try {
              setPasswordLoading(true);
              let credential = EmailAuthProvider.credential(
                auth?.currentUser?.email!,
                values.password
              );
              await reauthenticateWithCredential(ctx?.currentUser, credential);
              setConfirmPassword(true);
              setPasswordError(false);
              setPasswordLoading(false);
            } catch {
              setPasswordError(true);
              setPasswordLoading(false);
              console.log("error");
            }
          }}
        >
          <Form>
            {editEmail ? (
              <>
                <p>Before changing email you must confirm your password.</p>
                <ConfirmPassword>
                  <StyledField
                    type="password"
                    name="password"
                    placeholder="confirm password"
                    style={{ width: "12rem" }}
                    disabled={confirmPassword}
                  />
                  {!confirmPassword && !passwordLoading ? (
                    <Button type="submit">Confirm</Button>
                  ) : null}
                  {confirmPassword ? <CorrectIcon /> : null}
                  {passwordLoading ? (
                    <span>
                      <Loader />
                    </span>
                  ) : null}
                </ConfirmPassword>
                <ErrorMessage name="password" component={ErrorMsg} />
                {passwordError ? <ErrorMsg>wrong password</ErrorMsg> : null}
              </>
            ) : null}
          </Form>
        </Formik>
        {confirmPassword ? (
          <Formik
            initialValues={{ email: "" }}
            validationSchema={emailValidationSchema}
            onSubmit={async (values) => {
              const userRef = doc(db, `users/${uid}`);
              await updateDoc(userRef, { email: values.email });
              await updateEmail(ctx?.currentUser, values.email);
              setEditEmail(false);
              setConfirmPassword(false);
            }}
          >
            <Form>
              <StyledField name="email" placeholder="type new email" />
              <ErrorMessage name="email" component={ErrorMsg} />
              <Button> Change</Button>
            </Form>
          </Formik>
        ) : null}
        <Divider />
      </EmailContainer>
    </Container>
  );
};

export default YourAccount;
