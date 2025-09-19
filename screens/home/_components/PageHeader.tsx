import Text from '@/components/Text';
import colors from '@/constants/colors';
import { TextAlignEnd } from 'lucide-react-native';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface PageHeaderProps {
  location: string;
  isLoading: boolean;
}

const PageHeader = ({ location, isLoading }: PageHeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text size='lg' weight='600' style={styles.locationHeader}>
          {isLoading
            ? 'Detecting location...'
            : location.length > 20
            ? location.substring(0, 21) + '...'
            : location || 'Unknown Location'}
        </Text>
        <Text size='md' color={colors.secondary}>
          {moment().format('dddd, h A')}
        </Text>
      </View>
      <View style={styles.icon}>
        <TextAlignEnd color={colors.secondary} />
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  locationHeader: {
    color: '#111827',
    marginRight: 10,
    flexWrap: 'wrap',
  },
  icon: {
    marginTop: 5,
  },
});
