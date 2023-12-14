import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import firebase from './firebase';
import { useNavigation } from '@react-navigation/native';

const AddData = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('가입인사');

  const handleAddData = async () => {
    try {
      const postData = {
        category: selectedCategory,
        title,
        body,
      };

      // Firebase Realtime Database에 데이터 추가
      const newPostRef = await firebase.database().ref('posts').push(postData);
      const newPostId = newPostRef.key;

      // 데이터 추가 후 홈 화면으로 돌아가기
      navigation.navigate('Community');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />

      <Text>Body:</Text>
      <TextInput value={body} onChangeText={(text) => setBody(text)} />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="가입인사" value="가입인사" />
        <Picker.Item label="자유게시판" value="자유게시판" />
        <Picker.Item label="건의사항" value="건의사항" />
      </Picker>

      <TouchableOpacity onPress={handleAddData}>
        <Text>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddData;
