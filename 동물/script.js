// 전역 변수
let currentQuestion = 0;
let scores = {
    dolphin: 0,    // 돌고래
    owl: 0,        // 올빼미
    lion: 0,       // 사자
    wolf: 0,       // 늑대
    eagle: 0       // 독수리
};

// 질문 목록
const questions = [
    "直感的に行動することが多いですか？",
    "他人の気持ちがよく分かりますか？",
    "リーダーシップを取ることが好きですか？",
    "夜に活動的になりますか？",
    "自由に空を飛びたいと思いますか？",
    "群れで行動するのが好きですか？",
    "静かな場所で考えることが好きですか？",
    "困っている人を見かけたら助けたくなりますか？",
    "新しい環境にすぐ適応できますか？",
    "高い目標を持っていますか？",
    "独りの時間を大切にしていますか？",
    "忠誠心が強いほうですか？",
    "遠くを見通す力がありますか？",
    "直感を信じるほうですか？",
    "守るべきものために戦う覚悟がありますか？"
];

// 테스트 초기화
function initializeTest() {
    const startButton = document.getElementById('start-test');
    const quizContainer = document.getElementById('quiz-container');
    
    startButton.addEventListener('click', () => {
        document.querySelector('.start-container').style.display = 'none';
        quizContainer.style.display = 'block';
        startQuiz();
    });
}

// 질문 표시
function showQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    questionContainer.innerHTML = `
        <h3>質問 ${questionIndex + 1}/15</h3>
        <p>${questions[questionIndex]}</p>
    `;
    
    optionsContainer.innerHTML = `
        <button onclick="handleAnswer('very_high')" class="answer-btn">とてもそう思う</button>
        <button onclick="handleAnswer('high')" class="answer-btn">そう思う</button>
        <button onclick="handleAnswer('neutral')" class="answer-btn">どちらとも言えない</button>
        <button onclick="handleAnswer('low')" class="answer-btn">あまり思わない</button>
        <button onclick="handleAnswer('very_low')" class="answer-btn">全く思わない</button>
    `;
}

// 답변 처리
function handleAnswer(value) {
    // 질문별 점수 계산
    switch(currentQuestion) {
        case 0:
        case 13:
            addPoints(value, ['dolphin', 'wolf']);
            break;
        case 1:
        case 7:
            addPoints(value, ['dolphin', 'owl']);
            break;
        case 2:
        case 9:
            addPoints(value, ['lion', 'eagle']);
            break;
        case 3:
        case 6:
            addPoints(value, ['owl', 'wolf']);
            break;
        case 4:
        case 12:
            addPoints(value, ['eagle']);
            break;
        case 5:
        case 11:
            addPoints(value, ['lion', 'wolf']);
            break;
        case 8:
        case 14:
            addPoints(value, ['dolphin', 'lion']);
            break;
        case 10:
            addPoints(value, ['owl', 'eagle']);
            break;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
        updateProgressBar();
    } else {
        showLoadingPopup();
    }
}

// 결과 분석 팝업 표시
function showLoadingPopup() {
    const popup = document.getElementById('loading-popup');
    popup.style.display = 'flex';
    
    // 팝업 광고 초기화
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('Popup ad load error:', e);
    }
    
    let count = 7;
    const countdown = document.getElementById('countdown');
    
    const timer = setInterval(() => {
        count--;
        countdown.textContent = count;
        
        if (count <= 0) {
            clearInterval(timer);
            popup.style.display = 'none';
            showFinalResult();
        }
    }, 1000);
}

// 최종 결과 표시
function showFinalResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const spiritAnimal = document.querySelector('.spirit-animal');
    
    let maxScore = 0;
    let guardian = '';
    
    for (let animal in scores) {
        if (scores[animal] > maxScore) {
            maxScore = scores[animal];
            guardian = animal;
        }
    }
    
    const animalEmoji = {
        dolphin: '🐬',
        owl: '🦉',
        lion: '🦁',
        wolf: '🐺',
        eagle: '🦅'
    };
    
    spiritAnimal.innerHTML = animalEmoji[guardian];
    resultText.innerHTML = results[guardian];
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// LINE 공유
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("守護動物診断テスト｜あなたを導く運命の動物を見つけよう！");
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URL 복사
function copyURL() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            const alert = document.createElement('div');
            alert.className = 'copy-alert';
            alert.textContent = 'URLをコピーしました！';
            document.body.appendChild(alert);
            
            setTimeout(() => {
                alert.remove();
            }, 2000);
        });
}

// 테스트 다시하기
function retakeTest() {
    currentQuestion = 0;
    scores = {dolphin: 0, owl: 0, lion: 0, wolf: 0, eagle: 0};
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

// 광고 초기화
function initializeAds() {
    const adElements = document.querySelectorAll('.adsbygoogle:not(.popup-ad)');
    adElements.forEach(ad => {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Ad load error:', e);
        }
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initializeTest();
    initializeAds();
});