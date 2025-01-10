// 전역 변수 설정
let currentQuestion = 0;
let mbtiScore = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// MBTI 질문 리스트
const questions = [
    {
        text: "週末の過ごし方は？",
        choices: [
            { text: "友達と会って話す👥", type: "E" },
            { text: "家で一人の時間を過ごす🏠", type: "I" }
        ]
    },
    {
        text: "新しい情報を受け取るとき",
        choices: [
            { text: "五感を通じて直接経験しながら学ぶ👀", type: "S" },
            { text: "想像力と直感で理解する💭", type: "N" }
        ]
    },
    {
        text: "決定を下すとき",
        choices: [
            { text: "論理的に分析して決定する🤔", type: "T" },
            { text: "感情と価値観を重視する💝", type: "F" }
        ]
    },
    {
        text: "日常生活では",
        choices: [
            { text: "計画を立ててその通りに実行する📝", type: "J" },
            { text: "状況に応じて柔軟に対応する🌊", type: "P" }
        ]
    },
    {
        text: "集まりでは？",
        choices: [
            { text: "多くの人と広く話す🗣️", type: "E" },
            { text: "一人か二人と深い話をする🤝", type: "I" }
        ]
    },
    {
        text: "問題を解決するとき",
        choices: [
            { text: "過去の経験を基に解決する📚", type: "S" },
            { text: "新しい方法を見つけて試す💡", type: "N" }
        ]
    },
    {
        text: "葛藤の状況では",
        choices: [
            { text: "客観的な事実に基づいて判断する⚖️", type: "T" },
            { text: "お互いの感情を考慮して解決する❤️", type: "F" }
        ]
    },
    {
        text: "旅行に行くとき",
        choices: [
            { text: "細かいスケジュールを事前に計画する✈️", type: "J" },
            { text: "即興的に動くのが好き🎲", type: "P" }
        ]
    },
    {
        text: "エネルギーを得る方法は？",
        choices: [
            { text: "他の人と一緒に過ごす🎉", type: "E" },
            { text: "一人の時間を持つ🌙", type: "I" }
        ]
    },
    {
        text: "関心を持つのは？",
        choices: [
            { text: "現在の実際の事柄👨‍💼", type: "S" },
            { text: "未来の可能性とアイデア🚀", type: "N" }
        ]
    },
    {
        text: "選択する際に重要なのは？",
        choices: [
            { text: "合理性と効率性📊", type: "T" },
            { text: "調和と人間関係🤝", type: "F" }
        ]
    },
    {
        text: "日常生活のスタイルは？",
        choices: [
            { text: "体系的で計画的📋", type: "J" },
            { text: "自由で柔軟に🎨", type: "P" }
        ]
    }
];

