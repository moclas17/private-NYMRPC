import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldCheck, Network, Server, Wallet, ArrowRight, Code, Settings } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center">
          <div className="container px-4 md:px-6 max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Private Ethereum RPC via Nym Mixnet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              MetaMask-compatible JSON-RPC proxy that routes your transactions through the Nym mixnet. Preserve your
              privacy without changing wallets.
            </p>
            <div className="flex justify-center">
              <Link href="http://localhost:8545" target="_blank" rel="noopener noreferrer">
                <Button className="px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understand the journey of your private Ethereum transaction.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center bg-background border-primary/20 hover:border-primary transition-colors duration-300">
                <CardHeader className="pb-4">
                  <Wallet className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Step 1: Local Proxy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    MetaMask sends a transaction to a local proxy at `http://localhost:8545`.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-background border-primary/20 hover:border-primary transition-colors duration-300">
                <CardHeader className="pb-4">
                  <Network className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Step 2: Nym Mixnet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    The proxy encodes the request and sends it through Nym’s mixnet, obscuring metadata.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-background border-primary/20 hover:border-primary transition-colors duration-300">
                <CardHeader className="pb-4">
                  <Server className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Step 3: Remote Node</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    A remote node receives the request and forwards it to Ethereum RPC (e.g., Infura or Alchemy).
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Snippet Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <Code className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Example RPC Payload</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This is how a typical JSON-RPC request looks before being routed through the Nym mixnet.
              </p>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Card className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <pre className="overflow-x-auto text-sm md:text-base">
                    <code className="language-json text-primary-foreground">
                      {`{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x742d35Cc6634C0532925a3b844Bc454e4438f444", "latest"],
  "id": 1
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Structure Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <Settings className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Structure</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A brief overview of the key components that make NymRPC Proxy work.
              </p>
            </div>
            <div className="mx-auto max-w-2xl mt-12">
              <Card className="bg-background border-primary/20">
                <CardContent className="p-6 text-lg space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">proxy/</span>
                    <p className="text-muted-foreground flex-1">Local server receiving MetaMask calls.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">remote/</span>
                    <p className="text-muted-foreground flex-1">
                      Remote endpoint that receives and executes the RPC call.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">nym-client/</span>
                    <p className="text-muted-foreground flex-1">Used to tunnel traffic through the mixnet.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Diagram Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data Flow Diagram</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Visualize how your transaction travels through the NymRPC Proxy.
              </p>
            </div>
            <div className="mx-auto max-w-4xl mt-12 bg-card p-6 rounded-lg border border-primary/20">
              <div className="flex justify-center items-center">
                <div className="mermaid" title="NymRPC Proxy Data Flow">
                  {
                    'graph TD;\nA["MetaMask"] --> B["Proxy"];\nB --> C["Nym Mixnet"];\nC --> D["Remote"];\nD --> E["Ethereum RPC"];'
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-primary/20 bg-card text-muted-foreground">
        <p className="text-xs">&copy; {new Date().getFullYear()} NymRPC Proxy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
