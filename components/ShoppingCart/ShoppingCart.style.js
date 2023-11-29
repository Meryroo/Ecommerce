import styled from "styled-components";

export const StyledCartContainer = styled.div`
border: 1px solid black;
padding: 10px;
margin-bottom: 10px;

`;

export const ItemTitle = styled.p`
font-size: 18px;
font-weight: bold;

`;

export const ItemQuantity = styled.p`
  font-size: 16px;
  color: #555;
`;

export const ActionButton = styled.button`
  padding: 8px;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const IncrementButton = styled(ActionButton)`
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
  }
`;

export const DecrementButton = styled(ActionButton)`
  background-color: #c2c2c2;
  color: white;

  &:hover {
    background-color: #d5d5c5;
  }
`;
export const RemoveButton = styled(ActionButton)`
  background-color: #e74c3c;
  color: white;

  &:hover {
    background-color: #c0392b;
  }
`;

