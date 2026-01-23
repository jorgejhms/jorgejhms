# AGENTS.md

## Commands

### Development

- `bun run dev` - Start local dev server at localhost:3000
- `bun run build` - Build production site to ./dist/
- `bun run preview` - Preview production build locally

### Linting & Formatting

- `bun run lint` - Run ESLint (check code quality)
- `bun run lint:fix` - Run ESLint with auto-fix
- `bun run format` - Format all files with Prettier
- `bun run format:check` - Check formatting without modifying

### Testing

- No test framework configured in this project

## Code Style Guidelines

### File Structure

- `.astro` files use frontmatter fence `---` for imports and logic
- Place imports at top of frontmatter section
- Destructure props from `Astro.props` with defaults
- Client-side scripts go in `<script>` tags at bottom of file

### Imports

- Use import aliases for cleaner imports:
  - Components: `import Button from "@components/Button.astro"`
  - Layouts: `import Base from "@layouts/base.astro"`
  - Content: `import { getCollection } from "astro:content"`
- Tailwind CSS v4 is used for styling (not SCSS)
- Import aliases configured in tsconfig.json: `@components/*`, `@layouts/*`, `@content/*`

### Formatting

- Always run `bun run format` before committing
- Prettier handles all formatting
- ESLint enforces code quality rules
- Follow Prettier default formatting (2-space indentation, single quotes, etc.)

### Naming Conventions

- Components: PascalCase (Button.astro, Navigation.astro, ProjectCard.astro)
- Variables/props: camelCase (menu, href, title)
- CSS classes: kebab-case (card, mobile-menu-wrapper)
- IDs: kebab-case (mobile-menu-icon, logo_title)
- Collection entries: kebab-case or snake_case as configured

### Types

- TypeScript strict mode enabled
- Define interfaces for complex props: `interface Props { href?: string }`
- Type Astro components explicitly: `const props: Props = Astro.props`
- Use TypeScript annotations for all function parameters and return types
- Avoid `any` type - use `unknown` when type is uncertain

### Styling

- Use Tailwind CSS utility classes
- Custom CSS variables defined in `@theme` in global.css
- Tailwind v4 with `@theme` directive in global.css
- Use `@plugin "@tailwindcss/typography"` for prose content
- Access CSS custom properties with `var()`: `color: var(--color-primary)`

### Patterns

- Define default props with destructuring in frontmatter
- Use `<slot />` for children content
- Array mapping for lists: `{items.map((item) => <li>{item.name}</li>)}`
- Event handlers in client scripts: `element.onclick = () => {}`
- Content collections loaded with `getCollection()` in frontmatter

### Language

- Content text is in Spanish (e.g., "Contáctame", "Inicio")
- Code comments and variable names in English or Spanish
- Maintain consistency with existing content language

### Accessibility

- Use semantic HTML elements (nav, header, main, article)
- Provide proper alt text for images
- ARIA labels for interactive elements

### Design System

- Dracula/Cyberpunk color palette with neon effects
- Font families: Inter (base), JetBrains Mono (code/headers)
- Custom utilities in global.css: `.neon-text`, `.neon-border`, `.section-spacing`
- CSS transitions: `transition: all 0.2s ease-in-out`
- Background colors: `--color-background`, `--color-surface`, `--color-elevated`
- Text colors: `--color-foreground`, `--color-muted`
- Accent colors: `--color-primary`, `--color-secondary`, `--color-accent`

### Content Collections

- `site`: Global site configuration (navLinks, socials, services, ctas, availability)
- `projects`: Portfolio projects with markdown content (frontmatter + body)
- `skills`: Skills organized by category in JSON files
- `experience`: Work experience loaded from YAML file
- `about`: Profile information loaded from YAML file

### Components Architecture

- `Navigation`: Top navigation with mobile menu
- `Hero`: Hero section with profile info and CTAs
- `Projects`: Featured projects grid section
- `About`: Skills section displaying capabilities
- `Contact`: Contact methods and availability status
- `ProjectCard`: Individual project display component
- `WorkCard`: Experience/workplace card component
- `Button`: Reusable button with variants (primary, outline, ghost, link)

### Layout Structure

- `base.astro`: Main layout with navigation and main content area
- No sidebar - uses top navigation bar
- Main content has full-width, no max-width constraint by default
