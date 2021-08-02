import styled from "styled-components";
import React, { useState } from "react";
import Axios from "axios";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./Components/HeaderComponent";
import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  Placeholder,
} from "./Components/RecipeComponent";

const RecipeComponent = (props) => {
  const { recipeObj } = props;

  return (
    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText>Ingredients</IngredientsText>
      <SeeMoreText onClick={() => window.open(recipeObj.url)}>
        See Complete Recipe
      </SeeMoreText>
    </RecipeContainer>
  );
};

const APP_ID = "54eb2898";
const APP_KEY = "437b4009a9b08081e7f17ca335d18e7b";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateUpdateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const responce = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(responce);
    updateUpdateRecipeList(responce.data.hits);
  };

  const onTextChanged = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      fetchRecipe(e.target.value);
    }, 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="hamb.svg" />
          Recepe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="search-icon.svg" />
          <SearchInput placeholder="search recipe" onChange={onTextChanged} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="hamb.svg" />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
