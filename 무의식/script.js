const questions = [
    "1. 新しい環境に適応するのは得意ですか？ 🌱", // 새로운 환경에 적응하는 것이 쉬운가요?
    "2. 他人の気持ちを理解するのは簡単ですか？ 💖", // 타인의 감정을 이해하는 것이 쉬운가요?
    "3. 計画を立てるのが好きですか？ 📅", // 계획을 세우는 것을 좋아하나요?
    "4. 人前で話すのが苦手ですか？ 🎤", // 사람들 앞에서 말하는 것이 어려운가요?
    "5. 新しい友達を作るのは簡単ですか？ 👫", // 새로운 친구를 사귀는 것이 쉬운가요?
    "6. ストレスを感じたとき、すぐにリラックスできますか？ 🧘‍♂️", // 스트레스를 받을 때 쉽게 이완할 수 있나요?
    "7. 自分の感情をコントロールするのが得意ですか？ 🧠", // 자신의 감정을 잘 통제할 수 있나요?
    "8. 物事を深く考える方ですか？ 🤔", // 사물을 깊이 생각하는 편인가요?
    "9. リスクを取るのが好きですか？ 🎲", // 위험을 감수하는 것을 좋아하나요?
    "10. 他人の意見に左右されやすいですか？ 🗣️", // 타인의 의견에 쉽게 휘둘리나요?
    "11. 自分に自信がありますか？ 💪", // 자신에게 자신감이 있나요?
    "12. 過去の失敗を引きずりやすいですか？ ⏳", // 과거의 실패를 쉽게 잊지 못하나요?
    "13. 新しいことに挑戦するのが好きですか？ 🚀", // 새로운 일에 도전하는 것을 좋아하나요?
    "14. 他人と協力するのが好きですか？ 🤝", // 타인과 협력하는 것을 좋아하나요?
    "15. 自分の直感を信じますか？ 🔮", // 자신의 직감을 믿나요?
];

const results = [
    "結果1: あなたは非常に適応力が高いです。新しい環境でもすぐに馴染むことができます。 🌟", // 결과1: 당신은 적응력이 매우 높습니다. 새로운 환경에도 쉽게 적응합니다.
    "結果2: あなたは共感力が高く、他人の気持ちをよく理解できます。 💞", // 결과2: 당신은 공감 능력이 뛰어나며, 타인의 감정을 잘 이해합니다.
    "結果3: あなたは計画性があり、物事を計画的に進めるのが得意です。 🗓️", // 결과3: 당신은 계획성이 있으며, 일을 체계적으로 진행하는 데 능숙합니다.
    "結果4: あなたはリスクを恐れず、新しいことに挑戦する勇気があります。 🎲", // 결과4: 당신은 위험을 두려워하지 않고, 새로운 일에 도전하는 용기가 있습니다.
    "結果5: あなたは直感力が鋭く、自分の直感を信じて行動します。 🔮", // 결과5: 당신은 직감이 뛰어나며, 자신의 직감을 믿고 행동합니다.
];

let currentQuestion = 0;
const testQuestionsDiv = document.getElementById("test-questions");
const testResultDiv = document.getElementById("test-result");
const popupAd = document.getElementById("popup-ad");

document.getElementById("start-test").addEventListener("click", () => {
    document.querySelector(".container > button").style.display = "none";
    testQuestionsDiv.style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion < questions.length) {
        testQuestionsDiv.innerHTML = `
            <p class="question-text">${questions[currentQuestion]}</p>
            <button onclick="nextQuestion()" class="animated-button">次へ ➡️</button>
        `;
        currentQuestion++;
    } else {
        showResult();
    }
}

function nextQuestion() {
    loadQuestion();
}

function showResult() {
    testQuestionsDiv.style.display = "none";
    testResultDiv.style.display = "block";
    testResultDiv.innerHTML = `
        <h2>テスト結果 🎉</h2>
        <p>${results.join("<br>")}</p>
        <button onclick="shareTest()" class="animated-button">LINEで共有 📲</button>
        <button onclick="copyUrl()" class="animated-button">URLをコピー 📋</button>
        <button onclick="restartTest()" class="animated-button">もう一度テスト 🔄</button>
        <button onclick="goToHome()" class="animated-button">他のテストをする 🏠</button>
    `;
    showPopupAd();
}

function showPopupAd() {
    popupAd.style.display = "flex";
    let countdown = 7;
    const countdownElement = document.getElementById("countdown");
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            popupAd.style.display = "none";
        }
    }, 1000);
}

function shareTest() {
    alert("LINEで共有する機能は実装中です。"); // LINE 공유 기능은 구현 중입니다.
}

function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    alert("URLがコピーされました！"); // URL이 복사되었습니다!
}

function restartTest() {
    currentQuestion = 0;
    testResultDiv.style.display = "none";
    document.querySelector(".container > button").style.display = "block";
}

function goToHome() {
    window.location.href = "http://japan.testpro.site/";
}