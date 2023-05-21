import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AuthContext from '../config/AuthContext';
import UserName from '../components/Common/userName';
import globalStyles from '../config/globalStyles';
import {Colors} from '../config/constants';
import UnselectedTracker from '../components/Tracker/unSelectedTracker';
import SelectedTracker from '../components/Tracker/selectedTracker';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
      {selectedData === null ? (
        <UnselectedTracker />
      ) : (
        <SelectedTracker selectedData={selectedData} />
      )}
    </ScrollView>
  );
}
