import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { ChevronLeft, ArrowUpRight, ArrowDownRight, TrendingUp, ShoppingBag, Home, Zap } from 'lucide-react-native';

export default function HistoryScreen({ navigation }: any) {
  const [filter, setFilter] = useState<'todas' | 'ingresos' | 'gastos'>('todas');

  const transactions = [
    { id: '1', date: '28 MAY', title: 'Nómina', sub: 'Empresa Tech', type: 'ingreso', amount: '+$4,800.00' },
    { id: '2', date: '26 MAY', title: 'Supermercado', sub: 'Compra semanal', type: 'gasto', amount: '-$186.00' },
    { id: '3', date: '24 MAY', title: 'Renta', sub: 'Departamento mensual', type: 'gasto', amount: '-$1,200.00' },
    { id: '4', date: '20 MAY', title: 'Servicios', sub: 'Luz, agua e internet', type: 'gasto', amount: '-$145.00' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f3f7f6]">
      <StatusBar barStyle="dark-content" backgroundColor="#f3f7f6" />
      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {/* Top Header */}
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
            TU ACTIVIDAD
          </Text>
          <Text className="text-xl font-extrabold text-[#0c2e2c] mt-0.5">
            Historial de movimientos.
          </Text>
          <Text className="text-xs text-slate-500 mt-0.5">
            Una vista clara de cada movimiento de tu dinero.
          </Text>
        </View>

        {/* Flujo Card */}
        <View className="bg-[#0b3332] rounded-2xl p-4 flex-row items-center justify-between mb-5 shadow-sm">
          <View>
            <Text className="text-[10px] font-bold text-[#7dd3c0] tracking-wider uppercase">
              FLUJO DEL MES
            </Text>
            <Text className="text-2xl font-extrabold text-[#4ee3a5] mt-1">
              +$2,480.00
            </Text>
          </View>
          <View className="w-9 h-9 rounded-xl bg-[#124543] items-center justify-center">
            <TrendingUp size={18} color="#4ee3a5" />
          </View>
        </View>

        {/* Filter Pills */}
        <View className="flex-row items-center justify-between mb-3">
          <View>
            <Text className="text-sm font-bold text-[#0c2e2c]">Transacciones</Text>
            <Text className="text-[10px] text-slate-400">6 movimientos · Mayo 2025</Text>
          </View>
          <Text className="text-lg font-extrabold text-slate-300">06</Text>
        </View>

        <View className="flex-row space-x-2 gap-2 mb-4">
          {(['todas', 'ingresos', 'gastos'] as const).map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-full ${
                filter === tab ? 'bg-[#0c2e2c]' : 'bg-white border border-slate-200'
              }`}
            >
              <Text
                className={`text-xs font-semibold capitalize ${
                  filter === tab ? 'text-white' : 'text-slate-600'
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Transactions List */}
        <View className="bg-white rounded-2xl border border-slate-100 p-2 shadow-sm divide-y divide-slate-100">
          {transactions.map((tx) => (
            <View key={tx.id} className="flex-row items-center justify-between py-3 px-2">
              <View className="flex-row items-center">
                <View className="w-8 h-8 rounded-xl bg-[#e6f9f1] items-center justify-center mr-3">
                  {tx.type === 'ingreso' ? (
                    <ArrowUpRight size={16} color="#10b981" />
                  ) : (
                    <ShoppingBag size={16} color="#f97316" />
                  )}
                </View>
                <View>
                  <Text className="text-xs font-bold text-[#0c2e2c]">{tx.title}</Text>
                  <Text className="text-[10px] text-slate-400">{tx.sub}</Text>
                </View>
              </View>
              <Text
                className={`text-xs font-extrabold ${
                  tx.type === 'ingreso' ? 'text-[#10b981]' : 'text-[#0c2e2c]'
                }`}
              >
                {tx.amount}
              </Text>
            </View>
          ))}
        </View>

        {/* Bottom Back Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Inicio')}
          className="mt-6 mb-10 w-full bg-white border border-[#b2d5ce] py-3 rounded-xl items-center flex-row justify-center"
        >
          <ChevronLeft size={16} color="#0e5c54" />
          <Text className="text-xs font-bold text-[#0e5c54] ml-1">Regresar al inicio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
