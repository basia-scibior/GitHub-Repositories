import styled from "styled-components";
import { blue, grey } from "../../theme";
import { Link } from "react-router-dom";

export const ContainerAsLink = styled(Link)`
  width: 80%;
  min-height: 70px;
  margin: 10px 0;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${grey};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 85%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Details = styled.div`
  display: flex;
`;

export const Language = styled.span`
  color: ${grey};
  margin-left: 10px;
  @media (max-width: 750px) {
    font-size: 15px;
  }
`;

export const Name = styled.span`
  font-size: 26px;
  font-weight: 400;
  color: ${blue};
  @media (max-width: 400px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const Owner = styled.p`
  color: ${blue};
  opacity: 0.8;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;
