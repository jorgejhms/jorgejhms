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
- Styles section uses `<style lang="scss">` with SCSS modules
- Client-side scripts go in `<script>` tags at bottom of file

### Imports

- Use relative imports for local components: `import Button from "../components/button.astro"`
- SCSS imports use `@use` syntax: `@use "../scss/_mixins" as mixin`
- Node modules: `import "../../node_modules/normalize.css/normalize.css"`

### Formatting

- Always run `bun run format` before committing
- Prettier handles all formatting (prettier-plugin-astro for .astro files)
- ESLint enforces code quality rules
- Follow Prettier default formatting (2-space indentation, single quotes, etc.)

### Naming Conventions

- Components: PascalCase (Button.astro, Header.astro)
- Variables/props: camelCase (menu, href, title)
- SCSS partials: underscore prefix (\_mixins.scss)
- CSS classes: kebab-case (card, mobile-menu-wrapper)
- IDs: kebab-case (mobile-menu-icon, logo_title)
- CSS variables: kebab-case with prefix (--color-green, --font-base)

### Types

- TypeScript strict mode enabled (follow astro/tsconfigs/strict)
- Define interfaces for complex props: `interface Props { href?: string }`
- Type Astro components explicitly: `const props: Props = Astro.props`
- Use TypeScript annotations for all function parameters and return types
- Avoid `any` type - use `unknown` when type is uncertain

### Styling

- Use SCSS with `lang="scss"` attribute
- Import mixins with `@use` alias: `@use "../scss/_mixins" as mixin`
- Use mixins for responsive design: `@include mixin.tablet-plus()`
- Access CSS custom properties with `var()`: `color: var(--color-green)`
- Nest selectors using SCSS syntax

### Patterns

- Define default props with destructuring in frontmatter
- Use `<slot />` for children content
- Named slots: `<slot name="image" />`
- Array mapping for lists: `{menu.map((item) => <li>{item.text}</li>)}`
- Event handlers in client scripts: `mobileMenuIcon.onclick = () => {}`

### Language

- Content text is in Spanish (e.g., "Contáctame", "Inicio")
- Code comments and variable names in English or Spanish
- Maintain consistency with existing content language

### Accessibility

- Use semantic HTML elements (nav, header, main, footer, article)
- Follow accessibility rules (eslint-plugin-jsx-a11y configured)
- Provide proper alt text for images

### Design System

- Dracula color palette with CSS custom properties
- Font families: Fira Sans (base), JetBrains Mono (header), Fira Code (special)
- Responsive breakpoint at 37.5rem (tablet-plus mixin)
- CSS transitions: `transition: all 0.2s ease-in-out`
