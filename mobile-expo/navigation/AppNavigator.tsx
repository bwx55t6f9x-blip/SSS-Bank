import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, History, Target, Settings } from 'lucide-react-native';

import LoginScreen from '../screens/LoginScreen.tsx';
import DashboardScreen from '../screens/DashboardScreen.tsx';
import HistoryScreen from '../screens/HistoryScreen.tsx';
import GoalsScreen from '../screens/GoalsScreen.tsx';
import SettingsModal from '../screens/SettingsModal.tsx';
import { RootStackParamList, MainTabParamList } from '../types/navigation.ts';

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#0e5c54',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size || 20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Historial"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <History size={size || 20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Metas"
        component={GoalsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Target size={size || 20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={DashboardScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('SettingsModal');
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => <Settings size={size || 20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen
        name="SettingsModal"
        component={SettingsModal}
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
}
