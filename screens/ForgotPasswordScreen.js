import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EvilIcons, Feather, Ionicons } from 'react-native-vector-icons/';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} style={styles.backButton} />
    </TouchableOpacity>
      <Image source={require('../assets/dominiclogo.png')} style={styles.logo} />
      <Text style={styles.title}>Forget Password?</Text>
      <Text style={styles.subtitle}>Enter your Email, we will send you a verification code.</Text>
      

      <View style={styles.inputContainer}>
        <Icon name="envelope-o" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Your Email" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('OTP')}>
        <Text style={styles.createAccountButtonText}>Send Code</Text>
      </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  socialLogo: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 50,
    textAlign: "center"
  },
  inputContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 230,
    marginTop: 10,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    color: '#888',
    marginVertical: 10,
  },
  socialButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
  },
  socialButtonText: {
    color: '#555',
    fontSize: 14,
  },
  signInText: {
    color: '#888',
    marginTop: 20,
  },
  signInLink: {
    color: '#000',
    fontWeight: 'bold',
  },
  backButton:{
    alignSelf: "flex-start",
    marginLeft: -160,
    marginTop: -60,
  }
});
