import React from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'Appointment Success',
    description: 'You have successfully booked your appointment with Dr. Emily Walker.',
    time: '1h',
    type: 'success',
    date: 'today',
  },
  {
    id: '2',
    title: 'Appointment Cancelled',
    description: 'You have successfully cancelled your appointment with Dr. David Patel.',
    time: '2h',
    type: 'cancelled',
    date: 'today',
  },
  {
    id: '3',
    title: 'Scheduled Changed',
    description: 'You have successfully changed your appointment with Dr. Jesica Turner.',
    time: '8h',
    type: 'changed',
    date: 'today',
  },
  {
    id: '4',
    title: 'Appointment Success',
    description: 'You have successfully booked your appointment with Dr. David Patel.',
    time: '1d',
    type: 'success',
    date: 'yesterday',
  },
  {
    id: '5',
    title: 'Appointment Success',
    description: 'You have successfully booked your appointment with Dr. Emily Walker.',
    time: '1h',
    type: 'success',
    date: 'today',
  },
  {
    id: '6',
    title: 'Appointment Cancelled',
    description: 'You have successfully cancelled your appointment with Dr. David Patel.',
    time: '2h',
    type: 'cancelled',
    date: 'today',
  },
  {
    id: '7',
    title: 'Scheduled Changed',
    description: 'You have successfully changed your appointment with Dr. Jesica Turner.',
    time: '8h',
    type: 'changed',
    date: 'today',
  },
  {
    id: '8',
    title: 'Appointment Success',
    description: 'You have successfully booked your appointment with Dr. David Patel.',
    time: '1d',
    type: 'success',
    date: 'yesterday',
  },
];

const groupedNotifications = [
  { title: 'TODAY', data: notifications.filter((item) => item.date === 'today') },
  { title: 'YESTERDAY', data: notifications.filter((item) => item.date === 'yesterday') },
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.message}>
        <View style={styles.iconContainer}>
          <Icon
            name={item.type === 'success' ? 'check-circle' : item.type === 'cancelled' ? 'cancel' : 'schedule'}
            size={24}
            color={item.type === 'success' ? '#4CAF50' : item.type === 'cancelled' ? '#F44336' : '#FFC107'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.markAllRead}>Mark all as read</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <View style={styles.newButton}>
            <Text style={styles.newButtonText}>1 New</Text>
          </View>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={groupedNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 15

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 32
  },
  newButton: {
    backgroundColor: '#1C2A3A',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 16,
  },
  newButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  markAllRead: {
    fontSize: 16,
    color: '#1C2A3A',
    fontWeight: '700',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1C2A3A',
  },
  description: {
    fontSize: 14,
    color: '#1C2A3A',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 4,
  },
});

export default NotificationScreen;
