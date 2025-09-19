import Text from '@/components/Text';
import colors from '@/constants/colors';
import { TextAlignEnd } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text size='xl' weight='600' style={styles.locationHeader}>
          Calicut, Kerala
        </Text>
        <Text size='md' color={colors.secondary}>
          Sunday, 1 AM
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
  },
  icon: {
    marginTop: 5,
  },
});
