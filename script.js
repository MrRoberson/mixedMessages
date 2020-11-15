const fNames = [];
const lNames = [];
const motivations = [];
const skills = [];
const weaknesses = [];
const catchphrases = []; 

const characterFactory = (name, type, skills, weakness, funFact) => {
    return {
        name,
        type,
        skills,
        weakness,
        funFact
    };
}