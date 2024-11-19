import React from 'react';
import {Button, Text, View} from 'react-native';

const Header = () => {
  return (
    <View className="bg-red-200">
      <Text className="text-2xl">HEADER</Text>
      <Button title="Add" className="border-2 border-black" />
    </View>
  );
};

export default Header;
