# Outfit uwu

Estilista personal privado (1 persona). Web estática, sin build, sin dependencias. Idioma de la UI: español.

## Archivos
- `index.html`: solo el esqueleto (`#app`, `#nav`, `#toast`).
- `styles.css`: tema con variables CSS (claro/oscuro), mobile-first.
- `app.js`: toda la lógica. Secciones: datos (C, NEU, CATS, STY, OC, IDEAS) → motor (`score`, `gen`, `ideas`) → vistas (objeto `V`, `ocard`, `render`) → eventos (click/change/input delegados con `data-a`).

## Reglas
- Estado `S` en `localStorage` clave `ouwu`: `{p:{name,colors,avoid,styles}, items, favs, hist}`.
- Prenda: `{id,img(dataURL),cat,color,form(1-3),style,pat}`.
- Sin frameworks ni librerías externas. Sin llamadas de red.
- Cambios pequeños y localizados: no reescribir archivos completos, editar solo la función afectada.
- Probar abriendo `index.html` en el navegador.

## Ideas pendientes
Más IDEAS por ocasión, clima del día, quitar fondo a fotos, sync en la nube, exportar/importar respaldo JSON.

## Añadido
- Clima (Open-Meteo, variable `W`), campo `warm` por prenda, "Outfit de hoy".
- `nobg()` quita fondo con @imgly (import dinámico). Respaldo JSON en Perfil.
- Código de acceso (`ACCESS_HASH`, por defecto `outfituwu`): barrera ligera.
- IDEAS = base + `MORE`; se muestran las 3 mejores.
- `aiPick()` reordena R.outs con Gemini (GEMINI_KEY, AI_MODEL); si falla, queda el ranking por reglas.
