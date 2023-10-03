import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import store from "./store";
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
