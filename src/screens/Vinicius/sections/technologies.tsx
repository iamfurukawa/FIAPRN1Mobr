import {FlatList, Text, View} from 'react-native';
import Section from '../components/section';

const Technologies = () => {
  return (
    <Section title="Tecnologias conhecidas">
      <View>
        <Text>O que já estudei e/ou trabalhei{'\n'}</Text>
        <FlatList
          data={[
            {key: 'Python'},
            {key: 'JavaScript/Typescript'},
            {key: 'Java'},
            {key: 'Flutter'},
            {key: 'React'},
            {key: 'PostgreSQL/MySQL'},
            {key: 'AWS'},
            {key: 'Svelte'},
            {key: 'Firebase'},
            {key: 'Docker'},
          ]}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 20}}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </Section>
  );
};

export default Technologies;
