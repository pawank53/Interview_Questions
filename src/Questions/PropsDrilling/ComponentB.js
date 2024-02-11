import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ComponentC from './ComponentC'
import { myContext } from './ComponentA'

export default function ComponentB() {
  return (
    <myContext.Consumer>
        {(text=>(
            <View>
            <Text>It's ComponentB and props is {text}</Text>
            <ComponentC/>
          </View>
        ))}
    </myContext.Consumer>
    
  )
}

const styles = StyleSheet.create({})