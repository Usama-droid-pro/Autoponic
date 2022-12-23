// In App.js in a new project

import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import ForgotPassword from './src/components/ForgotPassword'
import VerifyAccount from './src/components/VerifyAccount';
import UpdatePassword from './src/components/UpdatePassword'
import DashBoard from './src/components/DashBoardScreen';


function HomeScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Splash({navigation}) {

  setTimeout(()=>{
    navigation.replace("Login")
  },3000)
  return (
    <ImageBackground style={{
      flex: 1,
    }}  source={require('./splashImage.jpg')} >
    </ImageBackground>
    
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen  name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen  name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen  name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen  name="VerifyAccount" component={VerifyAccount} options={{ headerShown: false }} />
        <Stack.Screen  name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />
        <Stack.Screen  name="DashBoard" component={DashBoard} options={{ headerShown: false }} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
