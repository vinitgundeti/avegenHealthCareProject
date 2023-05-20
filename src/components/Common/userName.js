import {useContext} from 'react';
import AuthContext from '../../config/AuthContext';
import {StyleSheet, Text} from 'react-native';
import globalStyles from '../../config/globalStyles';

const fileStyle = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default function UserName() {
  const context = useContext(AuthContext);
  const {user} = context;
  return (
    <Text style={[fileStyle.title, globalStyles.headerTitle]}>
      Hi, {user?.name?.split(' ')[0]}
    </Text>
  );
}
