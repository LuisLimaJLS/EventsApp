import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

export default function FormScreen() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Formulario</Text>
        <Formik
          initialValues={{
            name: 'Nuevo',
            date: 'Sab, 02 dic 2023',
            address: 'Madrid',
            imageUrl: '.......image.png',
            price: '15',
            district: '1',
          }}
          onSubmit={(values) => console.log('Form Submitted:', values);}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Nombre"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                value={values.date}
                placeholder="Fecha"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                placeholder="Dirección"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                placeholder="URL de la imagen"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                placeholder="Precio"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('district')}
                onBlur={handleBlur('district')}
                value={values.district}
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

const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

