const {gql} = require('apollo-server');

//Schema 
const typeDefs = gql`
    type Curso {
        titulo : String        
    }
    type Tecnologia{
        tecnologia : String
    }
    input TecnologiaInput {
        tecnologia: String
    }
    type Query {
        obtenerTecnologias : [Tecnologia]
        
        obtenerCursos(input: TecnologiaInput) : [Curso]
    }
`;

module.exports = typeDefs;