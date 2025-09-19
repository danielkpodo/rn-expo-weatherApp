import Page from '@/components/Page';
import useLocation from '@/hooks/useLocation';
import useWeatherForecast from '@/hooks/useWeatherForecast';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const { coordinates, loading: locationLoading } = useLocation();

  const { data, isPending, error } = useWeatherForecast({
    latitude: coordinates?.latitude ?? 5.362229,
    longitude: coordinates?.longitude ?? -0.629892,
  });

  if (isPending) {
    return <Text>Loading weather data...</Text>;
  }

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  console.log('weather data', data.normalizedForecast?.length);
  return (
    <Page>
      <View>
        <Text>Home kdkdk</Text>
      </View>
    </Page>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
