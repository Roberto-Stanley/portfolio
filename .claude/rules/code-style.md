# General instructions

- use 2 spaces as indentation
- name directories and files in `camelCase` and name types, classes, interfaces, and components in `PascalCase`
- could you please always destructure the props in the component and use them instead of using `props` directly
- please destructure objects when is possible

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

## Contentful entries instructions

- we need to create a directory for each contentful entry in the `lib/contentful` folder
- we also need to index.ts where we will make the request to get and export the data from contentful
- we need to create a types.ts file where we will define the types for the contentful entry

## Unit test instructions
- we need to create a directory for each component in the `__tests__` folder
- we need to create a test file for each component in the `__tests__` folder with the same name as the component
- we need to also create a `__mocks__` folder in the `__tests__` folder where we will create the mocks for the components
- we need to use `vitest` for the unit tests and `@testing-library/react` for the testing library
