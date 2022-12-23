import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import DashBoardMain from '../DashBoardMain'

export default function DashBoardScreen() {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    const showDimension = ()=>{
        console.log(deviceHeight + " " + deviceWidth)
        return deviceWidth + "  " + deviceHeight
    }
  return (
    <View>
     <View style={{height:deviceHeight/4 , width:deviceWidth ,backgroundColor:"#A1CE69"}}>
     <Text
     style={{
        color:"#ffffff",
        fontSize:60,
        position:"absolute",
        marginTop:75,
        marginHorizontal:20,
        position:"relative",
        marginBottom:2
    
     }}
     >Home</Text>
     <Text
     style={{
        fontSize:25,
        color:"#ffffff",
        marginHorizontal:20,
        

     }}
     >Welcome Usama !</Text>

     </View>


        <View style ={{
          marginTop:10,
          flexDirection:'row',
          
        }}>


        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20,
          
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>
        
        
        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>

        </View>
        <View style ={{
          marginTop:10,
          flexDirection:'row',
          
        }}>


        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20,
          
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>
        
        
        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>

        </View>
        <View style ={{
          marginTop:10,
          flexDirection:'row',
          
        }}>


        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20,
          
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>
        
        
        <View style={{
          backgroundColor:"#A1CE69",
          width:(deviceWidth/2)-20,
          height:deviceHeight/4,
          marginHorizontal:10,
          borderRadius:20,
          
        }}>
        <Text style={{
          textAlign:"center",
          color:"#ffffff",
          fontSize:30,
          marginTop:60
        }}>Temperature</Text>
        </View>

        </View>
        
        
    </View>
  )
}