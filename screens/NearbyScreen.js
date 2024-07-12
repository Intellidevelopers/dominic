import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FontAwesome5, MaterialCommunityIcons} from 'react-native-vector-icons/';

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Sunrise Health Clinic',
    address: '123 Oak Street, CA 98765',
    rating: 5.0,
    reviews: 58,
    distance: '2.5 km/40min',
    type: 'Hospital',
    image: require('../assets/clinic1.png'),
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
  },
  {
    id: '2',
    title: 'Golden Cardiology Center',
    address: '555 Bridge Street, CA 98765',
    rating: 4.9,
    reviews: 112,
    distance: '2.5 km/40min',
    type: 'Hospital',
    image: require('../assets/clinic2.png'),
    coordinate: { latitude: 37.78845, longitude: -122.4334 },
  },
];

const NearbyScreen = ({navigation}) => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        {DATA.map((item) => (
          <Marker
            key={item.id}
            coordinate={item.coordinate}
          >
            <View style={styles.customMarker}>
              <Image source={item.image} style={styles.markerImage} />
            </View>
          </Marker>
        ))}
      </MapView>
      <TextInput
        style={styles.searchBox}
        placeholder="Search Doctor, Hospital"
      />
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {DATA.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.cardRow}>
                  <Icon name="location-on" size={20} color="#000" />
                  <Text style={styles.address}>{item.address}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Icon name="star" size={20} color="#FFD700" />
                  <Icon name="star" size={20} color="#FFD700" />
                  <Icon name="star" size={20} color="#FFD700" />
                  <Icon name="star" size={20} color="#FFD700" />
                  <Icon name="star" size={20} color="#FFD700" />
                  <Text style={styles.ratings}>{item.rating} ({item.reviews} Reviews)</Text>
                </View>
                <View style={styles.bottomItems}>
                  <View style={styles.hospital}>
                    <FontAwesome5 name="stethoscope" size={20} color="#9CA3AF" />
                    <Text style={styles.distance}>{item.distance}</Text>
                  </View>
                  <View style={styles.hospital}>
                    <FontAwesome5 name="hospital" size={20} color="#9CA3AF" />
                    <Text style={styles.type}>{item.type}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('DoctorsList')}>
        <View style={styles.allDoctors}>
          <MaterialCommunityIcons name="account-search" size={26} color="#4D9B91" />
          <Text style={styles.ratingText}> Search All Doctors</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerImage: {
    width: '100%',
    height: '100%',
  },
  searchBox: {
    position: 'absolute',
    top: 70,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 48,
  },
  scrollViewContent: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: width * 0.70,
    marginHorizontal: width * 0.035,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  address: {
    fontWeight: '500',
    fontSize: 13,
  },
  bottomItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 4,
    paddingVertical: 5,
  },
  hospital: {
    flexDirection: 'row',
    gap: 3,
  },
  allDoctors:{
    backgroundColor: "white",
    width: '100%',
    alignItems: "center",
    height: 60,
    marginVertical: -40,
    marginTop: 40
  },
  ratingText:{
    fontWeight: "600"
  }
});

export default NearbyScreen;
