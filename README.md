# 📋 Lista de Tarefas com Prisma
Aplicação fullstack de lista de tarefas (To-Do List) desenvolvida com Next.js + TypeScript + Prisma + PostgreSQL.

## 🚀 Funcionalidades

- Criar nova tarefa
- Editar tarefa
- Marcar como concluída ou em andamento
- Limpar todas as tarefas concluídas
- Contador de tarefas

### 🎯 Filtros:

- Todas
- Não finalizadas
- Concluídas
- Persistência com PostgreSQL via Prisma ORM

## Tecnologias Utilizadas
- Next.js
- React
- TypeScript
- Prisma ORM
- PostgreSQL
- TailwindCSS
- Server Actions

### Como rodar o projeto
```bash
git clone https://github.com/AndersonMeloo/ListaTarefas.git
cd ListaTarefas
```
Instalar dependências
```bash
npm install / npm i
```

### Configurar variáveis de ambiente
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/listatarefas"
```

### Rodar as migrations
```bash
npx prisma migrate dev
```

### Iniciar o projeto
```bash
npm run dev
```

## Conceitos Aplicados

- Server Actions (Next.js App Router)
- Separação de responsabilidades
- Organização de código por camadas
- CRUD completo com banco relacional
- Manipulação de estado no cliente
- Integração ORM + Banco de Dados
- Componentização com React
