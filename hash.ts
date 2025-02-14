import { createHash, Hash } from "crypto";

class Usuario {
  private nome: string;
  private hash: string;

  constructor(nome: string, senha: string) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha: string): string {
    const hash: Hash = createHash("sha256").update(senha);
    return hash.digest("hex");
  }

  autentica(nome: string, senha: string): boolean {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }
    console.log("Usuário ou senha incorretos");
    return false;
  }
}

const user = new Usuario("ana", "senha123");
user.autentica("ana", "senha123");
user.autentica("ana", "senhaerrada");
user.autentica("nomeerrado", "senha123");
