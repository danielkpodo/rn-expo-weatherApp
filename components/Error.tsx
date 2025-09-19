import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Page from './Page';
import Text from './Text';

interface ErrorProps {
  message?: string | undefined;
  onRetry: () => void;
}

const Error = ({ message = undefined, onRetry }: ErrorProps) => {
  return (
    <Page>
      <View style={styles.container}>
        <Text> {message || 'Unknown error occurred'}</Text>
        <TouchableOpacity onPress={onRetry}>
          <Text style={styles.text} size='md'>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default Error;
