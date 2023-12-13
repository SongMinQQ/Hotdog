import React, { useEffect } from "react";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Like({ like, setLike, heartOn }) {
  useEffect(() => {
    if (heartOn === true) {
      setLike(true);
    }
    if (heartOn === false) {
      setLike(false);
    }
  });

  return (
    <View>
      {like === true ? (
        <Ionicons name="heart" size={23} color="#ff5c5c" />
      ) : (
        <Ionicons name="heart-outline" size={23} color="black" />
      )}
    </View>
  );
}
