import styled, { css } from "styled-components";

import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

import bolas from './Travellers/bolas.jpg'
import urza from './Travellers/urza.jpg'
import jace from './Travellers/jace.jpg'
import liliana from './Travellers/liliana.jpg'
import vivien from './Travellers/vivien.jpg'
import elspeth from './Travellers/elspeth.jpg'
import karn from './Travellers/karn.jpg'
import tezzeret from './Travellers/tezzeret.jpg'
import wanderer from './Travellers/wanderer.jpg'
import teferi from './Travellers/teferi.jpg'


export const Categoria = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  text-align: left;
  color: #ffffff;
  line-height: 50px;
  margin-top: 60px;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292929;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  max-width: fit-content;

  .capa-filme1 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    background-position: center;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    width: 285px;
    height: 322px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${urza});
  }
  .capa-filme2 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    width: 285px;
    background-position: center;
    height: 322px;
    background-image: url(${jace});
  }
  .capa-filme3 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    width: 285px;
    background-position: center;
    height: 322px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${teferi});
  }
  .capa-filme4 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    background-position: center;
    cursor: pointer;
    width: 285px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 322px;
    background-image: url(${bolas});
  }
  .capa-filme5 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    background-position: center;
    width: 285px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 322px;
    background-image: url(${wanderer});
  }
  .capa-filme6 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    width: 285px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 322px;
    background-image: url(${elspeth});
  }
  .capa-filme7 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    width: 285px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 322px;
    background-position: center;
    background-image: url(${liliana});
  }
  .capa-filme8 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    width: 285px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 322px;
    background-image: url(${vivien});
  }
  .capa-filme9 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    background-position: center;
    width: 285px;
    height: 322px;
    background-image: url(${tezzeret});
  }
  .capa-filme10 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 7px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    width: 285px;
    height: 322px;
    background-image: url(${karn});
  }
`;

export const BestMovieContainer = styled.div`
  padding-bottom: 60px;
  position: relative;
`;

export const Scroller = styled.ul`
  display: flex;
  gap: 18px;
  overflow: auto;
  padding: 0;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ArrowsToRight = styled.button`
  width: 22px;
  height: 42px;
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  left: 98%;
  top: 50%;
  background-image: url(${arrowRight});

  @media (max-width: 768px) {
    display: none;
  }

  ${(props) =>
    props.isVisible &&
    css`
      display: none;
    `}
`;

export const ArrowsToLeft = styled.button`
  display: flex;
  width: 22px;
  height: 42px;
  background-color: transparent;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  background-image: url(${arrowLeft});
`;

export const MovieName = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: left;
  line-height: 25px;
  margin-top: auto;
  margin-bottom: 5px;
`;

export const AboutMovie = styled.p`
  margin-top: 5px;

  .a {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
`;
