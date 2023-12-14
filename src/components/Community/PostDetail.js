import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetail = ({ route }) => {
  const { post } = route.params; // 네비게이션으로 전달된 게시물 정보를 받아옴

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.category}>{post.category}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    category: {
      color: 'green',
      marginBottom: 8,
    },
    body: {
      color: '#555',
    },
  });

export default PostDetail;