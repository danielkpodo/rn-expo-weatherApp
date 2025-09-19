import useLoadedFonts from '@/hooks/useLoadedFonts';
import { asyncStoragePersister, queryClient } from '@/utils';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { error, loaded } = useLoadedFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <StatusBar style='dark' />
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
}
