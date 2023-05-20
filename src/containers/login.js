import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserCard from '../components/Login/userCard';
export default function Login() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://10.0.2.2:3002/users', {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        res.json().then(response => {
          console.log(response);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Text>Login</Text>
      <UserCard />
    </View>
  );
}
