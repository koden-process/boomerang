import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/src/hooks/use-theme-color';

interface HeaderTitleProps {
  title: string;
}

export function HeaderTitle({ title }: HeaderTitleProps) {
  const textColor = useThemeColor({}, 'text');

  return (
    <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
});
