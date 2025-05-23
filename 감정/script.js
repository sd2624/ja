// 전역 변수 설정
let currentQuestion = 0;
let score = 0;
const totalQuestions = 15;

// 질문 목록
const questions = [
    "最近、感情的に安定感を感じていますか？",
    "よく喜びを感じますか？",
    "自分の感情を正直に表現できますか？",
    "悲しい時やストレスを感じた時、周りに助けを求めますか？",
    "感情をコントロールするのが難しい瞬間が多いですか？",
    "自分の感情を抑え込むことが多いですか？",
    "よく怒りや不安を感じていますか？",
    "周囲の人々に感情をよく共有していますか？",
    "毎日、自分の感情をうまく管理できていると感じますか？",
    "自分の感情状態をしっかり把握していますか？",
    "状況に応じて感情を調整する能力がありますか？",
    "最近、感情的にとても疲れていると感じますか？",
    "他人の感情をよく理解し、共感できますか？",
    "自分の感情を大切にする時間を持っていますか？",
    "自分の感情を十分に大切にしていますか？"
];

// 결과 텍스트
const results = {
    high: `あなたの感情管理能力は非常に高いです！ (90点)

あなたは感情的に安定しており、ポジティブな感情をよく感じています。  
自分の感情を理解し、健康的に表現する能力があります。

特徴:
• 感情をうまく管理しており、周囲の人々にも良い影響を与えています。
• 感情的な困難に直面しても、冷静に対応できる能力があります。
• ストレスや不安を上手にコントロールし、感情的にバランスを保っています。
• 他人の感情に共感し、深い人間関係を築いています。

提案:
• 現在の感情管理能力を維持するために、自分のルーチンを続けてください。
• 時々感情的な休息を取って、自分を大切にする時間を作りましょう。
• ポジティブな感情をさらに増やすために、感謝の気持ちを表現してください。
• 周りの人々に感情的なサポートを提供し、良い関係を築きましょう。

あなたはすでに感情的に健康な状態にあり、今後もポジティブな変化を生み出すことができます！`,

    medium: `あなたの感情的なバランスは良好です。 (65点)

現在、感情的に安定していますが、少しだけ感情管理の能力を向上させる余地があります。

特徴:
• 普段は感情をうまく処理していますが、時折ストレスや不安を感じることがあります。
• 自分の感情を正直に表現していますが、時には抑え込むこともあります。
• 周りの人々と感情的な交流はありますが、もっと深い絆を築くことができるかもしれません。
• 感情の管理には小さな困難がありますが、乗り越える力を持っています。

改善提案:
• 自分の感情をより正直に表現し、感情管理の方法を見つけましょう。
• 日常生活で感謝の気持ちを見つけ、ポジティブな感情を増やしましょう。
• ストレスや不安を減らすために、新しいリラクゼーション方法を試してみましょう。
• 周りの人々と感情的な会話を増やし、より深い関係を築きましょう。

あなたは感情的にバランスを取っていますが、小さな改善でさらに安定感を得ることができます。`,

    low: `現在、あなたは感情的に困難を感じているかもしれません。 (40点)

感情的に不安定だったり、ストレスを感じることが多いかもしれません。  
これは一時的な状態かもしれませんが、小さな変化で改善することができます。

現在の特徴:
• 感情を抑え込んだり、不安定な感情を頻繁に経験しているかもしれません。
• 周りの人々との感情的な交流が少ないと感じるかもしれません。
• ストレスや圧力で感情をコントロールできず、イライラや不安が増えているかもしれません。
• 自分の感情をうまく表現できない状態かもしれません。

提案:
• 自分の感情を認め、正直に表現する練習をしましょう。
• ストレスを減らすために運動や瞑想を始め、感情のコントロール能力を高めましょう。
• 信頼できる人と感情的な会話をし、心のサポートを得ましょう。
• 専門家に相談して、感情管理のための方法を学びましょう。
• 小さな目標を設定し、達成することで感情的な安定を取り戻しましょう。

これらの努力を通じて、感情的な安定を徐々に取り戻すことができます。あなたの人生にはまだ多くの可能性があります。`
};

// 테스트 초기화
function initializeTest() {
    const startButton = document.getElementById('start-test');
    const quizContainer = document.getElementById('quiz-container');
    
    startButton.addEventListener('click', () => {
        startButton.parentElement.style.display = 'none';
        quizContainer.style.display = 'block';
        quizContainer.classList.add('animate-fade-in');
        startQuiz();
    });
}

// 퀴즈 시작
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion(currentQuestion);
    updateProgressBar();
}

// 진행 상태바 업데이트
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progress = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
}

// 질문 표시
function showQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    if (questionIndex < questions.length) {
        questionContainer.innerHTML = `
            <h3>質問 ${questionIndex + 1}/15</h3>
            <p>${questions[questionIndex]}</p>
        `;
        
        optionsContainer.innerHTML = `
            <button onclick="handleAnswer(5)" class="answer-btn">とてもそう思う</button>
            <button onclick="handleAnswer(4)" class="answer-btn">そう思う</button>
            <button onclick="handleAnswer(3)" class="answer-btn">どちらとも言えない</button>
            <button onclick="handleAnswer(2)" class="answer-btn">あまり思わない</button>
            <button onclick="handleAnswer(1)" class="answer-btn">全く思わない</button>
        `;
    }
}

// 광고 로드 함수
function loadAds() {
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('광고 로드 실패:', e);
    }
}

// 광고 팝업 표시 함수 수정
function showAdPopup() {
    const popup = document.getElementById('ad-popup');
    const closeBtn = document.getElementById('close-popup');
    const countdown = popup.querySelector('.countdown');
    
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // 광고 스크립트 실행
    (adsbygoogle = window.adsbygoogle || []).push({});
    
    let count = 7;
    countdown.textContent = count;
    
    const timer = setInterval(() => {
        count--;
        if (count < 0) {
            clearInterval(timer);
            countdown.style.display = 'none'; // 카운터 숫자 사라지게 함
            closeBtn.disabled = false;
            closeBtn.classList.add('active');
        } else {
            countdown.textContent = count;
        }
    }, 1000);
    
    closeBtn.onclick = function() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
        showFinalResult();
    };
}

// 기존 handleAnswer 함수 수정
function handleAnswer(value) {
    score += value;
    currentQuestion++;
    updateProgressBar();
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showAdPopup();
    }
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
    
    // 결과 텍스트 설정 및 컨테이너 표시
    resultText.innerHTML = result.replace(/\n/g, '<br>');
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// LINE 공유
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("幸福度診断テスト｜あなたの幸せレベルをチェック！");
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URL 복사
function copyURL() {
    const url = "http://japan.testpro.site/감정/index.html";

    // 임시 input 생성
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // 텍스트 복사
    document.body.removeChild(tempInput);

    // 복사 완료 알림
    const alertDiv = document.createElement('div');
    alertDiv.className = 'copy-alert';
    alertDiv.textContent = 'URLをコピーしました！';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 2000);
}

// 테스트 다시하기
function retakeTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initializeTest();
});