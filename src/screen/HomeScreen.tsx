import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const handleNavigatePlay = () => {
    navigation.navigate('Play');
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/home-background.png')}
      resizeMode="cover">
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={handleNavigatePlay}>
          <Image
            source={require('../assets/images/tap-to-play.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
});
