import React from 'react';
import {
 View,
 ImageBackground
} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements'


export default class HomeScreen extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1, height: 350, width: 350, marginLeft: 'auto', marginRight: 'auto', display:'block', marginTop: 130}} source={require("../../public/logo/women.jpg")}>

       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

       </View>

     </ImageBackground> );
 }
}
