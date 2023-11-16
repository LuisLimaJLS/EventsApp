import { View, SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import DistrictList from '../components/DistrictList'
import DateScreen from './DateScreen'

export default function DistrictScreen({ navigation }) {
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
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <DistrictList navigation={navigation} style={styles.DistrictList}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
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
  container:{
    backgroundColor: "#1B263B",
    flex:1
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
},
});