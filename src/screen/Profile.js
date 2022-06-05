import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Profile() {
  
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom:40 }}>
     
      <Text>Profile</Text>
      <Text>Email: </Text>
      <Text>name  </Text>
      <Text>password   </Text>
      <TouchableOpacity style={{backgroundColor:"Red",padding:20,marginVertical:10}} 
      onPress={()=> navigation.navigate('login')}>
          <Text>Logout </Text>
      </TouchableOpacity>
    </View>
  )
}