import React, { useState } from "react";

import * as P from "./styles";

const BestMovie = () => {
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  function scrollHorizontally() {
    const container = document.querySelector("#scrollerElement");
    const target = container.scrollLeft + 300;
    const duration = 600;
    const start = performance.now();

    const step = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollLeft =
        container.scrollLeft + (target - container.scrollLeft) * progress;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  function scrollHorizontallyLeft() {
    const container = document.querySelector("#scrollerElement");
    const target = Math.max(container.scrollLeft - 300, 0);
    const duration = 600;
    const start = performance.now();

    const step = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const nextPos =
        container.scrollLeft - (container.scrollLeft - target) * progress;
      container.scrollTo(nextPos, 0);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  return (
    <P.BestMovieContainer>
      <>
        <P.Categoria>Travellers</P.Categoria>

        <>
          <P.ArrowsToRight
            onClick={() => {
              setLeftArrowVisible(true);
              scrollHorizontally();
            }}
          ></P.ArrowsToRight>
          <P.ArrowsToLeft
            firstArrowVisible={leftArrowVisible === true}
            onClick={() => {
              scrollHorizontallyLeft();
            }}
          ></P.ArrowsToLeft>
        </>

        <P.Scroller id="scrollerElement">
          <P.MovieCard>
            <div className="capa-filme1"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme2"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme3"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme4"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme5"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme6"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme7"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme8"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme9"></div>
          </P.MovieCard>
          <P.MovieCard>
            <div className="capa-filme10"></div>
          </P.MovieCard>
        </P.Scroller>
      </>
    </P.BestMovieContainer>
  );
};

export default BestMovie;
