import React, {useState} from 'react';
  import { Text, View, StyleSheet, TextInput } from "react-native";
import Todoitem from "./todoitm"
const Main = () => {
  const [value, setValue] = useState(false)
  const styles =  StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlignVertical: "center",
      textAlign: "center",
    }, 
    body: {
      backgroundColor: "#343a40",
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: 'center',
      padding: 10,
      justifyContent: "center",
    }

  });
    return (
      <div style={styles.body}>
        <Text style={styles.title}>Abyss check</Text>
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />

      </div>
  
  );
}

export default Main;
