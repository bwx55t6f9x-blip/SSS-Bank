import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Fingerprint, Shield, Eye, EyeOff, ArrowRight, ChevronRight } from 'lucide-react-native';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('alex.cruz@sssbank.io');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#062121]">
      <StatusBar barStyle="light-content" backgroundColor="#062121" />
      <View className="flex-1 px-6 py-4 justify-between">
        {/* Header */}
        <View className="flex-row items-center justify-between pt-2">
          <View className="flex-row items-center">
            <View className="flex-row items-end h-5 w-4 mr-2">
              <View className="w-1 h-3 bg-[#4ee3a5] rounded-full mr-0.5" />
              <View className="w-1 h-5 bg-[#4ee3a5] rounded-full mr-0.5" />
              <View className="w-1 h-4 bg-[#4ee3a5] rounded-full" />
            </View>
            <Text className="text-white text-base font-bold">
              sssbank<Text className="text-[#4ee3a5]">.</Text>
            </Text>
          </View>

          <View className="flex-row items-center px-3 py-1 rounded-full bg-[#0a3533] border border-[#1b5853]">
            <View className="w-1.5 h-1.5 rounded-full bg-[#34d399] mr-1.5" />
            <Text className="text-[10px] text-[#5eead4] font-semibold">ENTORNO SEGURO</Text>
          </View>
        </View>

        {/* Biometric Ring Graphic */}
        <View className="items-center justify-center my-6">
          <View className="w-40 h-40 rounded-full border border-[#1b5853] items-center justify-center">
            <View className="w-32 h-32 rounded-full border border-[#34d399]/40 items-center justify-center">
              <View className="w-24 h-24 rounded-full bg-[#0e4440] border border-[#34d399] items-center justify-center shadow-lg">
                <Fingerprint size={48} color="#4ee3a5" strokeWidth={1.5} />
              </View>
            </View>
          </View>

          <View className="flex-row items-center mt-4 px-3 py-1 rounded-full bg-[#0a3331] border border-[#1d5b56]">
            <Shield size={12} color="#34d399" />
            <Text className="text-[10px] text-[#99f6e4] font-semibold ml-1.5">
              TU ACCESO, PROTEGIDO
            </Text>
          </View>
        </View>

        {/* Welcome Text */}
        <View className="mb-2">
          <Text className="text-[10px] font-bold text-[#5eead4] tracking-wider uppercase">
            BIENVENIDO DE NUEVO
          </Text>
          <Text className="text-2xl font-bold text-white tracking-tight mt-1">
            Tu mundo financiero,{"\n"}a un toque.
          </Text>
          <Text className="text-xs text-slate-300 mt-1">
            Ingresa de forma segura a tu espacio.
          </Text>
        </View>

        {/* Inputs */}
        <View className="space-y-3">
          <View>
            <Text className="text-xs text-slate-300 mb-1 font-medium">Usuario</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Tu usuario o correo"
              placeholderTextColor="#64748b"
              className="w-full bg-[#0a2f2d] border border-[#1b5853] text-white text-xs rounded-xl px-4 py-3"
            />
          </View>

          <View>
            <Text className="text-xs text-slate-300 mb-1 font-medium">Contraseña</Text>
            <View className="relative justify-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#64748b"
                className="w-full bg-[#0a2f2d] border border-[#1b5853] text-white text-xs rounded-xl px-4 py-3 pr-10"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-3"
              >
                {showPassword ? <EyeOff size={16} color="#94a3b8" /> : <Eye size={16} color="#94a3b8" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Primary Submit */}
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.8}
            className="w-full bg-[#4ee3a5] rounded-xl py-3.5 flex-row items-center justify-center mt-2 shadow-md"
          >
            <Text className="text-[#03201e] font-bold text-xs mr-2">Iniciar sesión</Text>
            <ArrowRight size={16} color="#03201e" strokeWidth={2.5} />
          </TouchableOpacity>

          {/* Biometric Button */}
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.8}
            className="w-full bg-[#092c2b] border border-[#1b5853] rounded-xl py-3 px-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <Fingerprint size={18} color="#4ee3a5" />
              <Text className="text-slate-100 text-xs font-semibold ml-3">
                Acceder con huella
              </Text>
            </View>
            <ChevronRight size={16} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
