 
import  React, {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav'
// import Profile from './src/screen/Profile';
import SplashScreen from '../../screen/SplashScreen';
import Login from '../Login';
import Signup from '../Signup'
import Forget from '../Forget';
import ProDetail from '../ProDetail';
import Payment from '../Payment';
const Stack = createNativeStackNavigator();

export default function Stacknav() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    useEffect(()=>{
  setTimeout(()=>{
    setShowSplashScreen(false)
  },4000);
    },[]);
    return (
      <NavigationContainer>
        <Stack.Navigator>
    {showSplashScreen ?    (
       <Stack.Screen
       name="Splash"
       component={SplashScreen}
       options={{headerShown:false}}
       />
    ):null}
      <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="forget" component={Forget} options={{headerShown:false}}/>
      <Stack.Screen name="ProDetail" component={ProDetail} options={{headerShown:false}}/>
      <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
      
          <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown:false}}/>
      
        </Stack.Navigator>
      </NavigationContainer>
    );
}