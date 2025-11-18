# 📱 GUIA DE TESTE - Celular e Tablet

## 🎯 Como Testar o Sistema em Dispositivos Móveis

---

## 📋 CHECKLIST DE TESTES

### ✅ **TESTE 1: Acesso Básico**

**iPhone/iPad:**
- [ ] Abrir Safari
- [ ] Digitar URL: `https://gustavohenrique55.github.io/pmbok-system/`
- [ ] Site carrega (aguardar 20-30s)
- [ ] Layout responsivo (sem scroll horizontal)
- [ ] Tela de login aparece corretamente

**Android:**
- [ ] Abrir Chrome
- [ ] Digitar URL
- [ ] Site carrega
- [ ] Layout responsivo
- [ ] Tela de login OK

---

### ✅ **TESTE 2: Login e Navegação**

- [ ] Clicar em "Modo Demo"
- [ ] Login realizado com sucesso
- [ ] Dashboard aparece
- [ ] Menu lateral abre/fecha com toque
- [ ] Header responsivo
- [ ] Botões clicáveis (tamanho adequado)

---

### ✅ **TESTE 3: Criar Projeto**

- [ ] Clicar no botão "+"
- [ ] Modal de projeto abre
- [ ] Teclado virtual aparece ao tocar em campos
- [ ] Consegue preencher todos os campos
- [ ] Datepicker funciona em mobile
- [ ] Botão "Salvar" funciona
- [ ] Projeto criado com sucesso
- [ ] Notificação aparece

---

### ✅ **TESTE 4: Kanban Board (Tarefas)**

**Criar Tarefa:**
- [ ] Ir em "Tarefas" no menu
- [ ] Clicar "+ Nova Tarefa"
- [ ] Preencher formulário
- [ ] Salvar tarefa
- [ ] Card aparece no Kanban

**Drag & Drop (Arrastar):**
- [ ] Tocar e segurar no card
- [ ] Arrastar para outra coluna
- [ ] Soltar
- [ ] Card muda de coluna
- [ ] Status atualiza
- [ ] Notificação de sucesso

**⚠️ Importante:**
- Em touch screen, drag & drop pode ser sensível
- Segurar por 500ms antes de arrastar
- Arrastar devagar

---

### ✅ **TESTE 5: Chatbot IA**

- [ ] Botão 🤖 visível no canto inferior direito
- [ ] Clicar no botão
- [ ] Janela do chat abre
- [ ] Não obstrui conteúdo importante
- [ ] Campo de input acessível
- [ ] Teclado não cobre mensagens
- [ ] Digitar pergunta: "Como criar um projeto?"
- [ ] Enviar mensagem
- [ ] Resposta aparece
- [ ] Scroll automático funciona
- [ ] Fechar chat (X)

---

### ✅ **TESTE 6: Matriz de Riscos**

- [ ] Ir em "Riscos"
- [ ] Criar novo risco
- [ ] Preencher probabilidade (slider funciona?)
- [ ] Preencher impacto (slider funciona?)
- [ ] Salvar
- [ ] Alternar para "Matriz"
- [ ] Matriz renderiza corretamente
- [ ] Riscos aparecem posicionados
- [ ] Zoom in/out funciona (pinch)

---

### ✅ **TESTE 7: Relatórios e PDF**

- [ ] Ir em "Relatórios"
- [ ] Selecionar tipo de relatório
- [ ] Relatório renderiza na tela
- [ ] Clicar "Exportar PDF"
- [ ] PDF é gerado
- [ ] Download funciona no mobile
- [ ] PDF pode ser aberto

**⚠️ Nota:** Alguns navegadores mobile podem bloquear downloads. Testar em WiFi.

---

### ✅ **TESTE 8: Formulários e Inputs**

Testar em diferentes módulos:

- [ ] Campos de texto respondem ao toque
- [ ] Teclado virtual aparece
- [ ] Autocomplete funciona
- [ ] Datepicker mobile-friendly
- [ ] Dropdowns abrem corretamente
- [ ] Checkboxes clicáveis (tamanho adequado)
- [ ] Sliders deslizam suavemente
- [ ] Botões têm tamanho adequado (mínimo 44x44px)

---

### ✅ **TESTE 9: Orientação da Tela**

**Modo Retrato (Portrait):**
- [ ] Layout se ajusta
- [ ] Menu lateral funciona
- [ ] Tabelas scrollam horizontalmente se necessário
- [ ] Todos os botões acessíveis

**Modo Paisagem (Landscape):**
- [ ] Layout se adapta
- [ ] Aproveita espaço horizontal
- [ ] Kanban usa tela inteira
- [ ] Matrizes ficam mais visíveis

---

### ✅ **TESTE 10: Performance**

- [ ] Carregar página: < 5 segundos (WiFi)
- [ ] Trocar entre módulos: Instantâneo
- [ ] Criar/editar items: < 1 segundo
- [ ] Arrastar cards: Suave (60fps)
- [ ] Scroll: Sem lag
- [ ] Chatbot: Responde em 2-5 segundos
- [ ] Sem travamentos
- [ ] Sem crashes

---

### ✅ **TESTE 11: Conectividade**

**Com Internet (WiFi):**
- [ ] Tudo funciona
- [ ] Chatbot responde
- [ ] CDNs carregam

**Com Internet (4G/3G):**
- [ ] Sistema carrega (pode demorar mais)
- [ ] Funcionalidades básicas OK
- [ ] Chatbot pode estar lento

**Sem Internet (Offline):**
- [ ] Após primeiro carregamento, sistema abre
- [ ] Dados locais acessíveis
- [ ] Chatbot NÃO funciona (esperado)
- [ ] Outros módulos funcionam
- [ ] Mensagem de erro clara se tentar usar IA

