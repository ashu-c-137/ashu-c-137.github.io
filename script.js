const questions = [
    {
        question: "What's Taylor Swift's birth year?",
        choices: ["1987", "1989", "1990", "1992"],
        correct: 1,
        codeFragment: "A"
    },
    {
        question: "Which of these is NOT a Taylor Swift album?",
        choices: ["Fearless", "Speak Now", "Melodrama", "Folklore"],
        correct: 2,
        codeFragment: "LI"
    },
    {
        question: "What's the name of Taylor's cat that's named after a TV detective?",
        choices: ["Meredith", "Olivia", "Benjamin", "Sherlock"],
        correct: 1,
        codeFragment: "YA"
    },
    {
        question: "Which song has the lyric 'I'm only 17, I don't know anything'?",
        choices: ["Fifteen", "All Too Well", "Betty", "Cardigan"],
        correct: 2,
        codeFragment: "13"
    }
];

let currentQuestion = 0;
let secretCode = "";

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectChoice(index);
        choicesDiv.appendChild(button);
    });
}

function selectChoice(index) {
    const buttons = document.querySelectorAll('#choices button');
    buttons.forEach(button => button.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

document.getElementById('submit').addEventListener('click', () => {
    const selected = document.querySelector('#choices button.selected');
    if (!selected) return;
    
    const selectedIndex = Array.from(selected.parentNode.children).indexOf(selected);
    if (selectedIndex === questions[currentQuestion].correct) {
        secretCode += questions[currentQuestion].codeFragment;
        document.getElementById('result').textContent = `Awesome! You've unlocked: ${questions[currentQuestion].codeFragment}`;
        document.getElementById('code').textContent = secretCode;
    } else {
        document.getElementById('result').textContent = "Oops! That's not right. Give it another shot!";
        return;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('code-input').style.display = 'block';
    }
});

document.getElementById('reveal-message').addEventListener('click', () => {
    const input = document.getElementById('secret-code').value.toUpperCase();
    if (input === secretCode) {
        const message = `OMG ALIYA! HAPPY BIRTHDAY, YOU ROCKSTAR! 🎉🎸🎂

Guess what? You just unlocked the ultimate Taylor Swift fan achievement! 🏆

You're officially a year closer to being as iconic as Tay-Tay herself. Keep slaying, keep being fabulous, and most importantly, keep shaking off the haters! 💃✨

Remember, in the words of the queen herself, "You're on some new level!" So go out there and make this year your personal stadium tour. 🎤🌟

Stay fearless, stay enchanted, and may all your wildest dreams come true! 

Love,
Ashutosh 💖

P.S. Don't forget to stream Taylor's entire discography today. It's what birthday queens do! 🎵👑`;
        document.getElementById('birthday-message').textContent = message;
        document.getElementById('birthday-message').style.display = 'block';
        document.getElementById('code-input').style.display = 'none';
    } else {
        alert("Uh-oh! That's not the right code. Try again, Swiftie!");
    }
});

loadQuestion();
