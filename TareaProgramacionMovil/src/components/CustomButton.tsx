
import React from "react";
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";

type Props = {
  title: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  onClick,
  variant = "primary",
  style,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "primary" ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onClick}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
  },
  primary: { backgroundColor: "#2E7DFF" },
  secondary: { backgroundColor: "#444" },
  disabled: { opacity: 0.5 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
