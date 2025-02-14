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
      return true;
    }
    return false;
  }
}

const usuario = new Usuario("ana", "senha123");

const senhasComuns = [
  "senha",
  "123456",
  "senha123",
  "admin",
  "blink182",
  "meuAniversario",
  "senha123456",
  "brasil",
  "102030",
];

senhasComuns.map((senha) => {
  if (usuario.autentica("ana", senha)) {
    console.log(`A senha do usuário é: ${senha}`);
  }
});
