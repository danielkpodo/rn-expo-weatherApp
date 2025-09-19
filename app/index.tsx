import Page from '@/components/Page';
import Text from '@/components/Text';
import colors from '@/constants/colors';
import useLocation from '@/hooks/useLocation';
import useWeatherForecast from '@/hooks/useWeatherForecast';
import CurrentWeather from '@/screens/home/_components/CurrentWeather';
import ForeCastRow from '@/screens/home/_components/ForeCastRow';
import PageHeader from '@/screens/home/_components/PageHeader';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

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

  return (
    <Page>
      <View style={styles.container}>
        <View style={styles.PageHeader}>
          <PageHeader />
        </View>
        <View style={styles.CurrentWeather}>
          <CurrentWeather />
        </View>
        <View style={styles.forecastContainer}>
          <Text size='md' weight='600'>
            This Week
          </Text>
          <ForeCastRow />
          <FlatList
            data={data?.normalizedForecast}
            renderItem={({ item }) => <ForeCastRow {...item} key={item.code} />}
          />
        </View>
      </View>
    </Page>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PageHeader: {
    flex: 1,
  },
  CurrentWeather: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  forecastContainer: {
    flex: 4,
    backgroundColor: colors.forecastBackground,
    padding: 16,
    borderRadius: 12,
  },
  forecastTitle: {
    marginVertical: 0,
  },
});
