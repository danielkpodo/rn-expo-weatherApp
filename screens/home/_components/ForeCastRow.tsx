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
        <Text weight='600' style={styles.maxTemp}>
          {max.toFixed(1) || '--'}°
        </Text>
        <Text color={colors.secondary} style={styles.minTemp}>
          {min.toFixed(1) || '--'}°
        </Text>
      </View>
      <View style={styles.iconDescription}>
        <Image
          source={{ uri: weatherDescription?.image }}
          style={{ width: 32, height: 32, resizeMode: 'contain' }}
        />
        <Text
          color={colors.secondary}
          ellipsizeMode='tail'
          numberOfLines={1}
          style={{ flexShrink: 1, textAlign: 'right' }}
        >
          {weatherDescription?.description || '--'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    gap: 16,
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },

  temperatures: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  maxTemp: {
    minWidth: 46,
    textAlign: 'right',
    fontVariant: ['tabular-nums'],
  },
  minTemp: {
    minWidth: 46,
    textAlign: 'left',
    fontVariant: ['tabular-nums'],
  },
  iconDescription: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    flex: 2,
  },
});

export default ForeCastRow;
