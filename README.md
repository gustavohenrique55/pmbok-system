# 🚀 Project Management 7 PRO

Sistema Completo de Gestão de Projetos baseado 100% no **PMBOK 7**
**Implementação completa dos 8 Domínios de Desempenho**

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![PMBOK](https://img.shields.io/badge/PMBOK-7-green.svg)
![React](https://img.shields.io/badge/React-18.0-61DAFB.svg)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)

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

O **PMBOK 7 Manager Pro** é o **primeiro sistema web 100% alinhado ao PMBOK 7** - focado nos **8 Domínios de Desempenho** e **12 Princípios** do PMI. Diferente de ferramentas tradicionais baseadas no PMBOK 6, este sistema adota a filosofia moderna de gestão de projetos: ágil, adaptativa e orientada a valor.

### 🎯 8 Domínios de Desempenho PMBOK 7 - TOTALMENTE IMPLEMENTADOS

| Domínio | Módulos Implementados | Status |
|---------|----------------------|--------|
| **1. Stakeholders** | Gestão de Stakeholders, Matriz Poder/Interesse | ✅ 100% |
| **2. Equipe** | Gestão de Recursos Humanos, Competências, Disponibilidade | ✅ 100% |
| **3. Abordagem de Desenvolvimento** | Ciclo de Vida, Abordagens (Preditiva/Ágil/Híbrida/Adaptativa) | ✅ 100% |
| **4. Planejamento** | Timeline/Gantt Chart, WBS, Project Charter | ✅ 100% |
| **5. Trabalho do Projeto** | Kanban de Tarefas, Entregas, Comunicações | ✅ 100% |
| **6. Entrega** | Gestão de Deliverables, Acompanhamento de Entregas | ✅ 100% |
| **7. Medição** | EVM, Análise Preditiva IA, Relatórios, Dashboards | ✅ 100% |
| **8. Incerteza** | Gestão de Riscos, Matriz Probabilidade x Impacto | ✅ 100% |

### Principais Diferenciais

✅ **100% Alinhado ao PMBOK 7** - 8 Domínios completos + 12 Princípios
✅ **Abordagens Múltiplas** - Preditiva, Ágil, Híbrida e Adaptativa
✅ **Timeline/Gantt Interativo** - Visualização temporal das tarefas
✅ **Gestão Completa de Equipe** - RH, habilidades, disponibilidade, custos
✅ **Earned Value Management (EVM)** - 11 métricas automáticas
✅ **IA Integrada (Gemini)** - Análises preditivas e recomendações
✅ **Interface Moderna** - Design responsivo com Tailwind CSS
✅ **Multi-idioma** - PT-BR e EN
✅ **100% Offline** - LocalStorage, sem necessidade de backend

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

### 📋 Project Charter (NOVO!)
- Termo de abertura do projeto
- Propósito e objetivos
- Escopo e entregas principais
- Orçamento e aprovador
- Documentação formal completa

### ✅ Sistema Kanban de Tarefas
- Quadro visual (To Do, In Progress, Done)
- Prioridades (Alta, Média, Baixa)
- Prazos e responsáveis
- Drag & drop (visual)
- Notificações de deadline

### 🌳 WBS - Work Breakdown Structure
- Estrutura analítica do projeto
- Hierarquia de entregas
- Items de nível 1 e subitems
- Responsáveis por item
- Status de progresso

### 🔄 Ciclo de Vida e Abordagem de Desenvolvimento (NOVO! - Domínio 3)
- **4 Abordagens de desenvolvimento disponíveis:**
  - **Preditiva (Cascata)** - Planejamento completo no início
  - **Ágil** - Entregas incrementais e iterativas
  - **Híbrida** - Combinação de preditiva e ágil
  - **Adaptativa** - Alta incerteza, experimentação contínua
- Gerenciamento de fases do ciclo de vida
- Definição de gates e marcos importantes
- Planejamento de entregas por fase
- Timeline visual de fases com status
- Consideração de complexidade e incerteza

### 📊 Timeline / Gantt Chart Interativo (NOVO! - Domínio 4)
- Visualização temporal de todas as tarefas
- Cálculo automático de duração em dias
- Barras coloridas por status (Todo/In Progress/Done)
- Métricas de progresso geral do projeto
- Modos de visualização: Dia, Semana, Mês
- Posicionamento automático baseado em datas
- Visão completa do cronograma do projeto

### 👥 Gestão de Recursos Humanos / Equipe (NOVO! - Domínio 2)
- Cadastro completo de membros da equipe
- Informações detalhadas: nome, cargo, email, telefone
- Departamento e habilidades técnicas
- **Disponibilidade (%)** - Quanto do tempo está alocado ao projeto
- **Custo por hora (R$)** - Para cálculos financeiros
- Data de início no projeto
- Métricas da equipe:
  - Total de membros
  - Disponibilidade média
  - Custo/hora médio
  - Número de departamentos envolvidos
- Cards visuais com avatar e informações completas

### 📦 Gestão de Entregas
- Controle de deliverables
- Tipos de entrega (Documento, Software, Relatório, etc.)
- Status e prazos
- Responsáveis
- Timeline de entregas

### 💬 Gestão de Comunicações (NOVO!)
- Plano de comunicação do projeto
- Tipos (Email, Reunião, Relatório, Apresentação)
- Frequência (Diária, Semanal, Mensal)
- Público-alvo
- Canais de comunicação

### 💡 Lições Aprendidas (NOVO!)
- Registro de aprendizados
- Categorização (Técnico, Gestão, Comunicação, Equipe)
- Fases do projeto
- Impacto (Alto, Médio, Baixo)
- Base de conhecimento

### 📊 Análise de Valor Agregado - EVM (NOVO!)
- **Earned Value Management** conforme PMBOK 7
- Cálculo automático de 11 métricas EVM:
  - **BAC** (Budget at Completion) - Orçamento total
  - **PV** (Planned Value) - Valor planejado
  - **EV** (Earned Value) - Valor agregado
  - **AC** (Actual Cost) - Custo real
  - **SV** (Schedule Variance) - Variação de prazo
  - **CV** (Cost Variance) - Variação de custo
  - **SPI** (Schedule Performance Index) - Índice de desempenho de prazo
  - **CPI** (Cost Performance Index) - Índice de desempenho de custo
  - **EAC** (Estimate at Completion) - Estimativa no término
  - **ETC** (Estimate to Complete) - Estimativa para completar
  - **VAC** (Variance at Completion) - Variação no término
- Dashboard visual com indicadores de performance
- Análise de tendências (cronograma e custos)
- Projeções para término do projeto
- **Análise preditiva com IA Gemini**
- Identificação automática de riscos financeiros e de cronograma
- Recomendações inteligentes baseadas em desempenho

### ⚠️ Gestão de Riscos
- Registro de riscos
- Matriz Probabilidade x Impacto
- Score de risco (1-25)
- Categorização (Técnico, Financeiro, Operacional, Externo)
- Planos de mitigação
- Status (Aberto, Mitigado)
- Análise com IA

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

### 💾 Backup e Restore
- Exportação completa de dados (JSON)
- Importação de backups
- Versionamento de dados
- Proteção contra perda de dados
- Migração entre ambientes

### 🤖 Assistente IA com Gemini
- Análise automática de riscos
- Geração de políticas de qualidade
- Análise de não conformidades
- Chat especializado em PMBOK 7 e ISO 9001
- Sugestões inteligentes

### 💰 Análise Preditiva de Custos com IA (NOVO!)
- Registro de custos do projeto (Reais e Planejados)
- Categorização (Mão de Obra, Materiais, Equipamentos, Serviços, Viagens)
- Dashboard com métricas financeiras em tempo real
- **Análise preditiva usando Gemini AI**
- Previsão de custo total do projeto
- Cálculo de probabilidade de estouro de orçamento
- Identificação de tendências de gastos
- Recomendações inteligentes para economia
- Alertas automáticos de risco financeiro
- Análise de categorias com maior risco

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
| **CORE DO SISTEMA** | | |
| Autenticação | ✅ | Login, registro, demo |
| Dashboard | ✅ | KPIs, gráficos, métricas |
| Projetos | ✅ | CRUD completo de projetos |
| Notificações | ✅ | Sistema de alertas |
| Multi-idioma | ✅ | PT-BR e EN |
| Modo Escuro | ✅ | Toggle claro/escuro |
| LocalStorage | ✅ | Persistência de dados |
| **PMBOK 7 - 8 DOMÍNIOS DE DESEMPENHO** | | |
| **Domínio 1 - Stakeholders** | | |
| Stakeholders | ✅ | Matriz Poder/Interesse completa |
| **Domínio 2 - Equipe** | | |
| Gestão de Equipe/RH | ✅ | Membros, habilidades, disponibilidade, custos |
| **Domínio 3 - Abordagem e Ciclo de Vida** | | |
| Ciclo de Vida | ✅ | 4 abordagens, fases, gates, timeline |
| **Domínio 4 - Planejamento** | | |
| Project Charter | ✅ | Termo de Abertura do Projeto |
| WBS | ✅ | Estrutura Analítica do Projeto |
| Timeline/Gantt Chart | ✅ | Visualização temporal interativa |
| **Domínio 5 - Trabalho do Projeto** | | |
| Tarefas Kanban | ✅ | Quadro visual 3 colunas |
| Gestão de Comunicações | ✅ | Plano de comunicação |
| Lições Aprendidas | ✅ | Registro de aprendizados |
| **Domínio 6 - Entrega** | | |
| Gestão de Entregas | ✅ | Controle de deliverables |
| **Domínio 7 - Medição** | | |
| Análise Valor Agregado (EVM) | ✅ | 11 métricas automáticas |
| Análise Preditiva Custos (IA) | ✅ | Previsões com Gemini AI |
| Relatórios e Dashboards | ✅ | KPIs e métricas em tempo real |
| Exportação PDF | ✅ | Relatórios profissionais |
| **Domínio 8 - Incerteza** | | |
| Gestão de Riscos | ✅ | Matriz Probabilidade x Impacto |
| **SISTEMA E FERRAMENTAS** | | |
| Backup/Restore | ✅ | Exportar/Importar dados completos |
| Assistente IA Gemini | ✅ | Chat especializado em PMBOK 7 |

### 🎯 Status PMBOK 7

**Cobertura:** 🟢 **100% - Totalmente Completo**

- ✅ **TODOS os 8 Domínios de Desempenho implementados**
- ✅ Sistema totalmente alinhado à filosofia moderna do PMBOK 7
- ✅ Suporte a abordagens Preditiva, Ágil, Híbrida e Adaptativa
- ✅ 20+ módulos focados exclusivamente em PMBOK 7
- ✅ IA integrada (Gemini) para análises preditivas
- ✅ 100% PMBOK 7 - sem módulos de outras normas
- ✅ Adequado para projetos de qualquer tamanho e complexidade

### 🚧 Roadmap Futuro (Infraestrutura)

**Cobertura PMBOK 7:**
- ✅ Timeline/Gantt Chart Interativo - **IMPLEMENTADO**
- ✅ Gestão de Recursos Humanos - **IMPLEMENTADO**
- ✅ Ciclo de Vida e Abordagem - **IMPLEMENTADO**
- ✅ **100% dos 8 Domínios de Desempenho** - **COMPLETO**

**Melhorias de Infraestrutura (Opcional):**
- [ ] Backend com Node.js/Express
- [ ] Banco de dados (PostgreSQL/MongoDB)
- [ ] Autenticação OAuth real
- [ ] API REST completa
- [ ] Multi-tenant/Multi-empresa
- [ ] Integração real com Google Calendar
- [ ] Exportação Excel (XLSX)
- [ ] Notificações por email
- [ ] Sincronização em nuvem

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
