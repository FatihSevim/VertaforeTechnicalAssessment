import React from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUpdateInfo, updateBook} from '../store/slices/books';

const Update = ({navigation}) => {
  const dispatch = useDispatch();

  const books = useSelector(state => state.books);

  function handleUpdate() {
    if (
      !books.updateInfo.name ||
      !books.updateInfo.author ||
      !books.updateInfo.year
    ) {
      Alert.alert('Please fill all the fields to continue!');
    } else {
      for (let i = 0; i < books.list.length; i++) {
        if (books.list[i].name == books.updateInfo.name) {
          Alert.alert('A book with the same name is already registered.');
          return null;
        }
      }
      dispatch(updateBook());
      navigation.goBack();
    }
  }

  return (
    <View className="flex flex-col p-3">
      <TextInput
        value={books.updateInfo.name}
        onChangeText={text =>
          dispatch(setUpdateInfo({...books.updateInfo, name: text}))
        }
        placeholder="Books's name"
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <TextInput
        value={books.updateInfo.author}
        onChangeText={text =>
          dispatch(setUpdateInfo({...books.updateInfo, author: text}))
        }
        placeholder="Author's name"
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <TextInput
        value={books.updateInfo.year}
        onChangeText={text =>
          dispatch(setUpdateInfo({...books.updateInfo, year: text}))
        }
        placeholder="Publish year"
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <Button title="Update" onPress={() => handleUpdate()} />
    </View>
  );
};

export default Update;
