import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myContext } from './ComponentA'

export default function ComponentD() {
  return (
    <myContext.Consumer>
        {(text)=>(
            <View>
                <Text>This is ComponentD ans props is {text} </Text>
          </View>
        )}
    </myContext.Consumer>
    
  )
}

const styles = StyleSheet.create({})