// MBTI 결과 데이터
const mbtiResults = {
    "ISTJ": {
        emoji: "👨‍💼",
        title: "誠実な管理者",
        description: "慎重で徹底的、規則を重視する性格です。責任感が強く現実的な性格で、周りから信頼されています。",
        traits: [
            "体系的で論理的な思考",
            "高い責任感と誠実さ",
            "規則と伝統を重視",
            "慎重で徹底的な性格"
        ],
        famous: "新垣結衣、堀北真希"
    },
    "INFJ": {
        emoji: "🧘‍♀️",
        title: "善意の擁護者",
        description: "自分自身と他人の感情を深く理解するあなた！創造的で洞察力に優れ、真実性を重視します。",
        traits: [
            "高い直感力と洞察力",
            "個人的な意味と価値を重視",
            "他人を助けたい気持ちが大きい",
            "創造的で独創的なアイデア"
        ],
        famous: "石原さとみ、綾瀬はるか"
    },
    "INTJ": {
        emoji: "🧠",
        title: "用意周到な戦略家",
        description: "徹底的で計画的な性格で目標を達成することに集中するあなた！非常に独立的で分析的な思考を重視します。",
        traits: [
            "目標志向的で戦略的な思考",
            "独立的で論理的な性格",
            "効率性と結果を重視",
            "一人で働くことを好む"
        ],
        famous: "孫正義、福山雅治"
    },
    "ISTP": {
        emoji: "🔧",
        title: "万能の器用人",
        description: "論理的で実用的な性格で問題解決に優れたあなた！急変する状況でも冷静に対処する能力が優れています。",
        traits: [
            "実用的で能動的な思考",
            "問題解決能力が優れている",
            "危機的状況でも冷静",
            "独立的で自由な性格"
        ],
        famous: "木村拓哉、松田翔太"
    },
    "ISFP": {
        emoji: "🎨",
        title: "好奇心旺盛な芸術家",
        description: "自由で創造的な性格で、芸術的な趣味や活動を好みます。感情を重視し、現実よりも夢を追求する傾向があります。",
        traits: [
            "自由で創造的な性格",
            "美的感覚と芸術的な能力",
            "感情を大切にする",
            "静かで内向的"
        ],
        famous: "宮崎あおい、蒼井優"
    },
    "INFP": {
        emoji: "💭",
        title: "情熱的な仲裁者",
        description: "自分の価値と原則を非常に重視するあなた！理想主義的で他人の感情をよく理解し、真心のこもった対話を好みます。",
        traits: [
            "理想主義的で夢が大きい",
            "他人の感情に敏感で共感能力が高い",
            "自分の価値観に忠実",
            "静かで内向的"
        ],
        famous: "本田圭佑、佐藤健"
    },
    "INTP": {
        emoji: "🔬",
        title: "論理的な思索家",
        description: "新しいアイデアや理論について深く考える性格です。論理的で分析的な思考を重視し、独創的なアイデアを好みます。",
        traits: [
            "論理的で分析的な思考",
            "新しいアイデアや概念に関心",
            "自由な思考と創造力",
            "内向的で独立的な性格"
        ],
        famous: "村上春樹、坂本龍一"
    },
    "ESTP": {
        emoji: "⚡",
        title: "冒険を楽しむ事業家",
        description: "活動的で現実的な性格で、新しい経験を追求するあなた！柔軟で迅速な判断を下し、変化を恐れません。",
        traits: [
            "即興的で挑戦的な性格",
            "変化と新しい経験を追求",
            "迅速で柔軟な思考",
            "リスクを冒し冒険を楽しむ"
        ],
        famous: "北野武、松本人志"
    },
    "ESFP": {
        emoji: "🎉",
        title: "自由な魂の芸能人",
        description: "社交的で活発な性格で、周りの人と一緒に楽しむことが好きなあなた！ポジティブでユーモアのセンスがあり、他人を楽しませます。",
        traits: [
            "社交的で活動的な性格",
            "楽しい雰囲気を作る能力",
            "即興的で自由な性格",
            "他人との交流を重視"
        ],
        famous: "中居正広、香取慎吾"
    },
    "ENFP": {
        emoji: "🌟",
        title: "機知に富んだ活動家",
        description: "創造的で情熱的な性格で、多様なアイデアや可能性を追求するあなた！他人の感情をよく理解し、新しい経験を重視します。",
        traits: [
            "創造的で情熱的な性格",
            "他人の感情をよく理解し共感",
            "新しい可能性について探求",
            "柔軟で自由な思考"
        ],
        famous: "大泉洋、星野源"
    },
    "ENTP": {
        emoji: "🔥",
        title: "熱い議論を楽しむ弁論家",
        description: "論理的で創造的な思考を持つあなた！新しいアイデアを提案し討論を楽しみ、変化を導く能力が優れています。",
        traits: [
            "創造的で革新的なアイデア",
            "論理的で独立的な思考",
            "知的好奇心が強い",
            "挑戦的で議論を楽しむ"
        ],
        famous: "堺雅人、阿部寛"
    },
    "ESTJ": {
        emoji: "💼",
        title: "厳格な管理者",
        description: "体系的で規則を重視するあなた！効率的なシステムと組織を好み、結果と成果を重視します。",
        traits: [
            "体系的で組織的な性格",
            "効率性を重視し目標に向かって進む",
            "規則と秩序を重視",
            "責任感が強く管理能力が優れている"
        ],
        famous: "田中角栄、橋本龍太郎"
    },
    "ESFJ": {
        emoji: "💖",
        title: "社交的な外交官",
        description: "他人との関係を重視するあなた！他人を助け思いやる性格で、親しみやすく社交的な姿を見せます。",
        traits: [
            "他人を助け思いやる性格",
            "社交的で人をよく理解する",
            "調和的で安定した関係を重視",
            "規則と伝統を重視"
        ],
        famous: "石田ゆり子、松嶋菜々子"
    },
    "ENFJ": {
        emoji: "🌸",
        title: "正義の社会運動家",
        description: "他人との関係に大きな価値を置き、人々にインスピレーションを与える性格です。他人を助け導く能力が優れており、真実性を重視します。",
        traits: [
            "他人を導く能力",
            "真実性があり共感能力が高い",
            "社会的責任を重視",
            "人々にインスピレーションを与えるリーダーシップ"
        ],
        famous: "福山雅治、石原さとみ"
    },
    "ENTJ": {
        emoji: "👑",
        title: "大胆な統率者",
        description: "強力なリーダーシップを発揮し、目標に向かって大胆に進む性格です。高い分析力と戦略的思考で周囲を導きます。",
        traits: [
            "リーダーシップと戦略的思考能力",
            "目標志向的で大胆な性格",
            "効率性および成果志向",
            "強力な決断力とコミュニケーション能力"
        ],
        famous: "孫正義、福山雅治"
    }
};

