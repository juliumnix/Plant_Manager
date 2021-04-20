import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

interface ButtonProps {
  title: string;
}

const components = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default components;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 10,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
