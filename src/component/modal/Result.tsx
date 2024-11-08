import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface Props {
  urlResult: boolean;
  setModalResult: () => void;
}
const Result: React.FC<Props> = ({urlResult, setModalResult}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.content}>
        <Image
          source={
            urlResult
              ? require('../../assets/images/you-win.png')
              : require('../../assets/images/you-lose.png')
          }
          resizeMode="cover"
        />
        <TouchableOpacity onPress={setModalResult}>
          <Image
            source={require('../../assets/images/tap-to-restart.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 20,
  },
});
