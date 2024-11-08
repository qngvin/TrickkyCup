import {
  Animated,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Result from '../component/modal/Result';

const PlayScreen: React.FC = () => {
  const [ballPosition, setBallPosition] = useState<number | null>(null);
  const [selectedCup, setSelectedCup] = useState<number | null>(null);
  const [modalResult, setModalResult] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  const animatedValues = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const animatedTranslateX = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 3);
    setBallPosition(randomIndex);
  }, []);

  const handleCupPress = (index: number) => {
    setSelectedCup(index);

    if (index === ballPosition) {
      setResult(true);
      setModalResult(true);
    } else {
      setResult(false);
      setModalResult(true);
    }

    Animated.timing(animatedValues[index], {
      toValue: -200,
      duration: 600,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();

    const moveX = index === 0 ? -50 : index === 2 ? 50 : 0;
    Animated.timing(animatedTranslateX[index], {
      toValue: moveX, // Move left or right
      duration: 600,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    const newIndexes = [0, 1, 2].sort(() => Math.random() - 0.5);
    setBallPosition(newIndexes[0]);
    setSelectedCup(null);

    animatedValues.forEach((value, index) => {
      Animated.timing(value, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start();
    });

    animatedTranslateX.forEach((value, index) => {
      Animated.timing(value, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start();
    });

    setModalResult(false);
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/background.png')}
        resizeMode="cover">
        <View style={styles.content}>
          {[0, 1, 2].map(index => (
            <View key={index} style={styles.cupContainer}>
              {ballPosition === index && (
                <Image
                  source={require('../assets/images/ball.png')}
                  style={styles.ball}
                  resizeMode="cover"
                />
              )}

              <TouchableWithoutFeedback onPress={() => handleCupPress(index)}>
                <Animated.View
                  style={[
                    styles.cup,
                    {
                      transform: [
                        {translateY: animatedValues[index]},
                        {translateX: animatedTranslateX[index]},
                      ],
                    },
                  ]}>
                  <Image
                    source={require('../assets/images/plastic-cup.png')}
                    resizeMode="cover"
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ImageBackground>
      <Modal transparent={true} visible={modalResult}>
        <Result setModalResult={handleCloseModal} urlResult={result} />
      </Modal>
    </>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20%',
  },
  cupContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  ball: {
    position: 'absolute',
    bottom: 20,
  },
  cup: {
    position: 'relative',
  },
});
