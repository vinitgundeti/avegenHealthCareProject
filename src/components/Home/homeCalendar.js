import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const HomeCalendar = ({userData}) => {
  const [selected, setSelected] = useState('');
  const [markedDateObj, setMarkedDateObj] = useState({});
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setMonth(currentDate.getMonth() - 1);
  const navigation = useNavigation();
  useEffect(() => {
    let dateobj = {};
    userData.trackedData?.forEach(element => {
      dateobj[element.date] = {marked: true};
    });
    console.log('dateobj : ', dateobj);
    setMarkedDateObj(dateobj);
  }, [userData.trackedData]);
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
        setSelected(day.dateString);
      }}
      markedDates={markedDateObj}
    />
  );
};

export default HomeCalendar;
