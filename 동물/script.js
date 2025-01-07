// 질문 표시 함수
function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestion];
    
    quizContainer.style.opacity = '0';
    
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
    
    // 페이드 인 효과
    setTimeout(() => {
        quizContainer.style.opacity = '1';
    }, 50);
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
    
    // 결과로 스크롤
    resultContainer.scrollIntoView({ behavior: 'smooth' });
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
    document.querySelector('.start-section').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    window.scrollTo(0, 0);
}

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

// 페이지 로드 시 실행
window.onload = function() {
    initializeAds();
    detectAdBlock();
};

// 광고 로드 실패 시 대체 처리
window.onerror = function(msg, url, lineNo, columnNo, error) {
    if (msg.includes('adsbygoogle')) {
        console.log('광고 로드 실패. 대체 콘텐츠 표시 필요');
        return false;
    }
    return false;
}; 