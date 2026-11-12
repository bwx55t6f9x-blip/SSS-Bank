# SSS Bank: Aplicación Auxiliar de Open Banking para la Gestión de Finanzas Personales

> **Proyecto:** *Diseño y Desarrollo de la App SSS Bank: Aplicación Auxiliar de Open Banking para la Gestión de Finanzas Personales mediante Arquitectura de Microservicios.*  
> **Tecnologías:** React Native, Expo Go, React Navigation, Tailwind CSS (NativeWind), TypeScript.

---

## 1. Descripción del Proyecto

**SSS Bank** es una aplicación móvil diseñada bajo el paradigma de **Open Banking**, que permite a los usuarios consolidar y gestionar sus finanzas personales de forma unificada, transparente y con altos estándares de seguridad bancaria.

A través de una arquitectura desacoplada basada en microservicios, la aplicación proporciona visibilidad instantánea de balances, resumen de ingresos y gastos mensuales, categorización en tiempo real de transacciones, análisis porcentual de presupuestos (gastos fijos vs. variables vs. disponible) y seguimiento interactivo de metas de ahorro prioritarias.

---

## 2. Arquitectura de Microservicios

La solución móvil interactúa con un ecosistema de microservicios contenerizados mediante un API Gateway seguro:

```
                          ┌───────────────────────────┐
                          │   SSS Bank Mobile App     │
                          │   (React Native / Expo)   │
                          └─────────────┬─────────────┘
                                        │ HTTPS / WSS (mTLS)
                                        ▼
                          ┌───────────────────────────┐
                          │     API Gateway / BFF     │
                          │  (Rate Limiting & Auth)   │
                          └──────┬─────────────┬──────┘
             ┌───────────────────┼─────────────┴──────────────────┐
             ▼                   ▼                                ▼
┌────────────────────────┐ ┌──────────────────────┐ ┌────────────────────────┐
│  Auth & Biometrics MS  │ │  Open Banking Hub    │ │  Budget & Goals Engine │
│ • Cifrado extremo-fin  │ │ • Conexión bancos    │ │ • Modelos predictivos  │
│ • Tokens JWT / OAuth2  │ │ • Agregación saldos  │ │ • Donut de distribución│
│ • Sensor Biométrico    │ │ • Clasificación tx   │ │ • Metas de emergencia  │
└────────────────────────┘ └──────────────────────┘ └────────────────────────┘
```

1. **Microservicio de Autenticación y Seguridad:** Gestión de sesiones, biometría (Face ID / Huella dactilar), cifrado de extremo a extremo y validación JWT.
2. **Microservicio de Agregación Open Banking:** Conexión segura con instituciones financieras reguladas, balance unificado y balance histórico.
3. **Microservicio de Libro Mayor y Transacciones:** Registro inmutable de ingresos/egresos, cálculo de flujo mensual y filtrado dinámico.
4. **Microservicio de Presupuestos y Metas:** Distribución porcentual automatizada (37% Fijos, 24% Variables, 39% Disponible) y gestión de ahorro con fondos de emergencia.

---

## 3. Catálogo de Pantallas Replicadas

La aplicación integra 5 pantallas interconectadas con fidelidad visual íntegra respecto a las especificaciones originales:

| Pantalla | Nombre | Descripción y Componentes |
|---|---|---|
| **Pantalla 1** | **Acceso & Biometría** | Autenticación con sensor de huella animado, anillos concéntricos con resplandor turquesa, insignia `ENTORNO SEGURO`, formulario con inputs estilizados y botón `Iniciar sesión`. |
| **Pantalla 2** | **Dashboard (Inicio)** | Tarjeta principal con saldo `$12,480.50`, porcentaje de crecimiento `+8.2%`, saludo personalizado con fecha dinámica, resumen dual de ingresos (`$5,450.00`) y gastos (`$2,970.00`), y acceso rápido a presupuestos. |
| **Pantalla 3** | **Historial de Movimientos** | Indicador de flujo neto mensual `+$2,480.00`, pestañas de filtrado dinámico (`Todas`, `Ingresos`, `Gastos`), desglose de 6 movimientos con iconos categóricos y botón inferior de retorno. |
| **Pantalla 4** | **Metas y Presupuestos** | Gráfico circular (Donut Chart) con distribución de gastos del mes, desglose porcentual (`Fijos 37%`, `Variables 24%`, `Disponible 39%`), tarjeta de meta `Fondo de emergencia` al 68% (`$3,400 de $5,000`) con abonado interactivo. |
| **Pantalla 5** | **Configuración & Sesión (Modal)** | Modal Bottom Sheet interactivo refactorizado con Tailwind CSS, datos de perfil (`Alex Cruz`), botón 'X' de cierre con área táctil ampliada a 44 x 44 pt para estándares de accesibilidad móvil (Apple HIG & WCAG), verificación de cifrado de extremo a extremo y cierre de sesión seguro. |

