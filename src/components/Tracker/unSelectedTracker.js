import React, {Fragment, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moodRatings, regexStrings} from '../../config/constants';
import MoodSelectorCard from './moodSelectorCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../../config/globalStyles';

const fileStyle = StyleSheet.create({
  moodSelectorWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  inputCard: {
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    height: 40,
    padding: 10,
  },
});

export default function UnselectedTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [bpValue, setBpValue] = useState('');

  const onSubmitForm = () => {
    console.log('bpValue : ', bpValue);
    if (selectedMood === null) {
      Alert.alert('Please Select Your Mood');
    } else if (!regexStrings.bp.test(bpValue)) {
      Alert.alert('Please Enter Valid BP Value. Eg: 120/80');
    }
  };

  return (
    <Fragment>
      <View style={fileStyle.inputCard}>
        <Text style={globalStyles.lableStyle}>Please Select Your Mood :</Text>
        <View style={fileStyle.moodSelectorWrap}>
          {Object.keys(moodRatings).map(mood => (
            <MoodSelectorCard
              key={mood}
              emoji={moodRatings[mood]}
              mood={mood}
              onSelect={() => setSelectedMood(mood)}
              isSelected={selectedMood === mood}
            />
          ))}
        </View>
      </View>
      <View style={fileStyle.inputCard}>
        <Text style={globalStyles.lableStyle}>
          Please Enter Your BP value (systolic/diastolic):
        </Text>
        <TextInput
          placeholder="Eg: 120/80"
          keyboardType="phone-pad"
          style={fileStyle.input}
          value={bpValue}
          onChangeText={setBpValue}
        />
      </View>
      <TouchableOpacity style={globalStyles.button} onPress={onSubmitForm}>
        <Text style={globalStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </Fragment>
  );
}
