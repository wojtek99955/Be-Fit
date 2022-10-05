import { SearchIcon } from "../../../CaloriesCalculator/CaloriesCalculatorsStyle";
import { useState, useRef, useEffect, useContext } from "react";
import { routes } from "../SearchRoutes";
import { useNavigate } from "react-router-dom";
import { darkModeContext } from "../../../../context/DarkModeContextProvider";
import {
  SearchInput,
  InputContainer,
  FormWrapper,
  SuggestionsContainer,
  StyledSearchIcon,
} from "./SearchStyle";
import { Route } from "../SearchRoutes";

const Search = () => {
  const [searchedRoute, setSearchedRoute] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;
  let navigation = useNavigate();

  const suggestionsContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredRoutes = routes.filter((route) => {
    return route.name.toLowerCase().includes(searchedRoute.toLowerCase());
  });

  const handleRouteOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedRoute(e.target.value);
  };
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    if (searchedRoute !== "") navigation(`/${searchedRoute}`);
    e.preventDefault();
  };

  const handleSelectRoute = (route: Route) => {
    navigation(`${route.route}`);
  };

  const handleFocusOpenSuggestions = (e: any) => {
    if (searchInputRef.current && searchInputRef.current.contains(e.target)) {
      setIsSuggestionsOpen(true);
    } else {
      setIsSuggestionsOpen(false);
    }
  };

  const handleCloseClickOutside = (e: any) => {
    if (
      suggestionsContainerRef.current &&
      !suggestionsContainerRef.current.contains(e.target)
    ) {
      setIsSuggestionsOpen(false);
    }
  };

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

  useEffect(() => {
    document.addEventListener("click", handleFocusOpenSuggestions);
    return () => {
      document.removeEventListener("click", handleFocusOpenSuggestions);
    };
  }, [isSuggestionsOpen]);
  return (
    <FormWrapper>
      <>
        <form onSubmit={handleOnSubmit}>
          <InputContainer>
            <SearchIcon />
            <SearchInput onChange={handleRouteOnChange} ref={searchInputRef} />
          </InputContainer>
        </form>
        {isSuggestionsOpen && searchedRoute !== "" ? (
          <SuggestionsContainer
            ref={suggestionsContainerRef}
            darkMode={darkMode!}
          >
            {filteredRoutes.map((route) => {
              return (
                <div
                  onClick={() => {
                    handleSelectRoute(route);
                  }}
                >
                  <StyledSearchIcon />
                  {route.name}
                </div>
              );
            })}
            {filteredRoutes.length === 0 && <div>not found</div>}
          </SuggestionsContainer>
        ) : null}
      </>
    </FormWrapper>
  );
};

export default Search;
