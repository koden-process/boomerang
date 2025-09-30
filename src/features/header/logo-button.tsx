import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

interface LogoButtonProps {
  onPress?: () => void;
}

export function LogoButton({ onPress }: LogoButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={require('@/src/assets/images/react-logo.png')}
        style={styles.logo}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  logo: {
    width: 32,
    height: 32,
  },
});
