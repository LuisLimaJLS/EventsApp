import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik';

export default function FormScreen() {
  return (
    <View>
      <Text>Formulario</Text>
      <Formik
     initialValues={{ name: 'Nuevo' , date: 'Sab, 02 dic 2023' , address: 'Madrid' , imageUrl: '.......image.png' , price: 15 , distict: 1  }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
         />
         <TextInput
           onChangeText={handleChange('date')}
           onBlur={handleBlur('date')}
           value={values.date}
         />
         <TextInput
           onChangeText={handleChange('address')}
           onBlur={handleBlur('address')}
           value={values.address}
         />
         <TextInput
           onChangeText={handleChange('imageUrl')}
           onBlur={handleBlur('imageUrl')}
           value={values.imageUrl}
         />
         <TextInput
           onChangeText={handleChange('price')}
           onBlur={handleBlur('price')}
           value={values.price}
         />
         <TextInput
           onChangeText={handleChange('distict')}
           onBlur={handleBlur('distict')}
           value={values.distict}
         />
         <Button onPress={handleSubmit} title="Guardar" />
       </View>
     )}
   </Formik>
    </View>
  )
}

 
