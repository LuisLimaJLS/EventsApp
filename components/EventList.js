import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Event from './Event'

export default function EventList({eventsArray}) {
  return (
    <View>
      <ScrollView style={styles.container} scrollEnabled={false} >
        {eventsArray.map( ({id,name,date,address,imageUrl,price}) =>
            (
                <Event key={id}  name={name} date={date} address={address} imageUrl={imageUrl} price={price}/>
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
