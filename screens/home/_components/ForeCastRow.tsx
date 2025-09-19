import Text from '@/components/Text';
import colors from '@/constants/colors';
import { weatherCodeMap } from '@/utils';
import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ForeCastRowProps {
  date: string;
  max: number;
  min: number;
  code: number;
}

const ForeCastRow = ({ date, max, min, code }: ForeCastRowProps) => {
  const weatherDescription = weatherCodeMap[code];
  return (
    <View style={styles.container}>
      <View style={styles.day}>
        <Text color={colors.secondary} style={{ textTransform: 'capitalize' }}>
          {moment(date).format('ddd') || '--'}
        </Text>
      </View>
      <View style={styles.temperatures}>
        <Text weight='600'>{max.toFixed(1) || '--'}°</Text>
        <Text color={colors.secondary}>{min.toFixed(1) || '--'}°</Text>
      </View>
      <View style={styles.iconDescription}>
        <Image
          source={{ uri: weatherDescription?.image }}
          style={{ width: 40, height: 40 }}
        />
        <Text color={colors.secondary}>
          {weatherDescription?.description || '--'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatures: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  iconDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});

export default ForeCastRow;
