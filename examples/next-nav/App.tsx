import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Link from "next-rn/link";
import Head from "next-rn/head";
import Image from "next-rn/image";
import Script from "next-rn/script";
import useRouting from "next-rn/router/use-routing";
// See the pages/ folder for the next.js routes
// everything else is confined in this file :)

export function Home() {

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
      <Link style={{ color: 'green', fontSize: 20 }} routeName="profile">
        Click me to open profile :)
      </Link> 
    </View>
  );
}

export function Profile() {
  const { goBack } = useRouting()

  return (
    <View style={styles.container}>
      <Head metaInfo={{ title: "my profile" }} />
      <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
      <Button text="👈 Go back" onPress={() => goBack()} />
    </View>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 *
 *
 *
 *
 *
 *
 * styles, button, etc
 */

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

function Button({ text, onPress }: { text: string; onPress?: () => void }) {
  return (
    <Text
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        margin: 20,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}
