import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function CheckBoxElements() {
    const [privacySelected, privacySelection] = useState(false);
    const [suscribeSelected, suscribeSelection] = useState(false);
    return (
        <View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={privacySelected}
                    onPress={() => privacySelection(!privacySelected)}
                />
                <Text style={styles.checkBoxText}>I agree to the <Text style = {{textDecorationLine: 'underline'}}>Terms</Text> and <Text style = {{textDecorationLine: 'underline'}}>Privacy Policy.</Text></Text>
                <Text style={styles.alert}>*</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                checked={suscribeSelected}
                onPress={() => suscribeSelection(!suscribeSelected)}
                />
                <Text style={styles.checkBoxText}>Suscribe for select product updates.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alert: {
        color: "red",
        paddingLeft: 5,
    },
    checkboxContainer: {
        alignItems: 'center',
        flexDirection: "row",
    },
    checkBoxText:{
        fontSize: 19,
        color: "#B7BDC9"
    },
  });