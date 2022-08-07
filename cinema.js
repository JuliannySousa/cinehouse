let cinema = "cineHouse"
console.log(cinema);
let catalogo = require("./database/catalogo.json")


let adicionarFilme = (filme) => {
    catalogo.push(filme)
}


adicionarFilme({
    codigo: 3,
    titulo: "Crepusculo",
    duracao: 2.45,
    atores: ["Eduard", "Bella"],
    anoDeLancamento: 2010,
    emCartaz: false
});

let buscarFilme = codigo => {
    return catalogo.find(filme => filme.codigo === codigo)

}

let alterarStatusEmCartaz = codigo => {
    let acheiFilme = buscarFilme(codigo);

    if (acheiFilme) {
        acheiFilme.emCartaz = !acheiFilme.emCartaz
    }
    return acheiFilme
}

let listarTodosOsFilmes = (filmes) => {
    filmes.forEach(filme => {
        console.log(`
        Filme: ${filme.titulo}
        Duração: ${filme.duracao}hrs
        Atores: ${filme.atores}
        AnoDeLancamento: ${filme.anoDeLancamento}
        emCartaz: ${filme.emCartaz ? "Sim" : "Não"}
        `)
    })

}
//listarTodosOsFilmes(catalogo);

let listarFilmesEmCartaz = () => {
    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz)
    listarTodosOsFilmes(filmesEmCartaz);
}

let listarFilmesDeLongaDuracao = () => {
    let filmesDeLongaDuracao = catalogo.filter(filme => filme.duracao >= 2);
    listarTodosOsFilmes(filmesDeLongaDuracao);

}

listarFilmesDeLongaDuracao()