import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'; // Importa iconos

const EventsCalendar = ({ navigation }) => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        markedDates={{
          '2023-11-04': { selected: true, marked: true },
          '2023-11-11': { marked: true },
          '2023-11-14': { marked: true },
          '2023-11-18': { marked: true, dotColor: 'red' },
        }}
        onDayPress={() => navigation.navigate('ListScreen')}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#415A77',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#C9ADA7',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#00adf5',
          monthTextColor: '#00adf5',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

const DateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendario</Text>
      </View>
      <View style={styles.menuButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DistrictScreen')}
          style={styles.button}
        >
          <Ionicons name="md-map" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Distritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DateScreen')}
          style={styles.button}
        >
          <Ionicons name="md-calendar" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Calendario</Text>
        </TouchableOpacity>
      </View>
      <EventsCalendar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B263B',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#415A77',
  },
  title: {
    fontSize: 18,
    color: '#E0E1DD',
    fontWeight: 'bold',
  },
  menuButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C9ADA7',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#E0E1DD',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  calendarContainer: {
    flex: 1,
  },
});

export default DateScreen;
