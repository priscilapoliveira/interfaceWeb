import styled from "styled-components";
import { ThumbUp, ThumbDown } from "@material-ui/icons";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background-color: white;

  width: 60vw;
  height: 90vh;
  z-index: 0;

  -webkit-box-shadow: 10px 6px 14px 0px rgba(87, 188, 234, 0.77);
  -moz-box-shadow: 10px 6px 14px 0px rgba(87, 188, 234, 0.77);
  box-shadow: 10px 6px 14px 0px rgba(87, 188, 234, 0.77);

  @media only screen and (max-width: 570px) {
    width: 70vw;
    height: 80vh;
  }
`;

export const BodyContent = styled.div`
  width: 30vw;
  height: 88vh;
  @media only screen and (max-width: 570px) {
    height: 78vh;
  }
`;

export const FooterCheckService = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 5vh;

  width: 60vw;
  height: 18vh;

  border-radius: 0 0 30px 30px;
  border: 2px solid rgba(87, 188, 234, 0.77);

  background-color: white;
  z-index: 2;

  @media only screen and (max-width: 570px) {
    margin-bottom: 3vh;
    width: 70vw;
    height: 15vh;
  }
`;

export const TitleFooterCheckService = styled.h2`
  font-weight: bold;
  color: #4e6e7d;
  margin: 0.8em;
  text-align: center;

  @media only screen and (max-width: 570px) {
    margin: 0.2rem 0.8rem 0;
  }
`;

export const BodyStatusServices = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  @media only screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

export const StatusServicesContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 1.5em 0;

  @media only screen and (max-width: 570px) {
    margin: 1rem 0.2rem;
  }
`;

export const StatusServicesText = styled.h5`
  font-weight: 500;
  line-height: 1em;
  color: #4e6e7d;
  text-align: center;

  @media only screen and (max-width: 570px) {
    font-size: 0.8rem;
    font-weight: 500;

    margin-top: 0.4rem;
  }
`;

export const IconServiceOk = styled(ThumbUp)`
  margin-right: 0.5em;
  color: #4caf51;
`;

export const IconServiceNotOk = styled(ThumbDown)`
  margin-right: 0.5em;
  color: #f48fb1;
`;
