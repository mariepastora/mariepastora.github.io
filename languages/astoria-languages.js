function astoria() {
  let element = document.querySelector('#text-astoria')
  // new ResizeSensor(element, function()

  const wordList = {
    english: [
      'it',
      'was',
      'many',
      'and',
      'many',
      'year',
      'ago',
      'in',
      'a',
      'kingdom',
      'by',
      'the',
      'sea',
      'that',
      'a',
      'maiden',
      'whom',
      'you',
      'may',
      'know',
      'by',
      'the',
      'name',
      'of',
      'annabel',
      'lee',
      'and',
      'this',
      'maiden',
      'she',
      'lived',
      'with',
      'no',
      'other',
      'thought',
      'than',
      'to',
      'love',
      'and',
      'be',
      'loved',
      'by',
      'me'
    ],
    french: [
      'était',
      'il',
      'y',
      'a',
      'longtemps',
      'très',
      'longtemps',
      'dans',
      'un',
      'royaume',
      'au',
      'bord',
      'de',
      'océan',
      'y',
      'vivait',
      'une',
      'vierge',
      'que',
      'vous',
      'pourriez',
      'connaitre',
      'du',
      'nom',
      'annabel',
      'lee',
      'cette',
      'vierge',
      'vivait',
      'sans',
      'autre',
      'pensée',
      'que',
      'de',
      'aimer',
      'et',
      'être',
      'mon',
      'aimée'
    ],
    polish: [
      'niegdyś',
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
      'kochaną'
    ],
    russian: [
      'это',
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
      'могли'
    ],
    hungarian: [
      'sok-sok',
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
      'én'
    ],
    spanish: [
      'hace',
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
      'mí'
    ],
    portuguese: [
      'foi',
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
      'adorar'
    ],
    others: [
      'lorem',
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
      'laborum'
    ],
    greek: [
      'ήταν',
      'πολλά',
      'πολλά',
      'χρόνια',
      'πριν',
      'σε',
      'ένα',
      'βασίλειο',
      'κοντά',
      'στη',
      'θάλασσα',
      'που',
      'μια',
      'κόρη',
      'ζούσε',
      'εκεί',
      'που',
      'ίσως',
      'την',
      'ξέρετεμε',
      'το',
      'όνομα',
      'annabel',
      'leeκαι',
      'αυτή',
      'κόρη',
      'ζούσε',
      'παρά',
      'μόνο',
      'με',
      'τη',
      'σκέψηνα',
      'αγαπήσει',
      'και',
      'να',
      'αγαπηθεί',
      'από',
      'εμένα'
    ],
    croatian: [
      'bilo',
      'je',
      'to',
      'prije',
      'puno',
      'puno',
      'godina',
      'kraljevstvu',
      'pored',
      'mora',
      'gdje',
      'živjela',
      'je',
      'djeva',
      'koju',
      'možete',
      'znatipo',
      'imenu',
      'annabel',
      'lee',
      'ta',
      'djeva',
      'živjela',
      'je',
      'bez',
      'ikakvih',
      'drugih',
      'mislinego',
      'da',
      'voli',
      'bude',
      'voljena',
      'od',
      'mene'
    ],
    arabic: [
      'لقد',
      'كان',
      'الكثير',
      'والكثير',
      'منذ',
      'عام',
      'مضى',
      'في',
      'مملكة',
      'على',
      'شاطئ',
      'البحر',
      'تعيش',
      'فيها',
      'العذراء',
      'التي',
      'تعرفها',
      'باسم',
      'أنابيل',
      'لي',
      'وهذه',
      'البكر',
      'عاشت',
      'بدون',
      'أي',
      'تفكير',
      'أكثر',
      'من',
      'الحب',
      'والمحبة',
      'من',
      'قبلي'
    ],
    chinese: [
      '很多','很多','年','前','在','海边','的','一个','王国','里','有','一个','少女','你','可能','知道','她的','名字','叫','安娜贝尔李','和','这位','少女','除了','爱','和','被','我','爱','之外','别无','其他','想法'
    ],
    urdu: [
      'یہ',
      'بہت',
      'سے',
      'اور',
      'بہت',
      'سے',
      'سال',
      'پہلے',
      'تھا',
      'کہ',
      'سمندر',
      'کی',
      'طرف',
      'سے',
      'ایک',
      'بادشاہی',
      'میں',
      'جس',
      'میں',
      'ایک',
      'نوکری',
      'موجود',
      'تھی',
      'جسے',
      'آپ',
      'اینابیل',
      'لی',
      'کے',
      'نام',
      'سے',
      'جانتے',
      'ہیں',
      'اور',
      'اس',
      'کی',
      'شادی',
      'کے',
      'بعد',
      'وہ',
      'کسی',
      'دوسرے',
      'خیال',
      'کے',
      'ساتھ',
      'رہتے',
      'ہیں،'
    ],
    korean: [
      '수년',
      '전이었습니다',
      '바다에있는',
      '왕국에서는',
      '아나벨',
      '리와이',
      '처녀의',
      '이름으로',
      '수있는',
      '처녀가',
      '살았습니다',
      '그녀는',
      '사랑하고',
      '사랑받는',
      '이외의',
      '다른',
      '생각으로',
      '살지',
      '않았습니다'
    ],
    tagalog: [
      'ito',
      'ay',
      'marami',
      'at',
      'marami',
      'sa',
      'isang',
      'taon',
      'na',
      'ang',
      'nakalipas',
      'sa',
      'isang',
      'kaharian',
      'sa',
      'pamamagitan',
      'ng',
      'dagat',
      'na',
      'ang',
      'isang',
      'dalaga',
      'ay',
      'nanirahan',
      'na',
      'maaaring',
      'malaman',
      'mo',
      'sa',
      'pangalan',
      'ni',
      'annabel',
      'lee',
      'at',
      'ang',
      'babaeng',
      'ito',
      'ay',
      'nabubuhay',
      'siya',
      'nang',
      'walang',
      'iba',
      'pang',
      'pag-iisip',
      'kaysa',
      'sa',
      'pagmamahal',
      'at',
      'pagmamahal',
      'ko'
    ],
    japanese: [
      'それ',
      'は何',
      '年も',
      '前だっ',
      'た海',
      'の王',
      '国で、',
      'あな',
      'たが',
      'アナベル・',
      'リーと',
      'この',
      '女の',
      '名前',
      'で知',
      'ってい',
      'るか',
      'もし',
      'れな',
      'い乙',
      '女が',
      'そこ',
      'に住',
      'んでい',
      'たこと',
      'は、',
      '私に',
      '愛し',
      '愛さ',
      'れてい',
      'た'
    ],
   'italian': [
    "tanti", "e", "tanti", "anni", "or", "sono", "in", "un", "reame", "in", "riva", "al", "mar",
    "viveva", "una", "fanciulla", "che", "conoscerete", "col", "nome", "di", "annabel", "lee", "e",
    "questa", "fanciulla", "non", "viveva", "con", "altro", "pensiero", "che", "di", "amarmi", "ed",
    "essere", "da", "me", "riamata"
   ]
  }

  const randomWord = function(language) {
    let words = wordList[language]
    return '&nbsp;' + words[Math.floor(Math.random() * words.length)] + '&nbsp;'
  }

  class GenerateNewText {
    getParagraph(language) {
      let paragraph = ''
      // Set the minimum number of words
      let minimumCharacterLength = 1
      let firstSentence = true
      while (paragraph.length < minimumCharacterLength) {
        if (firstSentence) {
          paragraph = randomWord(language)
          firstSentence = false
        } else {
          paragraph = randomWord(language)
        }
      }
      return paragraph
    }

    getAllParagraphs(language, percentage) {
      let allParagraphs = []
      // Generate the number of paragraphs as specified by the user
      while (allParagraphs.length < percentage) {
        allParagraphs.push(this.getParagraph(language))
      }
      // Convert array into HTML string
      let paragraphHTML = ''
      allParagraphs.forEach(function(paragraph) {
        paragraphHTML += '&#8203;' + paragraph + '&#8203;'
      })

      return paragraphHTML
    }
  }
  const loremIpsum = new GenerateNewText()

  let percentages = [
    ['english', 42],
    ['spanish', 25],
    ['greek', 4],
    ['hungarian', 3],
    ['portuguese', 2],
    ['italian', 2],
    ['croatian', 2],
    ['arabic', 2],
    ['chinese', 2],
    ['urdu', 1],
    ['japanese', 1],
    ['korean', 1],
    ['tagalog', 1],
    ['polish', 1],
    ['french', 1],
    ['russian', 1],
    ['others', 8]
  ]

  let colors = {
    english: 'rgba(146, 208, 203, 0.5)',
    french: 'rgba(233,63,51,0.5)',
    polish: 'rgba(237,164,253,0.5)',
    russian: 'rgba(242, 165, 144, 0.5)',
    hungarian: 'rgba(38,52,1,0.5)',
    yiddish: 'rgba(49,155,251,0.5)',
    italian: 'rgba(36, 74, 251, 0.5)',
    spanish: 'rgba(244, 176, 103, 0.5)',
    portuguese: 'rgba(150,39,58,0.5)',
    others: 'rgba(134, 137, 152, 0.5)',
    greek: 'rgba(8,25,103, 0.5)',
    croatian: 'rgba(46,125,181, 0.5)',
    arabic: 'rgba(234, 105, 175, 0.5)',
    chinese: 'rgba(209,245,35, 0.5)',
    japanese: 'rgba(239,145,124, 0.5)',
    urdu: 'rgba(3,117,251,0.5)',
    korean: 'rgba(106,130,108,0.5)',
    tagalog: 'rgba(164,41,33,0.5)',
    italian: 'rgba(36, 74, 251, 0.5)'
  }

  let num_paragraph_to_generate = Math.round(window.innerHeight / 3) / 150
  let size_font = Math.round(window.innerHeight / 38)
  // 217
  // console.log(num_paragraph_to_generate)
  // element.innerHTML = loremIpsum.getAllParagraphsItalian(num_paragraph_to_generate) + loremIpsum.getAllParagraphsEnglish(num_paragraph_to_generate)

  element.innerHTML = ''

  percentages.forEach(function(data) {
    console.log(size_font)
    let language = data[0]
    let percentage = data[1]
    let words = loremIpsum.getAllParagraphs(
      language,
      percentage* 2
    )
  var span = "<span style='background-color:" +colors[language]+"' id='"+ language + "_astoria'>" + words + "</span>"

    element.innerHTML = element.innerHTML + span
    element.addEventListener('mouseover', function() {})
  })

element.setAttribute("style", `font-size:${size_font}px`)
while(element.clientHeight > window.innerHeight*0.75){
  size_font--
  element.setAttribute("style", `font-size:${size_font}px`)
}

}
