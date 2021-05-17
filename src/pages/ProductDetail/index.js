import React from "react";

import CardBackground from "../../components/CardBackground";

import {
  Container,
  CardDirection,
  ProdutTitleUser,
  ContainerProductBody,
  ProductTitle,
  ProductDiscount,
  Separator,
} from "./styles";

export default function ProductDetail() {
  return (
    <>
      <Container>
        <CardBackground>
          <ProdutTitleUser>Produtos: Lorem ipsum dolor.</ProdutTitleUser>
          <CardDirection>
            <ContainerProductBody>
              <ProductTitle>Nome Produto</ProductTitle>
              <ProductDiscount>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique, expedita reiciendis.
              </ProductDiscount>
            </ContainerProductBody>
            <Separator />
            <ContainerProductBody>
              <ProductTitle>Nome Produto</ProductTitle>
              <ProductDiscount>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique, expedita reiciendis.
              </ProductDiscount>
            </ContainerProductBody>
          </CardDirection>
        </CardBackground>
      </Container>
    </>
  );
}
