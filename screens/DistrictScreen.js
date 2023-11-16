import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DistrictList from '../components/DistrictList';
import { Ionicons } from '@expo/vector-icons'; // Importa un icono de la biblioteca de Expo

export default function DistrictScreen({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigateToScreen('DistrictScreen')} style={styles.appButtonContainer}>
          <Ionicons name="ios-map" size={24} color="#E0E1DD" />
          <Text style={styles.appButtonText}> Distritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('DateScreen')} style={styles.appButtonContainer}>
          <Ionicons name="ios-calendar" size={24} color="#E0E1DD" />
          <Text style={styles.appButtonText}> Calendario</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <DistrictList navigation={navigation} style={styles.districtList} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  appButtonText: {
    fontSize: 14,
    color: "#E0E1DD",
    fontWeight: "bold",
    marginLeft: 8,
    textTransform: "uppercase",
  },
  container: {
    backgroundColor: "#1B263B",
    flex: 1,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
