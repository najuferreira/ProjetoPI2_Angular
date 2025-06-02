

export interface User {
    id: number;
    nome: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface Paciente extends User {
    data_nascimento: Date;
    cpf: string;
    rg: string;
    numero_contato: string;
    genero: string;
    preferencia_pagamento: string;
    profissao: string;
    cep: string;
    motivo_contato: string;
    horario_atendimento: string;
    conheceu_servico: string;
    contato_emergencia: string;
}

export interface AgendaPaciente extends User{
    data: Date;
    link_reuniao: string;
    plataforma: string;
}