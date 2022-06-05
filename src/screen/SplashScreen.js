import { StyleSheet, Text, View,Image,StatusBar } from 'react-native'
import React from 'react'
import Logo from '../../assets/img/logo.jpg'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View></View>
      <View style={styles.Logoconatiner}>
      <Image source={Logo} style={styles.Logo}/>
      <Text style={styles.txt}>Coding With Vikash</Text>
      </View>
      <View style={styles.btmCntr}>
          <Text style={styles.btmtxt}> Made with 💕 From India  </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000",
        flex: 1,
        justifyContent:"space-around",
        alignItems:"center"
    },
    Logo:{
        height: 200,
        width: 200
    },
    txt:{
        color: "#fff"
    },
    Logoconatiner:{
        alignItems:"center"
    },
    btmtxt:{
color: "#fff"
    },
    btmCntr:{

    }
})