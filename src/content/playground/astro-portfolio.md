---
title: "Astro Portfolio"
description: "Portfolio personal desarrollado con Astro, optimizado para performance y SEO. Demuestra expertise en arquitectura de sitios estáticos y diseño de experiencia de usuario."
technologies: ["Astro", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"]
liveUrl: "https://jorgejhms.net"
githubUrl: "https://github.com/jorgejhms/astro-portfolio"
image: "/projects/astro-portfolio.webp"
featured: true
order: 1
---

# Astro Portfolio

Portfolio personal desarrollado con Astro 4, diseñado para demostrar expertise en desarrollo web moderno, performance optimization, y diseño de experiencia de usuario. Este sitio es tanto un proyecto técnico como una declaración de valores sobre cómo debe verse la web en 2024.

## Propósito

Más que un simple CV digital, este portfolio es un laboratorio vivo de:

- Mejores prácticas en desarrollo web moderno
- Optimización de performance sin comprometer experiencia
- Diseño accesible y responsivo
- Arquitectura de componentes escalable

## Características Principales

- **Arquitectura de islas** con Astro para máxima performance
- **Content Collections** para gestión estructurada y type-safe
- **Modo oscuro** con tema Dracula personalizado
- **Animaciones fluidas** con Framer Motion
- **SEO optimizado** con meta tags dinámicos
- **PWA ready** con service worker
- **Responsive design** mobile-first desde cero

## Estética y Diseño

El diseño está inspirado en el tema Dracula con una estética cyberpunk/hacker:

- **Colores vibrantes** con efectos neon (#50FA7B, #BD93F9, #8BE9FD)
- **Tipografía monospace** para estética técnica (Inter + JetBrains Mono)
- **Efectos de glow** en elementos interactivos
- **Transiciones suaves** entre secciones (all 0.2s ease-in-out)
- **Micro-interacciones** que mejoran la UX sin distracción

## Performance

Métricas obtenidas en Lighthouse:

- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

### Técnicas Implementadas

- **Generación estática** para velocidad máxima
- **Lazy loading** de imágenes y componentes
- **Compresión automática** de assets con Sharp
- **Code splitting** por ruta
- **Sitemap y RSS feed** generados automáticamente
- **Prefetching inteligente** de links navegables

## Stack Tecnológico

- **Framework:** Astro 4 con App Router
- **Lenguaje:** TypeScript en strict mode
- **Estilos:** Tailwind CSS v4 con @theme personalizado
- **Animaciones:** Framer Motion
- **Contenido:** MDX para contenido enriquecido
- **Imágenes:** Sharp para optimización
- **Hosting:** Vercel con CI/CD automático
- **Dominio:** DNS con Cloudflare

## Arquitectura

```
src/
├── components/     # Componentes reutilizables
├── content/        # Content Collections (projects, skills, site config)
├── layouts/        # Layouts reutilizables
├── pages/          # Rutas principales
├── styles/         # Estilos globales con CSS variables
└── utils/          # Funciones de utilidad
```

## Funcionalidades Avanzadas

- **Sistema de temas** con CSS custom properties
- **Componentes compound** reutilizables
- **Slot patterns** para flexibility
- **Dynamic imports** para code splitting
- **Edge functions** para analytics
- **Incremental Static Regeneration (ISR)**

## Lecciones Aprendidas

Este proyecto consolidó mi expertise en:

1. **Astro ecosystem:** Internals, optimizaciones, best practices
2. **Performance culture:** Obsesión con Core Web Vitals
3. **Component architecture:** Patrones escalables
4. **Design systems:** Consistencia visual y técnica
5. **Developer experience:** Herramientas que hacen felices a devs

## Por Qué Astro

Elegí Astro porque:

- **Performance first:** Island architecture es game-changer
- **Content-focused:** Excelente para portfolios y blogs
- **Flexibility:** Puede usar React, Vue, Svelte, Solid en mismo proyecto
- **Modern DX:** TypeScript, hot reload, excellent tooling
- **Sustainable:** HTML estático es futuro-proof

## Reflexión

En un internet cada vez más bloated, un portfolio rápido y accesible es la mejor carta de presentación. Este sitio practica lo que predica: web moderno, performante, y hermoso.
