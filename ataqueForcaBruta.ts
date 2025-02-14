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

const usuario = new Usuario("ana", "1337");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (usuario.autentica("ana", senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste}`);
  }
}
