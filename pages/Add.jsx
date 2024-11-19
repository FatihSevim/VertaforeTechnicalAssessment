import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createBook} from '../store/slices/books';

const Add = ({navigation}) => {
  const dispatch = useDispatch();

  const books = useSelector(state => state.books);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  function handleAdd() {
    if (!name || !author || !year) {
      Alert.alert('Please fill all the fields to continue!');
    } else {
      for (let i = 0; i < books.list.length; i++) {
        if (books.list[i].name == name) {
          Alert.alert('A book with the same name is already registered.');
          return null;
        }
      }
      const book = {name, author, year, id: books.idCounter};
      dispatch(createBook(book));
      navigation.goBack();
    }
  }

  return (
    <View className="flex flex-col">
      <TextInput
        placeholder="Book's name"
        onChangeText={text => {
          setName(text);
        }}
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <TextInput
        placeholder="Book's author"
        onChangeText={text => {
          setAuthor(text);
        }}
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <TextInput
        placeholder="Publish year"
        onChangeText={text => {
          setYear(text);
        }}
        className="border-2 border-gray-500 m-5 p-3 rounded-lg"
      />
      <Button title="Add" onPress={() => handleAdd()} />
    </View>
  );
};

export default Add;
