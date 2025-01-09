// グローバル変数の設定
let currentQuestion = 0;
let score = 0;
const totalQuestions = 15;

// 質問リスト
const questions = [
    "最近、あなたの財務状況についてどう感じていますか？",
    "貯金はうまくできていると思いますか？",
    "投資に自信がありますか？",
    "借金が多いと感じていますか？",
    "株式投資に興味がありますか？",
    "金融知識を継続的に積んでいますか？",
    "ローンを借りる際に慎重に決定していますか？",
    "毎月予算を立てて支出を管理していますか？",
    "さまざまな投資商品について知っていますか？",
    "資産配分をうまく管理していると思いますか？",
    "緊急時用の貯金が十分だと感じていますか？",
    "税金計画を立てていますか？",
    "不動産投資に興味がありますか？",
    "投資について家族と話し合っていますか？",
    "将来の財務計画を立てていますか？"
];

// 結果テキスト
const results = {
    high: `あなたの財務管理能力は非常に高いです！ (90点)

あなたは財務的に非常に安定しており、さまざまな投資方法と資産管理について深い理解を持っています。  
自分の資産を効果的に管理し、未来の準備もきちんと行っています。

特徴:
• さまざまな投資商品に精通しており、株式、不動産など多岐にわたる投資を行っています。
• 財務目標を設定し、それを実現するための計画を着実に実行しています。
• 緊急用の貯金や資産配分などをうまく管理し、財務的な安定性を維持しています。
• 定期的な財務点検と計画で安定した財務管理を行っています。

提案:
• 現在の財務管理方法を維持し、引き続き金融知識をアップデートしてください。
• 自信を持ってさらに多くの分野に投資し、リスク管理にも注意を払いましょう。
• 財務計画を定期的に確認し、目標に沿った修正を行うことをお勧めします。

あなたはすでに非常に健康な財務状態にあり、今後も安定した財務管理を行うことができます！`,

    medium: `あなたの財務管理能力は平均的です。 (65点)

現在、財務的には安定していますが、改善の余地があります。財務管理に対する理解は良好で、少し努力すればさらに良い財務状態を維持できます。

特徴:
• 普段は財務をうまく管理していますが、時々不確実な状況で困難に直面することがあります。
• 株式、不動産などさまざまな投資商品について知っていますが、投資判断は慎重に行っています。
• 借金やローンの管理についてはまだ改善が必要で、緊急時用の貯金にももっと注意を払うべきです。
• 財務計画を立てていますが、その計画をチェックする頻度や具体性が足りないかもしれません。

改善提案:
• 定期的に財務計画をチェックし、具体的な目標を設定して実行しましょう。
• 借金管理や資産配分を慎重に見直し、金融商品についての知識をさらに深めてください。
• 緊急用の貯金と税金計画の準備がもっと必要かもしれません。
• 定期的な財務チェックで長期的な財務計画を立てましょう。

あなたは良い財務管理能力を持っていますが、小さな改善でさらに安定した財務状態を維持できます。`,

    low: `現在、財務状況に困難を感じているかもしれません。 (40点)

財務的に不安定で、管理すべき点が多いかもしれません。しかし、努力を続ければ改善することができます。

現在の特徴:
• 財務管理や投資に対する具体的な計画や知識が不足しているかもしれません。
• 借金やローンが多く、予算管理が不十分かもしれません。
• 緊急用の貯金や資産配分に対する準備が足りず、金融商品についての理解が低い可能性があります。
• 財務計画を立てることに困難を感じ、日々の支出管理が不足しているかもしれません。

提案:
• 財務管理の基本から始め、予算を立てて支出を管理しましょう。
• 金融商品について学び、資産管理能力を高めましょう。
• 借金やローンの管理を見直し、返済計画を立てましょう。
• 緊急用の貯金を準備し、資産配分を見直してリスクを分散することをお勧めします。

あなたは現在財務的に困難を感じていますが、少しずつ改善することでより良い財務状態を作り出すことができます。小さな目標から始めてみましょう。`
};

// テストの初期化
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

// クイズ開始
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion(currentQuestion);
    updateProgressBar();
}

// 進行状況バーの更新
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progress = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
}

// 質問を表示
function showQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    if (questionIndex < questions.length) {
        questionContainer.innerHTML = `
            <h3>質問 ${questionIndex + 1}/15</h3>
            <p>${questions[questionIndex]}</p>
        `;
        
        optionsContainer.innerHTML = `
            <button onclick="handleAnswer(5)" class="answer-btn">非常にそう思う</button>
            <button onclick="handleAnswer(4)" class="answer-btn">そう思う</button>
            <button onclick="handleAnswer(3)" class="answer-btn">どちらとも言えない</button>
            <button onclick="handleAnswer(2)" class="answer-btn">あまりそう思わない</button>
            <button onclick="handleAnswer(1)" class="answer-btn">全くそう思わない</button>
        `;
    }
}

// 回答の処理
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

// 結果分析ポップアップの表示
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

// 最終結果の表示
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

// LINEで共有
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("財務診断テスト｜あなたの財務レベルをチェック！");
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URLをコピー
function copyURL() {
    const url = "http://japan.testpro.site/再テスト/index.html";

    // 一時的なinputを作成
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // テキストコピー
    document.body.removeChild(tempInput);

    // コピー完了通知
    const alertDiv = document.createElement('div');
    alertDiv.className = 'copy-alert';
    alertDiv.textContent = 'URLをコピーしました！';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 2000);
}

// テストをやり直す
function retakeTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

// 広告の初期化
function initializeAds() {
    const adElements = document.querySelectorAll('.adsbygoogle');
    adElements.forEach(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
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

// 페이지가読み込まれた時に実行
document.addEventListener('DOMContentLoaded', () => {
    initializeTest();
    initializeAds();
});
