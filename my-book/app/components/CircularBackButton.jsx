import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CircularBackButton({
  onPress,
  style,
  iconColor = "#222",
  backgroundColor = "#f0f0f0",
}) {
  return (
    <TouchableOpacity
      style={[styles.backButton, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.circle, { backgroundColor }]}>
        <Ionicons name="arrow-back" size={24} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    zIndex: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
