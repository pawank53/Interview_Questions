import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import ComponentB from './ComponentB'

export const  myContext=createContext()

export default function ComponentA() {
  return (
    <View>
      <Text>It's ComponentA</Text>
      <myContext.Provider value={"Pawan"}>
      <ComponentB/>
      </myContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({})