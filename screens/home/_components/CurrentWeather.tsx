import Text from '@/components/Text';
import colors from '@/constants/colors';
import { weatherCodeMap } from '@/utils';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const CurrentWeather = () => {
  const currentWeather = weatherCodeMap[2];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: currentWeather.image }} />
      <Text weight='800' style={styles.temperature}>
        28°
      </Text>
      <Text size='lg' weight='500' color={colors.secondary}>
        {currentWeather.description}
      </Text>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: -30,
    width: 150,
    height: 150,
  },
  temperature: {
    fontSize: 52,
    lineHeight: 64,
  },
});
