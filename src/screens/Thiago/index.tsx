import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Link from '../Vinicius/components/link';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleDescription}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

const Thiago = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./profile.jpeg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
            }}
          />
        </View>
        <View>
          <Section title="Um pouco sobre mim">
          Sou o Thiago, tenho 27 anos, sou de Manaus-AM (bem longe dos outros estados). Sou formado em Ciência da Computação, gosto de ter um bom passeio gastronômico e também fazer trilha, ir a sítios (pois tudo é uma questão de equilíbrio!), também gosto de realizar qualquer atividade com uma boa música (Rock, sertanejo, eletrônica, POP etc...), reunir com os amigos para jogar uma conversa fora e nas horas vagas jogar um game pois ninguém é de ferro! XD
          </Section>

          <Section title="Tecnologias que eu manjo">
          Java, Kotlin, Python, C/C++, C#, Powershell, Shell, Android Embedded, Firebase, AWS, Git, SVN.
          </Section>
         
          <Section title="Para mais informações">
            <Link title="LinkedIn" url="https://www.linkedin.com/in/thiago-malcher-94267916b/" />
            <Link title="Github" url="https://github.com/ThiagoMalcher" />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 16,
  },
  titleDescription: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {Thiago};