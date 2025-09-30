import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeColor } from '@/src/hooks/use-theme-color';

interface UserAvatarProps {
  userInitial?: string;
  onPress?: () => void;
}

export function UserAvatar({ userInitial = 'U', onPress }: UserAvatarProps) {
  const tintColor = useThemeColor({}, 'tint');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.avatar, { backgroundColor: tintColor }]}>
        <Text style={styles.initial}>
          {userInitial.charAt(0).toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: 'purple',
    fontSize: 14,
    fontWeight: '600',
  },
});
