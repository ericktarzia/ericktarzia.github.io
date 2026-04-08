#!/bin/bash

echo "🚀 Iniciando deploy..."

# parar se der erro
set -e

echo "🧹 Limpando builds antigos..."
rm -rf .next out docs

echo "📦 Buildando projeto..."
npm run build

echo "criando pasta..."
mkdir -p docs

echo "📂 Copiando para docs..."
cp -r out/* docs/

echo "📝 Garantindo CNAME..."
echo "tarzia.tech" > docs/CNAME

echo "📦 Commitando..."
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "Sem mudanças para commit"

echo "🚀 Enviando para GitHub..."
git push origin main

echo "✅ Deploy finalizado!"
echo "🌐 https://tarzia.tech"