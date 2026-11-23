# Chile Travel

Aplicación web de agencia de viajes (React + Vite, Tailwind, React Router, MSW, GraphQL).

## Requisitos

- Node.js 20.19 o superior

## Ejecución

Desde la raíz del proyecto (donde está `package.json`):

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

## Otros comandos

```bash
npm run build     # compilar para producción
npm run preview   # servir la versión compilada
npm run lint      # revisar el código
```

> Las APIs (REST y GraphQL) están simuladas con MSW; no se necesita backend.
> Las reservas de prueba se guardan en `localStorage` (clave `chile-travel:reservas`).
