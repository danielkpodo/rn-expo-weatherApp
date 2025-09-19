import Text from '@/components/Text';
import colors from '@/constants/colors';
import { weatherCodeMap } from '@/utils';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface CurrentWeatherProps {
  min: number | undefined;
  max: number | undefined;
  code: number;
}

const CurrentWeather = ({ code, max, min }: CurrentWeatherProps) => {
  const currentWeather = weatherCodeMap?.[code];
  const averageTemp = max && min ? ((max + min) / 2).toFixed(1) : '--';
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: currentWeather?.image }} />
      <Text weight='800' style={styles.temperature}>
        {averageTemp}°
      </Text>
      <Text size='lg' weight='500' color={colors.secondary}>
        {currentWeather?.description}
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
