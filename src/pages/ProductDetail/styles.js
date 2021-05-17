import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #2c2c2c;
  padding: 32px;
`;

export const CardDirection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProdutTitleUser = styled.h1`
  font-weight: 600;
  text-align: center;
  line-height: 1.2em;
  color: #4e6e7d;
  margin: 2em 0;

  @media only screen and (max-width: 570px) {
    font-size: 1.4em;
    margin: 0.8em;
  }
`;

export const ContainerProductBody = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  margin: 2em 1em;

  @media only screen and (max-width: 570px) {
    margin: 0.3em 1em;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 600;
  line-height: 1.2em;
  color: #4e6e7d;
  @media only screen and (max-width: 570px) {
    font-size: 1.26em;
  }
`;

export const ProductDiscount = styled.h3`
  font-weight: 400;
  line-height: 1.2em;
  color: #4e6e7d;

  margin-top: 0.9em;

  @media only screen and (max-width: 570px) {
    margin-top: 0.4em;
  }
`;

export const Separator = styled.div`
  margin: 1em 2em;

  width: 96%;
  border: 1px solid rgba(87, 188, 234, 0.77);
  border-radius: 20px;

  @media only screen and (max-width: 570px) {
    margin: 1em;
  }
`;
