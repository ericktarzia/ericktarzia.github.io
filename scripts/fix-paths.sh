#!/bin/bash

echo "🔧 Corrigindo paths..."

find out -type f -name "*.html" -exec sed -i 's|"/_next/|"./_next/|g' {} +

echo "✅ Paths corrigidos!"