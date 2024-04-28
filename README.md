# Streaming Interface

Este projeto foi criado no intuito de ser o mais aproximado possível de uma plataforma de streaming , onde é possível que o usuário veja alguns animes e filmes através dela , para este projeto foi criada uma api para conter todas as informações dos filmes e animes nela .

A maior dificuldade que eu encontrei foi a criação da api , onde eu usei o node , o express e o mongoDB , todo o projeto foi feito buscando a melhor experiência do usuário e a performace do site.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
