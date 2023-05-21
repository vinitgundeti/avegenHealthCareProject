import React, {Fragment, useContext, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, moodRatings, regexStrings, urls} from '../../config/constants';
import MoodSelectorCard from './moodSelectorCard';
import globalStyles from '../../config/globalStyles';
import AuthContext from '../../config/AuthContext';

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

export default function UnselectedTracker({day}) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [loader, setLoader] = useState(false);
  const [bpValue, setBpValue] = useState('');
  const context = useContext(AuthContext);

  const onSubmitForm = () => {
    console.log('bpValue : ', bpValue);

    if (selectedMood === null) {
      return Alert.alert('Please Select Your Mood');
    } else if (!regexStrings.bp.test(bpValue)) {
      return Alert.alert('Please Enter Valid BP Value. Eg: 120/80');
    }

    let trackedData = [...context.user.trackedData];
    console.log('before : ', trackedData);
    trackedData.push({
      date: day,
      mood: selectedMood,
      bp: bpValue,
    });
    console.log('after : ', trackedData);
    let request = {
      name: context.user.name,
      img: context.user.img,
      trackedData,
    };

    setLoader(true);

    fetch(`${urls.baseUrl}/users/${context.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(res => {
        setLoader(false);
        if (res.status === 200) {
          res
            .json()
            .then(response => {
              console.log('PUT response : ', response);
              let user = JSON.parse(JSON.stringify(context.user));
              user.trackedData = trackedData;
              console.log('user ', user);
              context.setUser(user);
            })
            .catch(() => {
              setLoader(false);
              Alert.alert('something went wrong');
            });
        } else {
          setLoader(false);
          Alert.alert('something went wrong');
        }
      })
      .catch(() => {
        setLoader(false);
        Alert.alert('something went wrong');
      });
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
      <TouchableOpacity
        style={globalStyles.button}
        onPress={onSubmitForm}
        disabled={loader}>
        {loader ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text style={globalStyles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </Fragment>
  );
}
