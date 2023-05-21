import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import AuthContext from '../../config/AuthContext';

const HomeCalendar = () => {
  const [markedDateObj, setMarkedDateObj] = useState({});
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setMonth(currentDate.getMonth() - 1);
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  const {user} = context;
  useEffect(() => {
    let dateobj = {};
    user.trackedData?.forEach(element => {
      dateobj[element.date] = {marked: true};
    });
    console.log('dateobj : ', dateobj);
    setMarkedDateObj(dateobj);
  }, [user.trackedData]);
  return (
    <Calendar
      style={{
        marginTop: 20,
      }}
      current={currentDate.toISOString().split('T')[0]}
      minDate={minDate.toISOString().split('T')[0]}
      maxDate={currentDate.toISOString().split('T')[0]}
      onDayPress={day => {
        console.log('selected day', day);
        navigation.navigate('Tracker', {day: day.dateString});
      }}
      markedDates={markedDateObj}
    />
  );
};

export default HomeCalendar;
