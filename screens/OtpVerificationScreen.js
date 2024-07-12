import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Ionicons } from 'react-native-vector-icons/';

const OTPVerificationScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isFocused, setIsFocused] = useState([false, false, false, false]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      refs[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      refs[index - 1].focus();
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
    }
  };

  const handleFocus = (index) => {
    const newIsFocused = [...isFocused];
    newIsFocused[index] = true;
    setIsFocused(newIsFocused);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleBlur = (index) => {
    const newIsFocused = [...isFocused];
    newIsFocused[index] = false;
    setIsFocused(newIsFocused);
  };

  const refs = [];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} style={styles.backButton} />
    </TouchableOpacity>
    <Image source={require('../assets/dominiclogo.png')} style={styles.logo} />
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>Enter the the code we just sent you on your registered Email</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onFocus={() => handleFocus(index)}
            onBlur={() => handleBlur(index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={[
              styles.otpInput,
              {
                borderColor: isFocused[index] ? '#000' : '#e5e5e5',
                borderWidth: isFocused[index] ? 2 : 1,
              },
            ]}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => refs.push(ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('CreatePassword')}>
        <LinearGradient
          colors={['#000', '#000']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradient}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('We have resend new OTP code to your email')}>
      <Text style={styles.signInText}>
        Don't have an account? <Text style={styles.signInLink}>Resend</Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  backArrow: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginTop: 50
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
    textAlign: "center",
    width: '80%'
  },
  instructions: {
    fontSize: 14,
    color: '#7e7e7e',
    textAlign: 'center',
    marginVertical: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
  },
  verifyButton: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#000',
    marginTop: 20,
  },
  backButton:{
    alignSelf: "flex-start",
    marginLeft: -160,
    marginTop: 10,
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

export default OTPVerificationScreen;
