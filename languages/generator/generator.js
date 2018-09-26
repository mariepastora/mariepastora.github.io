
let element = document.querySelector("#text-generated");
// new ResizeSensor(element, function()
window.onload = window.onresize = (event) =>
{

let doc = document.querySelector("#text-generated");


const wordList = {
  'english': [
      "it", "was", "many", "and", "many", "year", "ago", "in", "a", "kingdom",
      "by", "the", "sea", "that", "a", "maiden", "whom", "you", "may", "know", "by", "the", "name",
      "of", "annabel", "lee", "and", "this", "maiden", "she", "lived", "with", "no", "other",
      "thought", "than", "to", "love", "and", "be", "loved", "by", "me"
   ],
   'italian': [
    "tanti", "e", "tanti", "anni", "or", "sono", "in", "un", "reame", "in", "riva", "al", "mar",
    "viveva", "una", "fanciulla", "che", "conoscerete", "col", "nome", "di", "annabel", "lee", "e",
    "questa", "fanciulla", "non", "viveva", "con", "altro", "pensiero", "che", "di", "amarmi", "ed",
    "essere", "da", "me", "riamata"
   ],
   'french': [ "était", "il", "y", "a", "longtemps", "très", "longtemps", "dans", "un", "royaume",
   "au", "bord", "de", "océan", "y", "vivait", "une", "vierge", "que", "vous", "pourriez", "connaitre", 
   "du", "nom", "annabel", "lee", "cette", "vierge", 'vivait', "sans", "autre", "pensée", "que", "de", "aimer",
   "et", "être", "mon", "aimée"
   ],
   'swedish': ['i', 'ett', 'rike', 'som', 'slutes', 'i', 'hafvets', 'famn', 'i', 'en', 'bygd', 'som',
   'böljan', 'fri', 'fans', 'en', 'jungfru', 'hvars', 'fagra', 'och', 'älskade', 'namn',
   'i', 'mån', 'nämna', 'annabel', 'lee', 'och', 'ingen', 'på', 'hela', 'den', 'vida', 'jord', 'har',
   'älskat', 'och', 'älskats', 'som', 'vi'
   ],
   'german': ['ist',
 'ein',
 'königreich',
 'an',
 'des',
 'meeres',
 'strand',
 'da',
 'war',
 'es',
 'da',
 'lebte',
 'sie',
 'lang',
 'lang',
 'ist',
 'es',
 'her',
 'und',
 'sie',
 'sei',
 'euch',
 'genanntmit',
 'dem',
 'namen',
 'annabel',
 'lee',
 'und',
 'ihr',
 'leben',
 'und',
 'denken',
 'war',
 'ganz',
 'gebannt',
 'in',
 'liebe',
 'und',
 'mich',
 'liebte',
 'sie'],
 'polish' : ['niegdyś',
 'przed',
 'wielu',
 'wielu',
 'laty',
 'królestwie',
 'nad',
 'mórz',
 'pianą',
 'żyła',
 'dzieweczka',
 'którą',
 'znałem',
 'annabel',
 'lee',
 'ją',
 'zwano',
 'dzieweczka',
 'kraju',
 'ponad',
 'morzem',
 'królestwie',
 'nad',
 'mórz',
 'pianą',
 'żyła',
 'tym',
 'tylko',
 'że',
 'mnie',
 'kocha',
 'tym',
 'że',
 'jest',
 'kochaną'], 
 'russian' : ['это',
 'было',
 'давно',
 'это',
 'было',
 'давно',
 'королевстве',
 'приморской',
 'земли',
 'там',
 'жила',
 'цвела',
 'та',
 'что',
 'звалась',
 'всегда',
 'называлася',
 'аннабель-ли',
 'любил',
 'был',
 'любим',
 'мы',
 'любили',
 'вдвоем',
 'только',
 'этим',
 'мы',
 'жить',
 'могли'],
 'hungarian': ['sok-sok',
 'hosszú',
 'esztendeje',
 'már',
 'tengerpart',
 'bús',
 'mezején',
 'élt',
 'egy',
 'kis',
 'lány',
 'ismerhetitek',
 'lee',
 'annácska',
 'nevén',
 'csak',
 'azzal',
 'gondolattal',
 'élt',
 'hogy',
 'szeret',
 'szeretem',
 'én'],
 'yiddish':['זה',
 'היה',
 'לפנים',
 'ולפני',
 'שנים',
 'במלכות',
 'על',
 'ים',
 'ערפלי.שם',
 'דרה',
 'ילדה',
 'שמה',
 'לא',
 'תדע',
 'קראתי',
 'לה',
 'אנאבל',
 'לי.משא',
 'לב',
 'אחר',
 'מלבד',
 'אהבהלא',
 'היה',
 'גם',
 'לה',
 'וגם',
 'לי'],
 'spanish':['hace',
 'de',
 'esto',
 'ya',
 'muchos',
 'muchos',
 'años',
 'cuando',
 'en',
 'un',
 'reino',
 'junto',
 'al',
 'mar',
 'viví',
 'vivía',
 'allí',
 'una',
 'virgen',
 'que',
 'os',
 'evocopor',
 'el',
 'nombre',
 'de',
 'annabel',
 'lee',
 'era',
 'su',
 'único',
 'sueño',
 'verse',
 'siemprepor',
 'mí',
 'adorada',
 'adorarme',
 'mí'],
 'portuguese':['foi',
 'há',
 'muitos',
 'muitos',
 'anos',
 'já',
 'num',
 'reino',
 'de',
 'ao',
 'pé',
 'do',
 'mar.como',
 'sabeis',
 'todos',
 'vivia',
 'láaquela',
 'que',
 'eu',
 'soube',
 'amar',
 'vivia',
 'sem',
 'outro',
 'pensamentoque',
 'amar-me',
 'eu',
 'adorar'],
 'not_reported':['lorem',
 'ipsum',
 'dolor',
 'sit',
 'amet',
 'consectetur',
 'adipiscing',
 'elit',
 'sed',
 'do',
 'eiusmod',
 'tempor',
 'incididunt',
 'ut',
 'labore',
 'et',
 'dolore',
 'magna',
 'aliqua',
 'ut',
 'enim',
 'ad',
 'minim',
 'veniam',
 'quis',
 'nostrud',
 'exercitation',
 'ullamco',
 'laboris',
 'nisi',
 'ut',
 'aliquip',
 'ex',
 'ea',
 'commodo',
 'consequat',
 'duis',
 'aute',
 'irure',
 'dolor',
 'in',
 'reprehenderit',
 'in',
 'voluptate',
 'velit',
 'esse',
 'cillum',
 'dolore',
 'eu',
 'fugiat',
 'nulla',
 'pariatur',
 'excepteur',
 'sint',
 'occaecat',
 'cupidatat',
 'non',
 'proident',
 'sunt',
 'in',
 'culpa',
 'qui',
 'officia',
 'deserunt',
 'mollit',
 'anim',
 'id',
 'est',
 'laborum'],
 'others':['lorem',
 'ipsum',
 'dolor',
 'sit',
 'amet',
 'consectetur',
 'adipiscing',
 'elit',
 'sed',
 'do',
 'eiusmod',
 'tempor',
 'incididunt',
 'ut',
 'labore',
 'et',
 'dolore',
 'magna',
 'aliqua',
 'ut',
 'enim',
 'ad',
 'minim',
 'veniam',
 'quis',
 'nostrud',
 'exercitation',
 'ullamco',
 'laboris',
 'nisi',
 'ut',
 'aliquip',
 'ex',
 'ea',
 'commodo',
 'consequat',
 'duis',
 'aute',
 'irure',
 'dolor',
 'in',
 'reprehenderit',
 'in',
 'voluptate',
 'velit',
 'esse',
 'cillum',
 'dolore',
 'eu',
 'fugiat',
 'nulla',
 'pariatur',
 'excepteur',
 'sint',
 'occaecat',
 'cupidatat',
 'non',
 'proident',
 'sunt',
 'in',
 'culpa',
 'qui',
 'officia',
 'deserunt',
 'mollit',
 'anim',
 'id',
 'est',
 'laborum']
}


const randomWord = function(language) {
  let words = wordList[language]
  return "&nbsp;" + words[Math.floor(Math.random() * words.length)] + "&nbsp;" 
}

class GenerateNewText {

getParagraph(language) {

  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 1;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = randomWord(language)
      firstSentence = false;
    } else {
      paragraph = randomWord(language);
    }
  }
  return paragraph;
}

