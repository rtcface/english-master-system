# English Master System (EMS)

Sistema de aprendizaje de inglés basado en métodos científicos validados, implementado con Domain-Driven Design (DDD) y TypeScript.

## Descripción

English Master System es una plataforma educativa que combina tres métodos científicos validados para el aprendizaje de inglés, ofreciendo:

- Planes de estudio personalizados basados en nivel, objetivo y disponibilidad
- Tareas auténticas (Task-Based Learning) relacionadas con la profesión del usuario
- Análisis automático de pronunciación con retroalimentación inmediata
- Métricas de progreso semanales (vocabulario, gramática, listening, speaking)
- Retroalimentación personalizada mediante NLP
- Gestión de usuarios con roles y permisos
- Estadísticas globales anonimizadas para investigación
- Exportación de reportes en formatos PDF/CSV

## Arquitectura

El proyecto sigue los principios de **Domain-Driven Design (DDD)** con la siguiente estructura:

```
src/
├── Contexts/              # Bounded Contexts
│   ├── Users/            # Gestión de usuarios y roles
│   ├── Learning/        # Planes de aprendizaje personalizados
│   ├── Tasks/           # Tareas auténticas (Task-Based Learning)
│   ├── Progress/        # Métricas de progreso
│   ├── Pronunciation/   # Análisis de pronunciación
│   ├── Feedback/        # Retroalimentación personalizada
│   ├── Statistics/      # Estadísticas globales
│   └── Reports/         # Exportación de reportes
│       ├── domain/      # Entidades, Value Objects, Repositorios
│       └── application/ # Casos de uso
└── apps/
    └── mooc/
        └── backend/     # Infraestructura (Controllers, Routes, DI)
```

## Contextos Delimitados

### 1. Users
Gestión de usuarios, roles (aprendiz, tutor IA, investigador) y permisos.

### 2. Learning
Generación de planes de estudio personalizados basados en nivel actual, objetivo y disponibilidad diaria.

### 3. Tasks
Sugerencia de tareas auténticas semanales relacionadas con la profesión o intereses del usuario.

### 4. Progress
Cálculo y visualización de métricas semanales de progreso en vocabulario, gramática, listening y speaking.

### 5. Pronunciation
Análisis automático de pronunciación con puntuación de pronunciación, fluidez y coherencia.

### 6. Feedback
Generación de retroalimentación personalizada mediante NLP y análisis de errores.

### 7. Statistics
Cálculo de estadísticas globales anonimizadas para validación del método.

### 8. Reports
Generación y exportación de reportes en formatos PDF/CSV con datos anonimizados.

## Requisitos

- Node.js >= 14.0.0
- npm >= 6.14.0

## Instalación

```bash
npm install
```

## Scripts Disponibles

### Desarrollo
```bash
npm run dev:mooc:backend
```

### Producción
```bash
npm run build
npm run start:mooc:backend
```

### Tests
```bash
# Todos los tests
npm test

# Solo tests unitarios
npm run test:unit

# Solo tests de features (Cucumber)
npm run test:features
```

### Linting
```bash
# Verificar
npm run lint

# Corregir automáticamente
npm run lint:fix
```

## Endpoints API

### Usuarios
- `POST /users` - Crear usuario
- `PUT /users/:id/role` - Asignar rol a usuario

### Planes de Aprendizaje
- `POST /learning-plans` - Crear plan personalizado

### Tareas
- `GET /tasks/suggestions` - Obtener sugerencia de tarea semanal

### Pronunciación
- `POST /pronunciation/analyze` - Analizar pronunciación

### Progreso
- `GET /progress/metrics` - Obtener métricas de progreso

### Retroalimentación
- `GET /feedback/:taskId` - Obtener feedback de una tarea

### Estadísticas
- `GET /statistics/global` - Obtener estadísticas globales

### Reportes
- `POST /reports/generate` - Generar reporte

## Tests

El proyecto utiliza **Test-Driven Development (TDD)** con:

- **Jest**: Tests unitarios de casos de uso
- **Cucumber**: Tests de aceptación con Gherkin

Los tests de features están ubicados en `tests/apps/mooc/backend/features/` y cubren los 8 criterios de aceptación del sistema.

## Dependency Injection

La configuración de dependencias se gestiona mediante archivos YAML en:
- `src/apps/mooc/backend/dependency-injection/`

## Estructura de Tests

```
tests/
├── Contexts/           # Tests unitarios por contexto
│   └── [Context]/
│       ├── __mocks__/  # Mocks de repositorios
│       └── application/ # Tests de casos de uso
└── apps/
    └── mooc/
        └── backend/
            └── features/ # Tests de aceptación (Cucumber)
```

## Convenciones

- **Domain**: Contiene entidades, value objects e interfaces de repositorios
- **Application**: Contiene casos de uso (servicios de aplicación)
- **Infrastructure**: Controllers, routes y configuración de DI
- **Tests**: Tests unitarios con mocks y tests de aceptación con Cucumber

## Licencia

Este proyecto está basado en el skeleton de TypeScript DDD de CodelyTV.
