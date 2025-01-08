// 질문과 선택지 배열
const questions = [
    "休日、あなたは主にどこで過ごしますか？",
    "ストレスを感じたとき、どうやって解消しますか？",
    "新しい環境で友達を作るとき、どうしますか？",
    "重要な決定を下すとき、どうしますか？",
    "嬉しい気持ちを感じたとき、どう表現しますか？",
    "友達と意見が違うとき、どうしますか？",
    "目標を立てるとき、どんなアプローチを取りますか？",
    "趣味の時間は主にどのように過ごしますか？",
    "仕事や勉強をするとき、どんな環境が好きですか？",
    "突然の予定変更があったとき、どう感じますか？",
    "重要な話し合いをするとき、どんなスタイルを取りますか？",
    "失敗したとき、どのように対処しますか？",
    "成功したいと思うとき、何が一番の原動力になりますか？",
    "他人からの評価について、どう考えますか？",
    "将来のことを考えるとき、どんな気持ちになりますか？"
];

const choices = [
    ["家でゆっくり", "友達と外出", "趣味に没頭", "予定を立てて行動"],
    ["運動する", "音楽を聴く", "友達と話す", "食べる"],
    ["積極的に話しかける", "様子を見る", "共通の趣味から", "自然な流れで"],
    ["直感を信じる", "慎重に検討", "人に相談", "データで判断"],
    ["すぐ表現", "控えめに", "行動で示す", "じっくり味わう"],
    ["主張する", "相手に合わせる", "話し合う", "分析する"],
    ["大きな目標", "現実的な目標", "柔軟な目標", "段階的な目標"],
    ["創作活動", "スポーツ", "読書", "料理"],
    ["賑やか", "静か", "自然の中", "整理された場所"],
    ["柔軟に対応", "少し不安", "チャンスと考える", "計画を立て直す"],
    ["率直に", "穏やかに", "論理的に", "共感しながら"],
    ["すぐ立ち直る", "深く反省", "原因を分析", "助けを求める"],
    ["周りの期待", "自己成長", "競争心", "理想の実現"],
    ["気にする", "参考程度", "無視する", "分析する"],
    ["わくわく", "不安", "計画を立てる", "なりゆきに任せる"]
];

// 결과 타입
const resultTypes = {
    type1: {
        title: "直感的なリーダー型 🌟",
        description: [
            "あなたは生まれながらのリーダーシップを持っています。",
            "直感的な判断力と決断力に優れており、周りの人々を自然と導く力があります。",
            "新しいアイデアを生み出すことが得意で、創造的な解決策を見つけることができます。",
            "時には独断的に見られることもありますが、それは情熱から来るものです。",
            "あなたの存在は、周りの人々に勇気と活力を与えています。"
        ]
    },
    type2: {
        title: "思いやりの共感者 💕",
        description: [
            "あなたは驚くべき共感能力の持ち主です。",
            "他人の感情を深く理解し、適切なサポートを提供することができます。",
            "周りの人々の心の支えとなり、信頼される存在です。",
            "優しさと思いやりに溢れ、人々を癒す力を持っています。",
            "時には自分の感情を抑えすぎてしまうことがありますが、それもあなたの優しさの表れです。"
        ]
    },
    type3: {
        title: "論理的な分析家 🔍",
        description: [
            "あなたは物事を論理的に分析することが得意です。",
            "複雑な問題を整理し、効率的な解決策を見つけることができます。",
            "知的好奇心が強く、常に新しい知識を求めています。",
            "冷静な判断力を持ち、感情に流されることが少ないです。",
            "時には周りから冷たく見られることもありますが、それは慎重さの表れです。"
        ]
    },
    type4: {
        title: "自由な創造者 🎨",
        description: [
            "あなたは豊かな創造性と独創的な発想力の持ち主です。",
            "既存の枠にとらわれず、新しい可能性を追求することができます。",
            "芸術的なセンスと表現力に優れています。",
            "自由な精神を持ち、独自の価値観を大切にしています。",
            "時には現実的でないと思われることもありますが、それこそがあなたの魅力です。"
        ]
    },
    type5: {
        title: "堅実な実行者 ⚡",
        description: [
            "あなたは確実に物事を進める実行力の持ち主です。",
            "責任感が強く、約束したことは必ず守ります。",
            "計画的に行動し、着実に目標を達成することができます。",
            "信頼性が高く、周りからの期待に応えることができます。",
            "時には柔軟性に欠けると思われることもありますが、それは誠実さの表れです。"
        ]
    }
};

