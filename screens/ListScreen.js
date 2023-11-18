import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import EventList from '../components/EventList';


export default function ListScreen({ route, navigation }) {

  var eventsArray = route.params

  const navigateToFormScreen = () => {
    navigation.navigate('FormScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToFormScreen} style={styles.newEventButton}>
        <Text style={styles.newEventButtonText}>Nuevo Evento</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <EventList eventsArray={eventsArray}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B263B",
    padding: 20,
  },
  newEventButton: {
    backgroundColor: "#C9ADA7",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    alignSelf: "center",
  },
  newEventButtonText: {
    fontSize: 16,
    color: "#E0E1DD",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  safeArea: {
    flex: 1,
  },
});
