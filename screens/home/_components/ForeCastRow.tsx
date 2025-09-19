import Text from '@/components/Text';
import colors from '@/constants/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ForeCastRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.day}>
        <Text color={colors.secondary}>WED</Text>
      </View>
      <View style={styles.temperatures}>
        <Text weight='600'>23°</Text>
        <Text color={colors.secondary}>18°</Text>
      </View>
      <View style={styles.iconDescription}>
        <Image
          source={{ uri: 'http://openweathermap.org/img/wn/01d@2x.png' }}
          style={{ width: 40, height: 40 }}
        />
        <Text color={colors.secondary}>Rainy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatures: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  iconDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});

export default ForeCastRow;
