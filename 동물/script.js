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
    ["読書や映画鑑賞", "アウトドア活動", "友人と遊ぶ", "家でリラックスする"],
    ["ほとんど当たる", "時々当たる", "あまり当たらない", "全く当たらない"],
    ["リーダーシップを取る", "サポート役に回る", "観察者としている", "自分の意見を言う"],
    ["運動する", "友人と話す", "趣味に没頭する", "自然の中で過ごす"],
    ["旅行に行く", "家でのんびりする", "新しいことに挑戦する", "友人と過ごす"],
    ["直感", "論理的思考", "他人の意見", "経験"],
    ["優しい", "面白い", "真面目", "社交的"],
    ["情熱的に取り組む", "計画的に進める", "周りの意見を聞く", "柔軟に対応する"],
    ["山や海", "公園や庭", "静かな場所", "賑やかな場所"],
    ["冷静に対処する", "感情的になる", "他人に助けを求める", "自分で解決する"],
    ["信頼関係", "コミュニケーション", "共感", "距離感"],
    ["受け入れる", "抵抗する", "柔軟に対応する", "計画を立て直す"],
    ["幸せで満ち足りた生活", "挑戦し続ける生活", "安定した生活", "自由な生活"]
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
            "困難な状況でも諦めない強さがあります。",
            "他人の意見に流されず、自分の道を貫くタイプです。",
            "チャレンジ精神が旺盛で、困難な課題にも積極的に取り組みます。",
            "短期間で多くのことを学ぶ能力があります。",
            "目的を達成するために周囲と協力することを厭わないですが、自立も重要に考えています。",
            "自分に厳しく、他人にも高い基準を求めがちです。",
            "知識を深めることに対する意欲が強いです。"
        ]
    },
    owl: {
        emoji: "🦉",
        title: "知恵の梟",
        description: [
            "優れた洞察力と知性を持つあなた。",
            "冷静な判断力で周りをサポートします。",
            "静かな中にも強い意志を秘めています。",
            "夜型の傾向があり、静かな時間を大切にします。",
            "他人の意見を慎重に聞き入れることができ、常に冷静です。",
            "長期的な視点で物事を考え、計画的に行動します。",
            "困難な問題に直面したとき、冷静に解決策を見出します。",
            "深い知識と経験に基づいてアドバイスを与えることが得意です。",
            "社交的ではなくても、重要な関係はしっかり築きます。",
            "自分の時間を大切にし、内省することを重視します。"
        ]
    },
    tiger: {
        emoji: "🐯",
        title: "勇猛な虎",
        description: [
            "カリスマ性があり、周りを導くリーダーシップがあります。",
            "情熱的で、目標に向かって突き進む力があります。",
            "正義感が強く、弱い立場の人を守る傾向があります。",
            "決断力があり、行動力に優れています。",
            "困難な状況でもリーダーとして指導力を発揮します。",
            "チャレンジを楽しむタイプで、どんな問題にも果敢に立ち向かいます。",
            "常に自信を持って行動し、他人を引きつける力があります。",
            "情熱を持って他人を励ますことができ、困難な時期にも支えとなります。",
            "勝利を目指して努力を惜しまず、結果を出すために全力を尽くします。",
            "多くの人にインスピレーションを与える存在です。"
        ]
    },
    deer: {
        emoji: "🦌",
        title: "優美な鹿",
        description: [
            "繊細で優しい心を持ち、周りへの気配りが自然とできます。",
            "芸術的なセンスと創造性に優れています。",
            "平和を愛し、調和を大切にする性格です。",
            "直感力が鋭く、自然との結びつきが強いです。",
            "周囲との調和を大切にし、対立を避ける傾向があります。",
            "静かな環境で過ごすことを好み、平穏を求めます。",
            "創造的な発想で新しいアイデアを生み出します。",
            "感受性が豊かで、人の気持ちをよく理解します。",
            "穏やかで優しい振る舞いが、周囲の人々を癒やします。",
            "自然の中で過ごすことで、心をリフレッシュします。"
        ]
    },
    fox: {
        emoji: "🦊",
        title: "賢明な狐",
        description: [
            "知的で機転が利き、臨機応変な対応ができます。",
            "好奇心旺盛で、新しいことへの探究心があります。",
            "社交的でありながら、適度な距離感を保つことができます。",
            "創造的な問題解決能力を持っています。",
            "周囲の状況を素早く読み取る能力があります。",
            "柔軟な思考で、どんな問題にも適応できます。",
            "自分の意見をしっかり持ちつつ、他人の意見にも耳を傾けます。",
            "楽しいことを見つけるのが得意で、常に新しいアイデアを生み出します。",
            "計画的に行動するのが得意で、目標達成のために戦略を立てます。",
            "自立心が強く、独自の方法で成功を収めます。"
        ]
    }
};

let currentQuestion = 0;
let userAnswers = [];

// 테스트 시작
document.getElementById('start-test').addEventListener('click', () => {
    document.querySelector('.intro-text').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
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
// 답변 처리 함수 수정
function handleAnswer(choiceIndex) {
    userAnswers.push(choiceIndex);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // 마지막 질문 후 바로 광고 표시
        showAdPopup();
    }
}

// 광고 팝업 표시 함수
function showAdPopup() {
    const popup = document.getElementById('ad-popup');
    const closeBtn = document.getElementById('close-popup');
    const countdown = popup.querySelector('.countdown');
    
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    let count = 7;
    countdown.textContent = count;
    
    const timer = setInterval(() => {
        count--;
        if (count < 0) {
            clearInterval(timer);
            countdown.style.display = 'none';
            closeBtn.disabled = false;
            closeBtn.classList.add('active');
        } else {
            countdown.textContent = count;
        }
    }, 1000);
    
    closeBtn.onclick = function() {
        if (!closeBtn.disabled) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
            showResult(); // showFinalResult() 대신 showResult() 사용
        }
    };
}

// 최종 결과 표시 함수 수정
function showFinalResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const meterFill = document.querySelector('.meter-fill');
    
    // 퀴즈 컨테이너 숨기기
    quizContainer.style.display = 'none';
    
    // 점수 계산 및 결과 설정
    const finalScore = Math.floor((score / (totalQuestions * 5)) * 100);
    
    let result;
    if (finalScore > 75) {
        result = results.high;
        meterFill.style.width = '90%';
    } else if (finalScore > 50) {
        result = results.medium;
        meterFill.style.width = '65%';
    } else {
        result = results.low;
        meterFill.style.width = '40%';
    }
    
    // 결과 텍スト 설정 및 컨테이너 표시
    resultText.innerHTML = result.replace(/\n/g, '<br>');
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
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

// 테스트 초기화 함수 추가
function initializeTest() {
    document.querySelector('.intro-text').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initializeTest();
});