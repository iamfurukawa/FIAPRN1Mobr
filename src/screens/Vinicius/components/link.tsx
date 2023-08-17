import {Alert, Button, Linking} from 'react-native';

interface LinkProps {
  title: string;
  url: string;
  isAlert?: boolean;
}

const Link = ({title, url, isAlert}: LinkProps) => {
  return (
    <Button
      title={title}
      onPress={() => {
        if (isAlert) {
          Alert.alert(title, url);
          return;
        }

        Linking.canOpenURL(url).then(isSupported => {
          if (isSupported) {
            Linking.openURL(url);
          } else {
            Alert.alert('Alert', 'Browser is not installed');
          }
        });
      }}
    />
  );
};

export default Link;
