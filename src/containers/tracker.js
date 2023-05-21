import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import AuthContext from '../config/AuthContext';
import UserName from '../components/Common/userName';
import globalStyles from '../config/globalStyles';
import {Colors} from '../config/constants';
import UnselectedTracker from '../components/Tracker/unSelectedTracker';
import SelectedTracker from '../components/Tracker/selectedTracker';
import moment from 'moment';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 20,
    marginBottom: 40,
  },
});
export default function Tracker(props) {
  console.log('Tracker : ', props.route.params);
  let day = props.route?.params?.day;
  const context = useContext(AuthContext);
  const {user} = context;
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const findData = user.trackedData.find(item => item.date === day);
    console.log('findData : ', findData);
    if (findData !== undefined) {
      setSelectedData(findData);
    }
  }, [day, user.trackedData]);

  return (
    <ScrollView
      style={[fileStyle.container, globalStyles.flex1, globalStyles.wrapper]}>
      {/* <UserName /> */}
      <Text style={[fileStyle.title, globalStyles.headerTitle]}>
        {moment(day, 'YYYY-MM-DD').format('DD MMM, YYYY')}
      </Text>
      {selectedData === null ? (
        <UnselectedTracker day={day} />
      ) : (
        <SelectedTracker selectedData={selectedData} />
      )}
    </ScrollView>
  );
}
