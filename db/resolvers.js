
const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    }, 
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];

//Resolver
const resolvers =  {
    Query: {
        obtenerTecnologias :  () =>  cursos,
        obtenerCursos: (rel, {input}, ctx, info) => {
            console.log(rel);
            console.log("-- REL ---");
            console.log(input);
            console.log("--INPUT---");
            console.log(ctx);
            console.log("--CTX---");
            console.log(info);
            console.log("--INFO---");
            return input ? cursos.filter( curso => curso.tecnologia === input.tecnologia) : cursos;
        }
    }
}


module.exports = resolvers;