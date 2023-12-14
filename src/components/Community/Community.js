import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';  
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebaseConfig';
import Loading from '../Loading/Loading';

const Community = () => {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]); // 게시물 목록을 저장하는 상태
    const [selectedCategory, setSelectedCategory] = useState('가입인사'); // 선택된 카테고리를 저장하는 상태
    const [loading, setLoading] = useState(false); // 로딩 화면 상태

    // 게시물 클릭 시 상세 화면으로 이동하는 함수
    const handlePostClick = (post) => {
        navigation.navigate('PostDetail', { post });
      };

       // 컴포넌트가 처음 렌더링될 때 Firebase에서 게시물을 불러오는 부분
      useEffect(() => {
        const databaseRef = firebase.database().ref('posts');

        setLoading(true);
    
        const handleData = (snapshot) => {
          if (snapshot.val()) {
            // 가져온 데이터의 객채를 배열로 추출
            setPosts(Object.values(snapshot.val()));
          }

          setLoading(false);
        };

        // 데이터에 대한 변경이 감지되었을 때 실행되는 이벤트 리스너
        databaseRef.on('value', handleData);
        
        // 이벤트 리스너 제거
        return () => {
          databaseRef.off('value', handleData);
        };
      }, [selectedCategory]);

    // 새로운 게시물 추가 화면으로 이동하는 함수
    const handleAddPost = () => {
        navigation.navigate('AddPost');
      };
    
    // 카테고리 변경 시 호출되는 함수
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setLoading(true);
      };
    
    // 각 게시물을 FlatList에 렌더링하는 함수  
    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => handlePostClick(item)}>
            <View style={styles.itemContainer} key={item.postId}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
                <Text style={styles.categoryText}>{item.category}</Text>
            </View>
        </TouchableOpacity>

  );

    

    return (
        <View style={styles.container} backgroundColor="#fff">
            {loading && <Loading />}
            <PickerSelect
                onValueChange={(value) => handleCategoryChange(value)}
                items={[
                    { label: '가입인사', value: '가입인사' },
                    { label: '자유게시판', value: '자유게시판' },
                    { label: '건의사항', value: '건의사항' },
                ]}
                placeholder={{ label: "카테고리를 선택하세요.", value: null }}
                style={pickerSelectStyles}
                value={selectedCategory}
            />
            {/* 선택된 카테고리에 따라 필터링된 게시물 목록을 보여주는 FlatList */} 
            <FlatList
                data={selectedCategory === '' ? posts : posts.filter(post => post.category === selectedCategory)}
                renderItem={renderItem}
                keyExtractor={item => item.postId}
                style={styles.flatList}
            />
            <Button title="글 작성" onPress={handleAddPost} /> 
        </View>
        
    );
};

const styles = StyleSheet.create({ 
        container: {
        flex: 1,
        padding: 16,
        },
        flatList: {
          margintop: 16,
          backgroundColor: '#fff'
        },
        itemContainer: {
          marginBottom: 16,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 16,
          borderRadius: 8,
        },
        indexText: {
          fontWeight: 'bold',
          marginBottom: 8,
        },
        titleText: {
          fontSize: 18,
          marginBottom: 4,
        },
        categoryText: {
          color: 'green',
          marginBottom: 4, 
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

export default Community;