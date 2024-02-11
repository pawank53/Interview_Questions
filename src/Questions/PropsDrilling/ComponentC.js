import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ComponentD from './ComponentD'

export default function ComponentC() {
  return (
    <View>
      <Text>It's ComponentC</Text>
      <ComponentD/>
    </View>
  )
}

const styles = StyleSheet.create({})