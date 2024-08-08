import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
export default function Index() {
    const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        backgroundColor: "black",
        color: "white",
        padding: 10,
        borderRadius: 500,
        marginTop: 20,
        width: 20,
      }
    })
    
  return (
    <View
      style={{
          alignItems: "center",
      }}
    >
     <TouchableOpacity style={styles.button}><Text></Text></TouchableOpacity>
    </View>
  );
}
