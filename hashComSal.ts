import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

class Usuario {
  private nome: string;
  private sal: string;
  private hash: string;

  constructor(nome: string, senha: string) {
    this.nome = nome;
    [this.sal, this.hash] = this.criaHashComSal(senha).split(":");
  }

  criaHashComSal(senha: string): string {
    const sal: string = randomBytes(16).toString("hex");
    const senhaHasheada: string = scryptSync(senha, sal, 64).toString("hex");
    return `${sal}:${senhaHasheada}`;
  }

  autentica(nome: string, senha: string): boolean {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, "hex");
      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

      if (hashesCorrespondem) {
        console.log("Usuário autenticado com sucesso");
        return true;
      }
      console.log("Usuário ou senha incorretos");
      return false;
    } else {
      return false;
    }
  }
}

const usuario = new Usuario("jose", "senha123");
console.log(usuario.autentica("jose", "senha123"));
console.log(usuario.autentica("jose", "senhaerrada"));
