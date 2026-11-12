import React, { useState } from 'react';
import { X, Smartphone, QrCode, Terminal, Check, Copy, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface ExpoDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpoDocsModal: React.FC<ExpoDocsModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#072424] border border-[#1b5853] text-white w-full max-w-2xl max-h-[88vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#134440] flex items-center justify-between bg-[#0a2e2d]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f4441] border border-[#236862] text-[#4ee3a5] flex items-center justify-center shadow-sm">
              <Smartphone size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Emulación en Móvil con Expo Go
              </h2>
              <p className="text-xs text-slate-300">
                Instrucciones para correr SSS Bank nativamente en tu dispositivo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#0c3836] hover:bg-[#124d4a] flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto no-scrollbar space-y-6 text-sm">
          {/* Quick steps */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#5eead4] uppercase mb-3 flex items-center gap-2">
              <Terminal size={14} />
              <span>PASOS DE DESPLIEGUE EN MODO DESARROLLO</span>
            </h3>

            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'Instalar la app Expo Go en tu teléfono',
                  desc: 'Descárgala gratis desde Google Play Store (Android) o Apple App Store (iOS).',
                },
                {
                  step: '2',
                  title: 'Acceder al directorio del proyecto móvil',
                  cmd: 'cd mobile-expo && npm install',
                  desc: 'Instala React Native, React Navigation (Tabs & Stack) y NativeWind.',
                },
                {
                  step: '3',
                  title: 'Iniciar el servidor de desarrollo de Expo',
                  cmd: 'npx expo start',
                  desc: 'Se generará un código QR interactivo en tu terminal de comandos.',
                },
                {
                  step: '4',
                  title: 'Escanear el código QR con tu dispositivo',
                  desc: 'En Android: abre Expo Go y toca "Scan QR code". En iOS: abre la app de Cámara y toca la notificación de Expo Go.',
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="p-3.5 rounded-2xl bg-[#0a2e2d] border border-[#164e4a] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#14534f] text-[#4ee3a5] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                    {item.cmd && (
                      <div className="mt-2 flex items-center justify-between bg-[#041919] border border-[#12423e] rounded-xl px-3 py-1.5 font-mono text-[11px] text-[#4ee3a5]">
                        <span className="truncate">{item.cmd}</span>
                        <button
                          onClick={() => copyToClipboard(item.cmd!, idx)}
                          className="ml-2 text-slate-400 hover:text-white cursor-pointer"
                        >
                          {copiedIndex === idx ? (
                            <Check size={14} className="text-[#34d399]" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Microservices Architecture */}
          <div className="p-4 rounded-2xl bg-[#092b2a] border border-[#18534e]">
            <h3 className="text-xs font-bold tracking-wider text-[#5eead4] uppercase flex items-center gap-1.5 mb-2">
              <Cpu size={14} />
              <span>ARQUITECTURA DE MICROSERVICIOS SSS BANK</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              La aplicación móvil funciona como cliente auxiliar de Open Banking conectado a un ecosistema de microservicios:
            </p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[#0c3534] border border-[#1b5550]">
                <span className="font-bold text-[#4ee3a5] block">Auth & Security</span>
                <span className="text-[11px] text-slate-300">Biometría, JWT, cifrado de extremo a extremo y OAuth 2.0.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c3534] border border-[#1b5550]">
                <span className="font-bold text-[#4ee3a5] block">Open Banking API</span>
                <span className="text-[11px] text-slate-300">Agregación de cuentas financieras de múltiples bancos.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c3534] border border-[#1b5550]">
                <span className="font-bold text-[#4ee3a5] block">Ledger & History</span>
                <span className="text-[11px] text-slate-300">Transacciones clasificadas en tiempo real y flujo neto.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c3534] border border-[#1b5550]">
                <span className="font-bold text-[#4ee3a5] block">Budget & Goals</span>
                <span className="text-[11px] text-slate-300">Presupuestos predictivos (Fijos/Variables) y ahorro inteligente.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#134440] bg-[#092b2a] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Consulta el archivo <code>README.md</code> en la raíz del proyecto para detalles adicionales.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#4ee3a5] hover:bg-[#3dd294] text-[#03201e] text-xs font-bold transition-all cursor-pointer shadow-md"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
