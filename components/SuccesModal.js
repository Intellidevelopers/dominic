// SuccessModal.js
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';

const SuccessModal = ({ visible, navigation, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={require('../assets/scess.gif')} style={styles.icon} />
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.message}>
            Your appointment with Dr. David Patel is confirmed for June 30, 2023, at 10:00 AM.
          </Text>
          <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Bookings')}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.editText}>Edit your appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'whitesmoke',
    borderRadius: 30,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: "500",
    color: "#6B7280"
  },
  doneButton: {
    padding: 10,
    backgroundColor: '#1C2A3A',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    width: "100%"
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  editText: {
    color: '#1C2A3A',
    fontSize: 14,
    fontWeight: "500"
  },
});

export default SuccessModal;
