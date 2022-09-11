# ts-template

A simple TypeScript template project

## ENV File

To store sensitive keys, create a `.env` file in the root of the project's directory. This template uses `dotenv-safe` and `gen-env-types` under-the-hood to throw errors when environment variables are missing or incorrectly typed. See `.env.example` for the expected keys/types.

## Commands

Build (compile typescript code to javascript)

```shell
yarn build
```

Start dev server

```shell
yarn dev
```

Add a Husky command

```shell
npx husky add .husky/hook-name "<<command>>"
```

Re-generate environment variable types

```shell
yarn gen-env
```
