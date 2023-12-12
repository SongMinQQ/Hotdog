import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
})
export default Loading;