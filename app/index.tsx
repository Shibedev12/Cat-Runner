import React, { useState } from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import { Routes, Route, Link } from 'react-router-dom';
import EditableNote from './EditableNote';



const Main = () => {
  return ( 
    <EditableNote innerHTML={"hello"}  contents="hello wrodl" id="hi"></EditableNote>
  );
};

export default Main;
