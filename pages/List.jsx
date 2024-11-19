import React, {useEffect} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {deleteBook, setUpdateInfo} from '../store/slices/books';

const List = ({navigation}) => {
  const dispatch = useDispatch();

  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(setUpdateInfo({}));
    console.log(books.list);
  }, []);

  function handleUpdate(book) {
    dispatch(setUpdateInfo(book));
    navigation.navigate('Update');
  }

  function handleAdd() {
    navigation.navigate('Add');
  }

  function handleDelete(bookName) {
    console.log('delete: ' + bookName);
    dispatch(deleteBook(bookName));
  }

  return (
    <SafeAreaView className="flex flex-1 items-center justify-start">
      {books.list.length > 0 && <Text>To update a book click on it</Text>}
      <ScrollView className="w-full flex h-full px-5">
        {books.list?.length > 0 ? (
          books.list.map(item => {
            return (
              <Pressable
                key={item.id}
                className="border-2 bg-blue-200 border-gray-300 rounded-xl p-3 px-5 w-full my-3 flex flex-row justify-between"
                onPress={() => handleUpdate(item)}>
                <View className="flex flex-col justify-between flex-1 pr-5">
                  <Text className="text-xl mb-1">{item?.name}</Text>
                  <View className="flex flex-row justify-between">
                    <Text>{item?.author}</Text>
                    <Text>{item?.year}</Text>
                  </View>
                </View>
                <Pressable
                  onPress={() => handleDelete(item.name)}
                  className="bg-red-500 flex justify-center items-center px-4 rounded-full">
                  <Text className="text-2xl color-white">X</Text>
                </Pressable>
              </Pressable>
            );
          })
        ) : (
          <View className="flex justify-center items-center w-full">
            <Text className="mt-5">There are no books registered.</Text>
          </View>
        )}
      </ScrollView>
      <Pressable
        className="flex justify-center items-center absolute bottom-10 right-10 h-20 w-20 bg-blue-600 rounded-full p-3 text-white z-50"
        onPress={() => handleAdd()}>
        <Text className="text-white text-3xl">+</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default List;