// 시작 버튼 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startQuiz);
});

let currentQuestion = 0;
let answers = [];

// 퀴즈 시작 함수
function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

// 질문 표시 함수
function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (currentQuestion >= questions.length) {
        showAnalysisPopup();
        return;
    }

    quizContainer.innerHTML = `
        <div class="question-container">
            <div class="progress-bar">
                <div class="progress" style="width: ${(currentQuestion + 1) / questions.length * 100}%"></div>
            </div>
            <h2>質問 ${currentQuestion + 1}/15</h2>
            <p class="question">${questions[currentQuestion]}</p>
            <div class="choices">
                ${choices[currentQuestion].map((choice, index) => `
                    <button onclick="selectAnswer(${index})" class="choice-btn">
                        ${choice}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// 답변 선택 함수
function selectAnswer(answerIndex) {
    answers.push(answerIndex);
    currentQuestion++;
    showQuestion();
}

// 분석 팝업 표시 함수
function showAnalysisPopup() {
    const popup = document.getElementById('analysis-popup');
    popup.style.display = 'flex';
    
    let countdown = 7;
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            popup.style.display = 'none';
            showResult();
        }
    }, 1000);
}

// 결과 계산 함수
function calculateResult(answers) {
    const typeScores = {
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0
    };

    answers.forEach((answer, index) => {
        switch (index) {
            case 0:
            case 4:
            case 8:
            case 12:
                typeScores.type1 += answer === 0 ? 1 : 0;
                typeScores.type2 += answer === 1 ? 1 : 0;
                typeScores.type3 += answer === 2 ? 1 : 0;
                typeScores.type4 += answer === 3 ? 1 : 0;
                break;
            case 1:
            case 5:
            case 9:
            case 13:
                typeScores.type2 += answer === 0 ? 1 : 0;
                typeScores.type3 += answer === 1 ? 1 : 0;
                typeScores.type4 += answer === 2 ? 1 : 0;
                typeScores.type5 += answer === 3 ? 1 : 0;
                break;
            case 2:
            case 6:
            case 10:
            case 14:
                typeScores.type1 += answer === 0 ? 1 : 0;
                typeScores.type3 += answer === 1 ? 1 : 0;
                typeScores.type5 += answer === 2 ? 1 : 0;
                typeScores.type4 += answer === 3 ? 1 : 0;
                break;
            case 3:
            case 7:
            case 11:
                typeScores.type1 += answer === 0 ? 1 : 0;
                typeScores.type2 += answer === 1 ? 1 : 0;
                typeScores.type5 += answer === 2 ? 1 : 0;
                typeScores.type4 += answer === 3 ? 1 : 0;
                break;
        }
    });

    let maxScore = 0;
    let resultType = 'type1';
    for (const type in typeScores) {
        if (typeScores[type] > maxScore) {
            maxScore = typeScores[type];
            resultType = type;
        }
    }

    return resultType;
}

// 결과 표시 함수
function showResult() {
    const resultContainer = document.getElementById('result-container');
    const shareContainer = document.getElementById('share-container');
    const result = calculateResult(answers);
    
    resultContainer.innerHTML = `
        <h2>${resultTypes[result].title}</h2>
        ${resultTypes[result].description.map(desc => `<p>${desc}</p>`).join('')}
    `;
    
    resultContainer.style.display = 'block';
    shareContainer.style.display = 'block';
}

// 공유 기능
document.getElementById('line-share').addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://line.me/R/msg/text/?${url}`);
});

document.getElementById('copy-url').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URLをコピーしました！'));
});

document.getElementById('retry-test').addEventListener('click', () => {
    location.reload();
});

document.getElementById('other-test').addEventListener('click', () => {
    location.href = 'http://japan.testpro.site/';
});