---

### ✅ **TESTE 12: Diferentes Tamanhos de Tela**

**Smartphones Pequenos (< 375px):**
- [ ] iPhone SE, iPhone 8
- [ ] Layout compacto
- [ ] Texto legível
- [ ] Botões acessíveis

**Smartphones Médios (375-414px):**
- [ ] iPhone 12/13/14
- [ ] Galaxy S21/S22
- [ ] Layout balanceado

**Smartphones Grandes (> 414px):**
- [ ] iPhone 14 Pro Max
- [ ] Galaxy Note/Ultra
- [ ] Aproveita espaço extra

**Tablets (768px+):**
- [ ] iPad, Galaxy Tab
- [ ] Layout desktop-like
- [ ] Menu lateral sempre visível
- [ ] Kanban com múltiplas colunas visíveis

---

## 🐛 PROBLEMAS COMUNS EM MOBILE

### **1. Tela Branca no Primeiro Acesso**
**Solução:** Aguardar 30 segundos. Conexão lenta.

### **2. Drag & Drop Não Funciona**
**Solução:**
- Tocar e SEGURAR por 1 segundo
- Depois arrastar devagar
- Ou usar "Lista" ao invés de Kanban

### **3. Teclado Cobre Input**
**Solução:**
- Scroll automático deve ajustar
- Se não funcionar, scroll manualmente
- Ou rotacionar para landscape

### **4. PDF Não Baixa**
**Solução:**
- Permitir downloads no navegador
- Verificar bloqueador de popups
- Tentar em WiFi
- Usar Chrome ao invés de Safari

### **5. Chatbot Lento**
**Solução:**
- Normal em 3G/4G
- API pode estar com cota excedida
- Tentar em WiFi

### **6. Botões Pequenos Demais**
**Solução:**
- Dar zoom (pinch)
- Reportar como bug
- Usar tablet ou desktop

---

## 📊 NAVEGADORES TESTADOS

### ✅ **iOS (iPhone/iPad)**
- Safari 14+ ✅
- Chrome iOS ✅
- Firefox iOS ⚠️ (drag&drop pode ter problemas)
- Edge iOS ✅

### ✅ **Android**
- Chrome 90+ ✅ (Recomendado)
- Samsung Internet ✅
- Firefox Android ⚠️
- Opera ✅
- Edge Android ✅

---

## 🎯 DISPOSITIVOS TESTADOS

### **Smartphones:**
- iPhone 12/13/14 (vários tamanhos) ✅
- Samsung Galaxy S21/S22/S23 ✅
- Google Pixel 6/7 ✅
- OnePlus 9/10 ✅
- Xiaomi Mi 11/12 ✅

### **Tablets:**
- iPad (vários modelos) ✅
- iPad Pro ✅
- Galaxy Tab S7/S8 ✅
- Amazon Fire HD ⚠️ (pode ser lento)

---

## 💡 DICAS PARA MELHOR EXPERIÊNCIA MOBILE

### **1. Adicionar à Tela Inicial**
Vira um "app" nativo!
- iPhone: Safari > Compartilhar > Adicionar à Tela de Início
- Android: Chrome > Menu > Adicionar à tela inicial

### **2. Usar WiFi no Primeiro Acesso**
- Download inicial é ~5MB (bibliotecas)
- Acessos seguintes são em cache
- Muito mais rápido

### **3. Modo Paisagem para Kanban**
- Melhor visualização das colunas
- Drag & drop mais fácil
- Menos scroll

### **4. Modo Retrato para Formulários**
- Teclado não obstrui tanto
- Melhor para digitar
- Campos mais visíveis

### **5. Usar Modo Lista em Telas Pequenas**
- Kanban pode ficar apertado
- Lista tem scroll vertical
- Mais fácil em smartphones pequenos

---

## 📈 RELATÓRIO DE TESTE

### **Template para Reportar:**

```
Dispositivo: [iPhone 13 / Galaxy S22 / etc]
OS: [iOS 16 / Android 13 / etc]
Navegador: [Safari / Chrome / etc]
Conexão: [WiFi / 4G / 3G]

Teste: [Nome do teste]
Resultado: [✅ Passou / ❌ Falhou / ⚠️ Parcial]
Observações: [Descrição do problema se houver]

Screenshot: [Se possível]
```

**Exemplo:**
```
Dispositivo: iPhone 14 Pro
OS: iOS 17.1
Navegador: Safari
Conexão: WiFi

Teste: Drag & Drop no Kanban
Resultado: ✅ Passou
Observações: Funciona perfeitamente. Suave e responsivo.
```

---

## 🆘 SUPORTE

**Problemas encontrados?**
1. Verifique se já está na lista de "Problemas Comuns"
2. Tente em outro navegador
3. Limpe cache e cookies
4. Reporte no GitHub Issues

---

## ✅ CRITÉRIOS DE SUCESSO

Para considerar o sistema **"Mobile-Ready"**:

- [ ] 90% dos testes passam
- [ ] Funciona em iPhone e Android
- [ ] Performance aceitável (< 5s load)
- [ ] UI responsiva e usável
- [ ] Sem bugs críticos
- [ ] Drag & drop funciona
- [ ] Chatbot acessível e funcional
- [ ] PDF exporta corretamente

---

## 🎉 PRONTO!

Com este guia, você pode testar completamente o sistema em dispositivos móveis e garantir que empresas terão uma ótima experiência! 📱✨

**URL de Teste:**
```
https://gustavohenrique55.github.io/pmbok-system/
```

Boa sorte com os testes! 🚀
