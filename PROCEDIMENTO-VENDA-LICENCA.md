# PROCEDIMENTO COMPLETO - Venda de Licença de Uso

## Sistema de Gestão de Projetos 7 PRO
**Versão:** 1.0
**Autor:** Gustavo Henrique

---

## 1. PREPARAÇÃO PARA VENDA

### 1.1 Documentos Necessários
- [ ] Contrato de Licença de Uso (modelo abaixo)
- [ ] Nota Fiscal ou Recibo
- [ ] Manual do Usuário (MANUAL-USUARIO-COMPLETO.md)
- [ ] Plano de Treinamento (PLANO-DE-TREINAMENTO.md)
- [ ] Guia de Início Rápido (GUIA-INICIO-RAPIDO.md)

### 1.2 Definição de Preços (Sugestão)
| Modalidade | Descrição | Valor Sugerido |
|------------|-----------|----------------|
| Licença Básica | Acesso via GitHub Pages | R$ 500 - R$ 1.500 |
| Licença Completa | Arquivos para hospedagem própria | R$ 1.500 - R$ 3.000 |
| Licença + Treinamento | Completa + 8h treinamento | R$ 3.000 - R$ 5.000 |
| Licença Empresarial | Múltiplos usuários + suporte | R$ 5.000 - R$ 10.000 |

---

## 2. PROCESSO DE VENDA

### 2.1 Etapa 1: Apresentação
1. Demonstrar o sistema funcionando
2. Mostrar funcionalidades principais
3. Explicar benefícios e diferenciais
4. Apresentar opções de licença

### 2.2 Etapa 2: Negociação
1. Definir modalidade de licença
2. Acordar forma de pagamento
3. Definir prazo de entrega
4. Acordar suporte pós-venda

### 2.3 Etapa 3: Fechamento
1. Receber pagamento
2. Emitir Nota Fiscal/Recibo
3. Assinar contrato de licença
4. Agendar entrega/treinamento

---

## 3. COMO RESGATAR OS ARQUIVOS DO GITHUB

### 3.1 Método 1: Download ZIP (Mais Simples)

1. **Acesse o repositório:**
   ```
   https://github.com/gustavohenrique55/Project-Management-7-PRO
   ```

2. **Baixe o ZIP:**
   - Clique no botão verde **"<> Code"**
   - Clique em **"Download ZIP"**
   - Salve no seu computador

3. **Extraia os arquivos:**
   - Clique com botão direito no ZIP
   - Selecione "Extrair aqui"
   - Você terá a pasta com todos os arquivos

### 3.2 Método 2: Git Clone (Recomendado)

1. **Instale o Git** (se não tiver):
   - Baixe de: https://git-scm.com/downloads

2. **Abra o terminal/prompt de comando**

3. **Execute o comando:**
   ```bash
   git clone https://github.com/gustavohenrique55/Project-Management-7-PRO.git
   ```

4. **Acesse a pasta:**
   ```bash
   cd Project-Management-7-PRO
   ```

### 3.3 Arquivos Principais para Entrega

```
Project-Management-7-PRO/
├── index.html              ← Sistema principal (OBRIGATÓRIO)
├── verificador.html        ← Verificador de integrações
├── teste.html              ← Página de testes
├── MANUAL-USUARIO-COMPLETO.md
├── PLANO-DE-TREINAMENTO.md
├── GUIA-INICIO-RAPIDO.md
├── GUIA-CONFIGURACAO-INTEGRACOES.md
├── COPYRIGHT.txt
└── LICENSE
```

---

## 4. ENTREGA PARA HOSPEDAGEM PRÓPRIA

### 4.1 O que Entregar ao Cliente

**Arquivos Obrigatórios:**
- `index.html` - Sistema completo
- `verificador.html` - Verificador de integrações

**Documentação:**
- `MANUAL-USUARIO-COMPLETO.md`
- `PLANO-DE-TREINAMENTO.md`
- `GUIA-INICIO-RAPIDO.md`
- `GUIA-CONFIGURACAO-INTEGRACOES.md`

**Legais:**
- `COPYRIGHT.txt`
- `LICENSE`
- Contrato de Licença assinado

### 4.2 Como o Cliente Pode Hospedar

#### Opção A: Servidor Web Próprio
1. Fazer upload dos arquivos via FTP
2. Colocar na pasta public_html ou www
3. Acessar pelo domínio

#### Opção B: Hospedagem Gratuita (Netlify)
1. Criar conta em netlify.com
2. Arrastar a pasta para o site
3. Receber URL automática

#### Opção C: Hospedagem Gratuita (Vercel)
1. Criar conta em vercel.com
2. Importar do GitHub ou fazer upload
3. Receber URL automática

#### Opção D: GitHub Pages (do próprio cliente)
1. Cliente cria repositório no GitHub
2. Faz upload dos arquivos
3. Ativa GitHub Pages nas configurações

