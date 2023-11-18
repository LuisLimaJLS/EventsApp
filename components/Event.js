import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function Event({id,name,date,address,imageUrl,price}) {
  return (
    <View style={styles.eventCard}>
        <Image
            source={{
            uri: imageUrl
            }}
            style={styles.eventImage}
        />
        <View style={styles.eventCardDetail}>
            <Text style={styles.eventName}>{name}</Text>
            <View style={styles.eventCard}>
                <Text style={styles.eventDetail}>{date}</Text>
                <Text style={styles.eventDetail}> | </Text>
                <Text style={styles.eventDetail}>{address}</Text>
            </View>
            <Text style={styles.eventDetail}>$ {price}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    eventCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#415A77',
        padding: 8,
        borderRadius: 10
    },
    eventCardDetail: {
        alignItems: 'center',
    },
    eventImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    eventName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#E0E1DD'
    },
    eventDetail: {
        fontSize: 12,
        color: '#E0E1DD'
    }
})
