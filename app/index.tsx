import ActivityIndicator from '@/components/ActivityIndicator';
import Error from '@/components/Error';
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
  const { coordinates, loading: locationLoading, address } = useLocation();

  const { data, isPending, error, refetch, isRefetching } = useWeatherForecast({
    latitude: coordinates?.latitude ?? 5.362229,
    longitude: coordinates?.longitude ?? -0.629892,
  });

  const today = data?.normalizedForecast?.[0];

  if (error) {
    return <Error message={error.message} onRetry={() => refetch()} />;
  }

  return (
    <>
      <ActivityIndicator visible={isPending} />
      <Page>
        <View style={styles.container}>
          <View style={styles.PageHeader}>
            <PageHeader
              location={`${address?.city}, ${address?.country}`}
              isLoading={locationLoading}
              onRefresh={() => refetch()}
            />
          </View>
          <View style={styles.CurrentWeather}>
            <CurrentWeather
              min={today?.min}
              max={today?.max}
              code={today?.code as number}
            />
          </View>
          <View style={styles.forecastContainer}>
            <Text size='md' weight='600' style={styles.forecastTitle}>
              This Week
            </Text>
            <FlatList
              data={data?.normalizedForecast}
              renderItem={({ item }) => <ForeCastRow {...item} />}
              showsVerticalScrollIndicator={false}
              refreshing={isRefetching}
              onRefresh={() => refetch()}
              keyExtractor={(item) => item.date.toString()}
            />
          </View>
        </View>
      </Page>
    </>
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
    marginVertical: 16,
  },
  forecastContainer: {
    flex: 5,
    backgroundColor: colors.forecastBackground,
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  forecastTitle: {
    marginVertical: 12,
  },
});
