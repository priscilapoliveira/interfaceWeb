import React from "react";

import {
  Card,
  BodyContent,
  FooterCheckService,
  TitleFooterCheckService,
  StatusServicesContainer,
  StatusServicesText,
  BodyStatusServices,
  IconServiceOk,
  IconServiceNotOk,
} from "./styles";

export default function CardBackground({ children }) {
  return (
    <>
      <Card>
        <BodyContent>{children}</BodyContent>
        <FooterCheckService>
          <TitleFooterCheckService>
            Health Check Services
            <StatusServicesContainer style={{ justifyContent: "space-around" }}>
              <BodyStatusServices>
                <IconServiceOk />
                <StatusServicesText>Product Service</StatusServicesText>
              </BodyStatusServices>
              <BodyStatusServices>
                <IconServiceNotOk />
                <StatusServicesText>User Service</StatusServicesText>
              </BodyStatusServices>
              <BodyStatusServices>
                <IconServiceOk />
                <StatusServicesText>Discount Service</StatusServicesText>
              </BodyStatusServices>
            </StatusServicesContainer>
          </TitleFooterCheckService>
        </FooterCheckService>
      </Card>
    </>
  );
}
