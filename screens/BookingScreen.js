import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const bookingsData = {
  upcoming: [
    {
      id: 1,
      date: 'May 22, 2023 - 10.00 AM',
      doctor: 'Dr. James Robinson',
      specialty: 'Orthopedic Surgery',
      clinic: 'Elite Ortho Clinic, USA',
      image: require('../assets/doctor1.png'),
    },
    {
      id: 2,
      date: 'June 14, 2023 - 15.00 PM',
      doctor: 'Dr. Daniel Lee',
      specialty: 'Gastroenterologist',
      clinic: 'Digestive Institute, USA',
      image: require('../assets/doctor2.png'),
    },
    {
      id: 3,
      date: 'June 21, 2023 - 10.00 AM',
      doctor: 'Dr. Nathan Harris',
      specialty: 'Cardiologist',
      clinic: 'Heart Health Clinic, USA',
      image: require('../assets/doctor3.png'),
    },
  ],
  completed: [
    {
      id: 4,
      date: 'May 15, 2023 - 09.00 AM',
      doctor: 'Dr. Emily Johnson',
      specialty: 'Dermatologist',
      clinic: 'Skin Care Clinic, USA',
      image: require('../assets/doctor4.png'),
    },
    {
      id: 5,
      date: 'April 20, 2023 - 14.00 PM',
      doctor: 'Dr. Michael Brown',
      specialty: 'Neurologist',
      clinic: 'Brain Health Clinic, USA',
      image: require('../assets/doctor3.png'),
    },
  ],
  canceled: [
    {
      id: 6,
      date: 'March 10, 2023 - 11.00 AM',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Pediatrician',
      clinic: 'Children\'s Hospital, USA',
      image: require('../assets/doctor3.png'),
    },
  ],
};

const BookingScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const renderBookingItem = (booking) => (
    <View key={booking.id} style={styles.bookingCard}>
    <StatusBar />
      <Text style={styles.bookingDate}>{booking.date}</Text>
      <View style={styles.bookingDetails}>
        <Image source={booking.image} style={styles.doctorImage} />
        <View style={styles.columnItems}>
          <Text style={styles.doctorName}>{booking.doctor}</Text>
          <Text style={styles.specialty}>{booking.specialty}</Text>
          <View style={styles.clinics}>
            <Ionicons name="location" size={14} color="#1C2A3A" />
            <Text style={styles.clinic}>{booking.clinic}</Text>
          </View>
        </View>
      </View>
      {selectedTab === 'upcoming' && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('DoctorsList')}>
            <Text style={styles.CancelbuttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rescheduleButton} onPress={() => navigation.navigate('Appointment')}>
            <Text style={styles.buttonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedTab === 'completed' && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.rebookButton} onPress={() => navigation.navigate('Appointment')}>
            <Text style={styles.RebokbuttonText}>Re-book</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedTab === 'canceled' && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.bookAgainButton} onPress={() => navigation.navigate('Appointment')}>
            <Text style={styles.buttonText}>Book Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setSelectedTab('upcoming')}
          style={[styles.tabButton, selectedTab === 'upcoming' && styles.activeTabButton]}
        >
          <Text style={selectedTab === 'upcoming' ? styles.activeTabText : styles.tabText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('completed')}
          style={[styles.tabButton, selectedTab === 'completed' && styles.activeTabButton]}
        >
          <Text style={selectedTab === 'completed' ? styles.activeTabText : styles.tabText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('canceled')}
          style={[styles.tabButton, selectedTab === 'canceled' && styles.activeTabButton]}
        >
          <Text style={selectedTab === 'canceled' ? styles.activeTabText : styles.tabText}>Canceled</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {bookingsData[selectedTab].length > 0 ? (
          bookingsData[selectedTab].map(renderBookingItem)
        ) : (
          <Text style={styles.noBookingsText}>No {selectedTab} bookings</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 50,
    marginTop: 60,
    marginBottom: 15,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#1C2A3A',
  },
  tabText: {
    color: '#999',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#1C2A3A',
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  bookingDate: {
    color: '#000',
    marginBottom: 12,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  bookingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 13,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  doctorName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
  },
  specialty: {
    color: '#1c2a3a',
    marginBottom: 5,
    fontWeight: '600',
  },
  clinic: {
    fontWeight: '400',
    color: '#666',
  },
  clinics: {
    fontWeight: '400',
    color: '#666',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  rescheduleButton: {
    backgroundColor: '#1C2A3A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  rebookButton: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  reviewButton: {
    backgroundColor: '#1C2A3A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  bookAgainButton: {
    backgroundColor: '#1C2A3A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  RebokbuttonText:{
    color: "#1C2A3A",
    fontWeight: 'bold',
  },
  CancelbuttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  noBookingsText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 50,
  },
  columnItems: {
    marginTop: -29,
  },
  header:{
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    marginTop: 60,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: -30
  }
});

export default BookingScreen;
