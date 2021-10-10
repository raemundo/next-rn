import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/index";
import Profile from "./pages/profile/[id]";
import "./lib/i18n";
export default function App() {
  const Stack = createStackNavigator();
  const navigationRef = React.createRef();

  // function navigate(name, params) {
  //   navigationRef.current && navigationRef.current.navigate(name, params);
  // }

  return (
    <NavigationContainer
      // @ts-ignore
      ref={navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
