import styled from "styled-components";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./Components/HeaderComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
`;
const RecipeContainer = styled.div``;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="hamb.svg" />
          Recepe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="search recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer></RecipeListContainer>
      hello world!
    </Container>
  );
}

export default App;