getAllParagraphs(language, percentage) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < percentage) {
    allParagraphs.push(this.getParagraph(language));
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function(paragraph) {
    paragraphHTML += "&#8203;"+ paragraph +"&#8203;"
  });

  return paragraphHTML;

}

}
const loremIpsum = new GenerateNewText();



let percentages = [
  ['english',32],
  ['yiddish',23],
  ['italian',21],
  ['spanish',5],
  ['hungarian',3],
  ['german',2],
  ['polish',2],
  ['french',1],
  ['russian',1],
  ['others',8],
  ['not_reported',3]
]

let colors = {
  'english': 'rgba(146, 208, 203, 0.2)',
  'french': 'rgba(233,63,51,0.2)',
  'swedish':'rgba(20,101,5, 0.2)',
  'german':'rgba(252,219,102,0.2)',
  'polish':'rgba(237,164,253,0.2)',
  'russian':'rgba(242, 165, 144, 0.2)',
  'hungarian':'rgba(38,52,1,0.2)',
  'yiddish':'rgba(49,155,251,0.2)',
  'italian': 'rgba(36, 74, 251, 0.2)',  
  'spanish':'rgba(244, 176, 103, 0.2)',
  'portuguese':'rgba(150,39,58,0.2)',
  'others':'rgba(134, 137, 152, 0.2)',
  'not_reported':'rgba(134, 137, 152, 0.2)'
}

let num_paragraph_to_generate = Math.round(window.innerHeight / 3) / 150
let size_font = Math.round(window.innerHeight / 38)
// 217
// console.log(num_paragraph_to_generate)
// element.innerHTML = loremIpsum.getAllParagraphsItalian(num_paragraph_to_generate) + loremIpsum.getAllParagraphsEnglish(num_paragraph_to_generate)


element.innerHTML = ''


percentages.forEach(function (data) {
  console.log(size_font)
  let language = data[0]
  let percentage = data[1]
  let words = loremIpsum.getAllParagraphs(language, percentage*num_paragraph_to_generate)
  var span = "<span style='background-color:" +colors[language]+";font-size:"+size_font+ "px' id='"+ language + "'>" + words + "</span>"
  element.innerHTML = element.innerHTML + span
  element.addEventListener("mouseover", function(){
  });


})

};

