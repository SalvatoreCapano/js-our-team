/*
STEPS:
1. Dichiarare array di oggetti
2. Inizializzare array con dati membri del team
    2.1 Nome, ruolo, foto
3. Stampare in console nome, cognome, ruolo, stringa foto per ogni membro
4. Stampare nel DOM nome, cognome, ruolo, stringa foto per ogni membro del team
*/

// Dichiarazione ed inizializzazione array dati membri del team
const team = [
    {
        "First Name": "Wayne",
        "Last Name": "Barnett",
        "Role": "Founder & CEO",
        "Image Url": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "First Name": "Angela",
        "Last Name": "Caroll",
        "Role": "Chief Editor",
        "Image Url": "angela-caroll-chief-editor.jpg"
    },
    {
        "First Name": "Walter",
        "Last Name": "Gordon",
        "Role": "Office Manager",
        "Image Url": "walter-gordon-office-manager.jpgg"
    },
    {
        "First Name": "Angela",
        "Last Name": "Lopez",
        "Role": "Social Media Manager",
        "Image Url": "angela-lopez-social-media-manager.jpg"
    },
    {
        "First Name": "Scott",
        "Last Name": "Estrada",
        "Role": "Developer",
        "Image Url": " scott-estrada-developer.jpg"
    },
    {
        "First Name": "Barbara",
        "Last Name": "Ramos",
        "Role": "Graphic Designer",
        "Image Url": "barbara-ramos-graphic-designer.jpg"
    }
];

// Stampa dati membri del team in console
// Itera gli elementi dell'array
for (let i = 0; i < team.length; i++) {

    console.log (`Member n. ${i+1}`)

    // Stampa tutte le proprieta' dell'oggetto corrente
    for (let key in team[i]) {
        console.log (`${key}: ${team[i][key]}`)
    }

    console.log ("--------------")

}