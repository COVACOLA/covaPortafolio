// path: tailwind.config.ts
import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#F5F4E6',            // Background principal
        contraste: '#1E1E1E',        // Header / contrast blocks
        primario: '#73A6C2',         // Botones activos, acento
        soporte: '#2D3B59',          // Links / botones secundarios
        alerta: '#E2875B'            // Hover / efectos interactivos
      },
      fontFamily: {
        titulo: ['Oswald', 'sans-serif'],
        cuerpo: ['"Open Sans"', 'sans-serif']
      },
      boxShadow: {
        btn: '0 4px 6px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
export default config;
