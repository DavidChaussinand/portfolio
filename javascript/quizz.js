const responses = ["c", "a", "b", "a", "c","b"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });


  showResults(results);
  addColors(results)
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  const errorsNumber = results.filter(el => el === false).length;

  console.log(errorsNumber);
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>6 / 6</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 6</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 6</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 6</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 6</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 6</span>";
      break;
    case 6:
      titleResult.textContent = `👎 Wow , pourtant une question était facile 👎`;
      helpResult.style.display = "block";    
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 6</span>";
      break; 

    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }

  const observations = [
    "En tant que conseiller en assurance pendant 15 ans, j'ai perfectionné mon écoute et ma capacité à résoudre des problèmes. Aujourd'hui, en tant que développeur débutant, je m'appuie sur ces compétences pour mieux comprendre les besoins des utilisateurs et m'adapter rapidement.",
    "Le sport m'aide à rester discipliné et à gérer le stress. Les mangas stimulent ma créativité, tandis que les jeux de société renforcent ma stratégie et mon esprit d'équipe. Chacune de ces passions enrichit ma perspective en tant que développeur débutant.",
    "Même si les 3 propositions me correspondent, il fallait en privilégier une. Chaque problème résolu en programmation est comme un puzzle réussi pour moi. Cette gratification instantanée lorsque le code fonctionne stimule ma curiosité et ma détermination à progresser en tant que développeur débutant.",
    "En développement, un détail manqué peut engendrer des erreurs difficiles à identifier. Ma nature attentive me pousse à être minutieux dès la première écriture du code. Cette persévérance dans le débogage et l'optimisation est le reflet de mon engagement à fournir un travail de qualité, même en tant que novice dans le domaine.",
    "Visionnaire et déterminé, j'ai une perspective élevée sur les situations, capable de voir le tableau d'ensemble tout en me concentrant sur des détails fins. Comme un aigle, je suis indépendant, ambitieux et possède une forte concentration. Ma capacité à prendre des décisions éclairées fait de moi une référence dans mon domaine. Et si j'étais un aigle ,je pourrais voler dans le ciel :) ",
    "Comme au sein de mon ancienne entreprise qui m'a accordé sa confiance après mon stage en BTS, j'aspire à une carrière similaire dans l'entreprise qui m'offre cette alternance. J'apprends rapidement, je suis passionné et je suis convaincu de devenir rapidement une valeur ajoutée pour l'entreprise, tout en étant apprécié de mes collaborateurs."
];

results.forEach((result, index) => {
    const observationParagraph = questions[index].querySelector(".observation");
    if(result) {  // Si la réponse est correcte
        observationParagraph.textContent = observations[index];
    } else {
        observationParagraph.textContent = ""; // Vide le contenu si la réponse est incorrecte
    }
});
}


const questions = document.querySelectorAll(".question-block");

function addColors(results) {
  results.forEach((response, index) => {
    if(results[index]) {
      questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
    } else {
      questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
    }
  })
}

const radioInputs = document.querySelectorAll("input[type='radio']")

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor))

function resetColor(e) {

  const index = e.target.getAttribute("name").slice(1)  - 1;
  const parentQuestionBlock = questions[index];
 
  parentQuestionBlock.style.backgroundColor = "#f1f1f1";
  parentQuestionBlock.style.backgroundImage = "none";

}