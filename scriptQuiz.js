let random = Math.trunc(Math.random() *16);

const startButton = document.querySelector('.start');
const section = document.querySelector('.question-section');
const intro = document.querySelector('.intro');
const trueButton = document.querySelector('.true');
const falseButton = document.querySelector('.false');
const nextButton = document.querySelector('.next');

const questions = [
    'HTML is a programming language .',
    'It is so hard to print "Hello, World!" in Python .',
    'JavaScript is unpopular programming language .', 
    'HTML is used to develop WebSites',
    'JavaScript cannot be used for Web Development',
    'JavaScript is similar to Java ',
    'in C : int x = 10 printf("%d", x); in console will be 10 .',
    'HTML is markup language .',
    'HTML is the Skeleton, CSS is the Skin and JavaScript is the Brain .',
    'A real constant in C can be expressed in both Fractional and Exponential forms .',
    'In C : only character or integer can be used in switch statement .',
    'in C : = is used for comparison, whereas, == is used for assignment of two quantities.',
    'Keyword (-continue-) skip one iteration of loop?',
    'The print function can only print literal values .',
    'x = 36 / 4 * (3 +  2) * 4 + 2  print(x) will add in console 182.0',
    'p, q, r = 10, 20 ,30  print(p, q, r) will add in the console 10,20,30 '
];
const answers = [
    false, 
    false, 
    false, 
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true
];

let question = document.querySelector('.question').textContent = questions[random];

const startGame = function(){
    section.classList.remove('hidden');
    intro.classList.add('hidden');
    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
};

const trueButtonPressed = function(){
    trueButton.addEventListener('click', function(){
        if(answers[random] == true){
            trueButton.classList.add('correct');
        }else{
            trueButton.classList.add('wrong');
            falseButton.classList.add('correct');
        }
    });
}
const falseButtonPressed = function(){
    falseButton.addEventListener('click', function(){
        if(answers[random] == false){
            falseButton.classList.add('correct');
        }else{
            falseButton.classList.add('wrong');
            trueButton.classList.add('correct');
        }
    });
}
const nextButtonPressed = function(){
    nextButton.addEventListener('click', function(){
        random = Math.trunc(Math.random() *15);
        question = document.querySelector('.question').textContent = questions[random];
        trueButton.classList.remove('wrong');
        trueButton.classList.remove('correct');
        falseButton.classList.remove('correct');
        falseButton.classList.remove('wrong');
        trueButtonPressed(answers[random])
        falseButtonPressed(answers[random]);
    });
}

startButton.addEventListener('click', startGame);
trueButtonPressed()
falseButtonPressed();
nextButtonPressed();


// Loading animation
const loading = document.querySelector('.preload');
setTimeout(function(){
    loading.classList.add('hidden');
}, 3500);
