import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '@/src/hooks/use-theme-color';
import { LogoButton } from './logo-button';
import { HeaderTitle } from './header-title';
import { UserAvatar } from './user-avatar';

interface AppHeaderProps {
  title: string;
  userInitial?: string;
  onLogoPress?: () => void;
  onUserPress?: () => void;
}

export function AppHeader({ title, userInitial, onLogoPress, onUserPress }: AppHeaderProps) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View style={[styles.container, {
      backgroundColor,
      paddingTop: insets.top,
      height: 56 + insets.top
    }]}>
      <StatusBar
        barStyle="default"
        backgroundColor={backgroundColor}
        translucent={false}
      />

      <View style={styles.content}>
        <LogoButton onPress={onLogoPress} />
        <HeaderTitle title={title} />
        <UserAvatar userInitial={userInitial} onPress={onUserPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 56,
  },
});
