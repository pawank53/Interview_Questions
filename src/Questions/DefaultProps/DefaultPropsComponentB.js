import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DefaultPropsComponentB({message}) {
  return (
    <View>
      <Text>DefaultPropsComponentB and name is {message}</Text>
    </View>
  )
}
DefaultPropsComponentB.defaultProps={
    message:"Pawan Kumar"
}

const styles = StyleSheet.create({})