const questions = [

        {
          text: "目を閉じて、森の中にいる自分を想像してください。その森はどんな様子ですか？",
          options: [
            "明るく開放的な森",
            "静かで薄暗い森",
            "神秘的で霧がかった森",
            "色とりどりの花が咲く森",
          ],
        },
        {
          text: "森の中で動物に出会いました。それはどんな動物ですか？",
          options: ["優雅な鹿", "賢そうなフクロウ", "遊び心のあるリス", "力強いクマ"],
        },
        {
          text: "森の中で小さな家を見つけました。その家の様子は？",
          options: [
            "暖かい光が漏れる居心地の良さそうな家",
            "古く神秘的な雰囲気の家",
            "カラフルで可愛らしい家",
            "シンプルで清潔感のある家",
          ],
        },
        {
          text: "森の中で木を1本選びました。その木はどんな様子ですか？",
          options: [
            "空高く伸びる巨大な木",
            "枝が広がる大きな木",
            "小さくてかわいらしい若い木",
            "一年中緑の常緑樹",
          ],
        },
        {
          text: "森の中で感じた気持ちは何ですか？",
          options: ["穏やか", "神秘的", "寂しい", "冒険心が湧く"],
        },
        {
          text: "道を歩いていると川を見つけました。その川はどんな様子ですか？",
          options: [
            "静かに流れる穏やかな川",
            "勢いよく流れる激しい川",
            "澄んで透明な川",
            "深く神秘的な川",
          ],
        },
        {
          text: "森に入った後、最初に思い浮かんだことは何ですか？",
          options: [
            "新しい発見への期待感",
            "静かに休みたい気持ち",
            "どこかへ行きたい衝動",
            "一人の時間を楽しみたい",
          ],
        },
        {
          text: "森の中で音が聞こえました。それはどんな音ですか？",
          options: [
            "鳥たちのさえずり",
            "風に揺れる木々の音",
            "川のせせらぎ",
            "何かの動物の声",
          ],
        },
        {
          text: "森の中で誰かと一緒にいるとしたら、誰ですか？",
          options: ["家族", "友達", "恋人", "一人がいい"],
        },
        {
          text: "森の中で空を見上げました。空はどんな様子ですか？",
          options: [
            "晴れ渡った青空",
            "雲がぽつぽつ浮かぶ空",
            "霧に覆われた空",
            "星が輝く夜空",
          ],
        },
        {
          text: "森の中で最も目を引くものは何ですか？",
          options: ["木々", "川", "花", "動物"],
        },
        {
          text: "道を歩いていたら突然分かれ道に出会いました。どちらの道を選びますか？",
          options: [
            "広く整備された道",
            "小さくて静かな小道",
            "どこへ続くかわからない道",
            "花々に囲まれた道",
          ],
        },
        {
          text: "森の中で1つの物を見つけました。それは何ですか？",
          options: ["鍵", "本", "鏡", "宝箱"],
        },
        {
          text: "森の中で突然雨が降ってきました。あなたはどうしますか？",
          options: [
            "雨に濡れながら歩き続ける",
            "近くの避難場所を探す",
            "雨を楽しみながら立ち止まる",
            "帰る準備をする",
          ],
        },
        {
          text: "森を離れるとき、どんな気持ちになりますか？",
          options: ["満足感", "名残惜しい", "もっと知りたい", "すっきりした"],
        },
      ];

