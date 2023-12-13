import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./redux/store/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
