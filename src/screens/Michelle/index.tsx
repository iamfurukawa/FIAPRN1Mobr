import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

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

const Michelle = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <ImageBackground
          source={require('./images/background.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./images/mimi.png')}
              style={styles.sectionHeaderImage}
            />
          </View>
        </ImageBackground>
        <View>
          <Section title="Quem sou Eu!">
            Olá, meu nome é <Text style={styles.highlight}>Michelle</Text> (mas
            você já sabe disso!) e esse é meu primeiro projeto em React Native!
          </Section>
          <View
            style={{
              marginTop: 10,
            }}>
            <Image
              style={{width: '100%', height: 100}}
              source={require('./images/android.jpeg')}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text
              style={styles.sectionDescription}>
              No projeto de React eu falei bastante sobre mim, né? Agora vou ter
              que usar toda a minha criatividade (que não é muita) para fazer
              esse projeto.
            </Text>
          </View>

          <Section title="Vamos falar sobre musica?">
            Como vou em um show amanhã (feriado do dia 08/06), vou apresentar os
            artistas/bandas que eu mais gosto, mas oh! não vale me julgar, ok?!
            {'\n'}Vamos começar pelos nacionais:
            {'\n'}Minha banda favorita BR e o NxZero (nunca foi só uma fase!),
            imagina a minha felicidade quando eles anunciaram a volta com a tour
            Cedo ou Tarde? (pois é!)
            {'\n'}Agora os internacionais (que são vários): Maroon5, Justin
            Bieber, Post Malone, Bruno Mars, Imagine Dragons, Beyonce, Shawn
            Mendes...
            {'\n'}Se eu for colocar todos, preciso de umas 10 páginas.
          </Section>

          <Section title="Shows que eu ja fui">
            Como eu ja disse no projeto de React, eu gosto muito de shows, então
            pode imaginar que eu já fui em vários! Vou listar os que eu mais
            curti:
            {'\n'}Beyonce, Imagine Dragons (prometeu tudo e entregou tudo e
            mais), Bruno Mars, Maneva, NxZero, Maroon5, Justin Bieber, Post
            Malone, Alok, Jason Derulo, Demi Lovato... vixi, várioooos!
          </Section>
          <Section title="Shows que eu quero ir">
            Preciso viver até ver todos esses shows:
            {'\n'}Ed Sheraan, Shawn Mendes, Destiny's Child, Chris Brown, Justin
            Timberlake, Ne-yo, Strike, Goo Goo Dolls
          </Section>
          <Section title="Isso e tudo, pessoal">
            Quer me fazer feliz? Me chama para um show, mas um show bom!
            {'\n'}E é sobre isso, não tenho mais idéia do que escrever! Espero
            que tenham aproveitado, até o próximo projeto.
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  sectionHeaderImage: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignContent: 'center',
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
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export {Michelle};
