import {Text, View} from 'react-native';
import globalStyles from '../../config/globalStyles';

export default function Loader() {
  return (
    <View>
      <Text style={globalStyles.headerTitle}>Loading...</Text>
    </View>
  );
}
