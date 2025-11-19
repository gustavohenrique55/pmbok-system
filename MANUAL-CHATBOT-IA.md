# 🤖 MANUAL COMPLETO DO CHATBOT IA
## Project Manager System Pro

**Última atualização:** 19/11/2024
**Versão:** 2.0

---

## 📋 **ÍNDICE**

1. [O que é o Chatbot IA](#o-que-é)
2. [Como Ativar o Chatbot](#como-ativar)
3. [Configurar Google Gemini](#configurar-gemini)
4. [Como Usar o Chatbot](#como-usar)
5. [Integração com NotebookLM](#notebooklm)
6. [Exemplos Práticos](#exemplos)
7. [Dicas e Truques](#dicas)
8. [Troubleshooting](#troubleshooting)

---

## 🤖 **O QUE É O CHATBOT IA?** {#o-que-é}

O Chatbot IA é um **assistente inteligente** integrado ao sistema que usa **Google Gemini** para:

### **✅ O que o Chatbot PODE fazer:**

1. **Responder Perguntas sobre Gestão de Projetos:**
   - "Como fazer análise de riscos?"
   - "O que é EVM (Earned Value Management)?"
   - "Como criar uma WBS?"

2. **Buscar no Manual do Usuário:**
   - "Como exportar para MS Project?"
   - "Como adicionar membros no Firebase?"
   - "Onde fica a configuração do ClickUp?"

3. **Sugestões e Boas Práticas:**
   - "Sugestões de tarefas para projeto de TI"
   - "Como organizar stakeholders?"
   - "Melhores práticas para gestão de mudanças"

4. **Análise de Dados do Projeto:**
   - "Analise os riscos do meu projeto"
   - "Quais tarefas estão atrasadas?"
   - "Resumo do status do projeto"

5. **Assistência em Tempo Real:**
   - Conversa natural
   - Contexto do PMBOK 7
   - Respostas em português

### **❌ O que o Chatbot NÃO faz:**

- ❌ Não cria tarefas automaticamente (você precisa criar)
- ❌ Não modifica dados do projeto
- ❌ Não acessa a internet (só conhecimento interno)
- ❌ Não compartilha seus dados (privacidade garantida)

---

## 🚀 **COMO ATIVAR O CHATBOT** {#como-ativar}

### **Passo 1: Localizar o Ícone**

No canto **inferior direito** da tela, você verá um **ícone flutuante** de chat:

```
┌──────────────────────────────────┐
│                                  │
│        [Seu projeto aqui]        │
│                                  │
│                                  │
│                           [💬]  ← CLIQUE AQUI
└──────────────────────────────────┘
```

**CLIQUE** no ícone 💬 do chat.

### **Passo 2: Janela do Chat Abre**

Uma janela se abrirá no canto direito:

```
┌────────────────────────────────┐
│ 🤖 Assistente IA         [X]   │
├────────────────────────────────┤
│                                │
│ 👋 Olá! Sou seu assistente    │
│ de gestão de projetos.         │
│ Como posso ajudar?             │
│                                │
├────────────────────────────────┤
│ Digite sua mensagem...    [→]  │
└────────────────────────────────┘
```

### **Passo 3: Primeira Pergunta**

⚠️ **SE APARECER:** "Configure sua chave do Gemini primeiro"

Significa que você precisa configurar a API Key do Google Gemini (veja próxima seção).

✅ **SE APARECER:** "Olá! Sou seu assistente..."

Está pronto! Pode começar a conversar!

---

## 🔑 **CONFIGURAR GOOGLE GEMINI** {#configurar-gemini}

### **O que é Google Gemini?**

**Google Gemini** é a IA do Google (similar ao ChatGPT). O chatbot usa essa IA para responder suas perguntas.

### **É Grátis?**

**SIM!** Google Gemini tem plano gratuito generoso:
- 60 requisições por minuto
- 1.500 requisições por dia
- **Suficiente** para uso normal

### **Passo a Passo: Obter API Key**

#### **1. Acessar Google AI Studio**

Abra no navegador:
```
https://aistudio.google.com/app/apikey
```

#### **2. Fazer Login**

Use sua **conta Google** (Gmail)

#### **3. Aceitar Termos**

Se for primeira vez:
- Leia os termos de uso
- Clique em "Aceitar"

#### **4. Criar API Key**

**a)** Clique no botão **"Create API Key"** ou **"Criar chave de API"**

**b)** Escolha um projeto:
- Se já tem projeto Google Cloud: Selecione
- Se não tem: Clique em **"Create new project"**

**c)** Dê um nome ao projeto (ex: "Project Manager Pro")

**d)** Clique em **"Create API Key in new project"**

#### **5. Copiar a Chave**

Você verá algo assim:
```
AIzaSyABC123XYZ789_seu_codigo_aqui_muito_longo
```

**COPIE** essa chave toda! (clique no ícone de copiar)

⚠️ **IMPORTANTE:**
- NÃO compartilhe essa chave com ninguém!
- Guarde em local seguro

---

### **Passo a Passo: Configurar no Sistema**

#### **1. Abrir Configurações**

No sistema, clique no ícone **⚙️ Configurações** (canto superior direito)

#### **2. Rolar até "Chatbot IA"**

Procure a seção:
```
🤖 Chatbot com IA (Google Gemini)
```

#### **3. Colar a API Key**

No campo **"Chave API do Gemini"**, cole a chave que você copiou:

```
┌────────────────────────────────────────┐
│ Chave API do Gemini:                   │
│ [AIzaSyABC123XYZ789____________]       │
└────────────────────────────────────────┘
```

#### **4. Salvar**

Clique no botão **"Salvar"** ou **"Testar Conexão"**

✅ **Se aparecer:** "Conexão com Gemini OK!" = Funcionou!

❌ **Se aparecer:** "Erro na API Key" = Chave inválida, tente novamente

---

## 💬 **COMO USAR O CHATBOT** {#como-usar}

### **Interface do Chat**

```
┌────────────────────────────────────────┐
│ 🤖 Assistente IA            [−] [X]    │
├────────────────────────────────────────┤
│                                        │
│ 🤖 Olá! Como posso ajudar?            │
│                                        │
│ 👤 Como criar uma matriz de riscos?   │
│                                        │
│ 🤖 Para criar uma matriz de riscos:   │
│    1. Vá em "Riscos" no menu          │
│    2. Clique em "+"...                │
│                                        │
├────────────────────────────────────────┤
│ Digite sua mensagem...            [→]  │
└────────────────────────────────────────┘
```

### **Como Fazer Perguntas**

#### **✅ PERGUNTAS BOAS (Específicas):**

```
✅ "Como adicionar uma tarefa?"
✅ "O que é análise de valor agregado?"
✅ "Como exportar para MS Project?"
✅ "Explique o módulo de Stakeholders"
✅ "Quais os tipos de riscos no PMBOK 7?"
```

#### **❌ PERGUNTAS RUINS (Muito genéricas):**

```
❌ "Ajuda"
❌ "O que fazer?"
❌ "Explique tudo"
❌ "Como usar?"
```

**Dica:** Seja específico! Quanto mais clara a pergunta, melhor a resposta.

---

## 📚 **INTEGRAÇÃO COM NOTEBOOKLM** {#notebooklm}

### **O que é NotebookLM?**

**NotebookLM** é uma ferramenta do Google que:
- Lê documentos PDF, texto, etc.
- Cria um assistente IA personalizado
- Responde perguntas baseadas nos seus documentos

### **Por que usar NotebookLM + Chatbot?**

```
Chatbot do Sistema → Ajuda dentro do sistema
NotebookLM → Estuda documentação offline, cria resumos, faz análises profundas
```

**Use os DOIS juntos:**
- **Chatbot** para perguntas rápidas enquanto trabalha
- **NotebookLM** para estudo aprofundado da documentação

---

### **Como Integrar: Passo a Passo**

#### **1. Acessar NotebookLM**

Abra:
```
https://notebooklm.google.com
```

Faça login com sua conta Google.

#### **2. Criar Novo Notebook**

Clique em **"New notebook"** ou **"Novo caderno"**

#### **3. Adicionar Documentação do Sistema**

**a) Fazer upload dos manuais:**

Você pode adicionar estes arquivos (todos estão no repositório):

- `MANUAL-USUARIO-COMPLETO.md`
- `GUIA-CONFIGURACAO-INTEGRACOES.md`
- `COMO-USAR-IA-E-MANUAL.md`
- `README.md`

**Como fazer upload:**
1. Clique em **"Sources"** ou **"Fontes"**
2. Clique em **"Upload"**
3. Selecione os arquivos `.md`
4. Aguarde o processamento

**b) Ou copiar/colar o conteúdo:**

Se preferir:
1. Abra o arquivo `.md` no bloco de notas
2. Copie todo o conteúdo
3. No NotebookLM, clique em "Add text"
4. Cole o conteúdo
5. Dê um título (ex: "Manual do Usuário")

#### **4. Fazer Perguntas no NotebookLM**

Agora você pode perguntar coisas como:

```
"Resuma todos os módulos do sistema"
"Quais são as integrações disponíveis?"
"Como funciona a gestão de riscos segundo este manual?"
"Crie um guia de início rápido para iniciantes"
```

NotebookLM vai responder **baseado nos documentos** que você adicionou!

---

### **Diferença: Chatbot vs NotebookLM**

| Recurso | Chatbot do Sistema | NotebookLM |
|---------|-------------------|------------|
| **Onde usa** | Dentro do sistema | Site separado |
| **Internet** | Precisa | Precisa |
| **Base de conhecimento** | PMBOK 7 + Manual embutido | Documentos que você adicionar |
| **Melhor para** | Perguntas rápidas | Estudo aprofundado |
| **Acesso aos dados do projeto** | Sim (contexto do projeto ativo) | Não |
| **Análise de documentos** | Não | Sim (PDFs, textos, etc) |
| **Criar resumos** | Não | Sim |

---

## 📝 **EXEMPLOS PRÁTICOS** {#exemplos}

### **Exemplo 1: Ajuda com Funcionalidade**

**Você:** "Como adicionar um membro à equipe do projeto?"

**Chatbot:**
```
Para adicionar um membro ao projeto via Firebase:

1. Vá em Configurações (⚙️)
2. Role até a seção "Firebase"
3. Na seção "Membros da Equipe", digite o e-mail
4. Escolha o papel (Owner, Editor ou Viewer)
5. Clique em "Adicionar"

O membro receberá acesso ao projeto automaticamente!
```

---

### **Exemplo 2: Conceito de PMBOK**

**Você:** "O que é a Matriz de Poder x Interesse?"

**Chatbot:**
```
A Matriz de Poder x Interesse é uma ferramenta para classificar
stakeholders em 4 quadrantes:

📊 ALTO PODER + ALTO INTERESSE
   → Gerenciar de perto (ex: Patrocinador)

📈 ALTO PODER + BAIXO INTERESSE
   → Manter satisfeito (ex: Alta direção)

📉 BAIXO PODER + ALTO INTERESSE
   → Manter informado (ex: Usuários finais)

📊 BAIXO PODER + BAIXO INTERESSE
   → Monitorar (ex: Público geral)

No sistema, acesse: Menu lateral → Stakeholders
```

---

### **Exemplo 3: Busca no Manual**

**Você:** "Como configurar ClickUp?"

**Chatbot:**
```
Configuração do ClickUp:

1. Obter API Key:
   - Acesse app.clickup.com
   - Vá em Settings → Apps
   - Gere um API Token

2. No sistema:
   - Configurações → Integrações → ClickUp
   - Cole a API Key
   - Insira o List ID
   - Clique em "Conectar"

3. Usar:
   - Importar: Traz tarefas do ClickUp
   - Exportar: Envia tarefas para ClickUp

Veja mais em: GUIA-CONFIGURACAO-INTEGRACOES.md
```

---

### **Exemplo 4: Análise de Projeto (Avançado)**

**Você:** "Analise os riscos do meu projeto atual"

**Chatbot:**
```
🔍 Análise dos Riscos do Projeto "Reforma Shopping Center":

📊 Total de riscos: 5

🔴 CRÍTICO (2):
- Atraso no fornecimento de materiais
- Problema estrutural descoberto

🟡 MODERADO (2):
- Chuvas no período da obra
- Falta de mão de obra especializada

🟢 BAIXO (1):
- Pequenos ajustes no projeto

💡 RECOMENDAÇÕES:
1. Desenvolva plano de contingência para riscos críticos
2. Contate fornecedores alternativos
3. Considere contratar estruturalista para avaliação
```

---

## 💡 **DICAS E TRUQUES** {#dicas}

### **Dica 1: Use Comandos Curtos**

Em vez de digitar muito, use comandos diretos:

```
✅ "Como criar WBS?"
✅ "Ajuda stakeholders"
✅ "Explicar EVM"
✅ "Conectar Firebase"
```

### **Dica 2: Peça Exemplos**

```
✅ "Dê exemplo de tarefa para projeto de TI"
✅ "Exemplo de risco em construção civil"
✅ "Template de comunicação com cliente"
```

### **Dica 3: Peça Passo a Passo**

```
✅ "Passo a passo para criar relatório PDF"
✅ "Como configurar Firebase passo a passo"
✅ "Processo completo de análise de riscos"
```

### **Dica 4: Contextualize**

```
✅ "Sou gerente de TI, como usar o módulo de recursos?"
✅ "Projeto de construção, que riscos considerar?"
✅ "Trabalho em consultoria, como organizar stakeholders?"
```

### **Dica 5: Use Emojis (Opcional)**

```
✅ "🔥 Riscos críticos?"
✅ "📊 Como criar dashboard?"
✅ "💰 Análise de custos?"
```

---

## 🔧 **TROUBLESHOOTING** {#troubleshooting}

### **Problema 1: "Configure sua chave do Gemini"**

**Causa:** API Key não configurada

**Solução:**
1. Siga a seção "Configurar Google Gemini"
2. Obtenha API Key em: https://aistudio.google.com/app/apikey
3. Configure em: Configurações → Chatbot IA

---

### **Problema 2: "Erro ao conectar com Gemini"**

**Causa:** API Key inválida ou internet

**Solução:**
1. Verifique se copiou a chave completa
2. Verifique conexão com internet
3. Tente gerar nova API Key
4. Verifique se não excedeu limite gratuito (60/min, 1500/dia)

---

### **Problema 3: Chatbot não responde**

**Causa:** Problemas de rede ou limite excedido

**Solução:**
1. Verifique internet
2. Aguarde alguns minutos (pode ter atingido limite)
3. Recarregue a página (F5)
4. Tente pergunta mais simples

---

### **Problema 4: Respostas genéricas**

**Causa:** Pergunta muito vaga

**Solução:**
- Seja mais específico
- Use contexto (módulo, funcionalidade)
- Pergunte uma coisa por vez

**Exemplo:**
❌ "Como usar?" → Muito vago
✅ "Como usar o módulo de Riscos para classificar riscos?" → Específico

---

### **Problema 5: Chatbot em inglês**

**Causa:** Configuração de idioma

**Solução:**
1. Faça perguntas em português
2. O sistema entende e responde em português
3. Se persistir, recarregue a página

---

## 📊 **LIMITES DO PLANO GRATUITO**

### **Google Gemini - Plano Gratuito:**

- ✅ **60 requisições por minuto**
- ✅ **1.500 requisições por dia**
- ✅ **1 milhão de tokens por mês**

**O que significa:**
- Você pode fazer **até 60 perguntas por minuto** (mais que suficiente!)
- **1.500 perguntas por dia** (uso normal usa ~50-100/dia)

**Se exceder:**
- Aparece erro: "Quota exceeded"
- Aguarde alguns minutos ou até próximo dia
- Ou contrate plano pago (não necessário para uso normal)

---

## 📚 **RECURSOS ADICIONAIS**

### **Documentação do Sistema:**
- Manual do Usuário: `MANUAL-USUARIO-COMPLETO.md`
- Guia de Integrações: `GUIA-CONFIGURACAO-INTEGRACOES.md`
- Como Usar IA: `COMO-USAR-IA-E-MANUAL.md`

### **Links Úteis:**
- Google Gemini API: https://aistudio.google.com/app/apikey
- NotebookLM: https://notebooklm.google.com
- Sistema Online: https://gustavohenrique55.github.io/Project-Management-7-PRO/

---

## ✅ **CHECKLIST: CONFIGURAÇÃO COMPLETA**

- [ ] API Key do Gemini obtida
- [ ] API Key configurada no sistema
- [ ] Testei uma pergunta e funcionou
- [ ] Explorei exemplos de perguntas
- [ ] (Opcional) Configurei NotebookLM
- [ ] (Opcional) Adicionei documentação no NotebookLM

---

**🎉 Aproveite seu Assistente IA! Ele está aqui para facilitar sua gestão de projetos! 🚀**
