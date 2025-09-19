import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface PageProps extends SafeAreaViewProps {
  children: React.ReactNode;
  rootStyle?: SafeAreaViewProps['style'];
}

const Page = ({ children, rootStyle }: PageProps) => {
  return (
    <SafeAreaView
      style={[styles.root, rootStyle]}
      edges={['top', 'left', 'right']}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Page;
