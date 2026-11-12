import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { ChevronLeft, Target } from 'lucide-react-native';

export default function GoalsScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#f3f7f6]">
      <StatusBar barStyle="dark-content" backgroundColor="#f3f7f6" />
      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between pb-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm"
          >
            <ChevronLeft size={20} color="#0c2e2c" />
          </TouchableOpacity>
          <Text className="text-[#0c2e2c] text-base font-bold">
            sssbank<Text className="text-[#4ee3a5]">.</Text>
          </Text>
        </View>

        {/* Title */}
        <View className="mt-2 mb-4">
          <Text className="text-[10px] font-bold text-[#0e5c54] tracking-wider uppercase">
            PLANEA LO QUE SIGUE
          </Text>
          <Text className="text-xl font-extrabold text-[#0c2e2c] mt-0.5">
            Haz espacio para tus metas.
          </Text>
          <Text className="text-xs text-slate-500 mt-0.5">
            Visualiza tu presente. Construye lo que viene.
          </Text>
        </View>

        {/* Budget Card */}
        <View className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-5">
          <View className="flex-row items-center justify-between border-b border-slate-100 pb-2 mb-3">
            <View>
              <Text className="text-[9px] font-bold text-slate-400 uppercase">MAYO 2025</Text>
              <Text className="text-sm font-bold text-[#0c2e2c]">Tu presupuesto</Text>
            </View>
            <Text className="text-[9px] font-bold text-slate-400 uppercase">DISTRIBUCIÓN</Text>
          </View>

          <View className="flex-row items-center justify-between py-2">
            {/* Center Total Summary */}
            <View className="w-28 h-28 rounded-full border-[10px] border-[#34d399] items-center justify-center">
              <Text className="text-[8px] font-bold text-slate-400 uppercase">TOTAL</Text>
              <Text className="text-base font-extrabold text-[#0c2e2c]">$5,450</Text>
              <Text className="text-[9px] text-slate-400">este mes</Text>
            </View>

            {/* Legend */}
            <View className="space-y-2.5">
              <View className="flex-row items-center justify-between w-36">
                <View className="flex-row items-center">
                  <View className="w-2.5 h-2.5 rounded-full bg-[#0f3836] mr-2" />
                  <Text className="text-xs text-slate-600 font-medium">Fijos</Text>
                </View>
                <Text className="text-xs font-bold text-[#0c2e2c]">37%</Text>
              </View>

              <View className="flex-row items-center justify-between w-36">
                <View className="flex-row items-center">
                  <View className="w-2.5 h-2.5 rounded-full bg-[#34d399] mr-2" />
                  <Text className="text-xs text-slate-600 font-medium">Variables</Text>
                </View>
                <Text className="text-xs font-bold text-[#0c2e2c]">24%</Text>
              </View>

              <View className="flex-row items-center justify-between w-36">
                <View className="flex-row items-center">
                  <View className="w-2.5 h-2.5 rounded-full bg-[#a7f3d0] mr-2" />
                  <Text className="text-xs text-slate-600 font-medium">Disponible</Text>
                </View>
                <Text className="text-xs font-bold text-[#0c2e2c]">39%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Metas Section */}
        <View className="mb-6">
          <Text className="text-[10px] font-bold text-[#0e5c54] tracking-wider uppercase">
            MIRANDO ADELANTE
          </Text>
          <View className="flex-row items-center justify-between mt-1 mb-3">
            <Text className="text-sm font-bold text-[#0c2e2c]">Mis metas</Text>
            <Text className="text-lg font-extrabold text-slate-300">01</Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-8 h-8 rounded-xl bg-[#e6f9f1] items-center justify-center mr-3">
                  <Target size={18} color="#10b981" />
                </View>
                <View>
                  <Text className="text-xs font-bold text-[#0c2e2c]">Fondo de emergencia</Text>
                  <Text className="text-[10px] text-slate-400 font-medium">$3,400 de $5,000</Text>
                </View>
              </View>
              <Text className="text-xs font-extrabold text-[#10b981]">68%</Text>
            </View>

            <View className="mt-3 w-full bg-[#e8f6f2] rounded-full h-2 overflow-hidden">
              <View className="bg-[#10b981] h-2 rounded-full w-[68%]" />
            </View>
          </View>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Inicio')}
          className="w-full bg-white border border-[#b2d5ce] py-3 rounded-xl items-center flex-row justify-center mb-10"
        >
          <ChevronLeft size={16} color="#0e5c54" />
          <Text className="text-xs font-bold text-[#0e5c54] ml-1">Regresar al inicio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
