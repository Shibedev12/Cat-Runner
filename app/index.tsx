import React, { useState } from 'react';
import EditableNote from './EditableNote';
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Main = () => {
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
        <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="white"/>
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
