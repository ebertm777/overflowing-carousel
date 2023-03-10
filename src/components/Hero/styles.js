import styled from 'styled-components';

import backgroundDesktop from '../../images/bg-desk.jpg';
import backgroundMobile from '../../images/bg-mobi.jpg';

export const Container = styled.div`
  padding-top: 60px;
  background: linear-gradient(180deg, #8248 100%, #fff5ff 100%);

  @media (min-width: 1024px) {
    position: relative;
    padding-top: 0;
    background: linear-gradient(180deg, #8248 100%, #000 100%);
  }
`;

export const Content = styled.div`
  max-width: 240px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #fff;

  @media (min-width: 1024px) {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    height: 100%;
    text-align: initial;
  }
`;

export const TitleWrapper = styled.div`

font-family: Arial, Helvetica, sans-serif;
font-size: 50px;

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

export const PreTitle = styled.p`
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;

  @media (min-width: 1024px) {
    display: inline;
    font-size: 40px;
    line-height: 55px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 40px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    display: inline;
    margin-left: 0.25em;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: 18px;

  @media (min-width: 1024px) {
    margin-top: 24px;
    font-size: 22px;
  }
`;

export const CallToAction = styled.p`
  margin-top: 10px;
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;
  color: #eecd63;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Background = styled.div`
  width: 100%;
  margin-top: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 1024px) {
    margin-top: 0;
    background-image: url(${backgroundDesktop});
  }
`;
