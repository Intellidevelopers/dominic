import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Octicons } from 'react-native-vector-icons/';
import { ScrollView } from 'react-native-gesture-handler';

function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
  };

  const handleSubmit = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setRedirectToHome(true); // Trigger redirection
    }, 3000);
  };

  useEffect(() => {
    if (redirectToHome) {
      navigation.navigate('Main'); // Replace 'Home' with your actual home screen route name
    }
  }, [redirectToHome]);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    setShowLogoutModal(false);
    navigation.navigate('Login'); // Navigate to login screen after logout
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileImageWrapper}>
        <TouchableOpacity style={styles.profileImageContainer} onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../assets/profile-circle.png')} style={styles.profileImage} />
          )}
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Ionicons name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.profileName}>Adeagbo Josiah</Text>
        <Text style={styles.profilePhone}>+234 (808) 888 6823</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <SimpleLineIcons name="user" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Edit Profile</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <SimpleLineIcons name="heart" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Favorite</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <SimpleLineIcons name="bell" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Notifications</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <SimpleLineIcons name="settings" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Settings</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <MaterialCommunityIcons name="comment-question-outline" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Help and Support</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemFlex}>
              <Octicons name="shield-lock" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Terms and Conditions</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowLogoutModal(true)}
          >
            <View style={styles.menuItemFlex}>
              <SimpleLineIcons name="logout" size={20} color="#1C2A3A" />
              <Text style={styles.menuText}>Log Out</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1C2A3A" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.logoutModalContent}>
            <Text style={styles.logoutModalTitle}>Logout</Text>
            <Text style={styles.logoutModalMessage}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.logoutModalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Yes, Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/output-onlinegiftools.gif')} style={styles.successImage} />
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalMessage}>
              Your account is ready to use. You will be redirected to the Home Page in a few seconds...
            </Text>
            <ActivityIndicator size="large" color="#000" style={styles.activityIndicator} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
  },
  profileImageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  saveButton: {
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 35,
    alignItems: 'center',
  },
  logoutModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 302,
    width: '101%',
    borderRadius: 20
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,

  },
  logoutModalMessage: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 20
  },
  logoutModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#000',
    fontWeight: "500"
  },
  logoutButtonText: {
    color: '#fff',
  },
  activityIndicator: {
    marginTop: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profilePhone: {
    color: '#666',
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: "space-between",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#1C2A3A',
  },
  menuItemFlex: {
    flexDirection: "row",
  }
});
