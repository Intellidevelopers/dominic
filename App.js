
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnboardingScreen from './OnboardingScreen';
import MainTabNavigator from './MainTabNavigator';
import SignupScreen from './screens/SignupScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';
import HomeScreen from './screens/HomeScreen';
import AllDoctorsScreen from './screens/AllDoctorsScreen';
import DoctorDetails from './screens/DoctorDetails';
import BookAppointmentScreen from './screens/BookAppointmentScreen';
import BookingScreen from './screens/BookingScreen';
import NotificationScreen from './screens/NotificationScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import CreateNewPassowrdScreen from './screens/CreateNewPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorsList" component={AllDoctorsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Appointment" component={BookAppointmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bookings" component={BookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OtpVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePassword" component={CreateNewPassowrdScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

export default App;
