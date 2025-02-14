import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// console.log(publicKey);
// console.log(privateKey);

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados: Buffer = publicEncrypt(
  publicKey,
  Buffer.from("Mensagem super secreta")
);

console.log(dadosCriptografados.toString("hex"));

// ---------------- Transmissão ---------------------

const dadosDecifrados: Buffer = privateDecrypt(privateKey, dadosCriptografados);

console.log(`Dados decifrados: ${dadosDecifrados.toString("utf-8")}`);
