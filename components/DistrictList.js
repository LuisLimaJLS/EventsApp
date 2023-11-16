import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import District from './District'
//districts
const districtsArray =[
    {
        id: 1,
        name: 'Distrito 01 - Centro'
    },
    {
        id: 2,
        name: 'Distrito 02 - Arganzuela'
    },
    {
        id: 3,
        name: 'Distrito 03 - Retiro'
    },
    {
      id: 4,
      name: 'Distrito 04 - Salamaca'
    },
    {
      id: 5,
      name: 'Distrito 05 - Chamartin'
    },
]


export default function DistrictList({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.container} scrollEnabled={false} >   
        {districtsArray.map( ({id,name}) =>
            (
                <District key={id}  name={name} navigation={navigation}/>
            )
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      paddingHorizontal:16,
      marginBottom:4
  }
})