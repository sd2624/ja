// 광고 관리
let adsInitialized = false;

function initializeAds() {
    if (!adsInitialized) {
        try {
            document.querySelectorAll('.adsbygoogle').forEach(ad => {
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
            adsInitialized = true;
        } catch (e) {
            console.error('광고 초기화 실패:', e);
        }
    }
}

// 질문 목록
const questions = [
    {
        question: "朝起きた時、あなたが最初にすることは？",
        answers: ["窓を開けて深呼吸をする", "スマホをチェックする", "すぐに支度を始める", "もう少し寝る"]
    },
    {
        question: "休日の過ごし方として一番好きなのは？",
        answers: ["自然の中でリフレッシュ", "友達と会って話す", "家でゆっくり過ごす", "新しい場所に行く"]
    },
    {
        question: "困っている人を見かけたとき、あなたは？",
        answers: ["すぐに助けに行く", "状況を見極めてから行動する", "誰か他の人が助けるのを待つ", "見て見ぬふりをする"]
    },
    {
        question: "理想の仕事環境は？",
        answers: ["チームで協力", "一人で集中", "自由な環境", "活動的な環境"]
    },
    {
        question: "ストレス解消法は？",
        answers: ["運動する", "音楽を聴く", "友達と話す", "寝る"]
    },
    {
        question: "人から言われる性格は？",
        answers: ["リーダーシップがある", "思いやりがある", "明るい", "マイペース"]
    },
    {
        question: "好きな季節は？",
        answers: ["春", "夏", "秋", "冬"]
    },
    {
        question: "理想の休暇は？",
        answers: ["アウトドア活動", "ビーチでリラックス", "都会で観光", "家でのんびり"]
    },
    {
        question: "困難な状況での対応は？",
        answers: ["積極的に解決", "慎重に分析", "助けを求める", "時間で解決"]
    },
    {
        question: "約束時間に対する態度は？",
        answers: ["早めに到着", "定刻通り", "少し遅れがち", "いつも遅刻"]
    },
    {
        question: "好きな食べ物は？",
        answers: ["肉料理", "魚料理", "野菜料理", "デザート"]
    },
    {
        question: "新しい環境での態度は？",
        answers: ["積極的", "慎重", "自然体", "消極的"]
    },
    {
        question: "休日の予定の立て方は？",
        answers: ["計画的", "大まかに", "その日次第", "予定なし"]
    },
    {
        question: "決断するときの基準は？",
        answers: ["論理的判断", "直感", "周りの意見", "経験"]
    },
    {
        question: "将来の夢は？",
        answers: ["世界を変える", "安定した生活", "自由な生活", "幸せな家庭"]
    }
];

// 수호동물 결과
const animalResults = {
    wolf: {
        emoji: "🐺",
        title: "オオカミ",
        description: [
            "당신의 수호동물은 늑대입니다!",
            "강인한 리더십과 책임감이 뛰어난 당신,",
            "충성심이 강하고 자신이 믿는 것을 위해 끝까지 싸우는 용기를 가졌습니다.",
            "팀워크를 중시하며 주변 사람들을 보호하려는 본능이 있습니다.",
            "결단력이 있고 목표를 향해 끊임없이 전진하는 성격입니다."
        ]
    },
    owl: {
        emoji: "🦉",
        title: "フクロウ",
        description: [
            "당신의 수호동물은 올빼미입니다!",
            "뛰어난 통찰력과 지혜를 가진 당신,",
            "조용히 상황을 관찰하고 신중하게 판단하는 능력이 있습니다.",
            "밤에 더 활력이 넘치며 창의적인 아이디어가 떠오르는 타입입니다.",
            "신비로운 매력과 깊은 지성을 가진 당신은 많은 사람들의 조언자 역할을 합니다."
        ]
    },
    tiger: {
        emoji: "🐯",
        title: "トラ",
        description: [
            "당신의 수호동물은 호랑이입니다!",
            "카리스마 넘치는 리더십과 강한 의지를 가진 당신,",
            "도전을 두려워하지 않고 자신의 목표를 향해 당당히 나아갑니다.",
            "정의감이 강하고 약자를 보호하려는 용감한 성격의 소유자입니다.",
            "당신의 강인한 의지력은 주변 사람들에게 큰 영감을 줍니다."
        ]
    },
    deer: {
        emoji: "🦌",
        title: "シカ",
        description: [
            "당신의 수호동물은 사슴입니다!",
            "우아하고 섬세한 감성의 소유자인 당신,",
            "평화를 사랑하고 조화를 추구하는 성격입니다.",
            "주변 사람들을 배려하는 따뜻한 마음을 가졌습니다.",
            "예술적 감각이 뛰어나며 자연과의 교감을 중요시합니다."
        ]
    },
    dolphin: {
        emoji: "🐬",
        title: "イルカ",
        description: [
            "당신의 수호동물은 돌고래입니다!",
            "밝고 사교적인 성격의 소유자인 당신,",
            "뛰어난 커뮤니케이션 능력으로 주변에 기쁨을 전파합니다.",
            "호기심이 많고 새로운 도전을 즐기는 모험가적 성격입니다.",
            "공감능력이 뛰어나며 다른 사람들의 감정을 잘 이해합니다."
        ]
    }
};

[이전 코드에 이어서...]

let currentQuestion = 0;
let answers = [];

// 질문 표시 함수
function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestion];
    
    let html = `
        <div class="question animate-fade-in">
            <h3>Q${currentQuestion + 1}. ${question.question}</h3>
            <div class="answers">
    `;
    
    question.answers.forEach((answer, index) => {
        html += `
            <button onclick="selectAnswer(${index})" class="answer-btn">
                ${answer}
            </button>
        `;
    });
    
    html += `</div></div>`;
    quizContainer.innerHTML = html;
}

