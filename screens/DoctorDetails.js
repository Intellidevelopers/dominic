import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import { FontAwesome6, Ionicons, MaterialIcons } from 'react-native-vector-icons';

const DoctorDetailsScreen = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#1C2A3A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Doctor Details</Text>
        <TouchableOpacity>
        <FontAwesome6 name="heart" size={22} color="#1C2A3A" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Image source={doctor.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
          <Text style={styles.name}>{doctor.name}</Text>
          </View>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <View style={styles.flexClinic}>
          <Ionicons name="location" size={16} color="#000" />
           <Text style={styles.clinic}>{doctor.clinic}</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.rowItems}>
          <View style={styles.head}>
            <FontAwesome6 name="users" size={18} color="#000" />
          </View>
          <View style={styles.infoItemText}>
            <Text style={styles.infoTextTextTop}>2,000+</Text>
            <Text style={styles.infoTextText}>patients</Text>
          </View>
        </View>
        <View style={styles.rowItems}>
          <View style={styles.head1}>
            <FontAwesome6 name="award" size={18} color="#000" />
          </View>
          <View style={styles.infoItemText}>
            <Text style={styles.infoTextTextTop}>10+</Text>
            <Text style={styles.infoTextText}>experience</Text>
          </View>
        </View>
        <View style={styles.rowItems}>
          <View style={styles.head}>
            <Ionicons name="star" size={18} color="#000" />
          </View>
          <View style={styles.infoItemText}>
            <Text style={styles.infoTextTextTop}>{doctor.rating}</Text>
            <Text style={styles.infoTextText}>rating</Text>
          </View>
        </View>
        <View style={styles.rowItems}>
          <View style={styles.head}>
            <MaterialIcons name="message" size={18} color="#000" />
          </View>
          <View style={styles.infoItemText}>
            <Text style={styles.infoTextTextTop}>{doctor.reviews}</Text>
            <Text style={styles.infoTextText}>reviews</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About me</Text>
        <Text style={styles.aboutText} numberOfLines={expanded ? undefined : 2}>
          Dr. David Patel, a dedicated cardiologist, brings a wealth of experience to Golden Gate Cardiology Center in Golden Gate, CA. {expanded && "view more"}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.viewMore}>{expanded ? 'view less' : 'view more'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.workingTimeContainer}>
        <Text style={styles.workingTimeTitle}>Working Time</Text>
        <Text style={styles.workingTimeText}>Monday-Friday, 08.00 AM - 18.00 PM</Text>
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
        <View style={styles.reviewItem}>
          <Image source={require('../assets/reviewer.png')} style={styles.reviewerImage} />
          <View style={styles.reviewTextContainer}>
            <Text style={styles.reviewerName}>Emily Anderson</Text>
            <View style={styles.ratingContainer}>
            <Text style={styles.rate}>5.0</Text>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Ionicons name="star" size={16} color="#FFD700" />
              <Ionicons name="star" size={16} color="#FFD700" />
              <Ionicons name="star" size={16} color="#FFD700" />
              <Ionicons name="star" size={16} color="#FFD700" />
            </View>
            <Text style={styles.reviewText}>Dr. Patel is a true professional who genuinely cares about his patients. I highly recommend Dr. Patel to anyone in need of cardiology services.</Text>
          </View>
        </View>
      </View>
      </ScrollView>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Appointment')}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  backButton: {},
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '700',
    marginTop: 5,
  },
  clinic: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '600',
    marginTop: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 10,
  },
  infoItem: {
    alignItems: 'center',
    borderRadius: 100,
  },
  infoText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center"
  },
  aboutContainer: {
    marginVertical: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutText: {
    fontSize: 16,
    color: '#6B7280',
  },
  viewMore: {
    color: '#1C2A3A',
    fontWeight: 'bold',
    marginTop: 5,
  },
  workingTimeContainer: {
    marginVertical: 10,
  },
  workingTimeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workingTimeText: {
    fontSize: 16,
    color: '#6B7280',
  },
  reviewsContainer: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#1C2A3A',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  reviewItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: "center"
  },
  reviewText: {
    fontSize: 14,
    color: '#6B7280',
  },
  button: {
    backgroundColor: '#1C2A3A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameContainer:{
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  flexClinic:{
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  head:{
    backgroundColor: "#F3F4F6",
    height: 50,
    width:  50,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  head1:{
    backgroundColor: "#F3F4F6",
    height: 50,
    width:  50,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7
  },
  infoTextTextTop:{
    fontWeight: "600"
  },
  infoItemText:{
    alignItems: "center",
  },
  rate:{
    marginRight: 5,
    fontWeight: "600",
    color: "#4B5563"
  }
});

export default DoctorDetailsScreen;
