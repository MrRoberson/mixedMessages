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

const motivations = ['To embrace chaos', 'To spread peace, love and happiness', 'To accumulate wealth and power', 
'To heal the world', 'To get back at their parents', 'To find true love', 'To prove the haters wrong', 
'To chase that elusive high', 'To become famous', 'To reach enlightenment', 
'To bring balance to the world (but not like Thanos)', 'To visit every continent', 'To write a bestselling book', 
'To marry into money', 'To make people laugh', 'To settle down and start a family', 
'To push the boundaries of human knowledge and understanding', 'To push the boundaries of human wisdom and awareness', 
'To teach others'];

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