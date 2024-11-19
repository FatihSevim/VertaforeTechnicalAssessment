import React, {useEffect} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUpdateInfo, updateBook} from '../store/slices/books';

const Update = ({navigation}) => {
  const dispatch = useDispatch();

  const books = useSelector(state => state.books);

  useEffect(() => {
    console.log(books.updateInfo);
  }, []);

  function handleUpdate() {
    dispatch(updateBook());
    navigation.goBack();
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
