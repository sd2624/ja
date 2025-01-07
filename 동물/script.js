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

// 동물별 결과 텍스트
const results = {
    dolphin: `あなたの守護動物はイルカです！

知性と調和の象徴であるイルカは、あなたの優しさと知恵を表しています。

特徴:
• 優れたコミュニケーション能力
• 強い共感力と直感力
• 社交的で協調性がある
• 遊び心と創造性に富む

イルカはあなたに次のメッセージを伝えています：
「人々との絆を大切に、そして人生を楽しみながら進んでいきましょう。
あなたの笑顔は、周りの人々の心も明るくする力があります。」`,

    owl: `あなたの守護動物はフクロウです！

古代から知恵の象徴とされるフクロウは、あなたの洞察力と直感を導きます。

特徴:
• 優れた判断力と洞察力
• 静かな知性と忍耐力
• 夜型の創造的思考
• 深い精神性

フクロウはあなたに次のメッセージを伝えています：
「静けさの中にこそ真実があります。
内なる声に耳を傾け、自分の直感を信じてください。」`,

    lion: `あなたの守護動物はライオンです！

百獣の王であるライオンは、あなたの中にある力強さとカリスマ性を象徴します。

特徴:
• 強いリーダーシップ
• 勇気と決断力
• 責任感と使命感
• 威厳のある存在感

ライオンはあなたに次のメッセージを伝えています：
「あなたには人々を導く力があります。
自信を持って前に進み、仲間たちを守り導いていきましょう。」`,

    wolf: `あなたの守護動物はオオカミです！

群れの絆を大切にするオオカミは、あなたの忠誠心と協調性を表しています。

特徴:
• 強い絆と忠誠心
• 優れたチームワーク
• 直感的な判断力
• 適応力と生存本能

オオカミはあなたに次のメッセージを伝えています：
「仲間との絆を大切に、そして自分の本能を信じてください。
あなたの忠誠心は、必ず報われます。」`,

    eagle: `あなたの守護動物はワシです！

高く舞い上がる鷲は、あなたの大きな視野と高い志を象徴します。

特徴:
• 鋭い洞察力と先見性
• 高い目標設定能力
• 精神的な自由さ
• 決断力と実行力

ワシはあなたに次のメッセージを伝えています：
「より高みを目指し、大きな視野で物事を見てください。
あなたには、大きな可能性が開かれています。」`
};

// テスト初期化
function initializeTest() {
    const startButton = document.getElementById('start-test');
    const quizContainer = document.getElementById('quiz-container');
    
    startButton.addEventListener('click', () => {
        startButton.parentElement.style.display = 'none';
        quizContainer.style.display = 'block';
        startQuiz();
    });
}

// 質問表示
function showQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    if (questionIndex < questions.length) {
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

// 점수 추가
function addPoints(value, animals) {
    let points;
    switch(value) {
        case 'very_high': points = 5; break;
        case 'high': points = 4; break;
        case 'neutral': points = 3; break;
        case 'low': points = 2; break;
        case 'very_low': points = 1; break;
    }
    
    animals.forEach(animal => {
        scores[animal] += points;
    });
}

// 진행 상태바 업데이트
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progress = (currentQuestion / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// 결과 분석 팝업
function showLoadingPopup() {
    const popup = document.getElementById('loading-popup');
    popup.style.display = 'block';
    
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
    
    // 최고 점수 동물 찾기
    let maxScore = 0;
    let guardian = '';
    
    for (let animal in scores) {
        if (scores[animal] > maxScore) {
            maxScore = scores[animal];
            guardian = animal;
        }
    }
    
    // 동물 이모지 설정
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

// 퀴즈 시작
function startQuiz() {
    currentQuestion = 0;
    showQuestion(currentQuestion);
    updateProgressBar();
}

// 광고 초기화
function initializeAds() {
    const adElements = document.querySelectorAll('.adsbygoogle');
    adElements.forEach(() => {
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