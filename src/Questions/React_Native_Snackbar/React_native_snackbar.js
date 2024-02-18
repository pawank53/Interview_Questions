import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';

const React_native_snackbar = () => {
  const onPressHandler = () => {
    Snackbar.show({
        text:"Snackbar without action", // Message that you want to show 
        duration:Snackbar.LENGTH_SHORT, // Duration of time to show snackbar
        rtl:true, // Move snackbar from right to left
        backgroundColor:"#ed420e" // Background color of the snackbar
    })
  };
  const onPressHandler2 = () => {
    Snackbar.show({
        text:"Snackbar with action", // Message that you want to show 
        duration:Snackbar.LENGTH_LONG,// Duration of time to show snackbar
        action:{
            text:"UNDO",
            textColor:'#125c06', // Action text color
            onPress:(()=>{
                console.log("Clicked UNDO"); 
            })
        },
        textColor:'#ed420e' // Snackbar message color
    })
  };
  return (
    <View style={styles.container}>
      <Text>Click here to see snackbar</Text>
      <TouchableOpacity style={[styles.button]} onPress={onPressHandler}>
        <Text style={styles.whiteText}>Click Me </Text>
      </TouchableOpacity>
      <Text>Click here to see snackbar with action</Text>
      <TouchableOpacity style={[styles.button]} onPress={onPressHandler2}>
        <Text style={styles.whiteText}>Click Me </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1ecf5',
    height: '100%',
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: '#2391eb',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
});

export default React_native_snackbar;
