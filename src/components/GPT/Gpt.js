import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DogSelect from './DogSelect';
import { TextInput } from 'react-native';
import axios from 'axios';
import OpenAI from 'openai';

const Gpt = () => {
    // const openai = new OpenAI();
    const [dog,setDog] = useState('진돗개');
    const [message, setMessage] = useState('');

    const changeDog = (dog) => {
        setDog(dog);
    }

    const instance = axios.create({
        baseURL: 'https://api.openai.com/v1/engines/curie/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        }
      });
    const askToGpt = async () => {
        try {
            const response = await instance.post('', {
              prompt: `${dog}의 특성에 대해 알려줘`,
              max_tokens: 60
            });
            setMessage(response.data.choices[0].text)
            return response.data.choices[0].text;
          } catch (error) {
            console.error(error);
            return '';
          }
    };
    
    useEffect(() => {
        console.log(message)
    },[message]);
    return (
        <View>
            <DogSelect selectDog={dog} changeFunction={changeDog}/>
            <TouchableOpacity onPress={askToGpt}><Text>질문하기</Text></TouchableOpacity>
            <TextInput/>
        </View>
    );
};

export default Gpt;