### 4.3 Instruções para o Cliente

```
INSTRUÇÕES DE INSTALAÇÃO
========================

1. Extraia os arquivos do ZIP
2. Faça upload para seu servidor web
3. Acesse index.html pelo navegador
4. Configure o Firebase (se desejar colaboração)
5. Configure a API do Gemini (para chatbot IA)

O sistema funciona 100% no navegador.
Não precisa de banco de dados externo (usa LocalStorage).
Para colaboração em tempo real, configure o Firebase.
```

---

## 5. CONFIGURAÇÕES PÓS-ENTREGA

### 5.1 Firebase (Colaboração)
O cliente precisa:
1. Criar projeto no Firebase Console
2. Copiar as credenciais
3. Colar nas configurações do sistema

### 5.2 API Gemini (Chatbot IA)
O cliente precisa:
1. Criar conta no Google AI Studio
2. Gerar API Key
3. Inserir nas configurações do sistema

### 5.3 Integrações Opcionais
- ClickUp: API Key do cliente
- MS Project: Funciona sem configuração

---

## 6. MODELO DE CONTRATO DE LICENÇA

```
CONTRATO DE LICENÇA DE USO DE SOFTWARE

LICENCIANTE: Gustavo Henrique
LICENCIADO: [Nome do Cliente]
CPF/CNPJ: [Documento]
DATA: [Data da Venda]

OBJETO: Licença de uso do software "Sistema de Gestão de
Projetos 7 PRO" versão 1.0

CLÁUSULAS:

1. CONCESSÃO DE LICENÇA
O Licenciante concede ao Licenciado uma licença não exclusiva,
intransferível, para uso do software descrito acima.

2. RESTRIÇÕES
O Licenciado NÃO pode:
- Revender, sublicenciar ou distribuir o software
- Modificar o código-fonte para revenda
- Remover avisos de copyright
- Usar para fins ilegais

3. PROPRIEDADE INTELECTUAL
O software permanece propriedade exclusiva do Licenciante.
O Licenciado adquire apenas o direito de uso.

4. SUPORTE
- Período: [30/60/90] dias após a entrega
- Canal: [Email/WhatsApp]
- Horário: [Comercial]

5. GARANTIA
O software é fornecido "como está". O Licenciante garante
funcionamento conforme documentação por [90] dias.

6. VALOR
Valor da licença: R$ [VALOR]
Forma de pagamento: [PIX/Transferência/Cartão]

7. FORO
Fica eleito o foro de [Cidade/UF] para dirimir questões.

_____________________          _____________________
LICENCIANTE                    LICENCIADO
Gustavo Henrique               [Nome do Cliente]
```

---

## 7. CHECKLIST DE ENTREGA

### Antes da Entrega
- [ ] Pagamento confirmado
- [ ] Contrato assinado
- [ ] Nota fiscal emitida

### Durante a Entrega
- [ ] Arquivos baixados do GitHub
- [ ] ZIP preparado para o cliente
- [ ] Documentação incluída
- [ ] Instruções de instalação

### Após a Entrega
- [ ] Cliente confirmou recebimento
- [ ] Sistema funcionando no servidor do cliente
- [ ] Treinamento agendado (se contratado)
- [ ] Canal de suporte informado

---

## 8. SUPORTE PÓS-VENDA

### 8.1 O que está Incluído
- Dúvidas sobre uso do sistema
- Problemas de configuração
- Correção de bugs críticos

### 8.2 O que NÃO está Incluído
- Customizações no código
- Novas funcionalidades
- Problemas no servidor do cliente
- Configuração de domínio/hospedagem

### 8.3 Registro de Suporte
Manter registro de:
- Data do contato
- Problema relatado
- Solução aplicada
- Tempo gasto

---

## 9. ATUALIZAÇÃO DO SISTEMA

### Para Clientes com Licença
- Informar sobre novas versões
- Oferecer atualização (gratuita ou paga)
- Manter compatibilidade de dados

### Processo de Atualização
1. Baixar nova versão do GitHub
2. Fazer backup dos dados do cliente
3. Substituir arquivos
4. Testar funcionamento
5. Restaurar configurações

---

## 10. DICAS COMERCIAIS

### Argumentos de Venda
- Sistema completo sem mensalidade
- Funciona offline (LocalStorage)
- Chatbot com IA integrado
- Baseado no PMBOK
- Integrações profissionais
- Documentação completa

### Público-Alvo
- Pequenas e médias empresas
- Construtoras e incorporadoras
- Escritórios de engenharia
- Consultorias de projetos
- Freelancers de gestão

### Diferenciais
- Licença perpétua (paga uma vez)
- Código-fonte disponível
- Sem limite de projetos
- Sem limite de usuários
- Treinamento disponível

---

**Documento atualizado em:** Novembro/2024
**Versão:** 1.0
