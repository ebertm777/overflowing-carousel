import styled from 'styled-components';

const bonequinhosImg =
  'https://infograficos-estaticos.s3.us-east-1.amazonaws.com/oscar-votacao-bonequinho/IMAGES/bonequinhos/';
const capasImg =
  'https://infograficos-estaticos.s3.us-east-1.amazonaws.com/oscar-votacao-bonequinho/IMAGES/capas/';
const criticosImg =
  'https://infograficos-estaticos.s3.us-east-1.amazonaws.com/oscar-votacao-bonequinho/IMAGES/criticos/';

export const CategoriesContainer = styled.div`
  padding-top: 60px;
  background-color: #161616;

  @media (min-width: 1024px) {
    position: relative;
    padding-top: 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  color: #fff;
  overflow: initial;

  @media (min-width: 1024px) {
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    text-align: initial;
    padding-left: 150px;
  }
`;
