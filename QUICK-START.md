# ⚡ Quick Start - Deploy em 5 Minutos

## 🎯 Para Hospedar no Google Cloud (Firebase)

### Passo 1: Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### Passo 2: Login no Firebase
```bash
firebase login
```

### Passo 3: Criar Projeto Firebase
1. Acesse: https://console.firebase.google.com
2. Clique em "Adicionar projeto"
3. Nomeie seu projeto (ex: `pmbok-manager`)
4. **Anote o ID do projeto criado**

### Passo 4: Configurar o Projeto
Edite o arquivo `.firebaserc` e substitua `seu-projeto-firebase-id` pelo ID real:

```json
{
  "projects": {
    "default": "seu-projeto-real-aqui"
  }
}
```

### Passo 5: Deploy!

**Opção A - Usando o script automatizado:**
```bash
./deploy.sh
```

**Opção B - Comando direto:**
```bash
firebase deploy
```

**Opção C - Usando npm:**
```bash
npm run deploy
```

### 🎉 Pronto!

Sua aplicação estará disponível em:
- `https://seu-projeto.web.app`
- `https://seu-projeto.firebaseapp.com`

---

## 📚 Documentação Completa

Para instruções detalhadas, troubleshooting e outras opções de deploy, consulte:
- **[DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md)** - Guia completo com todas as opções

---

## 🆘 Problemas?

### Erro: "Firebase command not found"
```bash
npm install -g firebase-tools
```

### Erro: "Permission denied"
```bash
firebase logout
firebase login
```

### Não apareceu as mudanças?
Limpe o cache do navegador (Ctrl+Shift+Delete) ou abra em modo anônimo.

---

## 💰 Custos

**Firebase Hosting (Plano Gratuito):**
- ✅ 10GB de armazenamento
- ✅ 360MB/dia de transferência
- ✅ SSL/HTTPS automático
- ✅ Domínio personalizado grátis

**Para este projeto:** Sempre gratuito! 🎉

---

## 🔄 Atualizações Futuras

Para atualizar a aplicação:
1. Faça as alterações nos arquivos
2. Execute: `./deploy.sh` ou `firebase deploy`

Simples assim! 🚀
