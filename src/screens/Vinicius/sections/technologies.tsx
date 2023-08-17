import {FlatList, Text, View} from 'react-native';
import Section from '../components/section';

const Technologies = () => {
  return (
    <Section title="Tecnologias">
      <View>
        <Text>Que já estudei ou trabalhei{'\n'}</Text>
        <FlatList
          data={[
            {key: 'Python'},
            {key: 'JavaScript/Typescript'},
            {key: 'Java'},
            {key: 'Flutter'},
            {key: 'React'},
            {key: 'Angular'},
            {key: 'PostgreSQL'},
            {key: 'MySQL'},
            {key: 'AWS'},
            {key: 'Firebase'},
            {key: 'Docker'},
          ]}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: 10}}>
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
