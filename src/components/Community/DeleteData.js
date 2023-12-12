import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from './firebase';

const DeleteData = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firebase.database().ref('posts').once('value');
      const firebaseData = snapshot.val();

      // Firebase Realtime Database의 구조 변경에 따라 코드 수정
      const postArray = firebaseData ? Object.entries(firebaseData).map(([postId, postData]) => ({ postId, ...postData })) : [];

      setData(postArray);
    };

    fetchData();
  }, []);

  const handleDeleteItem = async () => {
    if (!selectedItem) {
      return;
    }

    try {
      // Firebase Realtime Database에서 선택한 데이터 삭제
      await firebase.database().ref(`posts/${selectedItem.postId}`).remove();

      // 삭제 후 데이터 갱신
      const updatedData = data.filter(item => item.postId !== selectedItem.postId);
      setData(updatedData);

      // 선택 해제
      setSelectedItem(null);
    } catch (error) {
      console.error(error);
    }
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // 항목 선택 또는 해제
        setSelectedItem(selectedItem === item ? null : item);
      }}
      style={{ backgroundColor: selectedItem === item ? 'lightgray' : 'white', padding: 10, marginBottom: 5 }}
    >
      <Text>Category: {item.category}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Body: {item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.postId}
      />

      <TouchableOpacity onPress={handleDeleteItem}>
        <Text>선택한 항목 삭제</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteData;


