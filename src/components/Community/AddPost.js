import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../../firebaseConfig';
import PickerSelect from 'react-native-picker-select';

const AddPost = ({ navigation }) => {
  const [category, setCategory] = useState(''); // 게시물의 카테고리를 저장하는 상태
  const [title, setTitle] = useState(''); // 게시물의 제목을 저장하는 상태
  const [body, setBody] = useState(''); // 게시물의 내용을 저장하는 상태

  // 새로운 게시물을 Firebase에 추가하는 함수
  const handleAddPost = () => {
    const newPostRef = firebase.database().ref('posts').push();
    const newPost = {
      postId: newPostRef.key,
      category,
      title,
      body,
    };

    newPostRef.set(newPost);
    navigation.goBack(); // 작성 완료 후 이전 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text>게시글 작성</Text>
      <PickerSelect
        onValueChange={(value) => setCategory(value)}
        items={[
          { label: '가입인사', value: '가입인사' },
          { label: '자유게시판', value: '자유게시판' },
          { label: '건의사항', value: '건의사항' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: '카테고리 선택', value: null }}
      />  
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        onChangeText={(text) => setBody(text)}
      />
      <Button title="글 추가" onPress={handleAddPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // iOS에서 화살표 아이콘 영역을 확보
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // 안드로이드에서 화살표 아이콘 영역을 확보
      },
  });
  

export default AddPost;