import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Import the image
import Background from './assets/Background1.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000); // Adjust the timeout as needed
  }, [navigation]);

  return (
    <ImageBackground source={Background} style={styles.container}>
      <Text style={styles.versionText}>V 3.0.1</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: {
    marginTop: 750,
    color: '#fff', // Adjust text color for better visibility
    fontWeight: "700"
  },
});

export default SplashScreen;
