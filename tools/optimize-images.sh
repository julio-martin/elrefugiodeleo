#!/usr/bin/env bash
set -euo pipefail

ROOT="../assets/animales"

command -v magick >/dev/null 2>&1 || { echo "❌ Falta ImageMagick (magick)"; exit 1; }
command -v jpegoptim >/dev/null 2>&1 || { echo "❌ Falta jpegoptim"; exit 1; }

# Ajusta aquí:
#  - 85 = más calidad (más peso)
#  - 80-82 = buen equilibrio (recomendado)
#  - 75-78 = más compresión (puede notarse en algunas fotos)
JPEG_MAX_QUALITY=82

echo "Optimizando JPG/JPEG en: $ROOT"
echo "Calidad máx: $JPEG_MAX_QUALITY"
echo

find "$ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |
while IFS= read -r -d '' f; do
  before=$(wc -c < "$f" | tr -d ' ')

  tmp="$(mktemp -t jpgopt_XXXXXX).jpg"

  # 1) Normaliza rotación, elimina metadata, y re-encode sin cambiar tamaño
  #    -sampling-factor 4:2:0: buena compresión para fotos
  #    -interlace Plane: JPEG progresivo (carga más rápida percibida)
  magick "$f" \
    -auto-orient \
    -strip \
    -sampling-factor 4:2:0 \
    -quality "$JPEG_MAX_QUALITY" \
    -interlace Plane \
    "$tmp"

  mv "$tmp" "$f"

  # 2) Optimiza aún más (Huffman tables, etc.) manteniendo calidad <= max
  jpegoptim --strip-all --all-progressive --max="$JPEG_MAX_QUALITY" "$f" >/dev/null

  after=$(wc -c < "$f" | tr -d ' ')
  saved=$((before - after))

  if [ "$saved" -gt 0 ]; then
    pct=$(( (saved * 100) / before ))
    echo "✅ $f  (${before} -> ${after} bytes, -${pct}%)"
  else
    echo "➖ $f  (${before} -> ${after} bytes)"
  fi
done

echo
echo "🎉 Listo. No se han cambiado rutas, nombres ni dimensiones."

