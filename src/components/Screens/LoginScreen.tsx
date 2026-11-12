import React, { useState } from 'react';
import { Fingerprint, Shield, Eye, EyeOff, ArrowRight, ChevronRight, Lock } from 'lucide-react';
import { SssLogo } from '../SssLogo.tsx';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('alex.cruz@sssbank.io');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onLoginSuccess();
    }, 500);
  };

  const handleBiometricAuth = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onLoginSuccess();
    }, 450);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#062121] text-white p-5 overflow-y-auto no-scrollbar relative min-h-full">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-2">
        <SssLogo size="md" />
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a3533] border border-[#1b5853] text-[10px] font-medium text-[#5eead4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
          <span>ENTORNO SEGURO</span>
        </div>
      </div>

      {/* Central Biometric Ring Art */}
      <div className="my-auto py-4 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Outer concentric decorative glow rings */}
          <div className="w-40 h-40 rounded-full border border-[#1b5853]/40 flex items-center justify-center animate-pulse">
            <div className="w-32 h-32 rounded-full border border-[#34d399]/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#0e4440] to-[#082b29] border border-[#34d399]/60 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.25)]">
                <Fingerprint
                  size={46}
                  className={`text-[#4ee3a5] transition-transform duration-300 ${
                    isAuthenticating ? 'scale-110 animate-pulse text-white' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>

          {/* Floating orbital accents */}
          <span className="absolute top-2 right-4 w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" />
          <span className="absolute bottom-4 left-3 w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/70" />
        </div>

        {/* Access protected badge */}
        <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a3331] border border-[#1d5b56] text-[10px] text-[#99f6e4] font-medium">
          <Shield size={12} className="text-[#34d399]" />
          <span>TU ACCESO, PROTEGIDO</span>
        </div>
      </div>

      {/* Welcome Title */}
      <div className="mb-4">
        <span className="text-[10px] font-bold tracking-widest text-[#5eead4] uppercase">
          BIENVENIDO DE NUEVO
        </span>
        <h1 className="text-xl font-extrabold text-white tracking-tight mt-0.5 leading-snug">
          Tu mundo financiero, <br />
          a un toque.
        </h1>
        <p className="text-xs text-slate-300 mt-1">
          Ingresa de forma segura a tu espacio.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-3.5 pb-2">
        <div>
          <label className="block text-[11px] font-medium text-slate-300 mb-1">
            Usuario
          </label>
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario o correo"
              className="w-full bg-[#0a2f2d] border border-[#1b5853] text-white text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#4ee3a5] focus:ring-1 focus:ring-[#4ee3a5] transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-300 mb-1">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full bg-[#0a2f2d] border border-[#1b5853] text-white text-xs rounded-xl px-3.5 py-3 pr-10 focus:outline-none focus:border-[#4ee3a5] focus:ring-1 focus:ring-[#4ee3a5] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Primary Login Button */}
        <button
          type="submit"
          disabled={isAuthenticating}
          className="w-full bg-[#4ee3a5] hover:bg-[#3dd294] text-[#03201e] font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#4ee3a5]/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          {isAuthenticating ? (
            <span>Verificando credenciales...</span>
          ) : (
            <>
              <span>Iniciar sesión</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </>
          )}
        </button>

        {/* Biometric Quick Access Button */}
        <button
          type="button"
          onClick={handleBiometricAuth}
          disabled={isAuthenticating}
          className="w-full bg-[#092c2b] hover:bg-[#0c3938] border border-[#1b5853] text-white text-xs py-3 px-3.5 rounded-xl flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <Fingerprint size={18} className="text-[#4ee3a5]" />
            <span className="font-medium text-slate-100">Acceder con huella</span>
          </div>
          <ChevronRight size={16} className="text-slate-400" />
        </button>
      </form>
    </div>
  );
};
