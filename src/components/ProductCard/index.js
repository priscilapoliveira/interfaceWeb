import React from "react";

import { Container, Card, IconProduct, Description } from "./styles";

export default function ProductCard({ children }) {
  return (
    <>
      <Container to="/ProductDetail">
        <Card>
          <IconProduct />
          <Description>{children}</Description>
        </Card>
      </Container>
    </>
  );
}
