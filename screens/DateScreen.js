import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';

const EventsCalendar = ({ navigation }) => {
  return (
      <View>
          <Calendar
              markedDates={{
                  '2023-11-04': { selected: true, marked: true },
                  '2023-11-11': { marked: true },
                  '2023-11-14': { marked: true },
                  '2023-11-18': {
                      marked: true, dotColor: 'red',
                      activeOpacity: 0
                  },
              }}
              onDayPress={() => navigation.navigate(
                'ListScreen')}
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
                  textDayHeaderFontSize: 16
              }}
          />
      </View>
  );
};

export default function DateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigation.navigate(
              'DistrictScreen'
          )} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{"Distritos"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(
              'DateScreen'
          )} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{"Calendario"}</Text>
        </TouchableOpacity>
      </View>
      <EventsCalendar navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1B263B",
    flex:1
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#C9ADA7",
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:4,
    flex:1,
    borderColor:"#1B263B",
    borderWidth : 1

  },
  appButtonText: {
    fontSize: 14,
    color: "#E0E1DD",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
