import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/src/components/hello-wave';
import ParallaxScrollView from '@/src/components/parallax-scroll-view';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { AppHeader } from '@/src/features/header';

export default function HomeScreen() {
  const handleLogoPress = () => {
    console.log('Logo pressed');
  };

  const handleUserPress = () => {
    console.log('User pressed');
  };

  return (
    <ThemedView style={styles.container}>
      <AppHeader
        title="Home"
        userInitial="U"
        onLogoPress={handleLogoPress}
        onUserPress={handleUserPress}
      />
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/src/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Hello world!</ThemedText>
          <HelloWave />
        </ThemedView>



      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
