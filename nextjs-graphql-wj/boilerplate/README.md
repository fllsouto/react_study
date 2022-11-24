# [Aprenda NextJS, GraphQL na prática!](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPlXj6USip_lCPzONUATJbE)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Notas do curso

- [Repo oficial](https://github.com/willianjusten/my-trips)
- [Getting started do Next.js](https://nextjs.org/docs/getting-started)
- [Editor config](https://editorconfig.org/)
- [Eslint](https://eslint.org/)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [prettier](https://prettier.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

### Instalação e configuração Prettier, Git hooks
Instalei o plugin do vscode (prettier-eslint) e apliquei essa [configuração aqui](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration).

Tive que instalar o [Husky](https://typicode.github.io/husky/#/) e o lint-staged.

### Instalação do Jest
Precisa instalar todas as [dependências](https://jestjs.io/pt-BR/docs/getting-started) para fazer a integração correta:

```bash
yarn add --dev @types/jest ts-jest @babel/preset-typescript babel-jest @babel/core @babel/preset-env jest
yarn add --dev @testing-library/react
yarn add --dev @testing-library/jest-dom
yarn add --dev jest-environment-jsdom
```

### Instalando o style-components

- https://styled-components.com/
- https://styled-components.com/docs/tooling#babel-plugin
- https://www.npmjs.com/package/@types/styled-components
- https://styled-components.com/docs/tooling#serverside-rendering
- https://styled-components.com/docs/advanced#nextjs
