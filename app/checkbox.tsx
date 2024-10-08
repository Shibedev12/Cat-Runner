import React from "react";
import {View, Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CheckBoxProps {
    isChecked: boolean;
    onPress: () => void;
}
const Checkbox = (props: CheckBoxProps) => {
    const onPress = props.onPress
    const name = props.isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';
    return (<Pressable onPress = {onPress}>
        <MaterialCommunityIcons name={name} size={24} color="white"/>
    </Pressable>
    )
}

export default Checkbox;