#!/usr/bin/env bash
set -euo pipefail

ROOT="$1"

command -v magick >/dev/null 2>&1 || { echo "❌ Falta ImageMagick (magick)"; exit 1; }
command -v jpegoptim >/dev/null 2>&1 || { echo "❌ Falta jpegoptim"; exit 1; }

# Ajusta aquí:
#  - 85 = más calidad (más peso)
#  - 80-82 = buen equilibrio (recomendado)
#  - 75-78 = más compresión (puede notarse en algunas fotos)
JPEG_MAX_QUALITY=82

# Umbral mínimo de mejora para aplicar el cambio (porcentaje)
MIN_IMPROVEMENT_PCT=5

echo "Optimizando JPG/JPEG en: $ROOT"
echo "Calidad máx: $JPEG_MAX_QUALITY | Mejora mínima: ${MIN_IMPROVEMENT_PCT}%"
echo

find "$ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |
while IFS= read -r -d '' f; do
  before=$(wc -c < "$f" | tr -d ' ')

  tmp="$(mktemp -t jpgopt_XXXXXX).jpg"

  # 1) Normaliza rotación, elimina metadata, y re-encode sin cambiar tamaño
  magick "$f" \
    -auto-orient \
    -strip \
    -sampling-factor 4:2:0 \
    -quality "$JPEG_MAX_QUALITY" \
    -interlace Plane \
    "$tmp"

  # 2) Optimiza aún más (tablas Huffman, etc.) sobre el archivo temporal
  jpegoptim --strip-all --all-progressive --max="$JPEG_MAX_QUALITY" "$tmp" >/dev/null

  after=$(wc -c < "$tmp" | tr -d ' ')
  saved=$((before - after))

  # Calcula % ahorro (entero). Evita división por 0.
  if [ "$before" -gt 0 ] && [ "$saved" -gt 0 ]; then
    pct=$(( (saved * 100) / before ))
  else
    pct=0
  fi

  if [ "$pct" -ge "$MIN_IMPROVEMENT_PCT" ]; then
    mv "$tmp" "$f"
    echo "✅ $f  (${before} -> ${after} bytes, -${pct}%)"
  else
    rm -f "$tmp"
    echo "➖ $f  (mejora -${pct}% < ${MIN_IMPROVEMENT_PCT}%; no se toca)"
  fi
done

echo
echo "🎉 Listo. Solo se reemplazaron imágenes con mejora >= ${MIN_IMPROVEMENT_PCT}%."
