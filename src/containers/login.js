import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import UserCard from '../components/Login/userCard';
import {urls} from '../config/constants';
import globalStyles from '../config/globalStyles';

const fileStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Login() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(urls.baseUrl + '/users')
      .then(res => {
        res
          .json()
          .then(response => {
            console.log('response : ', response);
            setUsers(response);
          })
          .catch(err => {
            console.log('err : ', err);
          });
      })
      .catch(err => {
        console.log('Err ', err);
      });
  }, []);
  return (
    <View style={[fileStyle.container, globalStyles.wrapper]}>
      <Text style={globalStyles.headerTitle}>Login</Text>
      <ScrollView style={[fileStyle.container]}>
        {users.map(item => (
          <UserCard key={item.id} user={item} />
        ))}
      </ScrollView>
    </View>
  );
}
