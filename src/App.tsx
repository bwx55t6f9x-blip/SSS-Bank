/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, UserProfile, BankAccount, TransactionItem, GoalItem, BudgetBreakdown } from './types.ts';
import { initialUser, initialAccount, initialTransactions, initialBudget, initialGoals } from './data/mockData.ts';
import { LoginScreen } from './components/Screens/LoginScreen.tsx';
import { DashboardScreen } from './components/Screens/DashboardScreen.tsx';
import { HistoryScreen } from './components/Screens/HistoryScreen.tsx';
import { GoalsScreen } from './components/Screens/GoalsScreen.tsx';
import { SettingsModal } from './components/Screens/SettingsModal.tsx';
import { BottomNavBar } from './components/BottomNavBar.tsx';
import { MobileFrame } from './components/MobileFrame.tsx';
import { ShowcasePanel } from './components/ShowcasePanel.tsx';
import { ExpoDocsModal } from './components/ExpoDocsModal.tsx';
import { Smartphone, Monitor, Info, Layers } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('login');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'showcase' | 'mobile-only'>('showcase');
  const [isExpoDocsOpen, setIsExpoDocsOpen] = useState(false);

  // App State
  const [user, setUser] = useState<UserProfile>(initialUser);
  const [account, setAccount] = useState<BankAccount>(initialAccount);
  const [transactions, setTransactions] = useState<TransactionItem[]>(initialTransactions);
  const [budget, setBudget] = useState<BudgetBreakdown>(initialBudget);
  const [goals, setGoals] = useState<GoalItem[]>(initialGoals);

  // Navigation handlers
  const handleLoginSuccess = () => {
    setUser((prev) => ({ ...prev, isLoggedIn: true }));
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsSettingsOpen(false);
    setUser((prev) => ({ ...prev, isLoggedIn: false }));
    setCurrentScreen('login');
  };

  const phoneContainerRef = React.useRef<HTMLDivElement>(null);

  const handleSelectScreen = (screen: ScreenId, openSettings: boolean = false) => {
    setCurrentScreen(screen);
    setIsSettingsOpen(openSettings);
    // On smaller screens, scroll to phone container smoothly
    if (window.innerWidth < 1024 && phoneContainerRef.current) {
      phoneContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getScreenIndicator = () => {
    if (isSettingsOpen) return '05 — 05';
    switch (currentScreen) {
      case 'login':
        return '01 — 04';
      case 'dashboard':
        return '02 — 04';
      case 'history':
        return '03 — 04';
      case 'goals':
        return '04 — 04';
    }
  };

  // Render screen inside mobile phone frame
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return (
          <DashboardScreen
            user={user}
            account={account}
            onNavigateToGoals={() => setCurrentScreen('goals')}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        );
      case 'history':
        return (
          <HistoryScreen
            transactions={transactions}
            netFlow={account.monthlyNetFlow}
            onBackToHome={() => setCurrentScreen('dashboard')}
          />
        );
      case 'goals':
        return (
          <GoalsScreen
            budget={budget}
            goals={goals}
            onBackToHome={() => setCurrentScreen('dashboard')}
          />
        );
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#031516] text-[#e2f1ee] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#4ee3a5] selection:text-[#04201e]">
      {/* Top Floating Control Bar */}
      <header className="border-b border-[#0f3835] bg-[#04191a]/90 backdrop-blur-md sticky top-0 z-40 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#4ee3a5] tracking-tight">SSS BANK</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Open Banking & Finanzas Personales
          </span>
        </div>

        {/* View mode & Expo quick links */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#072424] border border-[#144440] rounded-xl p-0.5">
            <button
              onClick={() => setViewMode('showcase')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Monitor size={14} />
              <span className="hidden sm:inline">Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('mobile-only')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'mobile-only'
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Smartphone size={14} />
              <span className="hidden sm:inline">Móvil</span>
            </button>
          </div>

          <button
            onClick={() => setIsExpoDocsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b3836] hover:bg-[#0f4b48] border border-[#1b5853] text-[#4ee3a5] font-semibold text-xs transition-all cursor-pointer shadow-sm"
          >
            <Smartphone size={14} />
            <span>Expo Go (SDK 58) & README</span>
          </button>
        </div>
      </header>

      {/* Main Container with Grid Background matching mockups */}
      <main className="flex-1 relative flex items-center justify-center overflow-x-hidden">
        {/* Subtle grid pattern background from the original designs */}
        <div className="absolute inset-0 bg-[radial-gradient(#19524e_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#021112] via-[#041a1b] to-[#031516] pointer-events-none" />

        {/* Decorative faint glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4ee3a5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center py-6 px-4 sm:px-6">
          {/* Left Branded Showcase Panel (Visible in Showcase mode) */}
          {viewMode === 'showcase' && (
            <ShowcasePanel
              currentScreen={currentScreen}
              isSettingsOpen={isSettingsOpen}
              onSelectScreen={handleSelectScreen}
              onOpenExpoDocs={() => setIsExpoDocsOpen(true)}
            />
          )}

          {/* Right Mobile Phone Device */}
          <div ref={phoneContainerRef} className="flex-1 flex flex-col items-center justify-center p-2 sm:p-6 w-full max-w-md">
            {/* Top header indicator matching mockups: "EXPLORA LA EXPERIENCIA | 01 — 04" */}
            <div className="w-[360px] sm:w-[380px] flex items-center justify-between text-[11px] font-bold tracking-widest text-[#7dd3c0] uppercase px-3 pb-3">
              <span>EXPLORA LA EXPERIENCIA</span>
              <span>{getScreenIndicator()}</span>
            </div>

            {/* Simulated Mobile Device with Internal Screens */}
            <MobileFrame
              activeScreenId={currentScreen}
              bottomNav={
                currentScreen !== 'login' ? (
                  <BottomNavBar
                    currentScreen={currentScreen}
                    onNavigate={(screen) => {
                      setIsSettingsOpen(false);
                      setCurrentScreen(screen);
                    }}
                    onOpenSettings={() => setIsSettingsOpen(true)}
                  />
                ) : undefined
              }
              modal={
                <SettingsModal
                  isOpen={isSettingsOpen}
                  user={user}
                  onClose={() => setIsSettingsOpen(false)}
                  onLogout={handleLogout}
                />
              }
            >
              {/* Screen Content */}
              {renderCurrentScreen()}
            </MobileFrame>

            {/* Bottom subtitle matching mockups: "SEGURIDAD Y CLARIDAD, EN CADA TOQUE." */}
            <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-4 text-center">
              SEGURIDAD Y CLARIDAD, EN CADA TOQUE.
            </div>
          </div>
        </div>
      </main>

      {/* Expo Go & Architecture Modal */}
      <ExpoDocsModal
        isOpen={isExpoDocsOpen}
        onClose={() => setIsExpoDocsOpen(false)}
      />
    </div>
  );
}
