import styled from "styled-components";
import { PageHeader } from "../../../components/PageHeader";
import { BasePageContainer } from "../../../styles/global";

export const PostContainer = styled(BasePageContainer)`
  margin-bottom: 60px;
  h3 {
    color: ${(props) => props.theme.primary};
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
  }
`;

export const PostOverviewContainer = styled.section`
  display: flex;
  height: 350px;
  width: 100%;
  border-radius: 20px;
`;

export const PostPageHeader = styled(PageHeader)`
  @media (max-width: 550px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`;
