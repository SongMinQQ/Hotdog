import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from './firebase';

const Community = () => {
  // const navigation = useNavigation();
  // const [selectedCategory, setSelectedCategory] = useState('가입인사');
  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 6;

  // useEffect(() => {
  //   // Firebase에서 데이터 가져오는 로직
  //   const fetchData = async () => {
  //     const snapshot = await firebase.database().ref('posts').once('value');
  //     const firebaseData = snapshot.val();

  //     // Firebase Realtime Database의 구조 변경에 따라 코드 수정
  //     const postArray = firebaseData ? Object.entries(firebaseData).map(([postId, postData]) => ({ postId, ...postData })) : [];

  //     // 카테고리에 따라 데이터 필터링
  //     const filteredData = postArray.filter(item => item.category === selectedCategory);
  //     setData(filteredData);
  //   };

  //   fetchData();
  // }, [selectedCategory]);

  // const handleCategoryChange = category => {
  //   setSelectedCategory(category);
  //   setCurrentPage(1); // 카테고리 변경 시 페이지 초기화
  // };

  // const renderListItem = ({ item, index }) => (
  //   <View>
  //     <Text>{index + 1}. {item.title}</Text>
  //   </View>
  // );

  // const handleAddButtonPress = () => {
  //   navigation.navigate('AddData');
  // };

  // const handleDeleteButtonPress = () => {
  //   navigation.navigate('DeleteData');
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <View>
      <View>
        {/* 드롭다운 카테고리 선택 */}
        <TouchableOpacity onPress={() => handleCategoryChange('가입인사')}>
          <Text>가입인사</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryChange('자유게시판')}>
          <Text>자유게시판</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryChange('건의사항')}>
          <Text>건의사항</Text>
        </TouchableOpacity>
      </View>
      
      {/* 검색창 */}
      <TextInput placeholder="검색어를 입력하세요" />

      {/* 데이터 표시 */}
      <FlatList
        data={data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
        keyExtractor={(item) => item.postId}
        renderItem={renderListItem}
      />

      {/* 추가, 삭제 버튼 */}
      <TouchableOpacity onPress={handleAddButtonPress}>
        <Text>추가</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteButtonPress}>
        <Text>삭제</Text>
      </TouchableOpacity>

      {/* 페이지 이동 버튼 */}
      <TouchableOpacity onPress={handlePrevPage}>
        <Text>이전</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNextPage}>
        <Text>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Community;
