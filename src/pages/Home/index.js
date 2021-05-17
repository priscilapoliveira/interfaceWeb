import React from "react";

import CardBackground from "../../components/CardBackground";
import ProductCard from "../../components/ProductCard";

import { Container, CardDirection } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <CardBackground>
          <CardDirection>
            <ProductCard>Ver produtos sem desconto personalizado</ProductCard>
            <ProductCard>
              Ver produtos com desconto de aniversariante
            </ProductCard>
            <ProductCard>
              Ver produtos sem desconto de aniversariante{" "}
            </ProductCard>
          </CardDirection>
        </CardBackground>
      </Container>
    </>
  );
}
