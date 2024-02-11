import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ComponentA from './src/Questions/PropsDrilling/ComponentA';
import DefaultPropsComponentA from './src/Questions/DefaultProps/DefaultPropsComponentA';


const App=()=>{
  
  return (
    <SafeAreaView>
      <View>
        <Text>Questions 1 </Text>
        <ComponentA/>
      </View>
      <View>
        <Text>Questions 2 </Text>
        <DefaultPropsComponentA/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
