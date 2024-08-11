import { TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditableNote = ({ innerHTML, id, contents, cname}) => {
  async function save_cont(contents) {
    await AsyncStorage.setItem({cname}, {contents}) 
  }
    return (
      <TouchableOpacity onPress={save_cont} contents={contents} id = {id}>
        {innerHTML}
      </TouchableOpacity>
    );
  };

  
export default EditableNote;