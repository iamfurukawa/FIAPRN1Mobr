import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import Avatar from './components/avatar';
import AboutMe from './sections/about-me';
import Contact from './sections/contact';
import Technologies from './sections/technologies';

const Vinicius = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Avatar />
        <View>
          <AboutMe/>
          <Technologies/>
          <Contact/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Vinicius};
