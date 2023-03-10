import styled, { css } from "styled-components";

import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

import elesh from "./Phyrexians/elesh.jpg";
import vorinclex from "./Phyrexians/vorinclex.jpg";
import gitaxias from "./Phyrexians/gitaxias.jpg";
import urabrask from "./Phyrexians/urabrask.jpg";
import sheoldred from "./Phyrexians/sheoldred.jpg";

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
    background-image: url(${elesh});
  }
  .capa-filme2 {
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
    background-image: url(${vorinclex});
  }
  .capa-filme3 {
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
    background-image: url(${gitaxias});
  }
  .capa-filme4 {
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
    background-image: url(${sheoldred});
  }
  .capa-filme5 {
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
    background-image: url(${urabrask});
  }
`;

export const BestForeignMovieContainer = styled.div`
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
    props.isNotVisible &&
    css`
      display: none;
    `}
`;

export const ArrowsToLeft = styled.button`
  display: none;
  background-image: url(${arrowLeft});
  background-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }

  ${(props) =>
    props.isNotVisible &&
    css`
      display: none;
    `}

  ${(props) =>
    props.firstArrowVisible &&
    css`
      display: flex;
      max-width: 20px;
      max-height: 30px;
      position: absolute;
      top: 55%;
    `}
`;
