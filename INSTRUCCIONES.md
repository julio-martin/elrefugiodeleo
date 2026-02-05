# Instrucciones para Gestionar los Animales del Refugio

Este documento explica cómo editar la información de los animales en la web del refugio.

## Tabla de Contenidos
1. [Cómo Editar el Archivo animals.json](#cómo-editar-el-archivo-animalsjson)
2. [Explicación de los Campos](#explicación-de-los-campos)
3. [Cómo Añadir un Nuevo Animal](#cómo-añadir-un-nuevo-animal)
4. [Cómo Editar un Animal Existente](#cómo-editar-un-animal-existente)
5. [Marcar un Animal como Adoptado](#marcar-un-animal-como-adoptado)
6. [Estructura de las Fotos](#estructura-de-las-fotos)
7. [Limitaciones y Soluciones](#limitaciones-y-soluciones)

---

## Cómo Editar el Archivo animals.json

El archivo `animals.json` contiene toda la información de los animales que aparecen en la web.

### Pasos para editarlo desde GitHub:

1. **Accede a GitHub** y ve al repositorio: `https://github.com/julio-martin/elrefugiodeleo`

2. **Navega al archivo**: Haz clic en la carpeta `data` y luego en el archivo `animals.json`

3. **Edita el archivo**: Haz clic en el icono del lápiz (✏️) que dice "Edit this file" en la esquina superior derecha

4. **Realiza tus cambios**: Edita el contenido del archivo siguiendo las instrucciones de este documento

5. **Guarda los cambios**:
   - Baja hasta el final de la página
   - En "Commit changes" escribe un mensaje descriptivo (ejemplo: "Añadir nuevo perro Max")
   - Haz clic en el botón verde "Commit changes"

6. **Espera unos minutos**: Los cambios aparecerán en la web automáticamente en 1-2 minutos

---

## Explicación de los Campos

Cada animal en el archivo tiene los siguientes campos:

```json
{
  "id": "max",
  "nombre": "Max",
  "tipo": "perro",
  "sexo": "macho",
  "fecha_nacimiento": "2020-03-15",
  "tamano": "grande",
  "descripcion": "Un perro alegre y juguetón",
  "historia": "Max fue rescatado de la calle...",
  "caracteristicas": ["Sociable", "Activo", "Cariñoso"],
  "num_fotos": 3,
  "finales_felices": false,
  "fecha_adopcion": ""
}
```

### Campo por campo:

| Campo | Descripción | Ejemplo | Obligatorio |
|-------|-------------|---------|-------------|
| **id** | Identificador único del animal (sin espacios, solo letras minúsculas, números y guiones) | `"max"`, `"luna-2"` | ✅ Sí |
| **nombre** | Nombre del animal como aparecerá en la web | `"Max"`, `"Luna"` | ✅ Sí |
| **tipo** | Tipo de animal | `"perro"` o `"gato"` | ✅ Sí |
| **sexo** | Sexo del animal | `"macho"` o `"hembra"` | ✅ Sí |
| **fecha_nacimiento** | Fecha de nacimiento aproximada en formato YYYY-MM-DD. Si no se conoce el día exacto, usa el día 1 o 15 | `"2020-03-15"` | ✅ Sí |
| **tamano** | Tamaño del animal (solo para perros) | `"pequeño"`, `"mediano"` o `"grande"` | ⚠️ Solo perros |
| **descripcion** | Descripción corta que aparece en la tarjeta del animal (máximo 60 caracteres) | `"Un perro alegre y juguetón"` | ✅ Sí |
| **historia** | Historia completa del animal, cómo llegó al refugio, su personalidad, etc. | `"Max fue rescatado..."` | ✅ Sí |
| **caracteristicas** | Lista de características o cualidades del animal | `["Sociable", "Activo", "Cariñoso"]` | ❌ Opcional |
| **num_fotos** | Número total de fotos que tiene el animal | `3` (si tiene 3 fotos) | ✅ Sí |
| **finales_felices** | Si el animal ha sido adoptado | `true` o `false` | ✅ Sí |
| **fecha_adopcion** | Fecha de adopción (solo si fue adoptado) | `"2024-11-20"` o `""` | ❌ Opcional |

### ⚠️ Notas importantes sobre los campos:

- **id**: Debe ser único. Si ya existe un "max", usa "max-2" o "max2"
- **tipo**: Solo acepta `"perro"` o `"gato"` (en minúsculas)
- **sexo**: Solo acepta `"macho"` o `"hembra"` (en minúsculas)
- **tamano**: Solo aplica para perros. Para gatos, no incluir este campo o dejarlo vacío
- **fecha_nacimiento**: Si no conoces la fecha exacta, estima el año y mes
- **caracteristicas**: Debe ser una lista entre corchetes `[]`, con cada característica entre comillas y separadas por comas
- **num_fotos**: Debe coincidir con el número de fotos que hayas subido para ese animal

---

## Cómo Añadir un Nuevo Animal

### 1. Prepara la información del animal

Antes de empezar, ten lista toda la información:
- Nombre y sexo
- Fecha de nacimiento aproximada
- Descripción corta y historia
- Características principales
- Fotos del animal

### 2. Elige un ID único

El ID debe ser:
- Solo letras minúsculas, números y guiones
- Único (no puede existir otro animal con el mismo ID)
- Relacionado con el nombre del animal

Ejemplos buenos: `"max"`, `"luna"`, `"toby-2"`, `"mia2"`

### 3. Añade el animal al archivo JSON

Abre el archivo `animals.json` y añade el nuevo animal **dentro del array "animales"**.

**⚠️ IMPORTANTE**: Debes añadir una **coma** después del último animal antes de añadir el nuevo.

Ejemplo:

```json
{
  "animales": [
    {
      "id": "animal-existente",
      "nombre": "Existente",
      ...
    },    ← Esta coma es CRUCIAL
    {
      "id": "nuevo-animal",
      "nombre": "Nuevo",
      "tipo": "perro",
      "sexo": "macho",
      "fecha_nacimiento": "2021-06-01",
      "tamano": "mediano",
      "descripcion": "Un perro cariñoso y tranquilo",
      "historia": "Fue encontrado en la calle muy asustado, pero con paciencia ha aprendido a confiar en las personas. Busca una familia tranquila que le dé tiempo para adaptarse.",
      "caracteristicas": ["Tranquilo", "Cariñoso", "Tímido"],
      "num_fotos": 1,
      "finales_felices": false,
      "fecha_adopcion": ""
    }
  ]
}
```

### 4. Ejemplo completo para un PERRO:

```json
{
  "id": "toby",
  "nombre": "Toby",
  "tipo": "perro",
  "sexo": "macho",
  "fecha_nacimiento": "2019-08-10",
  "tamano": "grande",
  "descripcion": "Perro guardián leal y protector",
  "historia": "Toby llegó al refugio después de que su familia se mudara y no pudiera llevárselo. Es un perro muy bueno, entrenado y obediente. Le encanta correr y jugar con pelotas.",
  "caracteristicas": ["Obediente", "Guardián", "Activo"],
  "num_fotos": 4,
  "finales_felices": false,
  "fecha_adopcion": ""
}
```

### 5. Ejemplo completo para un GATO:

```json
{
  "id": "mimi",
  "nombre": "Mimi",
  "tipo": "gato",
  "sexo": "hembra",
  "fecha_nacimiento": "2020-04-01",
  "descripcion": "Gata cariñosa y juguetona",
  "historia": "Mimi fue rescatada de una colonia. Es muy sociable y le encanta que la acaricien. Busca un hogar donde pueda recibir mucho amor y atención.",
  "caracteristicas": ["Sociable", "Juguetona", "Cariñosa"],
  "num_fotos": 2,
  "finales_felices": false,
  "fecha_adopcion": ""
}
```

**⚠️ Nota**: Los gatos NO llevan el campo `"tamano"`

---

## Cómo Editar un Animal Existente

1. Busca el animal por su `"id"` o `"nombre"` en el archivo
2. Modifica los campos que necesites cambiar
3. **NO cambies el ID** (esto rompería el enlace con las fotos)
4. Guarda los cambios con un mensaje descriptivo

Ejemplo: Si quieres actualizar la descripción de Max:

```json
{
  "id": "max",
  "nombre": "Max",
  ...
  "descripcion": "Nueva descripción actualizada",
  ...
}
```

---

## Marcar un Animal como Adoptado

Cuando un animal sea adoptado:

1. Busca el animal en el archivo
2. Cambia `"finales_felices": false` a `"finales_felices": true`
3. Añade la fecha de adopción: `"fecha_adopcion": "2024-12-05"`

Ejemplo:

**ANTES:**
```json
{
  "id": "max",
  "nombre": "Max",
  ...
  "finales_felices": false,
  "fecha_adopcion": ""
}
```

**DESPUÉS:**
```json
{
  "id": "max",
  "nombre": "Max",
  ...
  "finales_felices": true,
  "fecha_adopcion": "2024-12-05"
}
```

El animal automáticamente:
- Desaparecerá de las páginas de Perros/Gatos
- Aparecerá en la página de Finales Felices
- Mostrará un mensaje de "Ya encontró su hogar feliz"

---

## Estructura de las Fotos

Las fotos de los animales se organizan de la siguiente manera:

```
assets/
  animales/
    max/              ← Carpeta con el ID del animal
      max.jpg         ← Foto principal (OBLIGATORIA)
      max2.jpg        ← Foto 2 (opcional)
      max3.jpg        ← Foto 3 (opcional)
      max4.jpg        ← Foto 4 (opcional)
```

### Reglas importantes:

1. **El nombre de la carpeta** debe ser exactamente igual al `"id"` del animal
2. **La foto principal** siempre se llama `{id}.jpg` (ejemplo: `max.jpg`)
3. **Las fotos adicionales** se numeran: `{id}2.jpg`, `{id}3.jpg`, etc.
4. **Todas las fotos deben ser JPG** (formato .jpg)
5. **El campo `num_fotos`** debe coincidir con el número de fotos:
   - Si solo tiene `max.jpg` → `"num_fotos": 1`
   - Si tiene `max.jpg`, `max2.jpg`, `max3.jpg` → `"num_fotos": 3`

### Ejemplo:

Si añades un animal con `"id": "toby"` y 4 fotos:

```
assets/animales/toby/
  - toby.jpg     (foto principal)
  - toby2.jpg    (foto 2)
  - toby3.jpg    (foto 3)
  - toby4.jpg    (foto 4)
```

Y en el JSON: `"num_fotos": 4`

---

## Limitaciones y Soluciones

### ❌ Limitación: No se pueden crear carpetas desde la web de GitHub

La interfaz web de GitHub **no permite crear carpetas vacías ni subir múltiples archivos** a una carpeta nueva de manera directa.

### ✅ Soluciones alternativas:

#### Opción 1: Usar GitHub Desktop (Recomendado para no técnicos)

1. Descarga e instala **GitHub Desktop**: https://desktop.github.com/
2. Clona el repositorio en tu ordenador
3. Crea la carpeta del animal en `assets/animales/{id}/`
4. Añade las fotos del animal
5. Haz commit y push desde GitHub Desktop

#### Opción 2: Subir fotos una por una (Workaround)

Aunque no es ideal, puedes:
1. Ir a `assets/animales/` en GitHub web
2. Crear el primer archivo con "Add file" → "Create new file"
3. Nombrar el archivo como `{id}/{id}.jpg` (esto creará la carpeta automáticamente)
4. Subir la imagen
5. Repetir para cada foto adicional

**Nota**: Esta opción es tediosa y puede generar muchos commits.

#### Opción 3: Pedir ayuda técnica

Si necesitas añadir un animal nuevo con fotos, puedes:
1. Editar el `animals.json` desde GitHub web (siguiendo estas instrucciones)
2. Enviar las fotos por email/WhatsApp a alguien con acceso técnico
3. Esa persona las subirá en la estructura correcta

---

## ⚠️ Errores Comunes a Evitar

### 1. Olvidar las comas
```json
{
  "id": "max"    ← Falta coma aquí
  "nombre": "Max"
}
```

### 2. Usar comillas simples en vez de dobles
```json
{
  'id': 'max'    ← MAL (comillas simples)
  "id": "max"    ← BIEN (comillas dobles)
}
```

### 3. Coma extra al final del último elemento
```json
{
  "animales": [
    {
      "id": "max",
      "nombre": "Max"
    },    ← Esta coma está bien
    {
      "id": "luna",
      "nombre": "Luna"
    },    ← Esta coma SOBRA (es el último)
  ]
}
```

### 4. Campo tamano en gatos
```json
{
  "tipo": "gato",
  "tamano": "pequeño"    ← Los gatos NO llevan tamaño
}
```

### 5. Valor incorrecto en tipo o sexo
```json
{
  "tipo": "Perro",     ← MAL (debe ser minúsculas: "perro")
  "sexo": "MACHO"      ← MAL (debe ser minúsculas: "macho")
}
```

---

## Validador JSON Online

Si no estás seguro de que tu JSON sea correcto, puedes copiarlo y pegarlo en este validador:

**https://jsonlint.com/**

Este sitio te dirá si hay algún error de sintaxis y dónde está.

---

## Contacto y Soporte

Si tienes dudas o problemas:
- Revisa estas instrucciones cuidadosamente
- Usa el validador JSON para verificar la sintaxis
- Contacta con la persona responsable técnica del proyecto

---

## Resumen Rápido

### Para editar un animal existente:
1. Ve a `data/animals.json` en GitHub
2. Haz clic en el lápiz ✏️
3. Busca el animal y edita los campos necesarios
4. Guarda con "Commit changes"

### Para añadir un animal nuevo:
1. Prepara toda la información
2. Edita `animals.json` y añade el nuevo animal al array
3. **No olvides la coma** antes del nuevo animal
4. Guarda los cambios
5. **Contacta con soporte técnico** para subir las fotos

### Para marcar como adoptado:
1. Busca el animal
2. Cambia `"finales_felices": false` a `true`
3. Añade la fecha de adopción
4. Guarda los cambios

---

**¡Importante!** Los cambios en el archivo JSON se reflejan automáticamente en la web en 1-2 minutos. No necesitas hacer nada más después de guardar.
