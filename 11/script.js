// 질문 리스트
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
    high: `당신의 행복 지수는 매우 높은 수준입니다! (90점)

현재 삶의 많은 부분에서 만족감을 느끼고 있으며, 
매우 긍정적인 마인드를 가지고 계십니다.

특징:
• 주변 사람들과 좋은 관계를 유지하고 있습니다
• 자기 실현을 위해 적극적으로 행동하고 있습니다
• 감사하는 마음을 소중히 여기고 있습니다
• 스트레스 관리를 잘하고 있습니다

앞으로도 이런 멋진 삶을 계속 이어나가세요!`,

    medium: `당신의 행복 지수는 평균적인 수준입니다. (65점)

인생의 여러 측면에서 균형을 잘 잡고 계시지만,
더 나은 행복을 위한 여지가 있습니다.

개선을 위한 제안:
• 작은 행복을 발견하는 습관을 기르세요
• 취미 생활에 더 많은 시간을 투자하세요
• 주변 사람들과의 교류를 더 깊게 가지세요
• 자기 계발을 위한 시간을 만드세요

이러한 부분들을 의식하면 더욱 충실한 삶을 살 수 있습니다.`,

    low: `현재 당신의 행복 지수는 다소 낮은 편입니다. (40점)

하지만 이것은 일시적인 상황일 수 있습니다.
다음과 같은 노력으로 상황을 개선할 수 있습니다:

권장사항:
• 전문가와의 상담을 고려해보세요
• 일상생활의 리듬을 정돈하세요
• 운동이나 취미로 기분 전환을 하세요
• 주변 사람들에게 마음을 털어놓으세요
• 작은 목표를 세우고 성취감을 맛보세요

한 걸음씩 천천히 나아가면 반드시 좋아질 것입니다.`
};

// LINE 공유 기능
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("행복 지수 테스트");
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URL 복사 기능
function copyURL() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            const alert = document.getElementById('copy-alert');
            alert.style.display = 'block';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 2000);
        });
}

// 결과 분석 및 팝업 표시
function showResult(score) {
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
            displayFinalResult(score);
        }
    }, 1000);
}

// 최종 결과 표시
function displayFinalResult(score) {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const meterFill = document.querySelector('.meter-fill');
    
    let result;
    if (score > 75) {
        result = results.high;
        meterFill.style.width = '90%';
    } else if (score > 50) {
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

// 테스트 초기화 및 실행
function initializeTest() {
    // 여기에 테스트 초기화 코드 추가
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', initializeTest); 