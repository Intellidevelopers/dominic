import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomCalendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = (month, year) => {
    const totalDays = daysInMonth(month, year);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    // Fill initial empty spaces for the first row
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={[styles.day, styles.emptyDay]} />);
    }

    // Fill actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${year}-${month + 1}-${day}`;
      days.push(
        <TouchableOpacity
          key={dateString}
          style={[styles.day, selectedDate === dateString && styles.selectedDay]}
          onPress={() => {
            setSelectedDate(dateString);
            onDateSelect(dateString);
          }}
        >
          <Text style={selectedDate === dateString ? styles.selectedDayText : styles.dayText}>
            {day}
          </Text>
        </TouchableOpacity>
      );
    }

    // Fill the remaining empty spaces to complete the last row
    const remainingDays = 42 - days.length; // 42 cells to cover all weeks of the month
    for (let i = 0; i < remainingDays; i++) {
      days.push(<View key={`empty-${i + firstDayOfMonth}`} style={[styles.day, styles.emptyDay]} />);
    }

    return days;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{`${months[currentMonth]} ${currentYear}`}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.daysOfWeekContainer}>
        {daysOfWeek.map((day) => (
          <Text key={day} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.daysContainer}>{renderDays(currentMonth, currentYear)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayOfWeekText: {
    width: '12%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1C2A3A',
    fontSize: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
  },
  day: {
    width: '13%',
    padding: 10,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
  },
  emptyDay: {
    backgroundColor: 'transparent',
  },
  selectedDay: {
    backgroundColor: '#1C2A3A',
    borderRadius: 8,
  },
  dayText: {
    color: '#1C2A3A',
    fontWeight: '700',
  },
  selectedDayText: {
    color: '#fff',
  },
});

export default CustomCalendar;
