import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
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
