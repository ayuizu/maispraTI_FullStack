As dependências utilizadas no projeto foram as seguintes:

BabelJS (faz transpilação JSX para JS, trabalha com protocolo que seja compativel com navegadores)
- @babel/core: núcleo do Babel, necessário para usar o Babel. Contém a lógica principal para transformar código JS
- babel-loader: loader para webpack. Permite usar Babel para transformar arquivos JavaScript durante o processo de build do Webpack.
- @babel/cli: facilita uso do Babel em linha de comando, compilar arquivos JavaScript usando Babel.
- @babel/preset-env: preset que traduz JS para browsers mais antigos
- @babel/preset-react: preset que traduz JSX do React para JS, compatível com browsers
Webpack
- webpack: empacotador de módulos estáticos
- webpack-dev-server: servidor padrão de desenvolvimento para o webpack
- html-webpack-plugin: simplifica a criação de arquivos HTML para servir os pacotes webpack
React
- react: é a biblioteca principal do React
- react-dom: renderiza os componentes do React
Vite(ferramenta de construção de projetos em React mais rápida e leve para projetos web)