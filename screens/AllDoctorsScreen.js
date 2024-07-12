import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome6, Ionicons } from 'react-native-vector-icons/';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

const doctors = [
  {
    id: '1',
    name: 'Dr. David Patel',
    specialty: 'Cardiologist',
    clinic: 'Cardiology Center, USA',
    rating: 5,
    reviews: 1872,
    image: require('../assets/doctor1.png'),
  },
  {
    id: '2',
    name: 'Dr. Jessica Turner',
    specialty: 'Gynecologist',
    clinic: 'Women’s Clinic, Seattle, USA',
    rating: 4.9,
    reviews: 127,
    image: require('../assets/doctor2.png'),
  },
  {
    id: '3',
    name: 'Dr. Michael Johnson',
    specialty: 'Orthopedic Surgery',
    clinic: 'Maple Associates, NY, USA',
    rating: 4.7,
    reviews: 5223,
    image: require('../assets/doctor3.png'),
  },
  {
    id: '4',
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor4.png'),
  },
  {
    id: '5',
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor1.png'),
  },
  {
    id: '6',
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor2.png'),
  },
  {
    id: '7',
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor3.png'),
  },
  {
    id: '8',
    name: 'Dr. Emily Walker',
    specialty: 'General',
    clinic: 'Serenity Pediatrics Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor3.png'),
  },
  {
    id: '9',
    name: 'Dr. Adeagbo Josiah',
    specialty: 'General',
    clinic: 'ST -  Dominic Clinic',
    rating: 5,
    reviews: 405,
    image: require('../assets/doctor3.png'),
  },
];

const DoctorCard = ({ doctor, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('DoctorDetails', { doctor })}>
    <View style={styles.card}>
      <Image source={doctor.image} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.flexname}>
          <Text style={styles.name}>{doctor.name}</Text>
          <FontAwesome6 name="heart" size={18} color="#1C2A3A" />
        </View>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <Text style={styles.clinic}>{doctor.clinic}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.flexRating}>
            <FontAwesome6 name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{doctor.rating}</Text>
          </View>
          <Text style={styles.reviews}>{`  |  ${doctor.reviews} Reviews`}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const AllDoctorsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('All');

  const filteredDoctors = doctors.filter(doctor =>
    filter ? doctor.specialty.includes(filter) : true
  );

  const renderTab = (label, specialty) => (
    <TouchableOpacity
      key={label}
      style={[styles.tabButton, activeTab === label && styles.activeTabButton]}
      onPress={() => {
        setFilter(specialty);
        setActiveTab(label);
      }}
    >
      <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#1C2A3A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Doctors</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search doctor..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.scrollViewContainer}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {renderTab('All', null)}
          {renderTab('General', 'General')}
          {renderTab('Cardiologist', 'Cardiologist')}
          {renderTab('Dentist', 'Dentist')}
          {renderTab('Orthopedic', 'Orthopedic')}
          {renderTab('Pediatrics', 'Pediatrics')}
        </ScrollView>
      </View>
      <View style={styles.fountItems}>
        <Text style={styles.foundText}>532 found</Text>
        <View style={styles.filterItems}>
          <Text style={styles.filterText}>Default</Text>
          <FontAwesome6 name="arrow-up-wide-short" size={20} color="#1C2A3A" />
        </View>
      </View>
      <FlatList
        data={filteredDoctors}
        renderItem={({ item }) => <DoctorCard doctor={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "ffffff"
  },
  searchBar: {
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginVertical: 60,
    backgroundColor: "#fff",
    width: '100%',
    alignSelf: "center",
    borderWidth: 1,
    borderColor: '#9CA3AF'
  },
  scrollViewContainer: {
    height: 60,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabButton: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#9CA3AF",
    marginRight: 10,
  },
  activeTabButton: {
     backgroundColor: "#1C2A3A"
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  dropdown: {
    height: 40,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: '98%',
    alignSelf: "center"
  },
  image: {
    width: 80,
    height: 90, 
    marginRight: 10,
    borderRadius: 10
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5
  },
  specialty: {
    fontSize: 15,
    color: '#4B5563',
    fontWeight: "700"
  },
  clinic: {
    fontSize: 12,
    color: 'gray',
    fontWeight: "600"
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280',
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
  },
  fountItems:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  filterItems:{
    flexDirection: "row",
    gap: 10
  },
  foundText:{
    fontWeight: "700",
    fontSize: 16,
    color: "#1F2A37"
  },
  filterText: {
    fontWeight: "600",
    color: "#1F2A37"
  },
  flexname:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flexRating:{
    flexDirection: "row",
    gap: 3,
    alignItems: "center"
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
    alignItems: "center",
    marginBottom: -40
  },
  backButton:{
    marginLeft: -120
  },
  headerText:{
    marginLeft: -40,
    fontSize: 18,
    fontWeight: "700",
  }
});

export default AllDoctorsScreen;
