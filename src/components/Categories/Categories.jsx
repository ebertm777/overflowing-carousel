import React from "react";

import BestAnimation from "../BestAnimation/BestAnimation";
import BestForeignMovie from "../BestForeignMovie/BestForeignMovie";
import BestMovie from "../BestMovie/BestMovie";

import * as P from "./styles";

function Categories() {
  return (
    <P.CategoriesContainer>
      <P.Content>
        <>
          <BestMovie></BestMovie>
          <BestAnimation />
          <BestForeignMovie />
        </>
      </P.Content>
    </P.CategoriesContainer>
  );
}

Categories.propTypes = {};

export default Categories;
