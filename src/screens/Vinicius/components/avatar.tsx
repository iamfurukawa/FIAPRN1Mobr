import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const Avatar = () => {
  return (
    <ImageBackground source={require('./background.jpg')}>
      <View style={styles.avatarContent}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/32659391?s=400&u=00ec470717ab76b769ad895e010a7fe6ef7b8cb1',
          }}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Olá sou o Vinícius</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  avatarContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingStart: 15,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default Avatar;
