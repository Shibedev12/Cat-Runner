import React, {useState} from 'react';
  import { Text, View, StyleSheet, TextInput } from "react-native";
import Checkbox from "./checkbox";
import CTextinput from './CTextinput';
const Main = () => {
  const [value, setValue] = useState(false)
  const styles =  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    }, 
    body: {
      backgroundColor: "#343a40",
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
    }

  });
    return (
      <div style={styles.body}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Checkbox isChecked = {value} onPress={() => {setValue(!value)}}/>
        <CTextinput 
        style={{
          flex: 1,
          color: "white",
          backgroundColor: "#343a40",
          fontSize: 17,
          marginLeft: 12
        }}
        />
      </View>
      </div>
  
  );
}

export default Main;
