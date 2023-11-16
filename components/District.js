import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function District({id,name, navigation}) {
  return (
    <View style={styles.districtCard}>
        <View style={styles.districtCardB}>
        <Text style={styles.districtName}>{name}</Text>
        </View>
        <View style={styles.districtCardC}>
            <TouchableOpacity onPress={() => navigation.navigate(
                    'ListScreen'
                )} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{" >> "}</Text>
            </TouchableOpacity>
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
    districtCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#1595b2',
        padding: 8,
        borderRadius: 10
    },
    districtCardB: {
        flex: 0.7
    },
    districtCardC: {
        flex: 0.30
    },
    districtImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    districtName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1547b2'
    },
    districtDetail: {
        fontSize: 12,
        color: '#E0E1DD'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#3f4551",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom:4,
        marginRight: 0,
        width: 60,
    },
    appButtonText: {
        fontSize: 14,
        color: "#2d2d2a",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})
