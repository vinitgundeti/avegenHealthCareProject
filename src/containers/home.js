import {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthContext from '../config/AuthContext';
import globalStyles from '../config/globalStyles';
import {Colors, urls} from '../config/constants';
import HomeCalendar from '../components/Home/homeCalendar';
import Loader from '../components/Common/loader';
import UserName from '../components/Common/userName';

const fileStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
export default function Home() {
  const context = useContext(AuthContext);
  const {user} = context;
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`${urls.baseUrl}/users/${user?.id}`)
      .then(res =>
        res.json().then(response => {
          setUserData(response);
          setLoader(false);
        }),
      )
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  }, [user?.id]);

  console.log('userdata : ', userData);
  return (
    <View
      style={[fileStyle.container, globalStyles.flex1, globalStyles.wrapper]}>
      <UserName />
      {loader ? <Loader /> : <HomeCalendar userData={userData} />}
    </View>
  );
}
