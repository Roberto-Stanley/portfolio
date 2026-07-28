# General instructions
- use 2 spaces as indentation
- name directories and files in `camelCase` and name types, classes, interfaces, and components in `PascalCase` 

## components instructions
- the components for the frontend should be created in the `app/components` folder
- each component should be created into a separate folder with the same name as the component
- each component should be called `index.ts`
- each component should be exported as a default export
- the component should be written in TypeScript and React with TailwindCSS
- we have the color defined in the `tailwind.config.ts` file, use them instead of hardcoding colors
- always use the TailwindCSS classes instead of writing custom CSS, and let me know if there is not a tailwind class for your use case
- we need to have a file for each component
- we also need to have the types in a file called `types.ts` in the same folder as the component