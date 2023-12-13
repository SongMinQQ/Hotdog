import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import DogSelect from "./DogSelect";
import { TextInput } from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../Loading/Loading";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Gpt = () => {
  const [dog, setDog] = useState("진돗개");
  const [message, setMessage] = useState(
    "특성을 알아볼 견종을 선택한 후 버튼을 터치하세요"
  );
  const [loading, setLoading] = useState(false);

  const changeDog = (dog) => {
    setDog(dog);
  };

  const askToGpt = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
      "OpenAI-Organization": "org-9NXrWYPCvoUucwgOFCmCPB7o",
    };
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: `${dog}의 특징을 3줄 이내로 알려줘`,
          max_tokens: 500,
        },
        { headers: headers }
      );
      setMessage(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(message);
  }, [message]);
  return (
    <View style={styles.mainView}>
      {loading && <Loading />}
      <Text style={styles.componentSubject}>
        견종의 특성에 대해 알아보세요!
      </Text>
      <View style={styles.searchWrap}>
        <DogSelect selectDog={dog} changeFunction={changeDog} />
        <TouchableOpacity onPress={askToGpt} style={styles.askButton}>
          <AntDesign name="arrowdown" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.resultWrap}>
        <TextInput
          value={message}
          style={styles.result}
          editable={false}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  result: {
    width: screenWidth - 10,
    textAlignVertical: "top",
    padding: 5,
    color: "black",
    fontSize: 17,
    borderWidth: 2, // 테두리 두께
    borderColor: "black", // 테두리 색상
    borderRadius: 10, // 모서리 둥글기
    flex: 1,
    marginBottom: 15,
  },
  resultWrap: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  componentSubject: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
  },
  askButton: {
    borderWidth: 3, // 테두리 두께
    borderColor: "black", // 테두리 색상
    borderRadius: 10, // 모서리 둥글기
    padding: 5, // 버튼 내부 여백
  },
});
export default Gpt;
