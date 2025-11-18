# 📘 MANUAL DO USUÁRIO - PMBOK 7 MANAGER PRO

## Sistema Completo de Gestão de Projetos com IA

**Versão:** 2.0
**Data:** Novembro 2024
**Desenvolvido com:** Google Gemini AI

---

## 📑 ÍNDICE

1. [Introdução](#introdução)
2. [Primeiros Passos](#primeiros-passos)
3. [Dashboard](#dashboard)
4. [Gestão de Projetos](#gestão-de-projetos)
5. [Gestão de Tarefas (Kanban)](#gestão-de-tarefas)
6. [Gestão de Riscos](#gestão-de-riscos)
7. [Gestão de Stakeholders](#gestão-de-stakeholders)
8. [WBS - Estrutura Analítica](#wbs)
9. [Gestão de Mudanças](#gestão-de-mudanças)
10. [Lições Aprendidas](#lições-aprendidas)
11. [Gestão de Entregas](#gestão-de-entregas)
12. [Métricas de Qualidade](#métricas-de-qualidade)
13. [Plano de Comunicações](#plano-de-comunicações)
14. [Gestão de Recursos](#gestão-de-recursos)
15. [Gestão de Custos & EVM](#gestão-de-custos)
16. [Gestão de Issues](#gestão-de-issues)
17. [Sistema de Relatórios](#sistema-de-relatórios)
18. [Assistente de IA](#assistente-de-ia)
19. [Backup e Restore](#backup-e-restore)
20. [Perguntas Frequentes](#perguntas-frequentes)

---

## 1. INTRODUÇÃO

### 1.1 O que é o PMBOK 7 Manager Pro?

O PMBOK 7 Manager Pro é um sistema completo de gestão de projetos baseado nas melhores práticas do **PMBOK® Guide 7ª Edição** (Project Management Body of Knowledge). É uma aplicação web que funciona 100% no navegador, com integração de Inteligência Artificial (Google Gemini) para auxiliar nas decisões e geração de conteúdo.

### 1.2 Principais Características

- ✅ **16 Módulos Completos** baseados no PMBOK 7
- ✅ **Assistente de IA** integrado (Google Gemini)
- ✅ **100% Offline** após carregamento inicial
- ✅ **Dados Locais** (armazenados no navegador)
- ✅ **Backup/Restore** completo
- ✅ **Bilíngue** (Português e Inglês)
- ✅ **Modo Escuro** disponível
- ✅ **Exportação PDF** de relatórios
- ✅ **Kanban Board** com drag & drop
- ✅ **Matrizes de Riscos e Stakeholders**

### 1.3 Requisitos do Sistema

**Navegadores Suportados:**
- Google Chrome 90+ (Recomendado)
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

**Requisitos:**
- Conexão com internet (apenas no primeiro acesso)
- JavaScript habilitado
- LocalStorage habilitado
- Mínimo 2 GB de RAM
- Resolução mínima: 1280x720

---

## 2. PRIMEIROS PASSOS

### 2.1 Como Abrir o Sistema

**Método 1 - Arquivo Local:**
1. Baixe o arquivo `index.html`
2. Salve em uma pasta de sua preferência
3. Clique duas vezes no arquivo
4. O sistema abre no navegador padrão

**Método 2 - Arrastar:**
1. Abra seu navegador
2. Arraste o arquivo `index.html` para a janela
3. Sistema carrega automaticamente

**Método 3 - Servidor Local:**
1. Use Python: `python -m http.server 8080`
2. Acesse: `http://localhost:8080/index.html`

### 2.2 Tela de Login

Ao abrir pela primeira vez, você verá três opções:

#### Opção 1: Modo Demo (Recomendado para Testes)
- Clique em **"Entrar no Modo Demo"**
- Acesso instantâneo
- Usuário temporário
- Ideal para conhecer o sistema

#### Opção 2: Criar Conta
1. Clique em **"Não tem conta? Registre-se"**
2. Preencha:
   - Nome Completo
   - Empresa
   - Cargo
   - Email
   - Senha
3. Clique em **"Criar Conta"**
4. Login automático

#### Opção 3: Fazer Login
1. Digite Email e Senha
2. Clique em **"Entrar"**

### 2.3 Interface Principal

Após login, você verá:

**Cabeçalho Superior:**
- Logo "PMBOK 7 Manager Pro"
- Seletor de Projetos
- Botão "+" para novo projeto
- Botão de Modo Escuro
- Seletor de Idioma (PT/EN)
- Nome do usuário
- Botão Sair

**Menu Lateral Esquerdo (16 itens):**
1. Dashboard
2. Projetos
3. Tarefas
4. Riscos
5. Stakeholders
6. WBS
7. Mudanças
8. Lições
9. Entregas
10. Qualidade
11. Comunicações
12. Recursos
13. Custos
14. Issues
15. Relatórios
16. Configurações

**Área Principal:**
- Conteúdo do módulo selecionado

**Botão Flutuante (Canto Inferior Direito):**
- 🤖 Assistente de IA

---

## 3. DASHBOARD

### 3.1 Visão Geral

O Dashboard é sua central de comando, oferecendo uma visão consolidada do projeto ativo.

### 3.2 Componentes do Dashboard

#### KPIs Principais
**Card 1 - Total de Tarefas:**
- Mostra quantidade total de tarefas do projeto
- Ícone: ☑️
- Cor: Azul

**Card 2 - Tarefas Concluídas:**
- Número de tarefas finalizadas
- Ícone: ✓
- Cor: Verde

**Card 3 - Riscos Abertos:**
- Quantidade de riscos não mitigados
- Ícone: ⚠️
- Cor: Laranja

**Card 4 - Stakeholders:**
- Total de stakeholders cadastrados
- Ícone: 👥
- Cor: Roxo

#### Gráficos

**Gráfico de Barras - Visão Geral do Projeto:**
- Eixo X: Riscos, Tarefas, Entregas, Stakeholders
- Eixo Y: Quantidade
- Atualização: Tempo real

**Gráfico de Pizza - Progresso das Tarefas:**
- Verde: Concluídas
- Amarelo: Em Progresso
- Vermelho: A Fazer
- Percentuais: Automáticos

#### Próximos Prazos
- Lista das 5 próximas tarefas com deadline
- Ordenação: Por data (mais próxima primeiro)
- Informações: Título, descrição, data, dias restantes
- Cor de alerta:
  - Verde: Mais de 7 dias
  - Amarelo: 3-7 dias
  - Vermelho: Menos de 3 dias

### 3.3 Ações do Dashboard

**Exportar PDF:**
- Clique no botão verde "Exportar PDF"
- Gera relatório completo do projeto
- Inclui: KPIs, riscos, stakeholders, dados básicos

**Sync Calendar:**
- Clique no botão roxo "Sync Calendar"
- Exporta eventos para Google Calendar
- Formato: JSON

---

## 4. GESTÃO DE PROJETOS

### 4.1 Criar Novo Projeto

**Passo 1:** Clique no botão **"+"** no cabeçalho superior

**Passo 2:** Preencha o formulário:

**Campos Obrigatórios:**
- **Nome do Projeto:** Título identificador
- **Descrição:** Objetivo e escopo resumido

**Campos Opcionais:**
- **Data de Início:** Data de kickoff
- **Data de Término:** Prazo final
- **Orçamento:** Valor disponível (Ex: R$ 100.000,00)
- **Status:** Planning / Active / On-Hold / Completed
- **Gerente:** Nome do gerente responsável

**Passo 3:** Clique em **"Salvar"**

**Resultado:** Projeto criado e automaticamente selecionado

### 4.2 Editar Projeto

1. Vá em **"Projetos"** no menu
2. Localize o projeto na lista
3. Clique em **"Editar"**
4. Modifique os campos desejados
5. Clique em **"Salvar"**

### 4.3 Selecionar Projeto Ativo

**Método 1 - Dropdown:**
1. No cabeçalho, clique em "Selecione um projeto"
2. Escolha o projeto desejado
3. Sistema atualiza todos os módulos

**Método 2 - Lista de Projetos:**
1. Vá em **"Projetos"**
2. Clique em **"Abrir"** no projeto desejado

### 4.4 Status de Projetos

**Planning (Planejamento):**
- Projeto em fase de planejamento
- Documentação em elaboração
- Cor: Cinza

**Active (Ativo):**
- Projeto em execução
- Equipe trabalhando
- Cor: Verde

**On-Hold (Pausado):**
- Projeto temporariamente suspenso
- Aguardando recursos ou aprovações
- Cor: Amarelo

**Completed (Concluído):**
- Projeto finalizado
- Entregas feitas
- Cor: Azul

---

## 5. GESTÃO DE TAREFAS

### 5.1 Visão Kanban (Padrão)

O sistema usa um quadro Kanban com 3 colunas:

**Coluna 1 - A Fazer (To Do):**
- Tarefas ainda não iniciadas
- Cor: Cinza claro

**Coluna 2 - Em Progresso (In Progress):**
- Tarefas sendo executadas
- Cor: Azul claro

**Coluna 3 - Concluído (Done):**
- Tarefas finalizadas
- Cor: Verde claro

### 5.2 Criar Nova Tarefa

**Passo 1:** Clique em **"+ Nova Tarefa"**

**Passo 2:** Preencha:
- **Título:** Nome da tarefa (obrigatório)
- **Descrição:** Detalhes da tarefa
- **Prioridade:** Baixa / Média / Alta
- **Status:** A Fazer / Em Progresso / Concluído
- **Prazo:** Data limite (opcional)
- **Horas Estimadas:** Duração prevista
- **Responsável:** Nome do executor
- **Tags:** Palavras-chave (separadas por vírgula)

**Passo 3:** Clique em **"Salvar"**

**Resultado:** Tarefa aparece no Kanban

### 5.3 Mover Tarefas no Kanban

**Método Drag & Drop:**
1. Clique e segure o card da tarefa
2. Arraste até a coluna desejada
3. Solte o card
4. Status atualiza automaticamente
5. Notificação de sucesso aparece

### 5.4 Editar Tarefa

1. No card da tarefa, clique em **"Editar"**
2. Modifique os campos
3. Clique em **"Salvar"**

### 5.5 Deletar Tarefa

1. No card da tarefa, clique em **"Deletar"**
2. Confirme a ação
3. Tarefa é removida permanentemente

### 5.6 Visualização em Lista

**Alternar para Lista:**
- Clique no botão **"📋 Lista"**

**Vantagens da Lista:**
- Visão tabular
- Todas as tarefas em uma página
- Colunas: Tarefa, Prioridade, Status, Responsável, Prazo, Ações
- Ordenação: Por data de criação
- Dropdown de status inline

**Alternar de Volta:**
- Clique em **"📊 Kanban"**

### 5.7 Filtros

**Filtrar por Prioridade:**
1. Use o dropdown **"Todas Prioridades"**
2. Selecione: Alta / Média / Baixa
3. Kanban mostra apenas tarefas filtradas

**Limpar Filtro:**
- Selecione **"Todas Prioridades"**

### 5.8 Indicadores de Prioridade

**Alta (High):**
- Badge vermelho
- Tarefas críticas
- Attenção imediata

**Média (Medium):**
- Badge amarelo
- Tarefas importantes
- Prazo moderado

**Baixa (Low):**
- Badge verde
- Tarefas não urgentes
- Pode aguardar

---

## 6. GESTÃO DE RISCOS

### 6.1 O que é um Risco?

Risco é um **evento ou condição incerta** que, se ocorrer, tem um **efeito positivo ou negativo** nos objetivos do projeto.

### 6.2 Criar Novo Risco

**Passo 1:** Clique em **"+ Novo Risco"**

**Passo 2:** Preencha:
- **Título do Risco:** Descrição curta
- **Descrição:** Detalhamento
- **Categoria:** Técnico / Financeiro / Operacional / Externo / Organizacional
- **Probabilidade (1-5):** Chance de ocorrer
- **Impacto (1-5):** Severidade se ocorrer
- **Status:** Aberto / Mitigado / Fechado
- **Plano de Mitigação:** Ações para reduzir/eliminar
- **Responsável:** Dono do risco

**Passo 3:** Clique em **"Salvar"**

### 6.3 Matriz de Probabilidade x Impacto

**Visualizar Matriz:**
- Clique em **"📊 Matriz"**

**Como Ler a Matriz:**
- **Eixo Vertical:** Probabilidade (1 a 5, de baixo para cima)
- **Eixo Horizontal:** Impacto (1 a 5, da esquerda para direita)

**Cores da Matriz:**
- **Verde:** Risco Baixo (Score 1-4)
- **Amarelo:** Risco Médio (Score 5-9)
- **Laranja:** Risco Alto (Score 10-14)
- **Vermelho:** Risco Crítico (Score 15-25)

**Score = Probabilidade × Impacto**

**Exemplo:**
- Probabilidade 4 × Impacto 5 = Score 20 (Crítico)

### 6.4 Categorias de Riscos

**Técnico:**
- Tecnologia não comprovada
- Complexidade técnica
- Requisitos mal definidos

**Financeiro:**
- Orçamento insuficiente
- Variação cambial
- Custos não previstos

**Operacional:**
- Processos inadequados
- Falta de recursos
- Dependências externas

**Externo:**
- Regulamentações
- Clima
- Mercado

**Organizacional:**
- Mudanças de prioridade
- Conflitos internos
- Rotatividade

### 6.5 Status de Riscos

**Aberto (Open):**
- Risco identificado
- Sem ação ainda
- Cor: Vermelho

**Mitigado (Mitigated):**
- Ações implementadas
- Risco reduzido
- Cor: Verde

**Fechado (Closed):**
- Risco não é mais aplicável
- Pode ter ocorrido ou não
- Cor: Cinza

### 6.6 Análise Qualitativa Automática

O sistema calcula automaticamente:

**Nível do Risco:**
- **Baixo:** Score 1-4
- **Médio:** Score 5-9
- **Alto:** Score 10-14
- **Crítico:** Score 15-25

**Badge de Nível:**
- Aparece na tabela de riscos
- Cor correspondente ao nível

---

## 7. GESTÃO DE STAKEHOLDERS

### 7.1 O que são Stakeholders?

Stakeholders são **indivíduos, grupos ou organizações** que podem **afetar ou serem afetados** pelo projeto.

### 7.2 Criar Novo Stakeholder

**Passo 1:** Clique em **"+ Novo Stakeholder"**

**Passo 2:** Preencha:
- **Nome Completo:** Nome do stakeholder
- **Cargo:** Posição na organização
- **Organização:** Empresa/departamento
- **Poder/Influência (1-5):** Capacidade de influenciar decisões
- **Interesse (1-5):** Nível de interesse no projeto
- **Contato:** Email ou telefone
- **Expectativas:** O que espera do projeto
- **Forma de Influência:** Como pode afetar o projeto

**Passo 3:** Clique em **"Salvar"**

**Resultado:** Sistema calcula automaticamente a **estratégia de engajamento**

### 7.3 Matriz Poder x Interesse

**Visualizar Matriz:**
- Clique em **"📊 Matriz"**

**Quadrantes da Matriz:**

**Q1 - Gerenciar de Perto (Alto Poder + Alto Interesse):**
- Stakeholders críticos
- Engajamento máximo
- Comunicação frequente
- Cor: Laranja

**Q2 - Manter Satisfeito (Alto Poder + Baixo Interesse):**
- Stakeholders influentes mas pouco interessados
- Manter informados sobre decisões chave
- Cor: Azul

**Q3 - Manter Informado (Baixo Poder + Alto Interesse):**
- Stakeholders interessados mas com pouca influência
- Comunicação regular
- Feedback importante
- Cor: Verde

**Q4 - Monitorar (Baixo Poder + Baixo Interesse):**
- Stakeholders com baixo impacto
- Comunicação mínima
- Monitoramento periódico
- Cor: Cinza

### 7.4 Estratégias de Engajamento

**Gerenciar (Manage):**
- Reuniões frequentes
- Envolvimento em decisões
- Feedback contínuo

**Satisfazer (Satisfy):**
- Mantê-los satisfeitos
- Consultar em decisões importantes
- Evitar surpresas

**Informar (Inform):**
- Comunicação regular
- Status reports
- Responder dúvidas

**Monitorar (Monitor):**
- Informação geral
- Sem necessidade de detalhes
- Comunicação esporádica

---

## 8. WBS - ESTRUTURA ANALÍTICA

### 8.1 O que é WBS?

WBS (Work Breakdown Structure) é a **decomposição hierárquica** do trabalho do projeto em componentes menores e mais gerenciáveis.

### 8.2 Como Usar o Módulo WBS

1. Vá em **"WBS"** no menu
2. Visualize a estrutura hierárquica do projeto
3. Use o botão **"+ Adicionar Item WBS"** para adicionar elementos

### 8.3 Estrutura Hierárquica

**Nível 1 - Fases Principais:**
- Iniciação
- Planejamento
- Execução
- Monitoramento
- Encerramento

**Nível 2 - Entregas por Fase:**
- Documentos
- Produtos
- Serviços

**Nível 3 - Pacotes de Trabalho:**
- Atividades específicas
- Tarefas executáveis
- Responsáveis definidos

### 8.4 Numeração Hierárquica

**Exemplo:**
```
1.0 Iniciação
  1.1 Termo de Abertura
    1.1.1 Definir objetivos
    1.1.2 Identificar stakeholders
  1.2 Kick-off Meeting
    1.2.1 Preparar apresentação
    1.2.2 Agendar reunião
```

---

## 9. GESTÃO DE MUDANÇAS

### 9.1 O que é uma Mudança?

Mudança é uma **modificação formal** no escopo, cronograma, custos ou qualquer outro aspecto do projeto após o baseline.

### 9.2 Solicitar Mudança

**Passo 1:** Clique em **"+ Solicitar Mudança"**

**Passo 2:** Descreva a mudança:
- Natureza da mudança
- Justificativa
- Impacto esperado
- Urgência

**Passo 3:** Aguarde aprovação

### 9.3 Status de Mudanças

**Pendente (Pending):**
- Aguardando análise
- Cor: Amarelo

**Aprovada (Approved):**
- Mudança autorizada
- Implementar
- Cor: Verde

**Rejeitada (Rejected):**
- Mudança não autorizada
- Manter baseline
- Cor: Vermelho

### 9.4 Fluxo de Mudança

```
Solicitação → Análise → Aprovação/Rejeição → Implementação → Verificação
```

---

## 10. LIÇÕES APRENDIDAS

### 10.1 O que são Lições Aprendidas?

São **conhecimentos adquiridos** durante o projeto que podem ser úteis para projetos futuros.

### 10.2 Registrar Lição Aprendida

**Passo 1:** Clique em **"+ Registrar Lição"**

**Passo 2:** Preencha:
- **Título:** Assunto da lição
- **Descrição:** O que foi aprendido
- **Categoria:** Técnica / Gerencial / Comunicação / Qualidade / etc.
- **Contexto:** Situação em que ocorreu
- **Recomendação:** O que fazer diferente

**Passo 3:** Clique em **"Salvar"**

### 10.3 Categorias Sugeridas

- Técnica
- Gerencial
- Comunicação
- Qualidade
- Riscos
- Stakeholders
- Recursos
- Cronograma
- Custos
- Escopo

### 10.4 Quando Registrar

**Durante o Projeto:**
- Após eventos significativos
- Resolução de problemas
- Mudanças importantes

**Ao Final do Projeto:**
- Reunião de retrospectiva
- Análise de desempenho
- Documentação final

---

## 11. GESTÃO DE ENTREGAS

### 11.1 O que são Entregas (Deliverables)?

Entregas são **produtos, resultados ou capacidades** únicas e verificáveis que devem ser produzidas para completar o projeto.

### 11.2 Cadastrar Entrega

**Passo 1:** Clique em **"+ Nova Entrega"**

**Passo 2:** Preencha:
- **Nome da Entrega:** Título
- **Descrição:** Detalhes
- **Prazo:** Data de entrega
- **Responsável:** Quem entrega
- **Status:** Não Iniciada / Em Progresso / Entregue
- **Critérios de Aceitação:** Como validar

**Passo 3:** Clique em **"Salvar"**

### 11.3 Status de Entregas

**Não Iniciada (Not Started):**
- Trabalho não começou
- Cor: Cinza

**Em Progresso (In Progress):**
- Desenvolvimento em andamento
- Cor: Amarelo

**Entregue (Delivered):**
- Entrega completa
- Pendente aprovação
- Cor: Azul

**Aprovada (Approved):**
- Validada e aceita
- Cor: Verde

### 11.4 Processo de Entrega

```
Planejamento → Desenvolvimento → Entrega → Validação → Aprovação
```

---

## 12. MÉTRICAS DE QUALIDADE

### 12.1 O que são Métricas de Qualidade?

São **medidas quantitativas** usadas para monitorar e controlar a qualidade do projeto.

### 12.2 Índice de Qualidade

**Cálculo Automático:**
- Sistema analisa diversos fatores
- Gera índice de 0% a 100%
- Atualização em tempo real

**Faixas de Qualidade:**
- **90-100%:** Excelente (Verde)
- **80-89%:** Bom (Azul)
- **70-79%:** Regular (Amarelo)
- **Abaixo de 70%:** Necessita atenção (Vermelho)

### 12.3 Padrões de Qualidade

**Checklist Básico:**
- ✓ Revisão de código implementada
- ✓ Testes automatizados configurados
- ✓ Documentação atualizada
- ✓ Code reviews realizados
- ✓ Padrões de codificação seguidos

### 12.4 Defeitos Encontrados

**Registro de Defeitos:**
- Quantidade total
- Defeitos críticos
- Taxa de resolução
- Tempo médio de correção

---

## 13. PLANO DE COMUNICAÇÕES

### 13.1 O que é um Plano de Comunicações?

Define **quem precisa de qual informação**, **quando** e **como** será comunicada.

### 13.2 Matriz de Comunicação

**Componentes:**

**Informação:**
- Tipo de informação a ser comunicada
- Exemplos: Status Report, Atas, Relatórios Financeiros

**Público:**
- Quem receberá a informação
- Exemplos: Stakeholders, Equipe, Diretoria

**Frequência:**
- Com que frequência
- Exemplos: Diária, Semanal, Mensal, Sob demanda

**Método:**
- Como será comunicado
- Exemplos: Email, Reunião, Portal, Chat

**Responsável:**
- Quem preparará a comunicação

### 13.3 Exemplos de Comunicações

**Status Report Semanal:**
- Público: Stakeholders principais
- Frequência: Toda sexta-feira
- Método: Email
- Responsável: Gerente de Projetos

**Daily Standup:**
- Público: Equipe
- Frequência: Diária (manhã)
- Método: Presencial/Video
- Responsável: Scrum Master

**Apresentação Executiva:**
- Público: Diretoria
- Frequência: Mensal
- Método: Reunião presencial
- Responsável: Gerente de Projetos

---

## 14. GESTÃO DE RECURSOS

### 14.1 Tipos de Recursos

**Recursos Humanos:**
- Membros da equipe
- Consultores
- Especialistas

**Recursos Materiais:**
- Equipamentos
- Softwares
- Infraestrutura

**Recursos Financeiros:**
- Orçamento
- Reservas
- Fundos

### 14.2 Métricas de Recursos

**Taxa de Alocação:**
- Percentual de utilização
- Ideal: 80-85%
- Acima de 95%: Sobrecarga
- Abaixo de 60%: Subutilização

**Disponibilidade:**
- Recursos disponíveis vs necessários
- Identificar gaps

---

## 15. GESTÃO DE CUSTOS & EVM

### 15.1 Terminologia

**BAC (Budget at Completion):**
- Orçamento total do projeto
- Baseline de custos

**AC (Actual Cost):**
- Custo real gasto até o momento
- Custos incorridos

**PV (Planned Value):**
- Valor planejado do trabalho
- Baseline de tempo

**EV (Earned Value):**
- Valor do trabalho realizado
- Progresso real

**CV (Cost Variance):**
- Variação de custo
- CV = EV - AC

**SV (Schedule Variance):**
- Variação de prazo
- SV = EV - PV

**CPI (Cost Performance Index):**
- Índice de desempenho de custos
- CPI = EV / AC

**SPI (Schedule Performance Index):**
- Índice de desempenho de prazo
- SPI = EV / PV

### 15.2 Interpretação dos Índices

**CPI:**
- CPI > 1.0: Abaixo do orçamento (BOM)
- CPI = 1.0: Dentro do orçamento
- CPI < 1.0: Acima do orçamento (RUIM)

**SPI:**
- SPI > 1.0: Adiantado (BOM)
- SPI = 1.0: No prazo
- SPI < 1.0: Atrasado (RUIM)

### 15.3 Dashboard de Custos

O módulo mostra:
- Orçamento total (BAC)
- Custo real (AC)
- Variação (CV)
- CPI e SPI calculados

**Exemplo:**
```
BAC: R$ 100.000,00
AC: R$ 65.000,00
CV: R$ 35.000,00 (positivo = bom)
CPI: 1.15 (15% abaixo do orçamento)
SPI: 1.08 (8% adiantado)
```

---

## 16. GESTÃO DE ISSUES

### 16.1 O que é um Issue?

Issue (problema) é uma **questão ou obstáculo** que está **acontecendo agora** e precisa de resolução imediata.

### 16.2 Diferença entre Risco e Issue

**Risco:**
- Evento futuro incerto
- Pode ou não ocorrer
- Requer planejamento preventivo

**Issue:**
- Está acontecendo agora
- Requer ação imediata
- Já está impactando o projeto

### 16.3 Registrar Issue

**Passo 1:** Clique em **"+ Registrar Issue"**

**Passo 2:** Preencha:
- **Título:** Descrição do problema
- **Descrição Detalhada:** O que está acontecendo
- **Prioridade:** Alta / Média / Baixa
- **Status:** Aberto / Em Resolução / Fechado
- **Responsável:** Quem resolverá
- **Prazo:** Quando deve ser resolvido

**Passo 3:** Clique em **"Salvar"**

### 16.4 Status de Issues

**Aberto (Open):**
- Problema identificado
- Aguardando ação
- Cor: Vermelho

**Em Resolução (In Progress):**
- Ações sendo tomadas
- Em trabalho
- Cor: Amarelo

**Fechado (Closed):**
- Problema resolvido
- Verificado
- Cor: Verde

---

## 17. SISTEMA DE RELATÓRIOS

### 17.1 Tipos de Relatórios

**Relatório Executivo:**
- Resumo geral
- KPIs principais
- Status e progresso
- Informações do projeto

**Relatório Detalhado:**
- Lista completa de tarefas
- Todos os status
- Prioridades
- Responsáveis

**Relatório de Riscos:**
- Todos os riscos cadastrados
- Probabilidade e impacto
- Status de mitigação
- Planos de ação

**Relatório de Stakeholders:**
- Lista de stakeholders
- Matriz poder/interesse
- Estratégias de engajamento
- Contatos

### 17.2 Gerar Relatório

**Passo 1:** Vá em **"Relatórios"**

**Passo 2:** Selecione o tipo de relatório no dropdown

**Passo 3:** Visualize na tela

**Passo 4 (Opcional):** Clique em **"Exportar PDF"**

### 17.3 Exportar PDF

**Processo:**
1. Sistema compila dados
2. Gera layout formatado
3. Cria arquivo PDF
4. Download automático

**Nome do Arquivo:**
```
projeto-[nome-do-projeto].pdf
```

**Conteúdo do PDF:**
- Cabeçalho com título
- Dados do projeto
- KPIs e métricas
- Riscos e stakeholders
- Data e responsável pela geração

---

## 18. ASSISTENTE DE IA

### 18.1 O que é o Assistente de IA?

É um **chatbot inteligente** integrado ao sistema, powered by **Google Gemini AI**, especializado em gestão de projetos e PMBOK 7.

### 18.2 Como Acessar

**Botão Flutuante:**
- Procure o botão 🤖 no canto inferior direito
- Clique para abrir o chat
- Interface lateral aparece

### 18.3 Funcionalidades do Chat

**Perguntas sobre PMBOK:**
- "O que é PMBOK 7?"
- "Explique as áreas de conhecimento"
- "Como fazer análise de valor agregado?"

**Sugestões de Projeto:**
- "Sugira tarefas para meu projeto"
- "Que riscos devo considerar?"
- "Como engajar stakeholders?"

**Melhores Práticas:**
- "Como fazer um kick-off meeting?"
- "Qual a melhor forma de documentar lições?"
- "Como criar um cronograma eficaz?"

**Análise Contextual:**
- Sistema envia automaticamente contexto do projeto ativo
- IA fornece respostas personalizadas
- Sugestões baseadas no seu projeto

### 18.4 Interface do Chat

**Cabeçalho:**
- Título: "Assistente IA PMBOK"
- Subtitle: "Powered by Google Gemini"
- Botão fechar (X)

**Área de Mensagens:**
- Mensagens do usuário: Balão azul (direita)
- Respostas da IA: Balão branco (esquerda)
- Scroll automático
- Histórico mantido na sessão

**Input:**
- Campo de texto para digitar
- Botão enviar (➤)
- Tecla Enter também envia
- Indicador de projeto ativo

**Loading:**
- Spinner animado
- Texto: "Pensando..."
- Aparece durante processamento

### 18.5 Dicas de Uso

**Seja Específico:**
❌ "Me fale sobre riscos"
✅ "Como identificar riscos técnicos em um projeto de software?"

**Use Contexto:**
- Tenha um projeto selecionado
- IA usa informações do projeto
- Respostas mais relevantes

**Pergunte Seguindo:**
- Pode fazer perguntas relacionadas
- IA mantém contexto da conversa
- Aprofunde temas

**Exemplos de Perguntas Boas:**
- "Quais são os 12 princípios do PMBOK 7?"
- "Como calcular o CPI e SPI no EVM?"
- "Explique a diferença entre risco e issue"
- "O que é uma matriz RACI?"
- "Como fazer análise de stakeholders?"

### 18.6 Limitações

- Requer conexão com internet
- API Key do Google Gemini necessária
- Histórico não persiste após fechar chat
- Limite de caracteres por mensagem

---

## 19. BACKUP E RESTORE

### 19.1 Por que Fazer Backup?

**Proteção de Dados:**
- Dados salvos apenas no navegador
- Pode ser perdido se limpar cache
- Backup garante recuperação

**Portabilidade:**
- Transferir dados entre dispositivos
- Migrar para outro navegador
- Compartilhar com equipe

### 19.2 Como Fazer Backup

**Passo 1:** Vá em **"Configurações"** no menu

**Passo 2:** Role até **"Backup & Restore"**

**Passo 3:** Clique em **"Exportar Dados (Backup)"**

**Passo 4:** Arquivo JSON é baixado automaticamente

**Nome do Arquivo:**
```
pmbok-backup-YYYY-MM-DD.json
```

**Exemplo:**
```
pmbok-backup-2024-11-18.json
```

### 19.3 O que é Incluído no Backup

**Dados Exportados:**
- ✅ Todos os projetos
- ✅ Todas as tarefas
- ✅ Todos os riscos
- ✅ Todos os stakeholders
- ✅ Mudanças registradas
- ✅ Lições aprendidas
- ✅ Entregas
- ✅ Métricas de qualidade
- ✅ Comunicações
- ✅ Recursos
- ✅ Termos de abertura
- ✅ Data de exportação

**Não Incluído:**
- ❌ Senhas de usuários
- ❌ Sessão de login
- ❌ Histórico do chat de IA

### 19.4 Como Restaurar Backup

**Passo 1:** Vá em **"Configurações"**

**Passo 2:** Role até **"Backup & Restore"**

**Passo 3:** Clique em **"Importar Dados (Restore)"**

**Passo 4:** Selecione o arquivo JSON do backup

**Passo 5:** Aguarde confirmação

**Resultado:**
- Notificação: "Dados Restaurados"
- Sistema atualiza automaticamente
- Dados importados substituem os atuais

### 19.5 Cuidados Importantes

⚠️ **ATENÇÃO:**
- Restore **SUBSTITUI** todos os dados atuais
- Faça backup antes de restaurar
- Verifique se o arquivo está correto
- Use apenas backups gerados pelo sistema

### 19.6 Recomendações

**Frequência de Backup:**
- Diário: Projetos críticos
- Semanal: Projetos ativos
- Mensal: Projetos de baixa atividade

**Armazenamento:**
- Salve em nuvem (Google Drive, Dropbox)
- Mantenha cópias locais
- Use versionamento (por data)

---

## 20. PERGUNTAS FREQUENTES

### 20.1 Geral

**P: O sistema precisa de internet?**
R: Apenas no primeiro acesso para carregar bibliotecas. Depois funciona offline. O chat de IA sempre precisa de internet.

**P: Meus dados ficam onde?**
R: Salvos localmente no seu navegador (LocalStorage). Não são enviados para servidores externos.

**P: Quantos projetos posso criar?**
R: Ilimitados, até o limite de armazenamento do navegador (geralmente 5-10 MB).

**P: Posso usar em vários dispositivos?**
R: Sim, mas precisa fazer backup/restore para transferir dados.

**P: O sistema é gratuito?**
R: Sim, 100% gratuito. Requer apenas API Key do Google Gemini para IA.

### 20.2 Projetos

**P: Como deletar um projeto?**
R: Atualmente não há opção de deletar. Mude o status para "Completed" para arquivar.

**P: Posso ter múltiplos projetos ativos?**
R: Sim, mas apenas um pode estar selecionado por vez.

**P: Há limite de tarefas por projeto?**
R: Não há limite técnico, mas desempenho pode ser afetado com milhares de tarefas.

### 20.3 Dados e Segurança

**P: Meus dados são seguros?**
R: Sim, ficam apenas no seu navegador. Nenhum dado é enviado para servidores.

**P: E se eu limpar o cache?**
R: Perderá todos os dados. Por isso é crucial fazer backup regular.

**P: Posso compartilhar meus projetos?**
R: Sim, exporte o backup e envie o arquivo JSON. Outra pessoa pode importar.

### 20.4 Assistente de IA

**P: A IA tem acesso aos meus dados?**
R: Não. A IA recebe apenas o contexto do projeto ativo quando você faz uma pergunta.

**P: Preciso pagar pela IA?**
R: A API do Google Gemini tem plano gratuito generoso. Verifique limites em: https://ai.google.dev/pricing

**P: A IA pode criar tarefas automaticamente?**
R: Atualmente não. Mas pode sugerir, e você copia/cola manualmente.

**P: Posso usar sem a IA?**
R: Sim, todos os módulos funcionam independentemente.

### 20.5 Problemas Técnicos

**P: Tela branca ao abrir**
R: Aguarde 20 segundos (primeiro carregamento). Verifique conexão com internet.

**P: Módulos aparecem vazios**
R: Certifique-se de ter um projeto selecionado no dropdown do cabeçalho.

**P: Dados não salvam**
R: Verifique se LocalStorage está habilitado. Em modo privado pode não funcionar.

**P: Chat de IA não responde**
R: Verifique API Key. Vá em Configurações e confirme que está preenchida.

**P: Erro ao exportar PDF**
R: Algumas extensões de navegador bloqueiam downloads. Desative ou adicione exceção.

### 20.6 Suporte

**P: Onde reportar bugs?**
R: Abra uma issue no GitHub: https://github.com/gustavohenrique55/Project-Management-7-PRO

**P: Há documentação adicional?**
R: Sim, consulte o README.md no repositório.

**P: Posso contribuir com o projeto?**
R: Sim! Faça um fork e envie pull requests.

---

## GLOSSÁRIO

**AC (Actual Cost):** Custo real gasto até o momento

**BAC (Budget at Completion):** Orçamento total aprovado

**CPI (Cost Performance Index):** Índice de desempenho de custos

**CV (Cost Variance):** Variação entre custo planejado e real

**Deliverable:** Entrega, produto ou resultado do projeto

**EV (Earned Value):** Valor agregado, trabalho realmente completado

**EVM (Earned Value Management):** Gestão de valor agregado

**Issue:** Problema atual que requer ação imediata

**KPI (Key Performance Indicator):** Indicador-chave de desempenho

**Kanban:** Método visual de gestão de trabalho

**Lesson Learned:** Lição aprendida durante o projeto

**Milestone:** Marco, evento significativo no cronograma

**PMBOK:** Project Management Body of Knowledge

**PV (Planned Value):** Valor planejado do trabalho

**RACI:** Responsible, Accountable, Consulted, Informed

**Risk:** Risco, evento incerto futuro

**SPI (Schedule Performance Index):** Índice de desempenho de prazo

**Stakeholder:** Parte interessada no projeto

**SV (Schedule Variance):** Variação de prazo

**WBS (Work Breakdown Structure):** Estrutura Analítica do Projeto

---

## REFERÊNCIAS

1. **PMBOK® Guide - 7ª Edição**
   Project Management Institute (PMI)

2. **Google Gemini AI Documentation**
   https://ai.google.dev/docs

3. **Agile Practice Guide**
   Project Management Institute (PMI)

4. **React Documentation**
   https://react.dev/

5. **Chart.js Documentation**
   https://www.chartjs.org/docs/

---

## HISTÓRICO DE VERSÕES

**Versão 2.0 - Novembro 2024**
- ✅ Integração Google Gemini AI
- ✅ Chat Assistente Flutuante
- ✅ 16 Módulos PMBOK 7 completos
- ✅ Sistema de Backup/Restore
- ✅ Exportação PDF
- ✅ Modo Escuro
- ✅ Bilíngue (PT/EN)

**Versão 1.0 - Novembro 2024**
- ✅ Lançamento inicial
- ✅ Módulos básicos
- ✅ Kanban Board
- ✅ Matriz de Riscos
- ✅ Matriz de Stakeholders

---

## CONTATO E SUPORTE

**Repositório GitHub:**
https://github.com/gustavohenrique55/Project-Management-7-PRO

**Issues (Bugs):**
https://github.com/gustavohenrique55/Project-Management-7-PRO/issues

**Documentação Online:**
https://github.com/gustavohenrique55/Project-Management-7-PRO/blob/main/README.md

---

## LICENÇA

MIT License - Livre para uso pessoal e comercial

---

**© 2024 PMBOK 7 Manager Pro**
**Desenvolvido com ❤️ e IA**
**Powered by Google Gemini**

---

*Manual completo e atualizado - Novembro 2024*
