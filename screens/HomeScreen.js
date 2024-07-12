import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView, Dimensions, Animated, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, SimpleLineIcons } from 'react-native-vector-icons';
import * as Location from 'expo-location';

const { width: screenWidth } = Dimensions.get('window');

const medicalCenters = [
    { id: '1', name: 'Sunrise Health Clinic', location: '1234 Elm St, Seattle, WA', image: require('../assets/clinic1.png') },
    { id: '2', name: 'Golden Cardiology Center', location: '5678 Oak St, Seattle, WA', image: require('../assets/clinic2.png') },
    { id: '3', name: 'Golden Cardiology Center', location: '910 Pine St, Seattle, WA', image: require('../assets/clinic2.png') },
    { id: '4', name: 'Golden Cardiology Center', location: '112 Maple St, Seattle, WA', image: require('../assets/clinic2.png') }
];

const nearbyDoctors = [
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

const banners = [
    { image: require('../assets/banner.png') },
    { image: require('../assets/clinic1.png') }
];

const HomeScreen = ({navigation}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
    const [locationQuery, setLocationQuery] = useState('');
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [deviceLocation, setDeviceLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setDeviceLocation(location);

            let address = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            setAddress(address[0]);
        })();
    }, []);

    const handleLocationChange = (query) => {
        setLocationQuery(query);
        // Fetch location suggestions using the query without axios
        // Example implementation: setLocationSuggestions(yourFetchedData);
    };

    const renderBannerItem = ({ item }) => (
        <View style={styles.bannerItem}>
            <Image source={item.image} style={styles.bannerImage} />
        </View>
    );

    const renderMedicalCenterItem = ({ item }) => (
        <View style={styles.medicalCenterItem}>
            <Image source={item.image} style={styles.medicalCenterImage} />
            <Text style={styles.medicalCenterText}>{item.name}</Text>
            <Text style={styles.medicalCenterLocation}><Ionicons name='location-outline' size={14} /> {item.location}</Text>
        </View>
    );

    const renderNearbyDoctorsItem = ({ item }) => (
        <View style={styles.medicalCenterItem}>
            <Image source={item.image} style={styles.medicalCenterImage} />
            <Text style={styles.medicalCenterText}>{item.name}</Text>
            <Text style={styles.medicalSpecialtyText}>{item.specialty}</Text>
            <Text style={styles.medicalCenterLocation}><Ionicons name='location-outline' size={14} /> {item.clinic}</Text>
        </View>
    );

    let locationText = 'Waiting..';
    if (errorMsg) {
        locationText = errorMsg;
    } else if (address) {
        locationText = `${address.street}, ${address.city}, ${address.region}, ${address.postalCode}, ${address.country}`;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Location</Text>
                <View style={styles.locationFlexContainer}>
                    <TouchableOpacity onPress={() => setLocationDropdownVisible(!locationDropdownVisible)}>
                        <View style={styles.location}>
                            <Ionicons name='location-outline' size={20} color={'black'} />
                            <Text style={styles.locationSubText}>{locationText}</Text>
                            <View style={styles.locationDropdownIcon}>
                            <SimpleLineIcons name='arrow-down' size={12} color={'black'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <View style={styles.notification}>
                            <Ionicons name='notifications' size={20} color={'black'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {locationDropdownVisible && (
                <View style={styles.dropdownContainer}>
                    <TextInput
                        style={styles.locationInput}
                        placeholder='Search location...'
                        value={locationQuery}
                        onChangeText={handleLocationChange}
                    />
                    <FlatList
                        data={locationSuggestions}
                        keyExtractor={(item) => item.place_id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                setLocationQuery(item.display_name);
                                setLocationDropdownVisible(false);
                            }}>
                                <Text style={styles.locationSuggestion}>{item.display_name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
            <View style={styles.searchContainer}>
                <Ionicons name='search' size={20} color='#888' style={styles.searchIcon} />
                <TextInput
                    placeholder='Search doctor...'
                    style={styles.searchInput}
                />
            </View>
            <View style={styles.bannerContainer}>
                <Animated.FlatList
                    data={banners}
                    renderItem={renderBannerItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />
                <View style={styles.pagination}>
                    {banners.map((_, i) => {
                        const inputRange = [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth];
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.8, 1, 0.8],
                            extrapolate: 'clamp',
                        });
                        return <Animated.View key={i} style={[styles.dot, { transform: [{ scale }] }]} />;
                    })}
                </View>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoryText}>Categories</Text>
                <TouchableOpacity onPress={() => alert('You press See all Categories')}>
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.categoriesItemsContainer}>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Dentistry')}>
                            <Image source={require('../assets/categories/Dentistry.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Dentistry</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Cardiolo')}>
                            <Image source={require('../assets/categories/cardiology.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Cardiolo..</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Pulmono')}>
                            <Image source={require('../assets/categories/pulmono.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Pulmono..</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press General')}>
                            <Image source={require('../assets/categories/general.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>General</Text>
                    </View>
                </View>

                <View style={styles.categoriesItemsContainer}>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Neurology')}>
                            <Image source={require('../assets/categories/neural.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Neurology</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Gastroen')}>
                            <Image source={require('../assets/categories/gatroen.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Gastroen..</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Laborato')}>
                            <Image source={require('../assets/categories/laboratory.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Laborato..</Text>
                    </View>
                    <View style={styles.columnsCategories}>
                        <TouchableOpacity onPress={() => alert('You press Derma')}>
                            <Image source={require('../assets/categories/vaccination.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text style={styles.categoryItemText}>Vaccinat..</Text>
                    </View>
                </View>

                <View style={styles.medicalCentersContainer}>
                    <View style={styles.locationFlexContainer}>
                        <Text style={styles.sectionTitle}>Nearby Medical Centers</Text>
                        <TouchableOpacity onPress={() => alert('You press See all Medical Centers')}>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={medicalCenters}
                        renderItem={renderMedicalCenterItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.medicalCentersContainer}>
                    <View style={styles.locationFlexContainer}>
                        <Text style={styles.sectionTitle}>Nearby Doctors</Text>
                        <TouchableOpacity onPress={() => alert('You press See all Medical Centers')}>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={nearbyDoctors}
                        renderItem={renderNearbyDoctorsItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                
                <View style={styles.bottomTexts}>
                    <Text style={styles.bottomTextHead}>Your data is 100% safe</Text>
                    <Text style={styles.bottomTextDescription}>We do not share information with anyone</Text>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    locationContainer: {
        marginBottom: 10,
    },
    locationText: {
        fontSize: 14,
        color: '#888',
        marginLeft: 3
    },
    locationSubText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#888',
    },
    bannerContainer: {
        marginBottom: 20,
        width: 330
    },
    bannerItem: {
        borderRadius: 10,
        overflow: 'hidden',
        width: screenWidth * 0.9,
        marginHorizontal: 3,
    },
    bannerImage: {
        width: '100%',
        height: 150,
        gap: 20
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#888',
        marginHorizontal: 4,
    },
    categoriesContainer: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    categoryText: {
        color: '#000',
        fontSize: 18,
        fontWeight: "700"
    },
    seeAllText: {
        color: '#6B7280',
        fontWeight: "medium"
    },
    medicalCentersContainer: {
        marginBottom: 20,
        marginTop: 20,
        width: '100%'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    medicalCenterItem: {
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    medicalCenterImage: {
        width: 157,
        height: 100,
    },
    medicalCenterText: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: "700"
    },
    medicalCenterLocation: {
        textAlign: 'center',
        color: '#888',
        fontSize: 12,
    },
    columnsCategories: {
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center"
    },
    categoryImage: {
        width: 60,
        height: 60
    },
    categoryItemText: {
        fontWeight: "600",
        fontSize: 13
    },
    categoriesItemsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    location: {
        flexDirection: "row",
    },
    locationFlexContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    notification: {
        backgroundColor: "#F3F4F6",
        padding: 10,
        borderRadius: 100,
        marginTop: -10
    },
    locationDropdownIcon:{
        alignSelf: "center",
        marginLeft: 5
    },
    dropdownContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
    },
    locationInput: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    locationSuggestion: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    medicalSpecialtyText:{
        textAlign: 'center',
        marginTop: 5,
        fontWeight: "500",
        color: "#333",
    },
    bottomTexts:{
        flexDirection: "column",
        alignItems: "center",
    },
    bottomTextHead:{
        color: "#4D9B91",
        fontWeight: "700"
    },
    bottomTextDescription:{
        color: "#666",
        fontWeight: "500",
        marginBottom: 10
    }
});

export default HomeScreen;
