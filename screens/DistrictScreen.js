import React, { useState , useEffect} from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DistrictList from '../components/DistrictList';
import { Ionicons } from '@expo/vector-icons'; // Importar iconos de la biblioteca de Expo


export default function DistrictScreen({ route, navigation}) {

  //events
const eventsArray =[
  {
      id: 1,
      name: 'Shakira',
      date: 'Sab, 4 nov 2023',
      address: 'Cafe Berlin, Madrid',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shakira_for_VOGUE_in_2021_2.png/230px-Shakira_for_VOGUE_in_2021_2.png',
      price: 45,
      distict: 1
  },
  {
      id: 2,
      name: 'Ricardo Montaner',
      date: 'Sab, 11 nov 2023',
      address: 'Cafe Berlin, Madrid',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ricardo-Montaner.jpg/220px-Ricardo-Montaner.jpg',
      price: 35,
      distict: 1
  },
  {
      id: 3,
      name: 'Daddy Yankee',
      date: 'Sab, 18 nov 2023',
      address: 'Cafe Berlin, Madrid',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Daddy_Yankee_2015.png/360px-Daddy_Yankee_2015.png',
      price: 60,
      distict: 2
  },
  {
    id: 4,
    name: 'Juan Luis Guerra',
    date: 'Sab, 25 nov 2023',
    address: 'Cafe Berlin, Madrid',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Juan_Luis_Guerra_2012.jpg/220px-Juan_Luis_Guerra_2012.jpg',
    price: 35,
    distict: 3
  },
  {
    id: 5,
    name: 'Thalía',
    date: 'Sab, 2 dic 2023',
    address: 'Cafe Berlin, Madrid',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/ThaliaSodi_cropped.jpg/220px-ThaliaSodi_cropped.jpg',
    price: 25,
    distict: 4
  },
  {
     id: 6,
     name: 'Luis Ramiro',
     date: 'Sab, 4 nov 2023',
     address: 'Libertad 8, Madrid',
     imageUrl: 'https://4.bp.blogspot.com/_oYJ2RmSEWgY/S811H-eFr1I/AAAAAAAAAGY/LxCKPUyKdg0/s1600/LUIS+EXTERIOR+1.jpeg',
     price: 15,
     distict: 1
  },
  {
      id: 7,
      name: 'Marwan',
      date: 'Martes, 14 nov 2023',
      address: 'Joy Eslava, Madrid',
      imageUrl: 'https://1.bp.blogspot.com/-MJB6AvgoNkc/VmG5EWCgHBI/AAAAAAAASDk/FhDsXI-ELBE/s1600/FR2_2589.jpg',
      price: 26,
      distict: 2
  },
]
  useEffect(() => {
    console.log("Screen montado", route.params)
    if (route.params != null) {
      eventsArray=route.params
    }
  }, []);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Distritos</Text>
      </View>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigation.navigate('DistrictScreen', eventsArray)} style={styles.appButtonContainerPress}>
          <Ionicons name="ios-map" size={24} color="#E0E1DD" />
          <Text style={styles.appButtonText}> Distritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DateScreen', eventsArray)} style={styles.appButtonContainer}>
          <Ionicons name="ios-calendar" size={24} color="#E0E1DD" />
          <Text style={styles.appButtonText}> Calendario</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <DistrictList eventsArray={eventsArray} navigation={navigation} style={styles.districtList} />
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
});
