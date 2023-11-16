import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import EventList from '../components/EventList'
export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(
            'FormScreen'
        )} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{"Nuevo Evento"}</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <ScrollView>
          <EventList/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#C9ADA7",
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:4
  },
  appButtonText: {
    fontSize: 14,
    color: "#E0E1DD",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container:{
    backgroundColor: "#1B263B",
  },
});