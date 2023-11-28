import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DogSelect from './DogSelect';
import { TextInput } from 'react-native';
import axios from 'axios';

const Gpt = () => {
    const [dog,setDog] = useState('진돗개');
    const [message, setMessage] = useState('');

    const changeDog = (dog) => {
        setDog(dog);
    }

    // const askToGpt = async () => {
    //     try {
    //         const response = await axios.post(
    //             'https://api.openai.com/v1/engines/davinci-codex/completions',
    //             {
    //             prompt: `${dog}의 특성에 대해 알려줘`,
    //             max_tokens: 60,
    //             },
    //             {
    //             headers: {
    //                 'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // 여기에 OpenAI API 키를 입력하세요
    //             }
    //             }
    //         );
    
    //         setMessage(response.data.choices[0].text);
    //     } catch (error) {
    //         console.error('There was an error!', error);
    //     }
    // };
    
    return (
        <View>
            <DogSelect selectDog={dog} changeFunction={changeDog}/>
            <TextInput/>
        </View>
    );
};

export default Gpt;