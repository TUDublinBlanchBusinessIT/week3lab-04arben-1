import { StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App() {
  const [fullname] = useState("Eoin");
  return(
    <View>
      <Logo/>

      <Text>Hello, World {fullname}</Text>
      <TextInput placeholder="enter your name" onChangeText={fullname}/>
    </View>
  )
};