const results = {
    "明るく開放的な森-優雅な鹿-暖かい光が漏れる居心地の良さそうな家": 
      `あなたは明るく社交的な性格の持ち主です。
      周りの人々との関係を大切にし、調和を重んじます。
      新しい環境にもすぐに適応し、初対面の人にも親しみやすい雰囲気を与えます。
      特に、人々と交流することで喜びを感じ、積極的な姿勢で人生を楽しむことができます。
      あなたの前向きなエネルギーは、周囲の人々に良い影響を与えるでしょう。`,
  
    "静かで薄暗い森-賢そうなフクロウ-古く神秘的な雰囲気の家": 
      `あなたは深い思考力と洞察力を持つ人です。
      表面的なものだけではなく、物事の本質を見抜こうとする傾向があります。
      静かな環境で自分の考えに集中することを好み、その中で最大の能力を発揮します。
      また、困難な状況でも冷静に対処できるため、周囲から信頼される存在です。
      自分自身の時間を大切にしながら、着実に目標を達成していく力を持っています。`,
  
    "神秘的で霧がかかった森-遊び心のあるリス-カラフルで可愛らしい家": 
      `あなたは創造力が豊かで、好奇心旺盛な性格の持ち主です。
      常に新しいことを学びたいという気持ちが強く、小さなことからもインスピレーションを得ることができます。
      人と楽しく関わることが好きですが、一人で想像の世界に浸る時間も大切にしています。
      あなたのユニークなアイデアや視点は、周りの人々に刺激を与え、大きな影響を与えることが多いでしょう。`,
  
    "色とりどりの花が咲く森-力強いクマ-シンプルで清潔感のある家": 
      `あなたは力強く、実用的な性格の持ち主です。
      現実的で決断力があり、目標に向かって粘り強く努力することができます。
      困難な状況でも動じず、責任感を持って物事に取り組む姿勢が特徴的です。
      また、周りの人に対して適切なアドバイスやサポートを提供する優しさも持ち合わせています。
      あなたは信頼できる頼もしい存在として、多くの人に尊敬されています。`
  };

  let currentQuestion = 0;
  let userAnswers = [];
  
  document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const introSection = document.getElementById("intro");
    const questionSection = document.getElementById("question");
    const resultSection = document.getElementById("result");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");
    const resultText = document.getElementById("result-text");
    const analysisPopup = document.getElementById("analysis-popup");
    const countdownElement = document.getElementById("countdown");
  
    startBtn.addEventListener("click", () => {
      introSection.classList.remove("active");
      questionSection.classList.add("active");
      showQuestion();
    });
  
    function showQuestion() {
      // 모든 질문을 완료한 경우 분석 팝업 표시
      if (currentQuestion >= questions.length) {
        showAnalysisPopup();
        return;
      }
  
      // 현재 질문과 선택지를 표시
      questionText.textContent = questions[currentQuestion].text;
      optionsContainer.innerHTML = "";
  
      questions[currentQuestion].options.forEach((option) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(option));
        optionsContainer.appendChild(button);
      });
    }
  
    function handleAnswer(answer) {
      userAnswers.push(answer); // 사용자의 선택 저장
      currentQuestion++; // 다음 질문으로 이동
      showQuestion(); // 다음 질문 표시
    }
  
    function showAnalysisPopup() {
      analysisPopup.classList.add("active"); // 팝업 활성화
      let count = 7;
  
      const countdown = setInterval(() => {
        countdownElement.textContent = count; // 카운트다운 표시
        count--;
  
        if (count < 0) {
          clearInterval(countdown); // 카운트다운 종료
          analysisPopup.classList.remove("active"); // 팝업 닫기
          showResult(); // 결과 표시
        }
      }, 1000);
    }
  
    function showResult() {
      questionSection.classList.remove("active"); // 질문 섹션 숨김
      resultSection.classList.add("active"); // 결과 섹션 표시
  
      const resultKey = userAnswers.join("-"); // 사용자의 응답을 키로 변환
      const result =
        results[resultKey] ||
        "申し訳ありません。結果の分析中にエラーが発生しました。もう一度お試しください。"; // 결과가 없을 경우 메시지 표시
      resultText.textContent = result; // 결과 텍스트 표시
    }
  
    // LINE 공유 버튼
    document.getElementById("line-share").addEventListener("click", () => {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://line.me/R/msg/text/?無意識心理テスト${url}`);
    });
  
    // URL 복사 버튼
    document.getElementById("copy-url").addEventListener("click", () => {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("URLをコピーしました！"));
    });
  
    // 다시 시작 버튼
    document.getElementById("retry").addEventListener("click", () => {
      currentQuestion = 0; // 질문 초기화
      userAnswers = []; // 사용자 응답 초기화
      resultSection.classList.remove("active"); // 결과 섹션 숨김
      introSection.classList.add("active"); // 시작 섹션 표시
    });
  
    // 홈으로 버튼
    document.getElementById("go-home").addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  });
