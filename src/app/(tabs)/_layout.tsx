import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/src/components/haptic-tab';
import { IconSymbol } from '@/src/components/ui/icon-symbol';
import { Colors } from '@/src/constants/theme';
import { useColorScheme } from '@/src/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tools',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="screwdriver.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Loan',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.left.arrow.right" color={color} />,
        }}
      />
    </Tabs>
  );
}
