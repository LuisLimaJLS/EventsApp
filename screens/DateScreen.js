import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'; // Importa iconos

const EventsCalendar = ({ navigation, eventsArray }) => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        markedDates={{
          '2023-11-04': { selected: true, marked: true },
          '2023-11-11': { marked: true },
          '2023-11-14': { marked: true },
          '2023-11-18': { marked: true, dotColor: 'red' },
        }}
        onDayPress={() => navigation.navigate('ListScreen', eventsArray)}
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

const DateScreen = ({ route, navigation}) => {

  var eventsArray = route.params

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendario</Text>
      </View>
      <View style={styles.menuButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DistrictScreen', eventsArray)}
          style={styles.appButtonContainer}
        >
          <Ionicons name="md-map" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Distritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DateScreen', eventsArray)}
          style={styles.appButtonContainerPress}
        >
          <Ionicons name="md-calendar" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Calendario</Text>
        </TouchableOpacity>
      </View>
      <EventsCalendar navigation={navigation} eventsArray={eventsArray}/>
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
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  appButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    backgroundColor: "#C9ADA7",
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 4,
    borderColor: "#1B263B",
    borderWidth: 1,
    flex: 1,
  },
  appButtonContainerPress: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    backgroundColor: "#B5968F",
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 4,
    borderColor: "#1B263B",
    borderWidth: 1,
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
