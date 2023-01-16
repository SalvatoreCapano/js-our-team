/*
STEPS:
1. Dichiarare array di oggetti
2. Inizializzare array con dati membri del team
    2.1 Nome, ruolo, foto
3. Stampare in console nome, cognome, ruolo, stringa foto per ogni membro
4. Stampare nel DOM nome, cognome, ruolo, stringa foto per ogni membro del team

BONUS:
1. Stampare la proprieta' Image Url come immagine
2. Organizzare i membri in card
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
        "Image Url": "walter-gordon-office-manager.jpg"
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
        "Image Url": "scott-estrada-developer.jpg"
    },
    {
        "First Name": "Barbara",
        "Last Name": "Ramos",
        "Role": "Graphic Designer",
        "Image Url": "barbara-ramos-graphic-designer.jpg"
    }
];

// Stampa sul DOM le informazioni dei membri
const cardsContainer = document.querySelector(".cardsContainer");

// Itera gli elementi dell'array
for (let i = 0; i < team.length; i++) {

    // Crea una nuova card
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // Stampa tutte le proprieta' dell'oggetto corrente
    for (let key in team[i]) {

        const newInfo = document.createElement("div");
        newInfo.innerText = team[i][key];

        if (key == "First Name") {
            newInfo.classList.add("cardFirstName");
        }
        else if (key == "Last Name") {
            newInfo.classList.add("cardLastName");
        }
        else if (key == "Role") {
            newInfo.classList.add("cardRole");
        }
        else if (key == "Image Url") {
            newInfo.innerHTML = `<img src="img/${team[i][key]}">`;
            newInfo.classList.add("cardImg");
        }
    
        newCard.append(newInfo);
    } //Fine for...in

    // Aggiunge la nuova riga alla tabella
    cardsContainer.append(newCard);
} //Fine for