import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, Feather, EvilIcons } from 'react-native-vector-icons/';

function CreateNewPassowrdScreen({navigation}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} style={styles.backButton} />
    </TouchableOpacity>
      <Image source={require('../assets/dominiclogo.png')} style={styles.logo} />
      <Text style={styles.title}>Create New Password</Text>
      <Text style={styles.subtitle}>Your new password must be different form previously used password.</Text>
      

      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Comfirm Password" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountButtonText}>Reset Password</Text>
      </TouchableOpacity>

    </View>
  );
}

export default CreateNewPassowrdScreen;

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
    marginTop: 30
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
    marginBottom: 15,
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
    marginTop: -20,
  }
});
