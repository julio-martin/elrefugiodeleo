#!/bin/bash

# Script para renombrar todos los archivos .jpeg a .jpg en la carpeta animales
# Uso: ./tools/rename-to-jpg.sh

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

printf "🔍 Buscando archivos .jpeg en assets/animales/...\n\n"

# Contador de archivos renombrados
count=0

# Buscar todos los archivos .jpeg (case insensitive) en assets/animales/
find assets/animales -type f \( -iname "*.jpeg" \) | while read file; do
    # Obtener el nuevo nombre reemplazando .jpeg/.JPEG por .jpg
    newfile=$(echo "$file" | sed -e 's/\.jpeg$/.jpg/i')

    # Renombrar el archivo
    if [ -f "$file" ] && [ "$file" != "$newfile" ]; then
        mv "$file" "$newfile"
        printf "${GREEN}✓${NC} Renombrado: ${YELLOW}%s${NC} → ${GREEN}%s${NC}\n" "$file" "$newfile"
        count=$((count + 1))
    fi
done

printf "\n${GREEN}✨ Proceso completado!${NC}\n"
printf "Total de archivos renombrados: %d\n" "$count"
