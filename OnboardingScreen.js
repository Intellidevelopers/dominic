import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

// Import your onboarding images
import OnboardingImage1 from './assets/mandoctor.png';
import OnboardingImage2 from './assets/ladydoctor.png';
import OnboardingImage3 from './assets/womandoctor.png';

const OnboardingScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  const goToNextSlide = (index) => {
    if (swiperRef.current && swiperRef.current.scrollBy) {
      swiperRef.current.scrollBy(1);
    } else {
      navigation.replace('Signup');
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide}>
        <Image source={OnboardingImage1} style={styles.image} />
        <Text style={styles.title}>Thousands of Online Specialists</Text>
        <Text style={styles.text}>
          Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => goToNextSlide(1)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipbtn} onPress={() => navigation.replace('Signup')}>
          <Text style={styles.skiptext}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Image source={OnboardingImage2} style={styles.image} />
        <Text style={styles.title}>Connect with Specialists</Text>
        <Text style={styles.text}>
          Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => goToNextSlide(2)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipbtn} onPress={() => navigation.replace('Signup')}>
          <Text style={styles.skiptext}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Image source={OnboardingImage3} style={styles.image} />
        <Text style={styles.title}>Meet Doctors Online</Text>
        <Text style={styles.text}>
          Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Signup')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipbtn} onPress={() => navigation.replace('Signup')}>
          <Text style={styles.skiptext}>Skip</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width,
    height: height * 0.6,
    resizeMode: 'cover',
    height: '60%',
    marginTop: -30,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 40,
    color: "grey",
    width: 280
  },
  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#000',
    borderRadius: 25,
    width: '90%',
    textAlign: "center",
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
    marginTop: -80
  },
  activeDot: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
    marginTop: -80
  },
  skipbtn: {
    marginTop: 70
  }
});

export default OnboardingScreen;
