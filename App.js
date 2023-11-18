// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import DestinationSerach from './Screens/HomeScreen/DestinationsScreen/DestinationsScreen';
import HomeScreen from './Screens/HomeScreen/Homescreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <HomeScreen></HomeScreen> */}
      <DestinationSerach></DestinationSerach>
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
