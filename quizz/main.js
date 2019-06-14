(function() {

// make things wiggle
var tl5 = new TimelineMax({repeat:200, repeatDelay:0, yoyo:true});

tl5.to(".small-bill", 1, {rotation:30, ease: Power0.easeNone})

const myQuestions = [
  {
    question: "Mais qui est donc ce jeune professionel dynamique?",
    images: {
    	one:"carl-1.png",
    	two:"carl-2.png",
    	three:"carl-3.png"
	},
    answers: {
      a: "Carl TAMAKLOE",
      b: "Lou Delbarre",
      c: "Alexandra Schneider"
    },
    correctAnswer: "a",
    number: "1/13"
  },
  {
    question: "De quel LinkedIn de qualite sont donc extraites ces images?",
    images: {
    	one:"leon-1.png",
    	two:"leon-2.png",
    	three:"leon-3.png"
	},
    answers: {
      a: "Danell Benguigui",
      b: "Carl TAMAKLOE",
      c: "Leon Nury"
    },
    correctAnswer: "c",
    number: "2/13"
  },
  {
    question: "N'apperceverais-je pas un.e talentueux.se stagiaire?",
    images: {
    	one:"elise-1.png",
    	two:"elise-2.png",
	},
    answers: {
      a: "Elise Berthault",
      b: "Pierre Attali",
      c: "Hugo Petit",
    },
    correctAnswer: "a",
    number: "3/13"
  },
    {
    question: "A quel.le stagiaire sous-paye appartient ce LinkedIn?",
    images: {
    	one:"pierre-1.png",
    	two:"pierre-2.png",
    	three:"pierre-3.png"
	},
    answers: {
      a: "Daniela Dos Santos",
      b: "Anthony Kuyu",
      c: "Pierre Attali"
    },
    correctAnswer: "c",
    number: "4/13"
  },
    {
    question: "Ne serait-ce donc pas un profil fort satisfaisant?",
    images: {
    	one:"charles-1.png",
    	two:"charles-2.png",
    	three:"charles-3.png"
	},
    answers: {
      a: "Charles de Brianson",
      b: "Alexandre Stott",
      c: "Zachary Pascaud"
    },
    correctAnswer: "a",
    number: "5/13"
  },
      {
    question: "Pourras-tu deviner le jeune actif se cachant derriere ce profil?",
    images: {
    	one:"sasha-1.png",
    	two:"sasha-2.png",
    	three:"sasha-3.png"
	},
    answers: {
      b: "Sasha De Laage",
      a: "Cecile Kessler",
      c: "Jeanne Champeau"
    },
    correctAnswer: "b",
    number: "6/13"
  },
      {
    question: "Devineras-tu qui est ce jeune exploite par la start up nation?",
    images: {
    	one:"lou-1.png",
    	two:"lou-2.png",
    	three:"lou-3.png"
	},
    answers: {
      a: "Lou Delbarre",
      b: "Tess Harmand",
      c: "Medhi Loussaief"
    },
    correctAnswer: "a",
    number: "7/13"
  },
      {
    question: "Et cet.te actif au profil internashioneule oui oui mes amis",
    images: {
    	one:"alexandra-1.png",
    	two:"alexandra-2.png",
	},
    answers: {
      a: "Emilie Baliozian",
      b: "Stanislas Pincon",
      c: "Alexandra Schneider"
    },
    correctAnswer: "c",
    number: "8/13"
  },
      {
    question: "Un sacre Curriculum Vitae qui s'avance",
    images: {
    	one:"esther-1.png",
    	two:"esther-2.png",
    	three:"esther-3.png"
	},
    answers: {
      a: "Julien Verrier",
      b: "Esther Ullberg",
      c: "Nina Roques"
    },
    correctAnswer: "b",
    number: "9/13"
  },
      {
    question: "La concurrence est rude sous cette cinquieme republique",
    images: {
    	one:"elisa-1.png",
    	two:"elisa-2.png",
    	three:"elisa-3.png"
	},
    answers: {
      a: "Ilias Miraoui",
      b: "Alexis Houze",
      c: "Elisa Crozet"
    },
    correctAnswer: "c",
    number: "10/13"
  },
      {
    question: "Un nouvel actif, qui est-ce?",
    images: {
    	one:"anthony-1.png",
    	two:"anthony-2.png"
    		},
    answers: {
      a: "Anthony Kuyu",
      b: "Vincent Viers",
      c: "Garance Bazin"
    },
    correctAnswer: "a",
    number: "11/13"
  },
      {
    question: "Mais KIVALA",
    images: {
    	one:"daniela-1.png",
    	two:"daniela-2.png",
    	three:"daniela-3.png"
	},
    answers: {
      a: "Thibault Caron",
      b: "Daniela Dos Santos",
      c: "La reponse D mais c'est la C lol"
    },
    correctAnswer: "a",
    number: "12/13"
  },
      {
    question: "C fini t tro un pro mtnt",
    images: {
    	one:"tess-1.png",
    	two:"tess-2.png",
	},
    answers: {
      a: "Tess Harmand",
      b: "Patrick de la Brasserie",
      d: "CEST PLUS BELLE",
    },
    correctAnswer: "a",
    number: "13/13"
  },
];

function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];
      const images_list = []

      for (littleOne in currentQuestion.images) {
      	      	images_list.push(
      		`<div class="slider-image"><img class="image-to-slide" src="img/${currentQuestion.images[littleOne]}" /></div>`
      		)
      }
      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
      	  `<div class="slide">
	        <div class="question"> ${currentQuestion.question} </div>
	        <div class="hint-images"> ${images_list.join('')} </div>
	        <div class="answers"> ${answers.join('')} </div>
	       	<div class="number-question"> ${currentQuestion.number} </div>

	       </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'ForestGreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'Crimson';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' sur ' + myQuestions.length + ' yo.';
}

function checkResult(currentQuestion, questionNumber){
	  	    // find selected answer
	  const answerContainers = quizContainer.querySelectorAll('.answers');
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers

      // color the answers green
      answerContainers[questionNumber].style.color = 'ForestGreen';
    }

    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'Crimson';
    }
	  

}
// display quiz right away

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

// on submit, show results

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

showSlide(0);
function showNextSlide(event) {
 checkResult(myQuestions[currentSlide],currentSlide)
 setTimeout(function(){ showSlide(currentSlide + 1)}, 800);
 event.preventDefault()
}
 


function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

})();

