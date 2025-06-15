# 🔐 NymRPC SOCKS5 – Private JSON-RPC Proxy via Nym mixnet

This project enables routing Ethereum JSON-RPC requests through the [Nym](https://nymtech.net) privacy infrastructure using a local SOCKS5 proxy powered by the `nym-network-requester`.

It helps protect users from surveillance, metadata collection, and IP-based tracking by RPC providers or governments.

---

## 🌍 Geopolitical & Privacy Motivation

Even when users self-custody their assets via wallets like MetaMask, RPC providers can see their IP addresses and correlate onchain activity. This creates a metadata trail that:

- Breaks user anonymity
- Can be logged or sold
- Can be handed to authorities in case of government surveillance

In Ecuador, for example, a new law mandates ISPs and online services to **hand over user metadata** (IP, connection logs, etc.) upon request. Projects like **Private NYMRPC** aim to protect users by eliminating these trails entirely.

By using the Nym mixnet, **your requests are unlinkable** to your IP address, as they’re anonymized and routed through mix nodes.

---

## 📦 Project Structure

- `proxy/` – Local Node.js server that forwards JSON-RPC requests to an Ethereum RPC endpoint via Nym SOCKS5 proxy

---

## 🛠️ Requirements

- Rust toolchain (`cargo`)
- Node.js (v18+ recommended)
- Git
- [`nym-client`](https://github.com/nymtech/nym)
- `nym-network-requester` (same repo as above)

---

## 🚀 Installation Steps

### 1. Clone and build Nym binaries

```bash
git clone https://github.com/nymtech/nym.git
cd nym
git checkout release/2025.10-brie
cargo build --release --bin nym-client
cargo build --release --bin nym-network-requester
```

Add `nym-client` and `nym-network-requester` to your PATH or run them from `target/release`.

---

### 2. Initialize and start Nym services

#### a) Initialize the requester

```bash
nym-network-requester init --id rpc-proxy --open-proxy true --nym-apis https://sandbox-validator.nymtech.net/api
```

#### b) Run the requester (keep it running in a terminal tab)

```bash
nym-network-requester run --id rpc-proxy
```

This starts a SOCKS5 proxy at:

```
socks5://127.0.0.1:1080
```

---

### 3. Start the local JSON-RPC proxy

```bash
cd proxy
npm install
npm start
```

This starts a local RPC proxy on:

```
http://localhost:8545
```

---

### 4. Configure MetaMask

Go to “Add Network” and set:

- **RPC URL:** `http://localhost:8545`
- **Chain ID:** `11155111` (Sepolia testnet)
- **Network Name:** `NymRPC via SOCKS5`

---

## ✅ Result

All JSON-RPC traffic from MetaMask is routed via `localhost:8545`, passed through the Nym mixnet, and finally delivered to the real Ethereum node. This hides:

- Your IP address
- Traffic patterns
- Metadata correlation

---

## 🧠 Security Note

While the RPC payloads are still visible to the endpoint node, **this setup anonymizes who is making the request**, making surveillance and tracking substantially harder.

---

## 📄 License

MIT

