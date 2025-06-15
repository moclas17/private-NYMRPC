
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { SocksProxyAgent } from "socks-proxy-agent";

const app = express();
app.use(bodyParser.json());

const RPC_URL = "https://rpc.ankr.com/eth_sepolia";
const SOCKS_PROXY = "socks5h://127.0.0.1:1080";

const agent = new SocksProxyAgent(SOCKS_PROXY);

app.post("/", async (req, res) => {
  try {
    const response = await axios.post(RPC_URL, req.body, {
      httpAgent: agent,
      httpsAgent: agent,
      timeout: 10000
    });
    res.json(response.data);
  } catch (err) {
    console.error("❌ Error al enviar por SOCKS5/Nym:", err.message);
    res.status(500).json({ error: "Error al enviar por Nym" });
  }
});

app.listen(8545, () => {
  console.log("🛡️ Proxy con Nym SOCKS5 escuchando en http://localhost:8545");
});
