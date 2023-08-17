import {Image, StyleSheet, Text, View} from 'react-native';

export interface AvatarParams {
  name: string;
  photo: any;
}

const Avatar = ({name, photo}: AvatarParams) => {
  return (
    <View style={styles.avatarContent}>
      <Image source={photo} style={styles.avatarImage} />
      <Text style={styles.avatarText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContent: {
    flex: 1,
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
