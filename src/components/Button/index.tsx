import React from "react";
import * as S from "./styles";

interface ButtonProps {
  title: string;
}

const components = ({ title }: ButtonProps) => {
  return (
    <S.Container activeOpacity={0.8}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Container>
  );
};

export default components;
