import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:40 }}>
    
      <Text>Home</Text>

      <TouchableOpacity style={{marginTop:20}}
     onPress={() => navigation.navigate("Settings")}>
          <Text style={{color:"red"}}>Go to settings</Text>
      </TouchableOpacity>
    </View>
  )
}