// DOM 요소
const startSection = document.getElementById('start-section');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const adPopup = document.getElementById('ad-popup');

// 시작 버튼 이벤트
document.getElementById('start-btn').addEventListener('click', () => {
    startSection.style.display = 'none';
    questionSection.style.display = 'block';
    showQuestion();
});

// 질문 표시 함수
function showQuestion() {
    const progressBar = document.querySelector('.progress');
    const questionCounter = document.querySelector('.question-counter');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.querySelectorAll('.answer-btn');

    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    questionCounter.textContent = `${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = questions[currentQuestion].text;

    questions[currentQuestion].choices.forEach((choice, index) => {
        answerButtons[index].textContent = choice.text;
        answerButtons[index].onclick = () => handleAnswer(choice.type);
    });
}

// 답변 처리 함수
function handleAnswer(type) {
    mbtiScore[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showAdPopup();
    }
}

// 광고 팝업 표시 함수
function showAdPopup() {
    questionSection.style.display = 'none';
    adPopup.style.display = 'flex';
    
    // 팝업 광고 초기화
    initializePopupAd();

    let countdown = 7;
    const countdownElement = document.querySelector('.countdown');
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            adPopup.style.display = 'none';
            showResult();
        }
    }, 1000);
}

// 팝업 광고 초기화 함수
function initializePopupAd() {
    const popupAd = document.querySelector('.popup-ad');
    if (popupAd) {
        try {
            while (popupAd.firstChild) {
                popupAd.removeChild(popupAd.firstChild);
            }
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('팝업 광고 초기화 실패:', e);
        }
    }
}

// MBTI 결과 계산 함수
function calculateMBTI() {
    return (
        (mbtiScore.E > mbtiScore.I ? 'E' : 'I') +
        (mbtiScore.S > mbtiScore.N ? 'S' : 'N') +
        (mbtiScore.T > mbtiScore.F ? 'T' : 'F') +
        (mbtiScore.J > mbtiScore.P ? 'J' : 'P')
    );
}

// 결과 표시 함수
function showResult() {
    resultSection.style.display = 'block';
    const mbtiType = calculateMBTI();
    const result = mbtiResults[mbtiType];

    document.querySelector('.type-emoji').textContent = result.emoji;
    document.getElementById('mbti-result').textContent = mbtiType;
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;

    const traitsList = document.getElementById('traits-list');
    traitsList.innerHTML = result.traits
        .map(trait => `<li>${trait}</li>`)
        .join('');

    document.getElementById('famous-list').textContent = result.famous;
}

// 공유하기 버튼
document.querySelector('.share-btn').addEventListener('click', () => {
    const mbtiType = calculateMBTI();
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '3분만에 보는 MBTI 테스트',
            description: `나의 MBTI는 ${mbtiType}입니다!`,
            imageUrl: 'YOUR_IMAGE_URL', // 실제 이미지 URL로 교체 필요
            link: {
                mobileWebUrl: 'https://testpro.site',
                webUrl: 'https://testpro.site'
            }
        },
        buttons: [
            {
                title: 'テストする',
                link: {
                    mobileWebUrl: 'https://testpro.site',
                    webUrl: 'https://testpro.site'
                }
            }
        ]
    });
});

// 다시하기 버튼
document.querySelector('.retry-btn').addEventListener('click', () => {
    currentQuestion = 0;
    mbtiScore = {E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0};
    resultSection.style.display = 'none';
    startSection.style.display = 'block';
});

// 페이지 로드 시 광고 초기화
window.onload = function() {
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('상단 광고 초기화 실패:', e);
    }
};