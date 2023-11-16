import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import DistrictList from '../components/DistrictList'

export default function DistrictScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DistrictList navigation={navigation} style={styles.DistrictList}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1B263B",
    flex: 1
  },
  DistrictList:{
    marginBottom: 5
  },
});