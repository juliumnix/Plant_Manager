import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const WrapperTitle = styled.View`
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: ${colors.heading};
`;

export const WrapperSubtitle = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.heading};
`;

export const WrapperButton = styled.View`
  align-items: center;
  margin: 10px;
  padding-bottom: 20px;
`;

export const WrapperImage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled.Image``;
