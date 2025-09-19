import colors from '@/constants/colors';
import React from 'react';
import {
  ActivityIndicator as Loader,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
}

const ActivityIndicator = ({ visible = false, style }: Props) => {
  if (!visible) return null;

  return (
    <View style={[styles.overlay, style]}>
      <View style={styles.animationContainer}>
        <Loader size='large' color={colors.primary} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    flex: 1,
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityIndicator;
