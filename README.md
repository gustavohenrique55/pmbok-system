# 🚀 PMBOK 7 Manager Pro

Sistema Completo e Profissional de Gestão de Projetos baseado no PMBOK 7

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.0-61DAFB.svg)

## 📋 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Módulos](#módulos)
- [Screenshots](#screenshots)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre

O **PMBOK 7 Manager Pro** é um sistema web completo para gestão de projetos seguindo as melhores práticas do PMBOK (Project Management Body of Knowledge) versão 7. O sistema oferece uma interface intuitiva e moderna para gerenciar todos os aspectos do seu projeto.

### Principais Diferenciais

✅ **100% Baseado em PMBOK 7** - Seguindo as melhores práticas de gerenciamento de projetos
✅ **Interface Moderna e Intuitiva** - Design responsivo com Tailwind CSS
✅ **Sistema Kanban Integrado** - Gestão visual de tarefas
✅ **Matriz de Riscos Avançada** - Análise probabilidade vs impacto
✅ **Gestão de Stakeholders** - Matriz Poder/Interesse
✅ **Relatórios Completos** - Dashboards e gráficos em tempo real
✅ **Exportação PDF** - Relatórios profissionais para compartilhar
✅ **Multi-idioma** - Suporte para Português e Inglês
✅ **Modo Escuro** - Interface adaptável
✅ **100% Offline** - Armazenamento local com LocalStorage

## 📊 Status ISO 9000/9001

**Conformidade Atual:** 🟡 **70% Parcialmente Conforme**

- ✅ Sistema **100% funcional** para gestão de projetos
- ✅ Adequado para pequenas e médias empresas
- ✅ Não requer certificação ISO para uso
- ⚠️ Para certificação ISO 9001: requer módulos adicionais (ver `ISO-9001-COMPLIANCE.md`)

**Módulos ISO Implementados:**
- ✅ Política da Qualidade (ISO 5.2)
- ✅ Não Conformidades e Ações Corretivas (ISO 8.7, 10.2)

**Documentação ISO:**
- 📋 `ISO-9001-COMPLIANCE.md` - Análise detalhada de conformidade
- 📋 `ISO-CHECKLIST.md` - Checklist rápido e recomendações

## 🌟 Funcionalidades

### 🔐 Sistema de Autenticação
- Login e registro de usuários
- Modo demonstração (demo)
- Gerenciamento de perfil
- Múltiplos usuários

### 📊 Dashboard Executivo
- KPIs em tempo real
- Gráficos de progresso (Chart.js)
- Visão geral do projeto
- Alertas e notificações
- Próximos prazos

### 📝 Gestão de Projetos
- Criação e edição de projetos
- Múltiplos projetos por usuário
- Status do projeto (Planejamento, Ativo, Pausado, Concluído)
- Datas de início e fim
- Orçamento e gerente

### ✅ Sistema Kanban de Tarefas
- Quadro visual (To Do, In Progress, Done)
- Prioridades (Alta, Média, Baixa)
- Prazos e responsáveis
- Drag & drop (visual)
- Notificações de deadline

### ⚠️ Gestão de Riscos
- Registro de riscos
- Matriz Probabilidade x Impacto
- Score de risco (1-25)
- Categorização (Técnico, Financeiro, Operacional, Externo)
- Planos de mitigação
- Status (Aberto, Mitigado)

### 👥 Gestão de Stakeholders
- Cadastro completo de stakeholders
- Matriz Poder/Interesse (2x2)
- Estratégias de engajamento:
  - **Gerenciar de Perto** (Alto Poder + Alto Interesse)
  - **Manter Satisfeito** (Alto Poder + Baixo Interesse)
  - **Manter Informado** (Baixo Poder + Alto Interesse)
  - **Monitorar** (Baixo Poder + Baixo Interesse)

### 📈 Relatórios e Análises
- Taxa de conclusão de tarefas
- Análise de riscos
- Progresso do projeto
- Resumo executivo
- Exportação em PDF
- Integração com Google Calendar (JSON)

### 🔔 Sistema de Notificações
- Notificações em tempo real
- Alertas de prazos
- Avisos de tarefas atrasadas
- Auto-dismiss (5 segundos)

### 🎨 Personalização
- Modo claro/escuro
- Múltiplos idiomas (PT/EN)
- Interface responsiva
- Temas customizáveis

## 🛠️ Tecnologias

### Frontend
- **React 18** - Biblioteca JavaScript para UI
- **Babel Standalone** - Transpilação JSX no browser
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide Icons** - Biblioteca de ícones moderna
- **Chart.js** - Gráficos e visualizações

### Bibliotecas Adicionais
- **jsPDF** - Geração de PDFs
- **html2canvas** - Captura de tela para PDF

### Armazenamento
- **LocalStorage** - Persistência de dados no navegador

## 📦 Instalação

### Opção 1: Uso Direto (Recomendado)

1. Clone o repositório:
```bash
git clone https://github.com/gustavohenrique55/pmbok-system.git
cd pmbok-system
```

2. Abra o arquivo `index.html` no navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opção 2: Servidor Local

```bash
# Usando Python 3
python -m http.server 8000

# Usando PHP
php -S localhost:8000

# Usando Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

## 🎮 Uso

### Primeiro Acesso

1. **Modo Demo**: Clique em "Entrar no Modo Demo" para explorar o sistema
2. **Criar Conta**: Cadastre-se com email e senha
3. **Login**: Entre com suas credenciais

### Criar Primeiro Projeto

1. Clique no botão **"+ Novo Projeto"**
2. Preencha os dados:
   - Nome do projeto
   - Descrição
   - Data de início e fim
   - Orçamento
   - Status inicial
3. Clique em **"Salvar"**

### Gerenciar Tarefas

1. Navegue para **"Tarefas"** no menu lateral
2. Clique em **"Nova Tarefa"**
3. Preencha:
   - Título
   - Descrição
   - Prioridade
   - Data de vencimento
   - Responsável
4. Mova as tarefas entre colunas (To Do → In Progress → Done)

### Registrar Riscos

1. Acesse **"Riscos"**
2. Clique em **"Novo Risco"**
3. Defina:
   - Descrição do risco
   - Probabilidade (1-5)
   - Impacto (1-5)
   - Plano de mitigação
   - Responsável
   - Categoria

### Adicionar Stakeholders

1. Vá para **"Stakeholders"**
2. Clique em **"Novo Stakeholder"**
3. Cadastre:
   - Nome e cargo
   - Email e telefone
   - Nível de Poder (1-5)
   - Nível de Interesse (1-5)
   - Estratégia de engajamento

### Gerar Relatórios

1. Acesse **"Relatórios"**
2. Visualize métricas e KPIs
3. Clique em **"Exportar Relatório PDF"** para baixar
4. Use **"Exportar para Calendário"** para integração

## 📁 Estrutura de Arquivos

```
pmbok-system/
│
├── index.html          # Aplicação principal React
├── styles.css          # Estilos customizados
└── README.md           # Documentação
```

## 🎨 Módulos Implementados

### ✅ Módulos Completos

| Módulo | Status | Descrição |
|--------|--------|-----------|
| Autenticação | ✅ | Login, registro, demo |
| Dashboard | ✅ | KPIs, gráficos, métricas |
| Projetos | ✅ | CRUD completo de projetos |
| Tarefas Kanban | ✅ | Quadro visual 3 colunas |
| Riscos | ✅ | Matriz e análise de riscos |
| Stakeholders | ✅ | Matriz Poder/Interesse |
| Relatórios | ✅ | Dashboards e exportação |
| Notificações | ✅ | Sistema de alertas |
| Exportação PDF | ✅ | Relatórios em PDF |
| Multi-idioma | ✅ | PT-BR e EN |
| Modo Escuro | ✅ | Toggle claro/escuro |
| LocalStorage | ✅ | Persistência de dados |
| **Política da Qualidade** | ✅ | ISO 5.2 - Gestão da política |
| **Não Conformidades** | ✅ | ISO 8.7, 10.2 - Controle de NCs |

### 🚧 Roadmap Futuro (Opcional)

**Módulos PMBOK:**
- [ ] WBS (Work Breakdown Structure)
- [ ] Lições Aprendidas
- [ ] Gestão de Entregas (Deliverables)
- [ ] Gestão de Comunicações
- [ ] Gestão de Recursos Completa
- [ ] Project Charter
- [ ] Timeline/Gantt Chart

**Módulos ISO 9001 (para certificação):**
- [ ] Objetivos da Qualidade (ISO 6.2)
- [ ] Controle de Mudanças (ISO 6.3)
- [ ] Gestão de Fornecedores (ISO 8.4)
- [ ] Auditorias Internas (ISO 9.2)
- [ ] Análise Crítica pela Direção (ISO 9.3)
- [ ] Gestão de Competências (ISO 7.2)

**Melhorias Gerais:**
- [ ] Integração real com Google Calendar
- [ ] Backup/Restore de dados
- [ ] Exportação Excel
- [ ] Temas personalizados
- [ ] Autenticação avançada (OAuth)

## 🎯 Casos de Uso

### Para Gerentes de Projeto
- Gerenciar múltiplos projetos
- Acompanhar progresso em tempo real
- Identificar e mitigar riscos
- Gerar relatórios executivos

### Para Equipes
- Visualizar tarefas no Kanban
- Acompanhar prazos
- Colaborar em projetos
- Receber notificações

### Para Stakeholders
- Acompanhar status do projeto
- Visualizar relatórios
- Entender o engajamento necessário

### Para Estudantes
- Aprender PMBOK 7 na prática
- Simular gestão de projetos
- Praticar metodologias ágeis

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 🖥️ Desktop (1920x1080+)
- 💻 Laptop (1366x768+)
- 📱 Tablet (768x1024)
- 📱 Mobile (375x667+)

## 🔒 Segurança

⚠️ **IMPORTANTE**: Este sistema usa LocalStorage para armazenamento de dados. Para ambientes de produção, considere:

- Implementar backend com autenticação real
- Usar HTTPS
- Criptografar dados sensíveis
- Implementar validação server-side
- Adicionar rate limiting

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para a comunidade de gestão de projetos

## 🙏 Agradecimentos

- PMI (Project Management Institute) pelo PMBOK
- Comunidade React
- Tailwind CSS Team
- Chart.js Contributors

## 📞 Suporte

Para bugs, sugestões ou dúvidas:
- Abra uma [Issue](https://github.com/gustavohenrique55/pmbok-system/issues)
- Entre em contato através do repositório

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**

Feito com PMBOK 7 + React + Tailwind CSS
