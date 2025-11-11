# 🚀 Guia Completo de Deploy - Project Management 7 PRO no Google Cloud

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Opção 1: Firebase Hosting (RECOMENDADO)](#opção-1-firebase-hosting-recomendado)
3. [Opção 2: Cloud Storage + CDN](#opção-2-cloud-storage--cdn)
4. [Opção 3: App Engine](#opção-3-app-engine)
5. [Configuração de Domínio Personalizado](#configuração-de-domínio-personalizado)
6. [Monitoramento e Analytics](#monitoramento-e-analytics)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Conta Google (Gmail)
- ✅ Node.js instalado (v14 ou superior)
- ✅ npm ou yarn instalado
- ✅ Git instalado (opcional)

---

## 🔥 Opção 1: Firebase Hosting (RECOMENDADO)

### Por que Firebase Hosting?

- ✅ **Gratuito** (plano Spark): 10GB de armazenamento e 360MB/dia de transferência
- ✅ **SSL/HTTPS automático**
- ✅ **CDN global incluído**
- ✅ **Deploy em segundos**
- ✅ **Rollback fácil para versões anteriores**
- ✅ **Domínio personalizado gratuito**

---

### 📦 Passo 1: Instalar Firebase CLI

Abra o terminal e execute:

```bash
npm install -g firebase-tools
```

Ou se preferir usar localmente no projeto:

```bash
npm install --save-dev firebase-tools
```

---

### 🔐 Passo 2: Fazer Login no Firebase

```bash
firebase login
```

Isso abrirá seu navegador para autenticação com sua conta Google.

**Dica:** Se estiver em um servidor sem interface gráfica, use:
```bash
firebase login --no-localhost
```

---

### 🎨 Passo 3: Criar Projeto no Firebase Console

1. Acesse: [https://console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"** ou **"Add project"**
3. Nomeie seu projeto (ex: `project-management-7-pro`)
4. Desabilite Google Analytics (opcional para este projeto)
5. Clique em **"Criar projeto"**
6. Aguarde a criação (15-30 segundos)

**⚠️ IMPORTANTE:** Anote o **ID do projeto** que foi criado (aparece na URL e no console)

---

### ⚙️ Passo 4: Configurar o Projeto Firebase

Edite o arquivo `.firebaserc` e substitua `seu-projeto-firebase-id` pelo ID real do seu projeto:

```json
{
  "projects": {
    "default": "project-management-7-pro"
  }
}
```

**Exemplo:**
Se seu projeto Firebase se chama `pmbok-manager-2024`, o arquivo ficaria:
```json
{
  "projects": {
    "default": "pmbok-manager-2024"
  }
}
```

---

### 🚀 Passo 5: Fazer o Deploy!

Agora é só executar:

```bash
npm run deploy
```

Ou diretamente:

```bash
firebase deploy
```

**Aguarde alguns segundos...** ⏳

---

### 🎉 Passo 6: Acesse sua Aplicação!

Após o deploy, você verá uma mensagem como:

```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/seu-projeto/overview
Hosting URL: https://seu-projeto.web.app
```

**Sua aplicação estará online em:**
- `https://seu-projeto.web.app`
- `https://seu-projeto.firebaseapp.com`

---

### 🔄 Atualizações Futuras

Para atualizar sua aplicação:

1. Faça as alterações nos arquivos
2. Execute novamente:
```bash
npm run deploy
```

Simples assim! 🎯

---

### 📊 Comandos Úteis do Firebase

```bash
# Ver a aplicação localmente antes de fazer deploy
npm run serve
# ou
firebase serve

# Deploy apenas do hosting (mais rápido)
npm run deploy:hosting

# Ver logs de deploy
firebase hosting:channel:list

# Ver versões anteriores
firebase hosting:releases:list

# Rollback para versão anterior (pelo console)
```

---

## ☁️ Opção 2: Cloud Storage + CDN

### Quando usar?

- Você já tem outros serviços no Google Cloud
- Precisa de mais controle sobre cache e CDN
- Quer integrar com Cloud Functions

### Passos:

#### 1. Criar Bucket no Cloud Storage

```bash
# Instalar gcloud CLI
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init

# Criar bucket
gsutil mb -p seu-projeto-id gs://pmbok-manager-bucket

# Configurar para site estático
gsutil web set -m index.html -e index.html gs://pmbok-manager-bucket

# Tornar público
gsutil iam ch allUsers:objectViewer gs://pmbok-manager-bucket
```

#### 2. Fazer Upload dos Arquivos

```bash
gsutil -m cp -r * gs://pmbok-manager-bucket
```

#### 3. Configurar Cloud CDN (Opcional)

1. Acesse: [Cloud CDN Console](https://console.cloud.google.com/net-services/cdn)
2. Clique em **"Adicionar origem"**
3. Selecione o bucket criado
4. Ative o CDN

**URL final:** `https://storage.googleapis.com/pmbok-manager-bucket/index.html`

**Custo estimado:** $0.026 por GB (primeiros 1TB)

---

## 🚢 Opção 3: App Engine

### Quando usar?

- Você planeja adicionar backend/API no futuro
- Precisa de processamento server-side
- Quer escalonamento automático

### Passos:

#### 1. Criar arquivo `app.yaml`

```yaml
runtime: python39
handlers:
  - url: /
    static_files: index.html
    upload: index.html

  - url: /(.*)
    static_files: \1
    upload: .*
```

#### 2. Deploy no App Engine

```bash
gcloud app deploy
```

**Custo:** Plano gratuito inclui:
- 28 horas de instância por dia
- 1GB de armazenamento
- 1GB de tráfego por dia

---

## 🌐 Configuração de Domínio Personalizado

### Firebase Hosting

1. Acesse: [Firebase Console](https://console.firebase.google.com)
2. Vá em **Hosting** > **Adicionar domínio personalizado**
3. Digite seu domínio (ex: `pmbok-manager.com`)
4. Adicione os registros DNS fornecidos no seu provedor de domínio:
   - Tipo: `A`
   - Host: `@`
   - Valor: IP fornecido pelo Firebase
5. Aguarde propagação DNS (até 24h)

### Cloud Storage

1. Verifique propriedade do domínio no [Google Search Console](https://search.google.com/search-console)
2. Crie bucket com nome do domínio: `gsutil mb gs://seudominio.com`
3. Configure CNAME no seu DNS:
   - Nome: `www`
   - Valor: `c.storage.googleapis.com`

---

## 📊 Monitoramento e Analytics

### Firebase Analytics (Gratuito)

Adicione ao `index.html` antes do `</head>`:

```html
<!-- Firebase Analytics -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123",
    measurementId: "G-XXXXXXXXXX"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```

### Google Analytics 4

1. Crie propriedade em [analytics.google.com](https://analytics.google.com)
2. Adicione o código de acompanhamento fornecido

---

## 🔧 Troubleshooting

### Erro: "Firebase command not found"

```bash
# Reinstalar Firebase CLI globalmente
npm install -g firebase-tools

# Ou adicionar ao PATH
export PATH="$PATH:$(npm bin -g)"
```

### Erro: "Permission denied"

```bash
# Fazer login novamente
firebase logout
firebase login
```

### Erro: "Project not found"

Verifique se o ID do projeto no `.firebaserc` está correto.

### Cache de Navegador

Se as alterações não aparecem:
1. Limpe o cache do navegador (Ctrl+Shift+Delete)
2. Ou abra em modo anônimo (Ctrl+Shift+N)
3. Ou force reload (Ctrl+F5)

### Deploy Lento

```bash
# Deploy apenas hosting (mais rápido)
firebase deploy --only hosting
```

---

## 💰 Custos Estimados

### Firebase Hosting (Plano Spark - GRATUITO)

| Recurso | Limite Gratuito | Custo Excedente |
|---------|-----------------|-----------------|
| Armazenamento | 10 GB | $0.026/GB |
| Transferência | 360 MB/dia | $0.15/GB |
| SSL/HTTPS | Ilimitado | Grátis |
| Domínio Personalizado | Ilimitado | Grátis |

**Para este projeto:** Provavelmente sempre gratuito (site tem ~150KB)

### Cloud Storage

| Recurso | Custo |
|---------|-------|
| Armazenamento | $0.020/GB/mês |
| Transferência | $0.12/GB (América) |
| Operações | $0.05/10.000 |

**Estimativa mensal:** $0.50 - $5.00 (para tráfego baixo-médio)

### App Engine

| Recurso | Limite Gratuito | Custo Excedente |
|---------|-----------------|-----------------|
| Horas de Instância | 28h/dia | $0.05/hora |
| Armazenamento | 1 GB | $0.026/GB |
| Tráfego | 1 GB/dia | $0.12/GB |

**Estimativa mensal:** Grátis até $10-20

---

## ✅ Checklist Final

Antes de fazer deploy, verifique:

- [ ] Todos os links estão funcionando
- [ ] Imagens carregam corretamente
- [ ] LocalStorage funciona (testar em localhost primeiro)
- [ ] Responsividade em mobile
- [ ] Sem erros no console do navegador
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Favicon está presente
- [ ] Meta tags para SEO estão configuradas
- [ ] HTTPS está ativo (automático no Firebase)

---

## 🎓 Recursos Adicionais

- [Documentação Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Google Cloud Storage](https://cloud.google.com/storage/docs)
- [App Engine Quickstart](https://cloud.google.com/appengine/docs/quickstart)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

---

## 🆘 Suporte

Problemas? Sugestões?

1. Verifique a seção [Troubleshooting](#troubleshooting)
2. Consulte a [documentação do Firebase](https://firebase.google.com/docs)
3. Abra uma issue no repositório do projeto

---

## 🎉 Parabéns!

Sua aplicação está no ar! Agora você pode:

- ✅ Compartilhar o link com sua equipe
- ✅ Adicionar domínio personalizado
- ✅ Monitorar acessos com Analytics
- ✅ Fazer updates com um simples `npm run deploy`

**Boa sorte com seu projeto! 🚀**

---

**Desenvolvido com ❤️ para a comunidade PMBOK**
