# Dieta.AI - Servidor

Este é o servidor backend do projeto Dieta.AI , construído com Node.js e Fastify. Ele utiliza a API do Gemini para gerar dietas personalizadas.

## Tecnologias Utilizadas

- Node.js
- Fastify
- TypeScript
- Zod
- Google Generative AI
- Cors

## Configuração

1. Clone o repositório
  
    ```bash
    git clone https://github.com/ericrocha97/dieta-ai-server.git
    ```

2. Navegue até a pasta do servidor:

   ```bash
   cd dieta-ai-server
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto do servidor baseado no `.env.example`:

   ```bash
   cp .env.example .env
   ```

5. Adicione sua chave API do Google Generative AI no arquivo `.env`:

   ```bash
   API_KEY=sua_chave_api_aqui
   ```

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento com recarga automática:

```bash
npm run dev
```

Este comando utiliza o `tsx` para executar o servidor TypeScript com suporte a recarga automática.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com recarga automática.

## Dependências Principais

- `fastify`: Framework web rápido e de baixo overhead
- `@fastify/cors`: Plugin Fastify para suporte a CORS
- `@google/generative-ai`: SDK do Google para IA generativa
- `zod`: Biblioteca de validação de esquema
- `tsx`: Executor de TypeScript com suporte a ESM

## Dependências de Desenvolvimento

- `@biomejs/biome`: Formatador e linter
- `typescript`: Suporte à linguagem TypeScript

## Notas Adicionais

Certifique-se de ter o Node.js instalado em sua máquina antes de executar o projeto. Recomenda-se a versão mais recente LTS do Node.js.

Para mais informações sobre as dependências e suas versões, consulte o arquivo `package.json`.
