import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DefaultPropsComponentB from './DefaultPropsComponentB'

export default function DefaultPropsComponentA() {
  return (
    <View>
      <Text>DefaultPropsComponentA</Text>
      <DefaultPropsComponentB/>
    </View>
  )
}

const styles = StyleSheet.create({})