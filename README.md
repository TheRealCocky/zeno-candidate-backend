#  Zeno Grupo - API de Gestão de Candidatos (Backend)

Este é o módulo Backend do ecossistema desenvolvido para o desafio técnico **ZENCODE (ZEN3579)**. Trata-se de uma API RESTful robusta, construída com foco em segurança, escalabilidade e seguindo a arquitetura **MVC**.

## Link da API em Produção
A API está online e operacional em: 
 [https://zeno-candidate-backend.onrender.com](https://zeno-candidate-backend.onrender.com)

---

## Tecnologias e Infraestrutura

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

##  Estrutura de Pastas (Padrão MVC)

O projeto foi organizado para separar as responsabilidades e facilitar a manutenção:

* **`src/config/`**: Configurações de conexão com o banco de dados (MongoDB Atlas).
* **`src/controllers/`**: Contém a lógica de negócio e o tratamento das requisições.
* **`src/models/`**: Definição dos esquemas (Schemas) de dados do banco de dados.
* **`src/routes/`**: Definição dos endpoints da API.
* **`src/types/`**: Definições de tipos TypeScript para garantir segurança em tempo de desenvolvimento.
* **`server.ts`**: Ponto de entrada da aplicação e configuração do servidor Express.

---

##  Alta Disponibilidade (Anti-Sleep Mode)
Para contornar a limitação de "hibernação" do plano gratuito do Render, implementamos uma integração com o **Uptime Robot**. O serviço realiza requisições periódicas (Pings) para a rota `/api/keep-alive` da API, garantindo que o servidor esteja sempre pronto para resposta imediata durante a avaliação técnica.

---

##  Como Rodar o Projeto Localmente

### 1. Clonar o Repositório
```bash
git clone [https://github.com/TheRealCocky/zeno-candidate-backend.git](https://github.com/TheRealCocky/zeno-candidate-backend.git)
cd zeno-candidate-backend

2. Configurar Variáveis de Ambiente
Crie um ficheiro .env na raiz do projeto com as seguintes chaves de segurança:

Bash

PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/zeno_db
3. Instalar Dependências
Bash

npm install
4. Iniciar o Servidor
Bash

npm run dev
 Segurança e Boas Práticas
CORS: Configurado para permitir apenas comunicações seguras do frontend autorizado.

Variáveis de Ambiente: Proteção total de credenciais sensíveis via .env.

Validação de Tipos: Uso de interfaces TypeScript em toda a camada de modelos e controladores.

Clean Code: Métodos assíncronos (async/await) com tratamento rigoroso de erros.
