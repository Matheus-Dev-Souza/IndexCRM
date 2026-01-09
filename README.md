# CRM System - Enterprise Edition

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Backend](https://img.shields.io/badge/Backend-Java%20Spring%20Boot-green)

Um sistema de CRM (Customer Relationship Management) robusto e modular, desenvolvido com foco em alta performance, escalabilidade e uma experiência de usuário (UX) inspirada nas melhores plataformas do mercado (como SellFlux).

O objetivo é fornecer uma suíte completa para gestão de **Leads**, **Funis de Vendas**, **Automações** e **Relatórios Financeiros**.

---

## 🚀 Tecnologias Utilizadas

O projeto adota uma arquitetura moderna separando o Frontend (BFF - Backend for Frontend) da API de dados.

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS Modules (Zero runtime overhead)
- **Gerenciamento de Estado:** React Server Components & Hooks Nativos
- **Autenticação:** Server Actions + Middleware (Cookies HttpOnly)
- **Ícones:** Lucide React

### Backend (API)
- **Framework:** Java Spring Boot
- **Segurança:** Spring Security + JWT
- **Banco de Dados:** PostgreSQL (Planejado)

---

## ⚙️ Funcionalidades Principais

- [x] **Autenticação Segura:**
  - Login via Server Actions.
  - Proteção de rotas via Middleware (Next.js).
  - Persistência de sessão via Cookies Seguros (HttpOnly).
- [x] **Interface do Usuário (UI):**
  - Tema Escuro (Dark Mode) nativo.
  - Sidebar responsiva e retrátil.
  - Layout modular (Cards, Grades).
- [ ] **Dashboard Gerencial:**
  - Visualização de métricas (Leads, Faturamento).
  - Gráficos de desempenho (integração futura).
- [ ] **Gestão de Leads:**
  - Kanban de vendas (Drag & Drop).
  - Filtros avançados de contatos.

---

## 📂 Arquitetura do Projeto

A estrutura de pastas segue as boas práticas do Next.js 14+ com App Router:

```bash
src/
├── actions/         # Server Actions (Lógica de servidor no front)
│   ├── auth-actions.ts
│   └── client-actions.ts
├── app/             # Rotas e Páginas (App Router)
│   ├── (auth)/      # Grupo de rotas públicas (Login)
│   └── (dashboard)/ # Grupo de rotas protegidas (Deals, Config, etc)
├── components/
│   ├── layout/      # Sidebar, Header, Wrappers
│   └── ui/          # Componentes reutilizáveis (Botões, Cards)
├── lib/             # Utilitários e configurações (Axios, Helpers)
└── middleware.ts    # Controle de acesso e proteção de rotas