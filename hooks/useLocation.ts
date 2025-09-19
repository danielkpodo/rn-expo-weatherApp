import { Coordinates } from '@/services/getWeatherInfo';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import { Alert } from 'react-native';

const useLocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    try {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) {
        setLoading(false);
        return Alert.alert('You need to allow location access to use this app');
      }
      const position = await Location.getCurrentPositionAsync();
      if (position) {
        const {
          coords: { latitude, longitude },
        } = position;

        setCoordinates({ latitude, longitude });
      }
    } catch (error) {
      console.error('Error getting location:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    void getLocation();
  }, []);

  return { coordinates, loading };
};

export default useLocation;
