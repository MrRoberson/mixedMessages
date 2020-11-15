const fNames = [];
const lNames = [];
const types = [];
const skills = [];
const weaknesses = [];
const motivations = [];
const funFacts = []; 

const characterFactory = (name, type, skills, weakness, funFact) => {
    return {
        name,
        type,
        skills,
        weakness,
        funFact
    };
}