// 전역 변수 설정
let currentQuestion = 0;
let score = 0;
const totalQuestions = 15;

// 질문 목록
const questions = [
    "毎日の生活に満足感を感じていますか？",
    "家族や友人との関係は良好ですか？",
    "自分の目標や夢を持っていますか？",
    "趣味や楽しみを持っていますか？",
    "健康だと感じていますか？",
    "仕事や学業にやりがいを感じていますか？",
    "困ったときに相談できる人がいますか？",
    "毎日笑顔で過ごせていますか？",
    "自分の時間を十分に持てていますか？",
    "将来に希望を持っていますか？",
    "新しいことに挑戦する意欲がありますか？",
    "十分な睡眠が取れていますか？",
    "経済的な不安はありませんか？",
    "自分を大切にできていますか？",
    "人生に感謝の気持ちを持っていますか？"
];

// 결과 텍스트
const results = {
    high: `あなたの幸福指数は非常に高いレベルです！(90点)

あなたは現在、生活の多くの面で高い満足感を感じており、  
前向きで健康的なライフスタイルを送っています。  
これは、あなたの継続的な努力と正しい選択の結果と言えます。

特徴:
• 周囲の人々と信頼と愛情を築き、健康的な人間関係を維持しています。
• 自分の目標や夢に向かって情熱的に行動し、自己啓発に多くの時間を費やしています。
• 日常の中で感謝すべきことを見つけ、ポジティブな態度で生活しています。
• ストレスを適切に管理し、困難な状況でも冷静に対処する能力を持っています。

推奨事項:
• 現在の状態を維持するために、自分だけのルーティンを継続してください。
• さらなる幸せを追求するために、新しい挑戦や目標を設定してみましょう。
• 周囲の人々に感謝と愛情を表現し、共に成長する関係を築きましょう。
• 自分をケアする時間（運動、瞑想など）を忘れずに大切にしてください。

あなたはすでに素晴らしい人生を送っており、これからも  
さらに素敵な未来が待っています！`,

    medium: `あなたの幸福指数は平均的なレベルです。(65点)

現在、生活のさまざまな面でバランスを保っていますが、  
さらに幸せを追求する可能性があります。  
小さな変化を通じて、より満足のいく人生を作り上げることができます。

特徴:
• 日常の活動にある程度満足感を感じており、安定した生活を送っています。
• 周囲の人々との関係は悪くありませんが、より深い絆を築く余地があります。
• 新しい挑戦や自己啓発に対して、少し積極的な態度が必要です。
• ストレス管理はある程度できていますが、時折感情的に辛い瞬間があるかもしれません。

改善の提案:
• 毎日、感謝できることを1つ思い出してみてください。  
  小さな幸せが集まることで、大きな幸せにつながります。
• 新しい趣味や興味を探求し、日常生活に活力を加えましょう。
• 周囲の人々との会話を増やし、心からの対話を通じて  
  より深い関係を築いてみましょう。
• 自己啓発のために新しいスキルを学ぶ時間や読書の時間を作りましょう。
• 規則的な運動や瞑想を取り入れて、ストレスをより効果的に管理しましょう。

あなたの人生はすでにバランスが取れていますが、  
小さな変化を加えることで、さらに大きな満足を得ることができます。`,

    low: `現在、あなたの幸福指数はやや低いレベルです。(40点)

生活が少し苦しいと感じることがあるかもしれませんが、  
これは誰にでも訪れる一時的な状態である可能性が高いです。  
小さな変化を通じて、状況を改善し、より良い人生を築いていけます。

現在の特徴:
• 日常生活で楽しさを感じることが少なく、  
  無気力感を経験している可能性があります。
• 周囲の人々との関係で距離を感じたり、十分な支えを得られないと感じるかもしれません。
• ストレスやプレッシャーにより、心の余裕を持ちにくい状況かもしれません。
• 自分の感情を抑え込んだり、気分転換がうまくできない状態である可能性があります。

推奨事項:
• 専門家との相談を検討し、自分の心をケアし必要なサポートを受けましょう。  
  これはネガティブな感情を乗り越える大きな助けとなります。
• 毎日のリズムを整え、規則的な生活習慣を作ることで安定感を取り戻しましょう。
• 運動や散歩、軽い趣味を通じて気分転換を図りましょう。  
  小さな行動でも大きな変化をもたらすことができます。
• 親しい人に正直な気持ちを打ち明けて、感情的な支えを得ましょう。
• 簡単に達成できる小さな目標を設定し、それを達成することで達成感を得てみましょう。  
  例えば、毎日10分散歩する、2リットルの水を飲むといったシンプルな目標から始めてみてください。

これらの努力を続けることで、状況を徐々に改善していくことができます。  
あなたの人生には、まだ多くの可能性と希望が満ちています。  
小さな一歩でも、大きな変化をもたらす力があります。`
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

// 답변 처리
function handleAnswer(value) {
    score += value;
    currentQuestion++;
    updateProgressBar();
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showLoadingPopup();
    }
}

// 결과 분석 팝업 표시
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
    const meterFill = document.querySelector('.meter-fill');
    
    const finalScore = Math.floor((score / (questions.length * 5)) * 100);
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
    const url = "http://japan.testpro.site/행복/";
    navigator.clipboard.writeText(url)
        .then(() => {
            const alert = document.createElement('div');
            alert.className = 'copy-alert';
            alert.textContent = 'URLをコピーしました！';
            document.body.appendChild(alert);
            
            setTimeout(() => {
                alert.remove();
            }, 2000);
        })
        .catch((error) => {
            console.error('URLコピーに失敗しました: ', error);
        });
}

// 테스트 다시하기
function retakeTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

// 광고 초기화
function initializeAds() {
    const adElements = document.querySelectorAll('.adsbygoogle');
    adElements.forEach(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initializeTest();
    initializeAds();
}); 