# Instruções

Baixar este repositório

Instalar o NVM:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

ou

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

Instalar o NodeJS versão 6.11.0

```sh
nvm install v6.11.0
```

Na pasta do projeto, executar:

```sh
gulp build
```

Para conferir o CSS e as alteções de interface, basta copiar o conteúdo do arquivo dist/js/main.min.js no console do navegador.