import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
import Checkbox from "./checkbox";
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
      backgroundColor: "black",
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
    }

  });
    return (
      <div style={styles.body}>
      <View style={{flexDirection: "row"}}>
        <Checkbox isChecked = {value} onPress={() => {setValue(!value)}}/>
        <TextInput 
        style={{
          flex: 1,
          color: "white",
          backgroundColor: "black",
          fontSize: 17,
        }}
        />
      </View>
      </div>
  
  );
}

export default Main;
