import React, { useState } from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";

const Main = () => {
  function onPress_list() {
    alert("UI code/editing code coming soon");
  }
  const styles = StyleSheet.create({
    button_TouchableOpacity: {
      padding: 5,
      borderRadius: 500,
    },
  })

  return (
    <div>
      <TouchableOpacity onPress={onPress_list} style={styles.button_TouchableOpacity}>List1</TouchableOpacity>
      <TouchableOpacity onPress={onPress_list} style={styles.button_TouchableOpacity}>List2</TouchableOpacity>
    </div>
  );
};

export default Main;
