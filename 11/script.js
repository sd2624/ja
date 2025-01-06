// 質問リスト
const questions = [
    "毎日の生活に満足していますか？",
    "家族や友人との関係は良好ですか？",
    "自分の目標や夢を持っていますか？",
    "趣味や楽しみがありますか？",
    "健康だと感じていますか？",
    "仕事やスタディーにやりがいを感じていますか？",
    "困ったときに相談できる人がいますか？",
    "毎日笑うことがありますか？",
    "自分の時間を十分に持てていますか？",
    "将来に希望を持っていますか？",
    "新しいことに挑戦する意欲がありますか？",
    "睡眠は十分取れていますか？",
    "経済的な不安はありませんか？",
    "自分を大切にできていますか？",
    "人生に感謝の気持ちを持っていますか？"
];

// 結果テキスト
const results = {
    high: `あなたの幸福度は非常に高いレベルです！

生活の多くの面で充実感を感じており、素晴らしい精神状態を保っています。

あなたは以下のような特徴を持っています：
・周囲との良好な人間関係を築いている
・自己実現に向けて積極的に行動している
・感謝の気持ちを大切にしている
・ストレス管理が上手

このまま素晴らしい生活を続けていってください！`,

    medium: `あなたの幸福度は平均的なレベルです。

人生の様々な面でバランスを保っていますが、さらなる向上の余地があります。

以下のようなアドバイスを参考にしてください：
・小さな幸せを見つける習慣をつける
・趣味の時間を増やす
・周囲の人々との交流を深める
・自己投資の時間を作る

これらを意識することで、さらに充実した生活を送ることができるでしょう。`,

    low: `現在のあなたの幸福度はやや低めです。

でも、これは一時的なものかもしれません。
以下のような取り組みで、状況は必ず改善できます：

・専門家に相談することを検討する
・日々の生活リズムを整える
・運動や趣味で気分転換を図る
・周囲の人に気持ちを打ち明ける
・小さな目標を立てて達成感を味わう

一歩ずつ、ゆっくりと前に進んでいきましょう。`
};

// LINE共有機能
function shareLine() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("幸福度診断テスト");
    window.open(`https://line.me/R/msg/text/?${text}%0D%0A${url}`);
}

// URL コピー機能
function copyURL() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('URLをコピーしました！'));
}

// 結果分析とポップアップ表示
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

// 最終結果表示
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
        meterFill.style.width = '60%';
    } else {
        result = results.low;
        meterFill.style.width = '30%';
    }
    
    resultText.innerHTML = result.replace(/\n/g, '<br>');
    resultContainer.style.display = 'block';
}

// テスト初期化と実行
initializeTest();