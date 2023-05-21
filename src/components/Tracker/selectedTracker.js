import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../../config/globalStyles';
import MoodSelectorCard from './moodSelectorCard';
import {moodRatings} from '../../config/constants';

const fileStyle = StyleSheet.create({
  inputCard: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default function SelectedTracker({selectedData}) {
  return (
    <Fragment>
      <View style={fileStyle.inputCard}>
        <Text style={globalStyles.lableStyle}>Selected Mood :</Text>
        <MoodSelectorCard
          emoji={moodRatings[selectedData.mood]}
          mood={selectedData.mood}
          isDisable
          isSelected
        />
      </View>
      <View style={fileStyle.inputCard}>
        <Text style={globalStyles.lableStyle}>Entered BP Value :</Text>
        <Text>{selectedData.bp}</Text>
      </View>
    </Fragment>
  );
}
