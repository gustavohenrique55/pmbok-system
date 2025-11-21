# 📋 PLANO DE TESTES DETALHADO
## Project Manager System Pro

**Versão:** 1.0
**Data:** Novembro 2024
**Autor:** Gustavo Henrique

---

## 📑 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Dados de Teste](#dados-de-teste)
3. [Testes Funcionais por Módulo](#testes-funcionais-por-módulo)
4. [Testes de Integração](#testes-de-integração)
5. [Testes de Compatibilidade](#testes-de-compatibilidade)
6. [Testes de Segurança](#testes-de-segurança)
7. [Testes de Performance](#testes-de-performance)
8. [Checklist Final](#checklist-final)

---

## 📊 VISÃO GERAL

### Escopo de Testes

| Categoria | Quantidade | Tempo Estimado |
|-----------|------------|----------------|
| Módulos Funcionais | 16 módulos | 4-6 horas |
| Integrações | 3 sistemas | 2-3 horas |
| Compatibilidade | 5 navegadores + 3 dispositivos | 2 horas |
| Segurança | 15 verificações | 1 hora |
| Performance | 8 cenários | 1 hora |
| **TOTAL** | **~80 casos de teste** | **10-13 horas** |

### Critérios de Aprovação

- ✅ **Passar:** 100% dos testes críticos
- ✅ **Passar:** 95% dos testes importantes
- ⚠️ **Aceitável:** 90% dos testes normais
- ❌ **Bloquear lançamento:** Qualquer falha de segurança

---

## 🗃️ DADOS DE TESTE

### Projeto de Teste Principal

```javascript
// PROJETO: Construção Edifício Comercial Centro
{
  nome: "Edifício Comercial Centro",
  descricao: "Construção de edifício comercial de 12 andares no centro da cidade",
  dataInicio: "2024-01-15",
  dataFim: "2025-06-30",
  orcamento: 15000000.00,
  cliente: "Incorporadora ABC Ltda",
  gerente: "Carlos Silva",
  status: "Em Andamento"
}
```

### Tarefas de Teste

```javascript
// TAREFA 1: Fundação
{
  titulo: "Execução de Fundação Profunda",
  descricao: "Estacas de 40m de profundidade - 120 unidades",
  responsavel: "João Pereira",
  dataInicio: "2024-01-20",
  dataFim: "2024-03-15",
  prioridade: "Alta",
  status: "Concluído",
  progresso: 100,
  custoEstimado: 2500000.00,
  custoReal: 2650000.00
}

// TAREFA 2: Estrutura
{
  titulo: "Execução de Estrutura de Concreto",
  descricao: "Pilares, vigas e lajes - 12 pavimentos",
  responsavel: "Maria Santos",
  dataInicio: "2024-03-16",
  dataFim: "2024-08-30",
  prioridade: "Alta",
  status: "Em Andamento",
  progresso: 65,
  custoEstimado: 4500000.00,
  custoReal: 3200000.00
}

// TAREFA 3: Instalações
{
  titulo: "Instalações Elétricas e Hidráulicas",
  descricao: "Infraestrutura completa de instalações prediais",
  responsavel: "Pedro Costa",
  dataInicio: "2024-06-01",
  dataFim: "2024-10-30",
  prioridade: "Média",
  status: "Pendente",
  progresso: 0,
  custoEstimado: 1800000.00,
  custoReal: 0
}

// TAREFA 4: Acabamento
{
  titulo: "Acabamentos Internos",
  descricao: "Revestimentos, pintura, esquadrias",
  responsavel: "Ana Oliveira",
  dataInicio: "2024-09-01",
  dataFim: "2025-02-28",
  prioridade: "Média",
  status: "Pendente",
  progresso: 0,
  custoEstimado: 3500000.00,
  custoReal: 0
}

// TAREFA 5: Fachada
{
  titulo: "Execução de Fachada",
  descricao: "Pele de vidro e ACM",
  responsavel: "Roberto Lima",
  dataInicio: "2024-11-01",
  dataFim: "2025-04-30",
  prioridade: "Alta",
  status: "Pendente",
  progresso: 0,
  custoEstimado: 2700000.00,
  custoReal: 0
}
```

### Riscos de Teste

```javascript
// RISCO 1: Atraso Material
{
  titulo: "Atraso na Entrega de Aço",
  descricao: "Fornecedor principal com problemas de produção",
  categoria: "Fornecimento",
  probabilidade: "Alta",
  impacto: "Alto",
  status: "Ativo",
  mitigacao: "Contrato com fornecedor alternativo",
  responsavel: "Carlos Silva",
  dataIdentificacao: "2024-02-10"
}

// RISCO 2: Clima
{
  titulo: "Chuvas Intensas no Verão",
  descricao: "Previsão de chuvas acima da média para jan-mar",
  categoria: "Climático",
  probabilidade: "Média",
  impacto: "Médio",
  status: "Monitorando",
  mitigacao: "Plano de trabalho alternativo em dias chuvosos",
  responsavel: "João Pereira",
  dataIdentificacao: "2024-01-05"
}

// RISCO 3: Financeiro
{
  titulo: "Variação Cambial em Importações",
  descricao: "Elevadores e sistemas HVAC importados",
  categoria: "Financeiro",
  probabilidade: "Média",
  impacto: "Alto",
  status: "Ativo",
  mitigacao: "Hedge cambial contratado",
  responsavel: "Maria Santos",
  dataIdentificacao: "2024-03-20"
}
```

### Membros da Equipe

```javascript
// EQUIPE DE TESTE
[
  {
    nome: "Carlos Silva",
    email: "carlos.silva@empresa.com",
    cargo: "Gerente de Projeto",
    permissao: "Owner"
  },
  {
    nome: "Maria Santos",
    email: "maria.santos@empresa.com",
    cargo: "Engenheira Estrutural",
    permissao: "Editor"
  },
  {
    nome: "João Pereira",
    email: "joao.pereira@empresa.com",
    cargo: "Mestre de Obras",
    permissao: "Editor"
  },
  {
    nome: "Ana Oliveira",
    email: "ana.oliveira@empresa.com",
    cargo: "Arquiteta",
    permissao: "Viewer"
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@empresa.com",
    cargo: "Engenheiro Elétrico",
    permissao: "Editor"
  }
]
```

### Stakeholders de Teste

```javascript
[
  {
    nome: "Dr. Roberto Mendes",
    organizacao: "Incorporadora ABC",
    interesse: "Alto",
    influencia: "Alto",
    tipo: "Patrocinador"
  },
  {
    nome: "Eng. Fernanda Lima",
    organizacao: "Prefeitura Municipal",
    interesse: "Médio",
    influencia: "Alto",
    tipo: "Regulador"
  },
  {
    nome: "Sr. Antônio Barros",
    organizacao: "Associação de Moradores",
    interesse: "Alto",
    influencia: "Baixo",
    tipo: "Comunidade"
  }
]
```

---

## 🔧 TESTES FUNCIONAIS POR MÓDULO

### MÓDULO 1: Dashboard

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| D01 | Visualizar métricas do projeto | Projeto com 5 tarefas | Exibir: 5 tarefas, progresso médio, orçamento | ⬜ |
| D02 | Atualização em tempo real | Alterar status de tarefa | Dashboard atualiza automaticamente | ⬜ |
| D03 | Gráfico de progresso | Tarefas com diferentes % | Gráfico pizza mostra distribuição | ⬜ |
| D04 | Cards de resumo | Projeto completo | 4 cards: Tarefas, Progresso, Orçamento, Prazo | ⬜ |
| D05 | Alertas de prazo | Tarefa vencida | Exibir alerta vermelho | ⬜ |

**Procedimento de Teste D01:**
1. Criar projeto "Edifício Comercial Centro"
2. Adicionar as 5 tarefas de teste
3. Navegar para Dashboard
4. **Verificar:** Total de tarefas = 5
5. **Verificar:** Barra de progresso calculada corretamente
6. **Verificar:** Orçamento total = R$ 15.000.000,00

---

### MÓDULO 2: Tarefas

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| T01 | Criar tarefa completa | Tarefa "Fundação" com todos campos | Tarefa salva e aparece na lista | ⬜ |
| T02 | Editar tarefa existente | Alterar progresso 65% → 70% | Valor atualizado, histórico mantido | ⬜ |
| T03 | Excluir tarefa | Selecionar tarefa e excluir | Confirmação, remoção da lista | ⬜ |
| T04 | Filtrar por status | Filtro "Em Andamento" | Mostrar apenas tarefas em andamento | ⬜ |
| T05 | Ordenar por data | Ordenar por data fim | Lista ordenada cronologicamente | ⬜ |
| T06 | Buscar tarefa | Buscar "Estrutura" | Encontrar tarefa de estrutura | ⬜ |
| T07 | Alterar prioridade | Mudar de Média → Alta | Cor do indicador muda para vermelho | ⬜ |
| T08 | Dependências | Tarefa B depende de A | Não iniciar B até A concluir | ⬜ |

**Procedimento de Teste T01:**
1. Clicar em "Nova Tarefa"
2. Preencher:
   - Título: "Execução de Fundação Profunda"
   - Descrição: "Estacas de 40m de profundidade - 120 unidades"
   - Responsável: João Pereira
   - Data Início: 20/01/2024
   - Data Fim: 15/03/2024
   - Prioridade: Alta
   - Custo Estimado: R$ 2.500.000,00
3. Clicar "Salvar"
4. **Verificar:** Tarefa aparece na lista
5. **Verificar:** Todos os dados corretos
6. **Verificar:** Notificação de sucesso

---

### MÓDULO 3: Cronograma (Gantt)

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| G01 | Visualizar Gantt | 5 tarefas com datas | Barras horizontais proporcionais | ⬜ |
| G02 | Zoom timeline | Zoom in/out | Escala ajusta (dias/semanas/meses) | ⬜ |
| G03 | Arrastar barra | Mover tarefa 5 dias | Datas atualizadas automaticamente | ⬜ |
| G04 | Caminho crítico | Tarefas com dependências | Destacar em vermelho | ⬜ |
| G05 | Marco do projeto | Adicionar marco | Losango na timeline | ⬜ |

**Procedimento de Teste G01:**
1. Navegar para módulo Cronograma
2. Verificar que as 5 tarefas aparecem
3. **Verificar:** Barra "Fundação" de 20/01 a 15/03 (54 dias)
4. **Verificar:** Barra "Estrutura" de 16/03 a 30/08 (168 dias)
5. **Verificar:** Cores diferentes por status
6. **Verificar:** Scroll horizontal funciona

---

### MÓDULO 4: Riscos

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| R01 | Cadastrar risco | Risco "Atraso Aço" | Risco salvo com matriz P×I | ⬜ |
| R02 | Matriz de riscos | 3 riscos diferentes | Matriz 3x3 com posicionamento | ⬜ |
| R03 | Plano de mitigação | Adicionar ações | Ações listadas no risco | ⬜ |
| R04 | Alterar status | Ativo → Mitigado | Cor e contador atualizam | ⬜ |
| R05 | Histórico do risco | Ver alterações | Timeline de mudanças | ⬜ |

**Procedimento de Teste R01:**
1. Navegar para módulo Riscos
2. Clicar "Novo Risco"
3. Preencher dados do Risco 1 (Atraso Aço)
4. Selecionar: Probabilidade = Alta, Impacto = Alto
5. **Verificar:** Score calculado = 9 (vermelho)
6. **Verificar:** Aparece no quadrante superior direito da matriz

---

### MÓDULO 5: Orçamento

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| O01 | Cadastrar orçamento | R$ 15.000.000,00 | Valor salvo e exibido | ⬜ |
| O02 | Lançar despesa | R$ 2.650.000,00 fundação | Saldo atualizado | ⬜ |
| O03 | Gráfico previsto×real | Valores das 5 tarefas | Barras comparativas | ⬜ |
| O04 | Alerta de estouro | Custo real > estimado | Indicador vermelho | ⬜ |
| O05 | Exportar relatório | Gerar PDF orçamento | Download PDF formatado | ⬜ |

**Procedimento de Teste O02:**
1. Navegar para Orçamento
2. Selecionar tarefa "Fundação"
3. Lançar custo real: R$ 2.650.000,00
4. **Verificar:** Variação = +R$ 150.000,00 (+6%)
5. **Verificar:** Indicador amarelo/vermelho de alerta
6. **Verificar:** Saldo disponível atualizado

**Dados para Teste de Orçamento:**
| Tarefa | Estimado | Real | Variação |
|--------|----------|------|----------|
| Fundação | 2.500.000 | 2.650.000 | +6% |
| Estrutura | 4.500.000 | 3.200.000 | -29% (em andamento) |
| Instalações | 1.800.000 | 0 | - |
| Acabamento | 3.500.000 | 0 | - |
| Fachada | 2.700.000 | 0 | - |
| **TOTAL** | **15.000.000** | **5.850.000** | **39% executado** |

---

### MÓDULO 6: Equipe

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| E01 | Adicionar membro | Carlos Silva (Owner) | Membro na lista com avatar | ⬜ |
| E02 | Definir permissões | Maria = Editor | Acesso de edição apenas | ⬜ |
| E03 | Remover membro | Remover Ana | Confirmação e remoção | ⬜ |
| E04 | Ver alocação | Tarefas por pessoa | Lista de tarefas do membro | ⬜ |
| E05 | Enviar convite | Email para novo membro | Email enviado (Firebase) | ⬜ |

**Procedimento de Teste E02:**
1. Adicionar Maria Santos como Editor
2. Fazer login como Maria
3. Tentar criar tarefa → **Deve permitir**
4. Tentar excluir projeto → **Deve bloquear**
5. Tentar alterar permissões → **Deve bloquear**

---

### MÓDULO 7: Documentos

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| DC01 | Upload documento | PDF 5MB | Upload com progresso | ⬜ |
| DC02 | Categorizar | Categoria "Projetos" | Filtro funcionando | ⬜ |
| DC03 | Versionar | Upload nova versão | Histórico mantido | ⬜ |
| DC04 | Download | Baixar documento | Download inicia | ⬜ |
| DC05 | Limite de tamanho | Arquivo 50MB | Erro de limite | ⬜ |

---

### MÓDULO 8: Comunicação

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| C01 | Enviar mensagem | "Reunião às 14h" | Mensagem no feed | ⬜ |
| C02 | Mencionar usuário | "@Maria urgente" | Notificação para Maria | ⬜ |
| C03 | Anexar arquivo | Imagem na mensagem | Preview exibido | ⬜ |
| C04 | Histórico | Ver mensagens antigas | Scroll infinito | ⬜ |

---

### MÓDULO 9: Stakeholders

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| S01 | Cadastrar stakeholder | Dr. Roberto (Patrocinador) | Salvo com classificação | ⬜ |
| S02 | Matriz poder×interesse | 3 stakeholders | Posicionamento correto | ⬜ |
| S03 | Plano de engajamento | Estratégia por stakeholder | Ações definidas | ⬜ |

**Dados da Matriz:**
| Stakeholder | Interesse | Influência | Quadrante |
|-------------|-----------|------------|-----------|
| Dr. Roberto | Alto | Alto | Gerenciar de Perto |
| Eng. Fernanda | Médio | Alto | Manter Satisfeito |
| Sr. Antônio | Alto | Baixo | Manter Informado |

---

### MÓDULO 10: Qualidade

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| Q01 | Criar checklist | 10 itens de qualidade | Lista com checkbox | ⬜ |
| Q02 | Registrar inspeção | Aprovado/Reprovado | Status atualizado | ⬜ |
| Q03 | Gerar relatório | Métricas de qualidade | PDF com indicadores | ⬜ |

**Checklist de Teste:**
```
☐ Prumo dos pilares (tolerância ±5mm)
☐ Nivelamento das lajes (tolerância ±10mm)
☐ Cobrimento de armadura (mínimo 3cm)
☐ Rastreabilidade do concreto (notas fiscais)
☐ Ensaios de resistência (fck 30MPa)
☐ Estanqueidade das instalações
☐ Continuidade elétrica
☐ Acabamento superficial
☐ Esquadro de alvenarias
☐ Caimento de pisos
```

---

### MÓDULO 11: Aquisições

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| A01 | Cadastrar fornecedor | "Aços Brasil Ltda" | Fornecedor salvo | ⬜ |
| A02 | Criar pedido | 50 ton aço CA-50 | Pedido com valor | ⬜ |
| A03 | Acompanhar entrega | Data prevista | Status de entrega | ⬜ |
| A04 | Avaliar fornecedor | Nota 1-5 | Média calculada | ⬜ |

**Dados de Fornecedores:**
| Fornecedor | Material | Valor | Prazo |
|------------|----------|-------|-------|
| Aços Brasil | Aço CA-50 | R$ 450.000 | 15 dias |
| Cimento Sul | Cimento CP-II | R$ 280.000 | 7 dias |
| Elevadores Tech | Elevadores | R$ 1.200.000 | 90 dias |

---

### MÓDULO 12: Relatórios

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| RL01 | Relatório executivo | Projeto completo | PDF 2-3 páginas | ⬜ |
| RL02 | Relatório detalhado | Todas as tarefas | PDF completo | ⬜ |
| RL03 | Exportar Excel | Dados do projeto | .xlsx válido | ⬜ |
| RL04 | Gráficos incluídos | Relatório com charts | Imagens renderizadas | ⬜ |

---

### MÓDULO 13: Lições Aprendidas

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| L01 | Registrar lição | "Contratar backup" | Lição categorizada | ⬜ |
| L02 | Buscar lições | Buscar "fornecedor" | Resultados relevantes | ⬜ |
| L03 | Aplicar em projeto | Vincular a projeto | Referência cruzada | ⬜ |

**Lição de Teste:**
```javascript
{
  titulo: "Importância de Fornecedor Alternativo",
  categoria: "Aquisições",
  descricao: "O atraso do fornecedor principal de aço causou 15 dias de atraso. Ter contrato com fornecedor alternativo mitigou impacto.",
  recomendacao: "Sempre manter pelo menos 2 fornecedores qualificados para itens críticos",
  projeto: "Edifício Comercial Centro",
  data: "2024-03-01"
}
```

---

### MÓDULO 14: Calendário

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| CL01 | Ver mês | Novembro 2024 | Calendário com eventos | ⬜ |
| CL02 | Criar evento | "Reunião semanal" | Evento no calendário | ⬜ |
| CL03 | Evento recorrente | Toda segunda 9h | Múltiplas ocorrências | ⬜ |
| CL04 | Ver tarefas | Datas das tarefas | Tarefas no calendário | ⬜ |

---

### MÓDULO 15: Chatbot IA

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| CH01 | Configurar API | Chave Gemini válida | Conexão estabelecida | ⬜ |
| CH02 | Pergunta simples | "Qual o progresso?" | Resposta contextual | ⬜ |
| CH03 | Sugestão de ação | "O que priorizar?" | Recomendação baseada em dados | ⬜ |
| CH04 | API inválida | Chave incorreta | Mensagem de erro clara | ⬜ |
| CH05 | Histórico chat | Várias mensagens | Conversa mantida | ⬜ |

**Perguntas de Teste:**
1. "Qual o status atual do projeto?"
2. "Quais riscos estão ativos?"
3. "Quanto do orçamento foi utilizado?"
4. "Quais tarefas estão atrasadas?"
5. "Sugira ações para o risco de atraso de material"

---

### MÓDULO 16: Configurações

| ID | Caso de Teste | Dados de Entrada | Resultado Esperado | Status |
|----|---------------|------------------|-------------------|--------|
| CF01 | Alterar tema | Dark mode | Interface escura | ⬜ |
| CF02 | Configurar Firebase | Credenciais válidas | Conexão OK | ⬜ |
| CF03 | Conectar ClickUp | API Key válida | Sincronização ativa | ⬜ |
| CF04 | Backup local | Exportar dados | JSON baixado | ⬜ |
| CF05 | Restaurar backup | Importar JSON | Dados restaurados | ⬜ |

---

## 🔗 TESTES DE INTEGRAÇÃO

### Firebase (Colaboração em Tempo Real)

| ID | Caso de Teste | Procedimento | Resultado Esperado | Status |
|----|---------------|--------------|-------------------|--------|
| FB01 | Configurar Firebase | Inserir config do console | "Conectado" exibido | ⬜ |
| FB02 | Login email/senha | Criar conta e logar | Usuário autenticado | ⬜ |
| FB03 | Login Google | OAuth Google | Usuário autenticado | ⬜ |
| FB04 | Sync criar projeto | Criar projeto | Aparece no Firestore | ⬜ |
| FB05 | Sync editar tarefa | Editar e verificar outro dispositivo | Atualização em <3s | ⬜ |
| FB06 | Offline mode | Desconectar internet | Funciona localmente | ⬜ |
| FB07 | Reconexão | Reconectar | Dados sincronizam | ⬜ |
| FB08 | Permissões | Editor tenta excluir projeto | Bloqueado | ⬜ |

**Configuração Firebase de Teste:**
```javascript
const firebaseConfig = {
  apiKey: "SUA-API-KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

**Procedimento FB05 (Sincronização):**
1. Abrir sistema em 2 navegadores diferentes
2. Logar como Carlos (Browser 1) e Maria (Browser 2)
3. No Browser 1: Alterar progresso da tarefa para 70%
4. **Verificar Browser 2:** Atualização aparece em menos de 3 segundos
5. **Verificar:** Notificação de mudança no Browser 2

---

### ClickUp (Sincronização de Tarefas)

| ID | Caso de Teste | Procedimento | Resultado Esperado | Status |
|----|---------------|--------------|-------------------|--------|
| CU01 | Conectar API | Inserir API Key | "Conectado ao ClickUp" | ⬜ |
| CU02 | Importar tarefas | ID da lista ClickUp | Tarefas importadas | ⬜ |
| CU03 | Exportar tarefas | Enviar para ClickUp | Tarefas criadas no ClickUp | ⬜ |
| CU04 | Mapear status | Status PM → ClickUp | Conversão correta | ⬜ |
| CU05 | Sincronização bidirecional | Alterar em ambos | Dados consistentes | ⬜ |
| CU06 | API inválida | Chave errada | Erro claro | ⬜ |

**Mapeamento de Status:**
| Project Manager | ClickUp |
|-----------------|---------|
| Pendente | to do |
| Em Andamento | in progress |
| Concluído | complete |
| Cancelado | closed |

---

### Trello (Sincronização de Cards)

| ID | Caso de Teste | Procedimento | Resultado Esperado | Status |
|----|---------------|--------------|-------------------|--------|
| TR01 | Conectar API | Inserir API Key e Token | "Conectado ao Trello" | ⬜ |
| TR02 | Importar cards | ID do board Trello | Cards importados como tarefas | ⬜ |
| TR03 | Exportar tarefas | Enviar para Trello | Cards criados no board | ⬜ |
| TR04 | Board inválido | ID errado | Erro claro | ⬜ |
| TR05 | Token expirado | Token inválido | Mensagem de erro | ⬜ |

**Como obter credenciais:**
1. API Key: https://trello.com/app-key
2. Token: Link na mesma página
3. Board ID: Na URL após /b/

---

### Microsoft Planner (Sincronização de Tarefas)

| ID | Caso de Teste | Procedimento | Resultado Esperado | Status |
|----|---------------|--------------|-------------------|--------|
| PL01 | Conectar Graph API | Inserir Access Token | "Conectado ao Planner" | ⬜ |
| PL02 | Importar tarefas | ID do plano | Tarefas importadas | ⬜ |
| PL03 | Exportar tarefas | Enviar para Planner | Tarefas criadas no plano | ⬜ |
| PL04 | Token expirado | Token inválido/expirado | Erro claro | ⬜ |
| PL05 | Plan ID inválido | ID errado | Mensagem de erro | ⬜ |

**Como obter credenciais:**
1. Access Token: https://developer.microsoft.com/graph/graph-explorer
2. Plan ID: GET /me/planner/plans no Graph Explorer

---

### MS Project (Import/Export XML)

| ID | Caso de Teste | Procedimento | Resultado Esperado | Status |
|----|---------------|--------------|-------------------|--------|
| MS01 | Exportar XML | Clicar exportar | Download .xml válido | ⬜ |
| MS02 | Abrir no MS Project | Importar XML gerado | Projeto abre corretamente | ⬜ |
| MS03 | Importar do MS Project | Upload .xml | Tarefas importadas | ⬜ |
| MS04 | Datas preservadas | Comparar datas | Datas idênticas | ⬜ |
| MS05 | Hierarquia | Tarefas com subtarefas | Estrutura mantida | ⬜ |
| MS06 | XML inválido | Upload arquivo corrompido | Erro tratado | ⬜ |

**Procedimento MS01-MS02:**
1. Com projeto de teste carregado, clicar "Exportar MS Project"
2. Salvar arquivo "edificio-comercial.xml"
3. Abrir Microsoft Project
4. File → Open → Selecionar XML
5. **Verificar:** 5 tarefas aparecem
6. **Verificar:** Datas início/fim corretas
7. **Verificar:** Gantt renderiza corretamente

---

## 🌐 TESTES DE COMPATIBILIDADE

### Navegadores Desktop

| Navegador | Versão Mínima | Testes | Status |
|-----------|---------------|--------|--------|
| Chrome | 90+ | Todos os módulos | ⬜ |
| Firefox | 88+ | Todos os módulos | ⬜ |
| Edge | 90+ | Todos os módulos | ⬜ |
| Safari | 14+ | Todos os módulos | ⬜ |
| Opera | 76+ | Funcionalidades básicas | ⬜ |

### Dispositivos Móveis

| Dispositivo | Sistema | Testes | Status |
|-------------|---------|--------|--------|
| iPhone 12+ | iOS 14+ | Navegação, visualização | ⬜ |
| Samsung Galaxy S20+ | Android 11+ | Navegação, edição | ⬜ |
| iPad | iPadOS 14+ | Todas funcionalidades | ⬜ |

### Checklist de Responsividade

| Elemento | Desktop | Tablet | Mobile | Status |
|----------|---------|--------|--------|--------|
| Menu lateral | Expandido | Colapsável | Drawer | ⬜ |
| Tabelas | Completas | Scroll horizontal | Cards | ⬜ |
| Gráficos | Tamanho total | Redimensionado | Simplificado | ⬜ |
| Formulários | 2-3 colunas | 1-2 colunas | 1 coluna | ⬜ |
| Botões | Texto + ícone | Ícone + tooltip | Apenas ícone | ⬜ |

---

## 🔒 TESTES DE SEGURANÇA

### Autenticação e Autorização

| ID | Teste | Procedimento | Resultado Esperado | Status |
|----|-------|--------------|-------------------|--------|
| SEC01 | Senha fraca | Tentar "123456" | Rejeitado, exigir complexidade | ⬜ |
| SEC02 | Brute force | 5 tentativas erradas | Bloqueio temporário | ⬜ |
| SEC03 | Session timeout | Inatividade 30min | Logout automático | ⬜ |
| SEC04 | Token expirado | Usar token antigo | Reautenticação | ⬜ |
| SEC05 | Acesso não autorizado | URL direta sem login | Redirect para login | ⬜ |

### Proteção de Dados

| ID | Teste | Procedimento | Resultado Esperado | Status |
|----|-------|--------------|-------------------|--------|
| SEC06 | XSS | Input: `<script>alert('xss')</script>` | Sanitizado, não executa | ⬜ |
| SEC07 | SQL Injection | Input: `'; DROP TABLE--` | Tratado como texto | ⬜ |
| SEC08 | HTTPS | Verificar conexão | Cadeado verde | ⬜ |
| SEC09 | API Keys expostas | Inspecionar código fonte | Nenhuma chave visível | ⬜ |
| SEC10 | LocalStorage sensível | Verificar dados salvos | Sem senhas em claro | ⬜ |

### Firebase Security Rules

| ID | Teste | Procedimento | Resultado Esperado | Status |
|----|-------|--------------|-------------------|--------|
| SEC11 | Leitura não autenticada | Request sem auth | Denied | ⬜ |
| SEC12 | Escrita em projeto alheio | Tentar editar sem permissão | Denied | ⬜ |
| SEC13 | Validação de dados | Enviar dados malformados | Rejected | ⬜ |

**Regras Recomendadas para Firestore:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      allow read: if request.auth != null &&
        request.auth.uid in resource.data.members;
      allow write: if request.auth != null &&
        request.auth.uid == resource.data.owner;
    }
  }
}
```

---

## ⚡ TESTES DE PERFORMANCE

| ID | Cenário | Métrica | Aceitável | Ideal | Status |
|----|---------|---------|-----------|-------|--------|
| P01 | Carregamento inicial | Tempo | < 5s | < 3s | ⬜ |
| P02 | Navegação entre módulos | Tempo | < 1s | < 500ms | ⬜ |
| P03 | Salvar tarefa | Tempo | < 2s | < 1s | ⬜ |
| P04 | Carregar 100 tarefas | Tempo | < 3s | < 2s | ⬜ |
| P05 | Gerar relatório PDF | Tempo | < 10s | < 5s | ⬜ |
| P06 | Sync Firebase | Latência | < 3s | < 1s | ⬜ |
| P07 | Memória com 50 projetos | RAM | < 500MB | < 300MB | ⬜ |
| P08 | CPU idle | Uso | < 5% | < 2% | ⬜ |

### Teste de Carga

**Cenário:** Simular uso empresarial
- 10 usuários simultâneos
- 50 projetos
- 500 tarefas total
- 100 documentos

**Procedimento:**
1. Criar dados de teste em massa
2. Abrir em 10 abas/dispositivos
3. Realizar operações simultâneas
4. Monitorar performance no DevTools
5. **Verificar:** Sistema responsivo
6. **Verificar:** Sem erros de console
7. **Verificar:** Dados consistentes

---

## ✅ CHECKLIST FINAL PRÉ-LANÇAMENTO

### Funcionalidade Core

- [ ] Todos os 16 módulos funcionando
- [ ] CRUD completo (Create, Read, Update, Delete)
- [ ] Navegação entre telas sem erros
- [ ] Dados persistem após refresh
- [ ] Notificações aparecem corretamente

### Integrações

- [ ] Firebase: Login e sync funcionando
- [ ] ClickUp: Import/export de tarefas
- [ ] MS Project: XML válido gerado/importado

### Interface

- [ ] Responsivo em mobile
- [ ] Tema dark/light funciona
- [ ] Textos sem erros de português
- [ ] Ícones carregando
- [ ] Loading states visíveis

### Segurança

- [ ] Sem API keys no código
- [ ] HTTPS ativo
- [ ] Inputs sanitizados
- [ ] Permissões funcionando
- [ ] Logout funciona

### Performance

- [ ] Carregamento < 5 segundos
- [ ] Sem memory leaks
- [ ] Console sem erros críticos

### Documentação

- [ ] README atualizado
- [ ] Manual do usuário completo
- [ ] Guia de configuração das integrações
- [ ] Licença e copyright definidos

### Legal

- [ ] Termos de uso redigidos
- [ ] Política de privacidade (LGPD)
- [ ] Licença proprietária aplicada

---

## 📊 REGISTRO DE RESULTADOS

### Template de Registro

```
Data: ___/___/____
Testador: _________________
Ambiente: Chrome/Firefox/Safari versão ___
Dispositivo: Desktop/Tablet/Mobile

| ID Teste | Resultado | Observações |
|----------|-----------|-------------|
| D01 | ✅/❌ | |
| D02 | ✅/❌ | |
...
```

### Classificação de Defeitos

| Severidade | Descrição | Ação |
|------------|-----------|------|
| 🔴 Crítico | Sistema não funciona | Bloqueia lançamento |
| 🟠 Alto | Função importante falha | Corrigir antes do lançamento |
| 🟡 Médio | Função secundária com problema | Corrigir em até 7 dias |
| 🟢 Baixo | Cosmético ou melhoria | Backlog |

---

## 📅 CRONOGRAMA DE TESTES SUGERIDO

| Dia | Atividade | Duração |
|-----|-----------|---------|
| 1 | Testes Funcionais (Módulos 1-8) | 4h |
| 2 | Testes Funcionais (Módulos 9-16) | 4h |
| 3 | Testes de Integração | 3h |
| 4 | Testes de Compatibilidade | 2h |
| 5 | Testes de Segurança e Performance | 2h |
| 6 | Correção de defeitos encontrados | 4h |
| 7 | Reteste e validação final | 2h |

**Total: ~21 horas (3-4 dias úteis)**

---

## 📝 NOTAS FINAIS

### Recomendações

1. **Execute todos os testes** antes de colocar à venda
2. **Documente os resultados** para referência futura
3. **Faça beta testing** com 2-3 usuários reais
4. **Tenha backup** dos dados de teste
5. **Prepare suporte** para primeiros clientes

### Contato para Suporte

**Desenvolvedor:** Gustavo Henrique
**Sistema:** Project Manager System Pro
**Versão:** 1.0

---

*Documento criado em Novembro/2024*
*Última atualização: Novembro/2024*
