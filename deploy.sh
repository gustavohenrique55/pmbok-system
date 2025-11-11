#!/bin/bash

# 🚀 Script de Deploy Automatizado - Project Management 7 PRO
# Este script facilita o deploy da aplicação no Firebase Hosting

set -e  # Parar em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   🚀 Deploy - Project Management 7 PRO       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════╝${NC}"
echo ""

# Verificar se Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo -e "${RED}❌ Firebase CLI não encontrado!${NC}"
    echo ""
    echo -e "${YELLOW}Instalando Firebase CLI...${NC}"
    npm install -g firebase-tools
    echo -e "${GREEN}✅ Firebase CLI instalado com sucesso!${NC}"
fi

# Verificar se está logado no Firebase
echo -e "${BLUE}🔐 Verificando autenticação...${NC}"
if ! firebase projects:list &> /dev/null; then
    echo -e "${YELLOW}⚠️  Você não está logado no Firebase.${NC}"
    echo -e "${YELLOW}Abrindo login...${NC}"
    firebase login
fi

# Verificar se o projeto está configurado
if grep -q "seu-projeto-firebase-id" .firebaserc; then
    echo -e "${RED}╔════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ⚠️  ATENÇÃO: Configuração Necessária!        ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}Por favor, edite o arquivo .firebaserc e substitua:${NC}"
    echo -e "${YELLOW}'seu-projeto-firebase-id' pelo ID real do seu projeto Firebase${NC}"
    echo ""
    echo -e "${BLUE}Para ver seus projetos Firebase, execute:${NC}"
    echo -e "${GREEN}  firebase projects:list${NC}"
    echo ""
    exit 1
fi

# Mostrar projeto atual
PROJECT_ID=$(grep -o '"default": "[^"]*' .firebaserc | grep -o '[^"]*$')
echo -e "${GREEN}✅ Autenticado!${NC}"
echo -e "${BLUE}📦 Projeto: ${GREEN}${PROJECT_ID}${NC}"
echo ""

# Perguntar confirmação
echo -e "${YELLOW}Deseja fazer o deploy agora? (s/n)${NC}"
read -r response

if [[ "$response" =~ ^([sS][iI][mM]|[sS])$ ]]; then
    echo ""
    echo -e "${BLUE}🚀 Iniciando deploy...${NC}"
    echo ""

    # Fazer deploy
    firebase deploy --only hosting

    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  ✅ Deploy concluído com sucesso!             ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}🌐 Sua aplicação está disponível em:${NC}"
    echo -e "${GREEN}   https://${PROJECT_ID}.web.app${NC}"
    echo -e "${GREEN}   https://${PROJECT_ID}.firebaseapp.com${NC}"
    echo ""
    echo -e "${BLUE}📊 Console do Firebase:${NC}"
    echo -e "${GREEN}   https://console.firebase.google.com/project/${PROJECT_ID}${NC}"
    echo ""
else
    echo ""
    echo -e "${YELLOW}❌ Deploy cancelado.${NC}"
    echo ""
fi
