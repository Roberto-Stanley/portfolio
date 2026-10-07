# Code Reviewer Memory

## Common Violations Observed

### Missing types.ts files
Both `container` and `aboutSection` components lack a `types.ts` file — a recurring violation.
Every component folder MUST have a `types.ts` alongside `index.tsx`, even for simple prop interfaces.

### Interface naming in component files
`container/index.tsx` defines `IProp` inline instead of in `types.ts`. Move all prop types/interfaces to `types.ts`.

## Tailwind Config (current state)
- Fonts: `font-primary` (Montserrat), `font-second` (Fira Code), `font-alternative` (Inter)
  - NOTE: system prompt says Roboto/Fira Code/Rouge Script but tailwind.config.ts says Montserrat/Fira Code/Inter — trust the actual config file
- Colors: `background`, `primary`, `primary-hover`, `primary-active`, `secondary`, `secondary-alt`, `secondary-hover`, `secondary-active`, `secondary-light`, `decorative`, `background-decorative`, `content.primary`, `content.secondary`
- Custom border widths: `border-3` (3px)
- Custom border radius: `rounded-4xl` (2rem), `rounded-5xl` (2.5rem)
- No `magic-mint` or `cards` colors in current config (may be outdated in system prompt)

## Architectural Patterns
- `Container` component: responsive max-width wrapper (`md:max-w-5xl xl:max-w-7xl mx-auto`)
- `AboutSection`: Server Component (async), fetches from Contentful via `getAboutSection()`
- Orbital decoration uses inline-grid with `col-start-1 row-start-1` for overlay layering
- Profile photo positioned with responsive `ml-[...]` / `mt-[...]` arbitrary values per breakpoint

## Component Structure
- Components live in `app/components/<componentName>/index.tsx`
- Section components live in `app/components/sections/<sectionName>/index.tsx`
- Contentful data fetching in `lib/contentful/<entryName>/index.ts` + `types.ts`

## Key Reviewed Files
- `app/components/container/index.tsx` — generic layout wrapper
- `app/components/sections/aboutSection/index.tsx` — About section, Server Component
