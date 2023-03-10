import React, { useEffect, useRef, useState } from 'react';

import * as P from './styles';

const BestAnimation = () => {
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  function scrollHorizontally() {
    const container = document.querySelector('#scrollerElement2');
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
    const container = document.querySelector('#scrollerElement2');
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

  const myDivRef = useRef(null);
  const [hasHorizontalScrollbar, setHasHorizontalScrollbar] = useState(false);

  function checkForHorizontalScrollbar() {
    if (myDivRef.current.scrollWidth > myDivRef.current.clientWidth) {
      setHasHorizontalScrollbar(true);
    } else {
      setHasHorizontalScrollbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkForHorizontalScrollbar);
    checkForHorizontalScrollbar();

    return () => {
      window.removeEventListener('resize', checkForHorizontalScrollbar);
    };
  }, []);

  return (
    <P.BestAnimationContainer>
      
        <>
          <P.Categoria>Legends</P.Categoria>

          <P.ArrowsToRight
            isNotVisible={hasHorizontalScrollbar === false}
            onClick={() => {
              setLeftArrowVisible(true);
              scrollHorizontally();
            }}
          >
            
          </P.ArrowsToRight>
          <P.ArrowsToLeft
            isNotVisible={hasHorizontalScrollbar === false}
            firstArrowVisible={leftArrowVisible === true}
            onClick={() => {
              scrollHorizontallyLeft();
            }}
          >
            
          </P.ArrowsToLeft>
          <P.Scroller ref={myDivRef} id="scrollerElement2">
            <P.MovieCard id="intoViewStart">
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
          </P.Scroller>
        </>
     
    </P.BestAnimationContainer>
  );
};

export default BestAnimation;
