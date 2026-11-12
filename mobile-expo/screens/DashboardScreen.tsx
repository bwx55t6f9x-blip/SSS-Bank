import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { ArrowUpRight, ArrowDownRight, ArrowRight, Calendar } from 'lucide-react-native';

export default function DashboardScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#072424]">
      <StatusBar barStyle="light-content" backgroundColor="#072424" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <View className="px-6 pt-4 pb-3 flex-row items-center justify-between">
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

          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsModal')}
            className="w-8 h-8 rounded-full bg-[#0d3d3a] border border-[#23635e] items-center justify-center"
          >
            <Text className="text-xs font-bold text-[#5eead4]">AC</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting & Date */}
        <View className="px-6 pt-2 pb-4 flex-row items-start justify-between">
          <View>
            <Text className="text-[10px] font-bold text-[#7dd3c0] tracking-wider uppercase">
              MIÉRCOLES, 28 DE MAYO
            </Text>
            <View className="flex-row items-center mt-0.5">
              <Text className="text-xl font-extrabold text-white">Hola, Alex </Text>
              <Text className="text-[#4ee3a5] text-lg">✻</Text>
            </View>
          </View>

          <View className="flex-row items-center px-3 py-1 rounded-full bg-[#0b3332] border border-[#1b5853]">
            <Calendar size={12} color="#4ee3a5" />
            <Text className="text-[10px] text-slate-300 ml-1.5 font-medium">Mayo 2025</Text>
          </View>
        </View>

        {/* Hero Card */}
        <View className="px-6 pb-5">
          <View className="rounded-2xl bg-[#0e4441] border border-[#1e5c57] p-4 shadow-lg">
            <View className="flex-row items-center justify-between">
              <Text className="text-[10px] font-bold text-[#9de0d2] tracking-wider uppercase">
                SALDO TOTAL DISPONIBLE
              </Text>
              <View className="w-6 h-6 rounded-full bg-white/10 items-center justify-center">
                <ArrowUpRight size={14} color="#4ee3a5" />
              </View>
            </View>

            <Text className="text-3xl font-extrabold text-white mt-2">
              $12,480.50
            </Text>

            <View className="flex-row items-center self-start mt-3 px-3 py-1 rounded-full bg-[#4ee3a5]">
              <ArrowUpRight size={12} color="#04201e" strokeWidth={2.5} />
              <Text className="text-[10px] font-bold text-[#04201e] ml-1">
                +8.2% vs. el mes pasado
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Panorama Sheet */}
        <View className="flex-1 bg-[#f3f7f6] rounded-t-[28px] px-6 pt-6 pb-12">
          <Text className="text-[10px] font-bold text-[#0e5c54] tracking-wider uppercase">
            TU PANORAMA
          </Text>
          <View className="flex-row items-center justify-between mt-1 mb-3">
            <Text className="text-base font-bold text-[#0c2e2c]">Resumen mensual</Text>
            <Text className="text-[10px] text-slate-400 font-semibold">MAYO 2025</Text>
          </View>

          {/* Dual Metrics */}
          <View className="flex-row space-x-3 gap-3">
            <View className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <View className="w-8 h-8 rounded-lg bg-[#e8fbf3] items-center justify-center mb-2">
                <ArrowUpRight size={18} color="#10b981" strokeWidth={2.5} />
              </View>
              <Text className="text-xs text-slate-500 font-medium">Ingresos</Text>
              <Text className="text-base font-bold text-[#0c2e2c] mt-0.5">$5,450.00</Text>
              <View className="flex-row items-center mt-2">
                <Text className="text-[10px] text-slate-400 mr-1">Este mes</Text>
                <ArrowUpRight size={10} color="#10b981" />
              </View>
            </View>

            <View className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <View className="w-8 h-8 rounded-lg bg-[#fff1ec] items-center justify-center mb-2">
                <ArrowDownRight size={18} color="#f97316" strokeWidth={2.5} />
              </View>
              <Text className="text-xs text-slate-500 font-medium">Gastos</Text>
              <Text className="text-base font-bold text-[#0c2e2c] mt-0.5">$2,970.00</Text>
              <View className="flex-row items-center mt-2">
                <Text className="text-[10px] text-slate-400 mr-1">Este mes</Text>
                <ArrowDownRight size={10} color="#f97316" />
              </View>
            </View>
          </View>

          {/* Bajo Control */}
          <View className="mt-6">
            <Text className="text-[10px] font-bold text-[#0e5c54] tracking-wider uppercase">
              BAJO CONTROL
            </Text>
            <View className="flex-row items-center justify-between mt-1">
              <Text className="text-sm font-bold text-[#0c2e2c]">Tus presupuestos</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Metas')}
                className="flex-row items-center"
              >
                <Text className="text-xs text-[#0f766e] font-bold mr-1">Ver detalles</Text>
                <ArrowRight size={12} color="#0f766e" strokeWidth={2.5} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
