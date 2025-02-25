import { Question } from '../types';

export const questions: Question[] = [
  {
    text: "1. 友達との過ごし方は？",
    options: [
      {
        text: "みんなでワイワイ盛り上がる！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "会話の中心にはならないけど楽しい",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "少人数で深い話をしたい",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 2 }
      },
      {
        text: "できれば一人がいい…",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "友達といるけど話すのは苦手",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "2. 新しい環境に飛び込むのは？",
    options: [
      {
        text: "むしろワクワクする！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "ちょっと緊張するけど頑張れる",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "できれば避けたい",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "ものすごく苦手…",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "どちらかというと受け身",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      }
    ]
  },
  {
    text: "3. 初対面の人と話すのは？",
    options: [
      {
        text: "楽しく会話できる！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "話せるけど、ちょっと構える",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "必要なら話すけど自分からは行かない",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      },
      {
        text: "できるだけ避けたい",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "無理に話さなくてもいいなら話したくない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "4. パーティーや飲み会の参加率は？",
    options: [
      {
        text: "誘われなくても自分から企画する！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "そこそこ参加する",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "親しい人となら行く",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "基本行かない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "誘われたら考える",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      }
    ]
  },
  {
    text: "5. 学校や職場での自分の立ち位置は？",
    options: [
      {
        text: "ムードメーカー！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "裏方でも活躍したい",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "目立たないけど自分の世界がある",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "できるだけ静かに過ごす",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "影のサポート役",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      }
    ]
  },
  {
    text: "6. ミスしたときの考え方は？",
    options: [
      {
        text: "すぐ立ち直って次へ！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "ちょっと落ち込むけど切り替える",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "どうすれば次に活かせるか考える",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 2 }
      },
      {
        text: "しばらく引きずってしまう",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "かなり落ち込む…",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "7. 好きなことへの熱中度は？",
    options: [
      {
        text: "どんどん人に共有する！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "話せる人にだけ話す",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "一人でコツコツ楽しむ",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "深くのめり込むが人には話さない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "熱中するけど、何かしら不安もある",
        scores: { youkya: 0, inkya: 1, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "8. 悩みを相談するタイプ？",
    options: [
      {
        text: "すぐに誰かに話す！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "限られた人に相談する",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "まずは自分で考える",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      },
      {
        text: "ほぼ誰にも相談しない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "話したいけど話せない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "9. テンションが上がる瞬間は？",
    options: [
      {
        text: "みんなと盛り上がっているとき！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "成功したとき",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "一人で趣味を満喫しているとき",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "落ち着いた空間でのんびりしているとき",
        scores: { youkya: 0, inkya: 2, nekura: 1, neaka: 0 }
      },
      {
        text: "誰かに認められたとき",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      }
    ]
  },
  {
    text: "10. 休みの日の過ごし方は？",
    options: [
      {
        text: "友達と出かける！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "一人で映画や買い物",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "家で趣味に没頭",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      },
      {
        text: "とにかく寝る",
        scores: { youkya: 0, inkya: 1, nekura: 2, neaka: 0 }
      },
      {
        text: "誰とも話さず静かに過ごす",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "11. 自分の性格を一言で表すなら？",
    options: [
      {
        text: "明るく前向き！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "社交的だけど慎重",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "穏やかでマイペース",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "かなり繊細",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "自信がない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "12. 他人からどう見られる？",
    options: [
      {
        text: "盛り上げ役！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "真面目な人",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      },
      {
        text: "おとなしいけど優しい",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "何を考えてるかわからない",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "影が薄いと言われがち",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "13. 人付き合いのスタンスは？",
    options: [
      {
        text: "とにかく楽しいのが一番！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "付き合う人を選ぶ",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "必要最低限でいい",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 0 }
      },
      {
        text: "できるだけ避けたい",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "一人が一番楽",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "14. 失敗したときの対処は？",
    options: [
      {
        text: "すぐ笑い話にする！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "落ち込むけど切り替える",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "深く反省して次に活かす",
        scores: { youkya: 0, inkya: 1, nekura: 1, neaka: 1 }
      },
      {
        text: "しばらく気にし続ける",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      },
      {
        text: "できるだけ考えないようにする",
        scores: { youkya: 0, inkya: 1, nekura: 2, neaka: 0 }
      }
    ]
  },
  {
    text: "15. 理想の自分は？",
    options: [
      {
        text: "周りを盛り上げる人！",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "しっかりと自分を持った人",
        scores: { youkya: 1, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "自分のペースで生きる人",
        scores: { youkya: 0, inkya: 1, nekura: 0, neaka: 1 }
      },
      {
        text: "もっと強くなりたい",
        scores: { youkya: 0, inkya: 1, nekura: 2, neaka: 0 }
      },
      {
        text: "今のままでいい",
        scores: { youkya: 0, inkya: 2, nekura: 2, neaka: 0 }
      }
    ]
  }
]; 