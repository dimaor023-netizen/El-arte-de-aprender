# El Arte de Aprender

App orientado a padres de familia, cuidadores, agentes educativos para acompañar el desarrollo emocional de las niñas y los niños.

## Requisitos

- Node.js 14 o superior
- npm o yarn
- Expo CLI (`npm install -g expo-cli`)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/dimaor023-netizen/El-arte-de-aprender.git
cd El-arte-de-aprender
```

2. Instala las dependencias:
```bash
npm install
```

3. Descarga el archivo de fuentes (IMPORTANTE):
Descarga `Ionicons.ttf` desde aquí: https://github.com/expo/vector-icons/raw/master/fonts/Ionicons.ttf
Guárdalo en: `assets/fonts/Ionicons.ttf`

4. Inicia la app:
```bash
npm start
```

## Uso

### En Android
```bash
npm run android
```

### En iOS
```bash
npm run ios
```

### En Web
```bash
npm run web
```

## Troubleshooting

### Error: "Font file for ionicons is empty"

Esta es una error común cuando las fuentes no se cargan correctamente. La solución incluida en este proyecto:

1. ✅ Las fuentes deben estar en `assets/fonts/Ionicons.ttf`
2. ✅ Se cargan correctamente en `App.js` usando `expo-font`
3. ✅ Se configuran en `app.json` con el plugin de `expo-font`

**PASO CRÍTICO:** Debes descargar manualmente el archivo `Ionicons.ttf` y colocarlo en `assets/fonts/`

Si aún tienes problemas:
```bash
expo start --clear
```

## Estructura del Proyecto

```
.
├── App.js                 # Componente principal
├── app.json              # Configuración de Expo
├── package.json          # Dependencias
├── assets/
│   └── fonts/
│       └── Ionicons.ttf  # ⬅️ DESCARGA ESTE ARCHIVO
└── README.md
```

## Licencia

MIT
