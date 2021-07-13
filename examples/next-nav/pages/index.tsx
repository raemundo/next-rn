import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Link from "next-rn/link";
import Head from "next-rn/head";
import Image from "next-rn/image";
import Script from "next-rn/script";

export default function Home() {
  return (
    <View style={styles.container}>
      <Head metaInfo={{ title: "my homepage" }} />
      <Script />
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text style={styles.text}>Home Screen 🥳</Text>
      <Link style={{ color: "green", fontSize: 20 }} routeName="profile">
        Click me to open profile :)
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});
