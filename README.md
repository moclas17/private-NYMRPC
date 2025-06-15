
# 🔐 NymRPC SOCKS5 - Proxy JSON-RPC privado usando Nym via SOCKS5

Este proyecto permite enrutar llamadas JSON-RPC a Ethereum a través de la mixnet de Nym utilizando `nym-network-requester` como proxy SOCKS5.

## 📦 Estructura

- `proxy/` - Servidor local que reenvía peticiones a un RPC remoto usando un proxy SOCKS5 por Nym

---

## 🛠️ Requisitos

- Tener instalado `nym-network-requester`
- Tener una identidad `rpc-proxy` inicializada

---

## 🚀 Instrucciones

### 1. Inicializar el requester
```bash
nym-network-requester init --id rpc-proxy --open-proxy
```

### 2. Ejecutarlo
```bash
nym-network-requester run --id rpc-proxy
```

Esto iniciará un proxy SOCKS5 local en:
```
socks5://127.0.0.1:1080
```

---

### 3. Instalar dependencias y correr el proxy
```bash
cd proxy
npm install
npm start
```

---

### 4. Configurar MetaMask

Agrega como red personalizada:
- RPC URL: http://localhost:8545
- Chain ID: 11155111 (Sepolia)
- Network name: NymRPC via SOCKS5

---

### ✅ Resultado

Todas las llamadas de MetaMask serán reenviadas a través del proxy, y de ahí encapsuladas por Nym hasta llegar al nodo de Ethereum remoto.

---

## 🧠 Nota

- Este método no cifra el payload JSON-RPC, pero oculta el origen, destino y patrones de conexión usando la mixnet de Nym.
