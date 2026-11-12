import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
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
      <View className="bg-white rounded-t-[32px] p-6 shadow-2xl">
        <View className="w-10 h-1 bg-slate-200 rounded-full self-center mb-4" />

        {/* User Card */}
        <View className="flex-row items-center justify-between pb-4 border-b border-slate-100">
          <View className="flex-row items-center">
            <View className="w-11 h-11 rounded-full bg-[#0d3f3c] items-center justify-center mr-3">
              <Text className="text-sm font-bold text-[#4ee3a5]">AC</Text>
            </View>
            <View>
              <Text className="text-sm font-bold text-[#0c2e2c]">Alex Cruz</Text>
              <Text className="text-xs text-slate-400">Tu espacio seguro en SSS Bank</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center"
          >
            <X size={16} color="#64748b" />
          </TouchableOpacity>
        </View>

        <Text className="text-sm font-bold text-[#0c2e2c] mt-4 mb-3">Configuración</Text>

        {/* Security Info */}
        <View className="bg-[#e8fbf3] border border-[#a7f3d0] rounded-2xl p-4 flex-row items-start mb-4">
          <ShieldCheck size={18} color="#10b981" />
          <Text className="text-xs text-[#064e3b] ml-2 flex-1 leading-relaxed">
            Tu cuenta está protegida con cifrado de extremo a extremo.
          </Text>
        </View>

        {/* Logout Action */}
        <TouchableOpacity
          onPress={handleLogout}
          className="flex-row items-center justify-between py-3 px-2 rounded-xl bg-slate-50"
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
