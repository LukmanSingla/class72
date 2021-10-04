import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTabNavigator from "./Components/bottomTabNavigator";
import * as font from "expo-font";
import { Rajdhani_400Regular } from "@expo-google-fonts/rajdhani";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  async loadFonts() {
    await font.loadAsync({ Rajdhani_400Regular: Rajdhani_400Regular });
    this.setState({
      fontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    if (this.state.fontLoaded) {
      return <BottomTabNavigator />;
    } else {
      return null;
    }
  }
}
