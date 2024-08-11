import React, {useState} from 'react';
import {View, Text} from "react-native"
import CTextinput from './CTextinput';
import Checkbox from './checkbox';

export default function Todoitem() {
    const [isChecked, setChecked] = useState(false)
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <Checkbox isChecked = {isChecked} onPress={() => {setChecked(!isChecked)}}/>
        <CTextinput 
        style={{
          flex: 1,
          color: "white",
          backgroundColor: "#343a40",
          fontSize: 17,
          marginLeft: 12,
          border: "none"
        }}
        />
      </View>
    )
}