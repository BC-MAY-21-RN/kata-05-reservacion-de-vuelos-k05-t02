import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const Button = ({ handlePress, text, isEnabled, icon }) => {
  return (
    <TouchableOpacity 
        style={isEnabled ? isEnabledStyles : isDisabledStyles} 
        onPress={handlePress}
    >
        {
            icon && (
                <Image
                    style={styles.icon}
                    source={{
                        uri: icon,
                    }}
                />
            )
        }
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const enabled = StyleSheet.create({
    enabled: {
        backgroundColor: '#5c6ef8',
        shadowColor: "#5c6ef8",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.00,
        elevation: 40,      
    }
})

const disabled = StyleSheet.create({
    disabled: {
        backgroundColor: 'rgba(0,0,0,.3)'
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        transform: [{ translateX: -35 }]
    },  
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: 15,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
})

const isEnabledStyles = StyleSheet.compose(styles.button, enabled.enabled);
const isDisabledStyles = StyleSheet.compose(styles.button, disabled.disabled);