import {
  Container,
  SearchInput,
  HealthyStyleIconContainer,
  WorkOutIconContainer,
  InputContainer,
  LinkIcons,
  StyledLink,
  CalculatorIcon,
  GoalIcon,
  FoodCalories,
  WeightIcon,
  LinkContainer,
  FormWrapper,
  SuggestionsContainer,
} from "./GreetingStyle";
import HealthyStyleIcon from "../../../assets/svg/HealthyStyleIcon";
import WorkOutIcon from "../../../assets/svg/WorkOutIcon";
import { SearchIcon } from "../../CaloriesCalculator/CaloriesCalculatorsStyle";
import { useState, useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import { routes } from "./SearchRoutes";
import { useNavigate } from "react-router-dom";

const Greeting = () => {
  const [searchedRoute, setSearchedRoute] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const filteredRoutes = routes.filter((route) => {
    return route.name.toLowerCase().includes(searchedRoute.toLowerCase());
  });
  const suggestionsContainerRef = useRef<HTMLDivElement>(null);

  const handleCloseClickOutside = (e: any) => {
    if (
      suggestionsContainerRef.current &&
      !suggestionsContainerRef.current.contains(e.target)
    ) {
      setIsSuggestionsOpen(false);
    }
  };

  let navigation = useNavigate();

  useEffect(() => {
    document.addEventListener("click", handleCloseClickOutside);

    return () => {
      document.removeEventListener("click", handleCloseClickOutside);
    };
  }, [isSuggestionsOpen]);

  useEffect(() => {
    if (searchedRoute.length > 1) {
      setIsSuggestionsOpen(true);
    }
  }, [searchedRoute]);

  console.log(filteredRoutes);
  console.log(searchedRoute + "searched route");

  const handleRouteOnChange = (e: any) => {
    setSearchedRoute(e.target.value);
  };
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    if (searchedRoute !== "") navigation(`/${searchedRoute}`);
    e.preventDefault();
  };

  const handleSelectRoute = (route: any) => {
    navigation(`${route.route}`);
  };
  return (
    <Container>
      <WorkOutIconContainer>
        <WorkOutIcon />
      </WorkOutIconContainer>
      <HealthyStyleIconContainer>
        <HealthyStyleIcon />
      </HealthyStyleIconContainer>
      <h1>Good To See You!</h1>
      <FormWrapper>
        <>
          <form onSubmit={handleOnSubmit}>
            <InputContainer>
              <SearchIcon />
              <SearchInput onChange={handleRouteOnChange} />
            </InputContainer>
          </form>
          {searchedRoute.length >= 1 && isSuggestionsOpen ? (
            <SuggestionsContainer ref={suggestionsContainerRef}>
              {filteredRoutes.map((route) => {
                return (
                  <div
                    onClick={() => {
                      handleSelectRoute(route);
                    }}
                  >
                    {route.name}
                  </div>
                );
              })}
              {filteredRoutes.length === 0 && <div>not found</div>}
            </SuggestionsContainer>
          ) : null}
        </>
      </FormWrapper>
      <LinkIcons>
        <LinkContainer>
          <StyledLink to="/calculators">
            <CalculatorIcon />
          </StyledLink>
          Calculators
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/my-goal">
            <GoalIcon />
          </StyledLink>
          Your goal
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/calories-calculator">
            <FoodCalories />
          </StyledLink>
          Check calories
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/track-calories">
            <WeightIcon />
          </StyledLink>
          Track calories
        </LinkContainer>
      </LinkIcons>
    </Container>
  );
};

export default Greeting;
