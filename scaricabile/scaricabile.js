/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica. 
//operatore logico &&
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3, 
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta //ci servirà un array result:[]
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate // ogni volta che trovo un inserzione -> count++
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//Inizio sviluppo secondo scaletta:
/*

0. stringa che simuli input da utente
1. trasformo in .toLowerCase
2. verifico se la stringa è presente in uno o più degli oggetti nella lista
3. creo la lista di result:[]
3.1 conto la dimensione della lista per valorizzare il count
4. stampare a schermo i risultati


*/

//dichiaro variabili risultato
//output
const results = {
  result: [],
  count: 0,
};

//mocko le stringhe
// let mockedInputTitle = "Service";
// let mockedInputLocation = "US";

// //elaboro metodo per motodo per trasformare in lowerCase:
// function transformerStringToLowerCase(stringToTransform) {
//   return stringToTransform.toLowerCase();
// }

// //TESTO il codice
// console.log(transformerStringToLowerCase(mockedInputLocation));
// console.log(transformerStringToLowerCase(mockedInputTitle));
// let mockedInputLocationMin = transformerStringToLowerCase(mockedInputLocation);
// let mockedInputTitleMin = transformerStringToLowerCase(mockedInputTitle);

// console.log(jobs.length);

function algoritmoRicerca(title, location) {
  console.log(title);
  console.log(location);

  //ciclo ogni elemento della lista jobs
  for (i = 0; i < jobs.length; i++) {
    //prendiamo il singolo oggetto job
    const job = jobs[i];
    //{ title: "Marketing Intern", location: "US, NY, New York"} = i

    let jobTitle = job.title.toLocaleLowerCase();
    let jobLocation = job.location.toLocaleLowerCase();

    // console.log(jobTitle);

    if (jobTitle.includes(title) && jobLocation.includes(location)) {
      results.result.push(job);
    }
  }

  results.count = results.result.length;
  console.log(results.result);
  console.log(results.count);
  return results;
}

// //metodo triggerato al click
// algoritmoRicerca(mockedInputTitleMin, mockedInputLocationMin);

function risultatiRicerca() {
  //0.raccogliere dall'input il dato
  //1. facciamo partire il metodo al click del bottone
  //2. ci aggangiamo al click del bottone
  //prendiamo le variabili
  results.result = [];
  results.count = 0;

  let inputTitle = document.getElementById("title").value;
  let inputLocation = document.getElementById("location").value;

  // Trasformiamo i dati in minuscolo
  let titleMin = inputTitle.toLowerCase();
  let locationMin = inputLocation.toLowerCase();

  let resultsToShow = document.getElementById("risultati");
  const risultati = algoritmoRicerca(titleMin, locationMin);

  resultsToShow.innerHTML = ""; // Svuotiamo i risultati precedenti

  for (let i = 0; i < risultati.result.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${risultati.result[i].title} - ${risultati.result[i].location}`;
    resultsToShow.appendChild(li);
  }
}

const pippo = document.getElementById("seachButton");

pippo.addEventListener("click", risultatiRicerca);
