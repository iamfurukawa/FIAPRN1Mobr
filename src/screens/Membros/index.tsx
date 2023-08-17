import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Avatar from './components/avatar';

import Vinicius from './assets/vinicius.png';
import Michelle from './assets/michelle.jpeg';
import Thiago from './assets/tmalcher.png';

const Membros = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <Text style={styles.text}>Participantes do time</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Vinicius')}>
            <Avatar name="Vinícius F. Carvalho" photo={Vinicius} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Michelle')}>
            <Avatar name="Michelle Sinibaldi" photo={Michelle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Thiago')}>
            <Avatar name="Thiago Malcher" photo={Thiago} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingStart: 15,
  },
});

export {Membros};
