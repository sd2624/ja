// 질문 목록
const questions = [
    "普段の生活で、どんな時に一番心が落ち着きますか？",
    "困っている人を見かけたとき、あなたはどうしますか？",
    "休日の過ごし方として、最も好きなのは？",
    "あなたの直感は普段どのくらい当たりますか？",
    "集団の中であなたが取る役割は？",
    "ストレスを感じた時、どのように解消しますか？",
    "理想の休暇の過ごし方は？",
    "決断を下すとき、何を重視しますか？",
    "他人からよく言われる性格は？",
    "夢や目標を追求するとき、あなたの特徴は？",
    "自然の中で最も心惹かれる場所は？",
    "困難な状況での対処方法は？",
    "他人との関係で大切にしていることは？",
    "変化に対してどのように反応しますか？",
    "理想の人生とは？"
];

// 각 질문에 대한 선택지
const choices = [
    ["自然の中で", "家族や友人と過ごす時", "一人で趣味に没頭する時", "にぎやかな場所で"],
    ["すぐに助けを申し出る", "状況を見極めてから動く", "誰かに相談する", "見守る"],
    // ... 나머지 질문들의 선택지도 이런 형식으로 추가
];

// 수호동물 결과 타입
const animalTypes = {
    wolf: {
        emoji: "🐺",
        title: "孤高の狼",
        description: [
            "あなたは強い意志と独立心を持つ人です。",
            "直感力が鋭く、的確な判断力を持っています。",
            "仲間思いで、信頼関係を大切にします。",
            "困難な状況でも諦めない強さがあります。"
        ]
    },
    owl: {
        emoji: "🦉",
        title: "知恵の梟",
        description: [
            "優れた洞察力と知性を持つあなた。",
            "冷静な判断力で周りをサポートします。",
            "静かな中にも強い意志を秘めています。",
            "夜型の傾向があり、静かな時間を大切にします。"
        ]
    },
    tiger: {
        emoji: "🐯",
        title: "勇猛な虎",
        description: [
            "カリスマ性があり、周りを導くリーダーシップがあります。",
            "情熱的で、目標に向かって突き進む力があります。",
            "正義感が強く、弱い立場の人を守る傾向があります。",
            "決断力があり、行動力に優れています。"
        ]
    },
    deer: {
        emoji: "🦌",
        title: "優美な鹿",
        description: [
            "繊細で優しい心を持ち、周りへの気配りが自然とできます。",
            "芸術的なセンスと創造性に優れています。",
            "平和を愛し、調和を大切にする性格です。",
            "直感力が鋭く、自然との結びつきが強いです。"
        ]
    },
    fox: {
        emoji: "🦊",
        title: "賢明な狐",
        description: [
            "知的で機転が利き、臨機応変な対応ができます。",
            "好奇心旺盛で、新しいことへの探究心があります。",
            "社交的でありながら、適度な距離感を保つことができます。",
            "創造的な問題解決能力を持っています。"
        ]
    }
};

let currentQuestion = 0;
let userAnswers = [];

// 테스트 시작
document.getElementById('start-btn').addEventListener('click', () => {
    document.querySelector('.intro-section').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
});

// 질문 표시 함수
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question">${questions[currentQuestion]}</div>
        ${choices[currentQuestion].map((choice, index) => `
            <button class="answer-btn" onclick="handleAnswer(${index})">${choice}</button>
        `).join('')}
    `;
}
// 답변 처리 함수
function handleAnswer(choiceIndex) {
    userAnswers.push(choiceIndex);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showAnalysisPopup();
    }
}

// 분석 팝업 표시
function showAnalysisPopup() {
    const popup = document.getElementById('analysis-popup');
    popup.style.display = 'flex';
    
    let countdown = 7;
    const countdownDisplay = document.querySelector('.countdown');
    
    // 광고 표시
    (adsbygoogle = window.adsbygoogle || []).push({});
    
    // 카운트다운 시작
    const timer = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            showResult();
            popup.style.display = 'none';
        }
    }, 1000);
}

// 결과 계산 함수
function calculateResult() {
    // 답변 패턴에 따라 동물 결정
    const answerSum = userAnswers.reduce((a, b) => a + b, 0);
    const results = ['wolf', 'owl', 'tiger', 'deer', 'fox'];
    return results[answerSum % 5];
}

// 결과 표시 함수
function showResult() {
    const resultType = calculateResult();
    const animal = animalTypes[resultType];
    
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <div class="result-content">
            <div class="animal-emoji">${animal.emoji}</div>
            <h2>あなたの守護動物は「${animal.title}」です！</h2>
            <div class="description">
                ${animal.description.map(text => `<p>${text}</p>`).join('')}
            </div>
            <div class="share-buttons">
                <button onclick="shareLine()">LINEで共有</button>
                <button onclick="copyUrl()">URLをコピー</button>
                <button onclick="retakeTest()">もう一度診断する</button>
                <button onclick="goToHome()">他のテストを見る</button>
            </div>
        </div>
    `;
}

// 공유 기능 함수들
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('私の守護動物診断結果をチェックしてください！');
    window.open(`https://line.me/R/msg/text/?${text}%0A${url}`);
}

function copyUrl() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URLをコピーしました！'));
}

function retakeTest() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById('result-container').style.display = 'none';
    document.querySelector('.intro-section').style.display = 'block';
}

function goToHome() {
    window.location.href = 'http://japan.testpro.site/';
}