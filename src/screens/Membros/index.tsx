import { useNavigation } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Membros = () => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Vinicius')}>
        <Text>Vinicius</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Michelle')}>
        <Text>Michelle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Thiago')}>
        <Text>Thiago</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Membros};
