import React, {useState} from 'react';
import {View} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function CheckBoxElements() {
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
            <View>
                <CheckBox
                    title="CheckBox"
                    checked={isSelected}
                    onPress={() => setSelection(!isSelected)}
                />
            </View>
        </View>
    );
}
