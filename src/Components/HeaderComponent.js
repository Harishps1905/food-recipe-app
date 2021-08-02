import styled from "styled-components";

export const Header = styled.div`
  color: #ffffff;
  display: flex;
  background-color: #000000;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppIcon = styled.img`
  width: 25px;
  height: auto;
  margin: 10px;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 6px;
  width: 50%;
  padding: 0 10px;
`;
export const SearchInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
