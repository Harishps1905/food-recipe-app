import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;

export const Placeholder = styled.img`
  height: 120px;
  width: 120px;
  margin: 200px;
  opacity: 0.5;
`;