---

## 4. Navegación Fluida con React Navigation

La arquitectura de navegación implementa un flujo dual con transiciones no abruptas:
- **Stack Navigator (`@react-navigation/stack`):** Gestiona la pantalla de autenticación (`Login`), el contenedor principal de pestañas (`MainTabs`) y el modal transparente de configuración (`SettingsModal`). Configurado con `cardStyleInterpolator: forFade` para garantizar una apertura y cierre suaves y continuos sin saltos visuales abruptos.
- **Bottom Tab Navigator (`@react-navigation/bottom-tabs`):** Permite cambiar instantáneamente entre **Inicio**, **Historial**, **Metas** y activar **Configuración** mediante la barra inferior fija con área táctil optimizada.

---

## 5. Instrucciones para Emulación Móvil con Expo Go

### Prerrequisitos
1. Tener instalado **Node.js** (versión 18 o superior).
2. Tener instalado en su dispositivo móvil la aplicación gratuita **Expo Go**:
   - [Descargar en Google Play Store para Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [Descargar en App Store para iOS](https://apps.apple.com/app/expo-go/id982107779)
3. Que la computadora de desarrollo y el dispositivo móvil se encuentren conectados a la **misma red Wi-Fi** (o utilizar el modo `--tunnel`).

### Paso a Paso para Despliegue en Modo Desarrollo

#### 1. Clonar el repositorio y navegar a la carpeta de Expo:
```bash
git clone <URL_DEL_REPOSITORIO>
cd mobile-expo
```

#### 2. Instalar las dependencias del proyecto móvil:
```bash
npm install
```

#### 3. Ejecutar el servidor de desarrollo de Expo:
```bash
npx expo start
```

*Si se encuentra en una red corporativa o con restricciones de firewall, utilice la bandera tunnel:*
```bash
npx expo start --tunnel
```

#### 4. Abrir la aplicación en su dispositivo:
- **En Android:** Abra la aplicación **Expo Go**, presione en **"Scan QR code"** y apunte la cámara al código QR que aparece en su terminal.
- **En iOS:** Abra la aplicación nativa de **Cámara**, apunte al código QR y toque la notificación emergente de **Expo Go**.

La aplicación compilará en segundos y podrá interactuar nativamente con todas las pantallas, transiciones y componentes.

---

## 6. Ejecución del Entorno Web / Simulador Interactivo

El proyecto incluye adicionalmente un simulador web interactivo en React 19 y Tailwind CSS que permite probar y verificar las 5 pantallas directamente en el navegador:

```bash
# En el directorio principal del proyecto:
npm run dev
```

Abra su navegador en `http://localhost:3000` para acceder tanto a la **Vista de Presentación Showcase** (idéntica a los mockups adjuntos) como al modo de **Dispositivo Móvil Puro**.

---

## 7. Ejecución de Pruebas Unitarias

El proyecto cuenta con pruebas unitarias para las reglas de negocio financiero (cálculo de flujo neto, distribución de presupuestos, filtrado de transacciones y progreso de metas) ejecutadas con el runner nativo de Node:

```bash
npx --yes tsx --test src/utils/finance.test.ts
```

---

## 8. Licencia
Proyecto desarrollado bajo licencia Apache 2.0.
