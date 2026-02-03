<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# El Refugio de Leo (HTML estático)

Esta versión es **HTML/CSS/JS puro**, pensada para publicarse directamente en GitHub Pages.

## Ver localmente

Puedes abrir `index.html` directamente en el navegador o levantar un servidor estático sencillo:

```bash
python -m http.server 4173
```

Luego visita `http://localhost:4173`.

## Publicar en GitHub Pages

1. Asegúrate de que la rama principal se llama `main`.
2. Activa GitHub Pages en el repositorio:
   - Settings → Pages → **Build and deployment** → Source: *GitHub Actions*.
3. Haz push a `main`. El workflow `.github/workflows/pages.yml` publicará el sitio automáticamente.

## Estructura

- `index.html`: portada.
- `perros.html`, `gatos.html`, `finales-felices.html`, `nosotros.html`, `colabora.html`, `contacto.html`: páginas internas.

> Nota: la funcionalidad de IA del antiguo proyecto React no está disponible en la versión HTML estática.
