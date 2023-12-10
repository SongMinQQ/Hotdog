import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Quiz() {

  const[currentQuestion, setCurrentQuestion] = useState(0);
  const[score, setScore] = useState(0);
  const[showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: '소형견의 산책 시간으로는 20분~1시간이 적당하다.',
       options: ['O','X'],
      answer: 'O'
    },
    {
      question: '반려견을 키우기 위한 조건 중 하나는 국가에 의무적으로 등록하는 동물 등록제를 해야 한다.',
      options: ['O','X'],
      answer: 'O'
    }
  ] 

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if(answer === selectedAnswer){
      setScore((prevScore)=> prevScore +1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else{
      setShowScore(true);
    }
  }

  return (
    <View style={styles.container}>
      {showScore ? <View>
          <Text>{score}</Text>
        </View>:
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
        {quizData[currentQuestion]?.options.map((item)=>{
            return <TouchableOpacity onPress={()=> handleAnswer(item)}style={styles.optionContainer}>
              <Text style={styles.optionStyle}> {item} </Text>
            </TouchableOpacity>
        })}

      </View>
      }
    </View>
  );

}

   const styles = StyleSheet.create({
     container:{
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
      },
      questionContainer: {
        backgroundColor: '@DDDDDD',
        padding: 10,
        margin: 10,
        borderRadius: 5,
      },
      optionStyle:{
        color: 'green',
        padding: 30,
        alignSelf: 'center',
        fontSize: 40,
      },
      optionContainer:{
        borderColor:'black',
        borderWidth: 3,
        marginTop: 40,
      },
      questionText: {
        fontSize: 20,
      }
});