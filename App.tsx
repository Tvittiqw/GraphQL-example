import React from "react";
import {Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';


const App =() => {
  return (
      <NavigationContainer>
          <MainStackNavigator/>
      </NavigationContainer>

  )
}

export default App;
