import type { User } from "./types"

const mockedUser: User = {
    id: "12345",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: true,
    email: "ra12345@uem.br",
    nomeCivil: "Fulano de Tal",
}

const professor = {
    ...mockedUser,
    email: "prof@uem.br",
    professor: {}
}

const secretaria = {
    ...mockedUser,
    email: "sec@uem.br",
    secretaria: {}
}

const aluno = {
    ...mockedUser,
    email: "aluno@uem.br",
    aluno: {}
}

const users = [
    professor,
    secretaria,
    aluno
]

export function login(email: string, password: string): Promise<User> {
    const user = users.find(user => user.email === email);
    if (!user) {
        return Promise.reject(new Error("User not found"));
    }
    if (user.email === email && password) {
        return Promise.resolve(user);
    }
    return Promise.reject(new Error("Invalid credentials"));
}

export function logout() {
    return Promise.resolve();
}
