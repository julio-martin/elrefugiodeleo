#!/bin/bash

# Script para renombrar todos los archivos .jpeg a .jpg en la carpeta animales
# Uso: ./tools/rename-to-jpg.sh

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Buscando archivos .jpeg en assets/animales/..."
echo ""

# Contador de archivos renombrados
count=0

# Buscar todos los archivos .jpeg (case insensitive) en assets/animales/
find assets/animales -type f \( -iname "*.jpeg" \) | while read file; do
    # Obtener el nuevo nombre reemplazando .jpeg por .jpg
    newfile="${file%.jpeg}.jpg"
    newfile="${newfile%.JPEG}.jpg"

    # Renombrar el archivo
    if [ -f "$file" ]; then
        mv "$file" "$newfile"
        echo -e "${GREEN}✓${NC} Renombrado: ${YELLOW}$file${NC} → ${GREEN}$newfile${NC}"
        ((count++))
    fi
done

echo ""
echo -e "${GREEN}✨ Proceso completado!${NC}"
echo "Total de archivos renombrados: $count"
