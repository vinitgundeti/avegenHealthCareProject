import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthContext from '../config/AuthContext';
import UserName from '../components/Common/userName';
import globalStyles from '../config/globalStyles';
import MoodSelectorCard from '../components/Tracker/moodSelectorCard';
import {Colors} from '../config/constants';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  moodSelectorWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  lable: {
    fontSize: 16,
    marginBottom: 0,
    color: Colors.black,
    fontWeight: '500',
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
export default function Tracker(props) {
  console.log('Tracker : ', props.route.params);
  const context = useContext(AuthContext);
  const {user} = context;
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const findData = user.trackedData.find(
      item => item.date === props.route.params.day,
    );
    console.log('findData : ', findData);
    if (findData !== undefined) {
      setSelectedData(findData);
    }
  }, [props.route.params.day, user.trackedData]);

  return (
    <ScrollView
      style={[fileStyle.container, globalStyles.flex1, globalStyles.wrapper]}>
      <UserName />
      <View style={fileStyle.inputCard}>
        <Text style={fileStyle.lable}>Please Select Your Mood :</Text>
        <View style={fileStyle.moodSelectorWrap}>
          <MoodSelectorCard emoji="😪" mood="Very Unhappy" />
          <MoodSelectorCard emoji="😞" mood="Unhappy" />
          <MoodSelectorCard emoji="🙂" mood="Neutral" />
          <MoodSelectorCard emoji="😊" mood="Happy" />
          <MoodSelectorCard emoji="😁" mood="Very Happy" />
        </View>
      </View>
      <View style={fileStyle.inputCard}>
        <Text style={fileStyle.lable}>
          Please Enter Your BP value (systolic/diastolic):
        </Text>
        <Text></Text>
        <TextInput placeholder="Eg: 120/80" style={fileStyle.input} />
      </View>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
