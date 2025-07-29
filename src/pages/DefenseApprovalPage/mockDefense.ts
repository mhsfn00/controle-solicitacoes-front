const mockData = {
    student: "Alan Turing",
    academicRecord: "123456",
    defenseModality: "hibrido",
    date: new Date("2026-01-01"),
    time: "19:30",
    block: "C56",
    room: "102 - Anfiteatro",
    link: "https://meet.google.com/example",
    attatchments: [
        { "type": "pdf", "title": "Exemplo Titulo Dissertação" }
    ],
    thesisTitle: "Aplicação de Meta Heurísticas no Problema da Mochila Binária",
    advisor: "Anders Hejlsberg",
    coAdvisor1: "Ada Lovelace",
    coAdvisor2: "",
    boardMembers: [
        {"type": "titular", "name": "Anders Hejlberg", "institution": "UTFPR", "title": "doutorado"},
        {"type": "titular", "name": "Ada Lovelace", "institution": "UEL", "title": "mestrado"},
        {"type": "titular", "name": "Linus Torvalds", "institution": "UEM", "title": "doutorado"},
        {"type": "suplente", "name": "Linus ", "institution": "UFSC", "title": "mestrado"},
        {"type": "suplente", "name": "Torvalds", "institution": "UTFPR", "title": "doutorado"},
    ]
}

type mockDefense = {
    student: string,
    academicRecord: string,
    defenseModality: string,
    date: Date,
    time: string,
    block: string,
    room: string,
    link: string,
    attatchments: [
        { "type": string, "title": string }
    ],
    thesisTitle: string,
    advisor: string,
    coAdvisor1: string,
    coAdvisor2: string,
    boardMembers: [
        { type: string, "name": string, "institution": string, "title": string }
    ]
}

export { mockData, type mockDefense};
