import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import CustomCalendar from '../components/Calender';
import { Ionicons, FontAwesome6 } from 'react-native-vector-icons';
import SuccessModal from '../components/SuccesModal';

const BookAppointmentScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const times = [
    '09.00 AM', '09.30 AM', '10.00 AM', '10.30 AM', '11.00 AM', '11.30 AM',
    '03.00 PM', '03.30 PM', '04.00 PM', '04.30 PM', '05.00 PM', '05.30 PM',
  ];

  const handleConfirm = () => {
    // Show the modal when confirm button is clicked
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#1C2A3A" />
        </TouchableOpacity>
        <Text style={styles.title}>Book Appointment</Text>
      </View>

      <Text style={styles.label}>Select Date</Text>
      <CustomCalendar onDateSelect={(date) => setSelectedDate(date)} />

      <Text style={styles.label}>Select Hour</Text>
      <View style={styles.timesContainer}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={[styles.timeButtonText, selectedTime === time && styles.selectedTimeButtonText]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>

      <SuccessModal
        visible={isModalVisible}
        navigation={navigation}
        onClose={handleCloseModal}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
  selectedTimeButton: {
    backgroundColor: '#1C2A3A',
  },
  timeButtonText: {
    color: '#6B7280',
    fontWeight: '600',
  },
  selectedTimeButtonText: {
    color: '#fff',
  },
  confirmButton: {
    padding: 15,
    backgroundColor: '#1C2A3A',
    borderRadius: 5,
    alignItems: 'center',
    top: 50,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    gap: 50,
  },
});

export default BookAppointmentScreen;
