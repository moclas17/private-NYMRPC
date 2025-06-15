#!/bin/bash

echo "🧹 Limpiando logs antiguos..."
sudo rm -f /tmp/sockd.log

echo "🚀 Iniciando Dante SOCKS5 proxy en 127.0.0.1:1080..."
sudo sockd -f ./sockd.conf

echo "🔍 Verificando puerto 1080..."
lsof -i :1080


