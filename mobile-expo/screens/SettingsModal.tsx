import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { X, ShieldCheck, LogOut, ChevronRight } from 'lucide-react-native';

export default function SettingsModal({ navigation }: any) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-black/60 justify-end">
      {/* Background touch dismiss for backdrop tap */}
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View className="flex-1" />
      </TouchableWithoutFeedback>

      {/* Bottom Sheet Card refactored with Tailwind CSS (NativeWind) */}
      <View className="bg-white rounded-t-[32px] px-6 pt-5 pb-8 shadow-2xl border-t border-slate-100">
        {/* Drag handle */}
        <View className="w-12 h-1.5 bg-slate-200 rounded-full self-center mb-4" />

        {/* User Card */}
        <View className="flex-row items-center justify-between pb-4 border-b border-slate-100">
          <View className="flex-row items-center flex-1 mr-3">
            <View className="w-11 h-11 rounded-full bg-[#0d3f3c] items-center justify-center mr-3 shadow-inner">
              <Text className="text-sm font-bold text-[#4ee3a5]">AC</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-[#0c2e2c]">Alex Cruz</Text>
              <Text className="text-xs text-slate-400 mt-0.5">Tu espacio seguro en SSS Bank</Text>
            </View>
          </View>

          {/* Touch target increased to 44 x 44 pt for mobile accessibility (Apple HIG & WCAG) */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Cerrar modal"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            className="w-[44px] h-[44px] rounded-full bg-slate-100 active:bg-slate-200 items-center justify-center"
          >
            <X size={18} color="#475569" strokeWidth={2.2} />
          </TouchableOpacity>
        </View>

        <Text className="text-sm font-extrabold text-[#0c2e2c] mt-4 mb-3">Configuración</Text>

        {/* Security Info */}
        <View className="bg-[#e8fbf3] border border-[#a7f3d0] rounded-2xl p-4 flex-row items-start mb-4 shadow-sm">
          <ShieldCheck size={18} color="#10b981" strokeWidth={2.2} />
          <Text className="text-xs text-[#064e3b] ml-2.5 flex-1 leading-relaxed font-medium">
            Tu cuenta está protegida con cifrado de extremo a extremo.
          </Text>
        </View>

        {/* Logout Action */}
        <TouchableOpacity
          onPress={handleLogout}
          accessibilityRole="button"
          accessibilityLabel="Cerrar sesión"
          className="min-h-[48px] flex-row items-center justify-between py-3.5 px-3 rounded-xl bg-slate-50 active:bg-red-50"
        >
          <View className="flex-row items-center">
            <LogOut size={16} color="#ef4444" />
            <Text className="text-xs font-semibold text-red-600 ml-3">Cerrar sesión</Text>
          </View>
          <ChevronRight size={16} color="#94a3b8" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
