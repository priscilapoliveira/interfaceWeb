import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  margin: 1em;

  @media only screen and (max-width: 570px) {
    margin: 0.74rem;
  }
`;

export const Card = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  background-color: #c9ecff;

  width: 30vw;
  height: 20vh;

  z-index: 1;

  border-radius: 18px;
  padding: 16px;

  -webkit-box-shadow: 3px 4px 5px 0px rgba(204, 204, 204, 0.38);
  -moz-box-shadow: 3px 4px 5px 0px rgba(204, 204, 204, 0.38);
  box-shadow: 3px 4px 5px 0px rgba(204, 204, 204, 0.38);

  :hover {
    background-color: #bedaea;
  }

  @media only screen and (max-width: 570px) {
    display: flex;
    flex-direction: column;
    height: 18vh;
  }
`;

export const IconProduct = styled(ShoppingBasketIcon)`
  font-size: large;
  color: #4e6e7d;
  margin-right: 0.2em;

  @media only screen and (max-width: 570px) {
    font-size: medium;
  }
`;

export const Description = styled.h3`
  font-weight: 600;
  font-size: 1.2em;
  color: #4e6e7d;
  text-align: center;
  padding: 0 0.2rem;

  @media only screen and (max-width: 570px) {
    font-size: 1em;
    padding: 0;
  }
`;
