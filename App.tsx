import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BasicModeMasterPageComponent from "./components/pages/basic/basicModeMasterPageComponent";

import { Provider as PaperProvider } from "react-native-paper";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <BasicModeMasterPageComponent />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
