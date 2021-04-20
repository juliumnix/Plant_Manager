import React from "react";

import * as S from "./styles";

import colors from "../../../styles/colors";

import Button from "../../components/Button";
import Watering from "../../assets/watering.png";

const pages = () => {
  return (
    <S.Container>
      <S.WrapperTitle>
        <S.Title>Gerencie suas plantas de forma fácil</S.Title>
      </S.WrapperTitle>

      <S.WrapperImage>
        <S.ImageBackground source={Watering} />
      </S.WrapperImage>

      <S.WrapperSubtitle>
        <S.Subtitle>
          Não se esqueça mais de regar suas plantas. Nós cuidamos de lembrar
          você sempre que precisar.
        </S.Subtitle>
      </S.WrapperSubtitle>

      <S.WrapperButton>
        <Button title=">" />
      </S.WrapperButton>
    </S.Container>
  );
};

export default pages;
