import React from "react";
import NextImage from "next/image";
import { View } from "react-native";

function Image({ style, source: { uri, width, height }, accessibilityLabel }) {
  return (
    <View style={style}>
      <NextImage src={uri} width={width} height={height} alt={accessibilityLabel} />
    </View>
  );
}