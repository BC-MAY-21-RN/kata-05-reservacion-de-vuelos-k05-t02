import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextWithMessage({ 
  title, 
  required, 
  errorMessage, 
  placeholder,
  keyboardType = 'default'
}) {
  const [value , onChangeValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{title} </Text>
        { 
          required && (
            <Text 
              style={ errorMessage 
                ? styles.error 
                : styles.text} 
            > 
            * 
            </Text>
          )
        }
        <Text style={styles.error} > {errorMessage}</Text>
      </View>
      <TextInput
        style={ value === '' ? styles.input : styles.inputWithContent}
        onChangeText={onChangeValue}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },
  title:{
    flex: 0,
    flexDirection: 'row',
    marginBottom: 5
  },
  text:{
    color: '#393939'
  },
  error:{
    color: 'red'
  },
  input:{
    borderWidth: 1,
    borderColor: '#999fa6'
  },
  inputWithContent:{
    borderWidth: 1,
    borderColor: '#7767fb'
  }
});
