import { TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditableNote = ({ innerHTML, id, contents}) => {
    return (
      <TouchableOpacity contents={contents} id = {id}>
        {innerHTML}
      </TouchableOpacity>
    );
  };  

export function createEditableNote(innerHTML, contents, id) {
      return (
        <EditableNote id={id} contents={contents}>
          {innerHTML}
        </EditableNote>
      );
    };

export default EditableNote ;