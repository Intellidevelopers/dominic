import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EvilIcons, Feather} from 'react-native-vector-icons/';

function SignupScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/dominiclogo.png')} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>We are here to help you!</Text>
      
      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Your Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope-o" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Your Email" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateProfile')}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/google.png')} style={styles.socialLogo} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/facebook.png')} style={styles.socialLogo} />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signInText}>
        Do you have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignupScreen;

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
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
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
    marginBottom: 10,
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
});
