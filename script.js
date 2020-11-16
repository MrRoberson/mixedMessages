const fNames = ['James', 'Naomi', 'Amos', 'Chrisjen', 'Alex', 'Roberta', 'Jake', 'Amy', 'Charles', 'Rosa', 'Terry', 
'Raymond', 'Marco', 'Eleanour', 'Camilla', 'Janet', 'Jermaine', 'Kendrick', 'Aubrey', 'John', 'Tom', 'Scarlet', 
'Elizabeth', 'Angelina', 'Luis', 'Eva', 'Maria', 'Bruce', 'Don', 'Walter', 'Skylar', 'Steven', 'Rachel', 'Michelle', 
'Leonard', 'Delilah', 'Sheldon', 'Martha', 'Freema', 'Jolene', 'Isabelle', 'Harvey', 'Mike', 'Ethan', 'Nicolas', 
'Hayley', 'Petra', 'Xavier', 'Dermot', 'Adeline', 'Matthew'];
const lNames = ['Ashford', 'Jones', 'Drummer', 'Harmon', 'Ross', 'Gleeson', 'Patterson', 'Campbell', 'Parker', 
'Franklin', 'Gilbert', 'McKenzie', 'McDonald', 'Spencer', 'Rogan', 'Hancock', 'Myers', 'Hunt', 'Smith', 'Tucker', 
'Pritchett', 'Del Gado', 'Roberts', 'Holden', 'Draper', 'Nagata', 'Potter', 'Fry', 'Grant', 'Miller', 'James', 
'Black', 'Jordan', 'Ford', 'Souther', 'Pennywise', 'Crosby', 'Rodgers', 'Sinnatra', 'Stone', 'Cooper', 'Gordon', 
'Lawson', 'Mercado', 'Affleck', 'Wynn', 'Siddiqui', 'Sidique', 'Ocean', 'Schmitt', 'Murdock'];
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