import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Event from './Event'
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
]


export default function EventList() {
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
  tituloTexto:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
  },
  container:{
      paddingHorizontal:16,
      marginBottom:4
  },
  userCard: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      backgroundColor: '#8D3DAF',
      padding: 8,
      borderRadius: 10
  },
  userImage: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      marginRight: 14
  },
  userName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFF'
  },
  userStatus: {
      fontSize: 12
  }
})