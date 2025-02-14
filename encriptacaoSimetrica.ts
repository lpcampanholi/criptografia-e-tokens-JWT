import {
  createCipheriv,
  randomBytes,
  createDecipheriv,
  Cipher,
  Decipher,
} from "crypto";

const mensagem: string = "Demonstração do curso";
const chave: Buffer = randomBytes(32);
const vi: Buffer = randomBytes(16);
console.log(chave);

const cifra: Cipher = createCipheriv("aes256", chave, vi);

const mensagemCifrada: string =
  cifra.update(mensagem, "utf-8", "hex") + cifra.final("hex");

console.log(mensagemCifrada);

// Transmissão -------------------- chave, vi, mensagem

// Decifrar a mensagem

const decifra: Decipher = createDecipheriv("aes256", chave, vi);
const mensagemDecifrada: string =
  decifra.update(mensagemCifrada, "hex", "utf-8") + decifra.final("utf-8");

console.log(`Decifrado: ${mensagemDecifrada}`);