// 답변 선택 처리
function selectAnswer(answerIndex) {
    answers.push(answerIndex);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showAnalysisPopup();
    }
}

// 분석 팝업 표시
function showAnalysisPopup() {
    const popup = document.getElementById('analysis-popup');
    popup.style.display = 'block';
    
    // 팝업 광고 초기화
    const popupAdContainer = document.querySelector('.ad-container-popup');
    popupAdContainer.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-9374368296307755"
             data-ad-slot="3201247599"
             data-ad-format="rectangle"
             data-full-width-responsive="false"></ins>
    `;
    
    // 새로운 광고 로드
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('팝업 광고 로드 실패:', e);
    }
    
    let countdown = 7;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = countdown;
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            setTimeout(() => {
                popup.style.display = 'none';
                showResult();
            }, 500);
        }
    }, 1000);
}

// 결과 계산 및 표시
function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultAnimal = calculateResult();
    
    resultContainer.style.display = 'block';
    resultContainer.querySelector('.result-animal').innerHTML = 
        `${animalResults[resultAnimal].emoji}<br>${animalResults[resultAnimal].title}`;
    
    const description = animalResults[resultAnimal].description
        .map(line => `<p>${line}</p>`)
        .join('');
    
    resultContainer.querySelector('.result-description').innerHTML = description;
    
    // 결과 페이지 광고 리로드
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('결과 페이지 광고 로드 실패:', e);
    }
}

// LINE 공유
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('私の守護動物を見つけました！');
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URL 복사
function copyUrl() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URLをコピーしました！'));
}

// 테스트 다시하기
function retakeTest() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('result-container').style.display = 'none';
    displayQuestion();
    window.scrollTo(0, 0);
}

// 결과 계산 로직
function calculateResult() {
    const sum = answers.reduce((a, b) => a + b, 0);
    
    if (sum < 15) return 'wolf';
    else if (sum < 30) return 'owl';
    else if (sum < 45) return 'tiger';
    else if (sum < 60) return 'deer';
    else return 'dolphin';
}

// 페이지 로드 시 실행
window.onload = function() {
    displayQuestion();
    initializeAds();
};

// 광고 로드 실패 시 대체 처리
window.onerror = function(msg, url, lineNo, columnNo, error) {
    if (msg.includes('adsbygoogle')) {
        console.log('광고 로드 실패. 대체 콘텐츠 표시 필요');
        return false;
    }
    return false;
};

// 광고 블록 감지
function detectAdBlock() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);

    window.setTimeout(function() {
        if (testAd.offsetHeight === 0) {
            console.log('AdBlock detected');
            // 광고 블록 감지 시 대체 콘텐츠 표시 로직 추가 가능
        }
        testAd.remove();
    }, 100);
}

// 페이지 로드 시 광고 블록 감지 실행
detectAdBlock();