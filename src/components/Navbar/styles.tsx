import styled from '@emotion/styled';

export const SiteNavbar = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;

  div {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: black;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  a:hover {
    font-style: italic;
    color: brown;
  }
  button {
    background-color: brown;
  }
`;
