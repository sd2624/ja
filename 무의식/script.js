// 질문 배열
const questions = [
    "あなたは休日をどのように過ごしますか？",
    "困っている人を見かけたとき、どうしますか？",
    // ... (나머지 13개 질문)
];

// 결과 타입
const resultTypes = {
    type1: {
        title: "思いやりの達人",
        description: [
            "あなたは人の気持ちがよく分かる共感力の持ち主です。",
            "周りの人への配慮が自然とできます。",
            "優しさと思いやりに溢れた性格の持ち主です。"
        ]
    },
    // ... (나머지 4개 타입)
};

// 메인 로직
let currentQuestion = 0;
let answers = [];

function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    // 질문 표시 로직
}

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

function showResult() {
    // 결과 계산 및 표시 로직
}

// LINE 공유 기능
function shareToLine() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://line.me/R/msg/text/?${url}`);
}

// URL 복사 기능
function copyUrl() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URLをコピーしました！'));
}

// 이벤트 리스너 설정
document.getElementById('line-share').addEventListener('click', shareToLine);
document.getElementById('copy-url').addEventListener('click', copyUrl);
document.getElementById('retry-test').addEventListener('click', () => location.reload());
document.getElementById('other-test').addEventListener('click', () => location.href = 'http://japan.testpro.site/');