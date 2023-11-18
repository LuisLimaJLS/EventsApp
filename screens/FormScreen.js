import { View, Text, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

export default function FormScreen({ route, navigation}) {

  var eventsArray = route.params

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            id: 20,
            name: 'Alejandro Sanz',
            date: 'Sab, 02 dic 2023',
            address: 'Madrid',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Alejandro_Sanz_-_Cap_Roig_2016.jpg/330px-Alejandro_Sanz_-_Cap_Roig_2016.jpg',
            price: 15,
            distict: 2,
          }}
          onSubmit={
            //guardar nuevo registro en el array
            (values) => {
              console.log('new value:', values)
              navigation.navigate({
              name: 'DistrictScreen', 
              params: {eventsArrayVal: values},
              merge: true,
            })
          }
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={styles.labelInput}>Nombre:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Nombre"
              />
              <Text style={styles.labelInput}>Fecha:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                value={values.date}
                placeholder="Fecha"
              />
              <Text style={styles.labelInput}>Direccion:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                placeholder="Dirección"
              />
              <Text style={styles.labelInput}>Iamgen url:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                placeholder="URL de la imagen"
              />
              <Text style={styles.labelInput}>Costo:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                placeholder="Precio"
                keyboardType="numeric"
              />
              <Text style={styles.labelInput}>Distrito:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('distict')}
                onBlur={handleBlur('distict')}
                value={values.distict}
                placeholder="Distrito"
                keyboardType="numeric"
              />
              <Button onPress={handleSubmit} title="Guardar" />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#415A77",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:"#E0E1DD",
    borderRadius: 5,
  },
  container: {
    margin: 20,
    flex: 1,
  },
  containerView: {
    backgroundColor: "#1B263B",
    flex: 1,
  },
  labelInput:{
    fontSize: 10, 
    marginBottom: 2,
    color:"#E0E1DD"
  },
});

