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
import React_native_snackbar from './src/Questions/React_Native_Snackbar/React_native_snackbar';

const App=()=>{
  
  return (
    <SafeAreaView>
      <React_native_snackbar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
