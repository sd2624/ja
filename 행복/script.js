// 질문 목록
const questions = [
    "毎日の生活に充実感を感じていますか？",
    "家族や友人との関係は良好ですか？", 
    "自分の将来に希望を持っていますか？",
    "趣味や楽しみを持っていますか？",
    "健康だと感じていますか？",
    "仕事や学業にやりがいを感じていますか？",
    "経済的な不安はありませんか？",
    "良質な睡眠がとれていますか？",
    "自分の時間を十分に持てていますか？",
    "新しいことに挑戦する意欲がありますか？",
    "周りの人への感謝の気持ちを持てていますか？",
    "ストレス解消法を持っていますか？",
    "自分の生き方に満足していますか？",
    "毎日笑顔で過ごせていますか？",
    "人生の目標を持っていますか？"
];

// 결과 메시지 배열
const results = [
    "あなたの幸福度は非常に高いレベルです！素晴らしい人生を送っていますね。✨",
    "周りの人々との関係を大切にできており、良好な人間関係を築いています。🤝",
    "自己実現に向けて着実に歩んでおり、成長が見られます。🌱",
    "生活の質が高く、充実した日々を過ごしています。🌟",
    "心身ともに健康的な状態を保っています。💪",
    "将来への希望を持ち続けることができています。🎯",
    "日々の小さな幸せを大切にできています。☀️"
];

let currentQuestion = 0;
let score = 0;

// 페이지 로드 시 실행
window.onload = function() {
    // 구글 광고 초기화
    (adsbygoogle = window.adsbygoogle || []).push({});
    
    // 시작 버튼 표시
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
};

// 시작 버튼 클릭 이벤트
document.getElementById('startButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.intro-text').style.display = 'none';
    document.getElementById('questionSection').style.display = 'block';
    startTest();
});

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// 질문 표시
function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestion];
        updateProgressBar();
        
        // 질문 표시 애니메이션
        document.getElementById('question').classList.add('fade-in');
        setTimeout(() => {
            document.getElementById('question').classList.remove('fade-in');
        }, 500);
    } else {
        showAnalysisPopup();
    }
}

// 진행바 업데이트
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

// 답변 선택 처리
function selectAnswer(value) {
    score += value;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showAnalysisPopup();
    }
}

// 분석 팝업 표시
function showAnalysisPopup() {
    const popup = document.getElementById('analysisPopup');
    popup.style.display = 'flex';
    
    const phrases = [
        "性格を分析中...",
        "幸福度を計算中...",
        "結果を生成中...",
        "アドバイスを準備中..."
    ];
    
    let counter = 7;
    let phraseIndex = 0;
    const counterElement = document.querySelector('.counter');
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    counterElement.parentNode.insertBefore(loadingText, counterElement.nextSibling);
    
    const countdown = setInterval(() => {
        counter--;
        counterElement.textContent = counter;
        loadingText.textContent = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;
        
        if (counter <= 0) {
            clearInterval(countdown);
            popup.style.display = 'none';
            showResult();
        }
    }, 1000);
}

// 결과 표시
function showResult() {
    const resultSection = document.getElementById('resultSection');
    const questionSection = document.getElementById('questionSection');
    const resultContent = document.getElementById('resultContent');
    
    questionSection.style.display = 'none';
    resultSection.style.display = 'block';
    
    const averageScore = score / questions.length;
    let resultText = `
        <div class="result-card">
            <h3>🌟 総合スコア: ${Math.round(averageScore * 20)}点 🌟</h3>
            <div class="score-bar">
                <div class="score-fill" style="width: ${averageScore * 20}%"></div>
            </div>
        </div>
    `;
    
    results.forEach((result, index) => {
        resultText += `
            <div class="result-card" style="animation-delay: ${index * 0.2}s">
                <p>${result}</p>
            </div>
        `;
    });
    
    resultContent.innerHTML = resultText;
}

// LINE 공유
document.querySelector('.share-line').addEventListener('click', function() {
    const shareText = "幸福度診断テスト";
    const shareUrl = encodeURIComponent(window.location.href);
    window.open(`https://social-plugins.line.me/lineit/share?url=${shareUrl}&text=${shareText}`);
});

// URL 복사
document.querySelector('.copy-url').addEventListener('click', function() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            this.textContent = 'コピー完了！';
            setTimeout(() => {
                this.textContent = 'URLをコピー';
            }, 2000);
        });
});

// 다른 테스트 하기
document.querySelector('.other-tests').addEventListener('click', function() {
    window.location.href = 'http://japan.testpro.site/';
});