import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import style from './Dera.module.scss'

export function Dera() {
  const info = getArticleInfo('dera', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id} className={style.dera}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <section>
          <h2>あらすじ</h2>
          <p>
            俺は副業としてメンズコーチ的なこともやっている。
            メンズコーチっていうのは簡単に言うと男と呼ぶには弱すぎるナヨナヨした奴を一人前の男に鍛え上げてやるコーチのことだ。所謂男磨きのコーチってとこだ。
            で、俺はここ3〜4年ほどある弱男のコーチングをしてきたんだ。その弱男が一端の男になるまでめちゃめちゃ時間がかかって苦労したからなぁ。今回はその弱男を如何にしてまともにしてやったか書いてやるよ。
          </p>
        </section>
        <h2>弱男ってなんだ？</h2>
        <p>
          まずこの令和の世になってなんかやたら「弱者男性」って言葉が流行ったよな？<br/>
          ウィキペディアで調べてみたら「弱者男性とは、貧困・独身・障害・不細工など弱者になる要素を備えた男性のことである。」って書いてあった。
          簡単に言っちまうと弱者男性はモテねぇザコってことだ。「女性にモテないだけでザコ認定？それは早計すぎないか？」と思うエリートもいるかもしれねぇが、本来生物的な雄の優劣は単純に強いことと雌にモテることの2つだった。で、多様性がどうとか言われている令和の世になってもその価値観は生き残っている。<br/>
          男の価値には多様性なんてものは存在しない。強い奴やモテてる奴が強者だ。
        </p>
        <p>
          モテてる強者とモテねえザコの決定的な違いは何か？顔？コミュ力？性格？体？あながち間違いじゃねぇが、1番の違いはテストステロンだろうな。テストステロンが多い奴は男らしい顔つきや体つきや性格になるが、少ねえ奴は顔も体も性格もナヨナヨした感じになる。「彼女いない歴＝年齢です」とか「結婚相談所でお見合い50連敗です」とか言ってる奴の原因の9割方がテストステロン不足だと俺は思ってるよ。
          テストステロンを増やすために必要なのは、筋トレとタンパク質中心の丁寧な食事だ。だからこそ、俺もモテねえザコのコーチングをする時はテストステロンを増やすためにそういった指導を真っ先にやるようにしている。
        </p>
        <p>
          テストステロンが増えたら強者になれるのかというとそんなことはねぇ。こいつらが弱者たる所以はテストステロン不足以外にも大量にある。だがな、男らしさという土台がねぇことにはまずこいつらは男としてのスタートラインに一生立てねぇんだよ。
          どうすればモテねえザコは一端の男くらいになれるのか？それをこれから話すどうしようもねぇ弱男への指導遍歴を例にお前らに教えてやろうと思う。
        </p>
        <h2>コーチング対象の弱男について</h2>
        <p>一体どこから聞きつけたんだろうな？自分を鍛えてほしいという弱男から依頼が飛んできたんだよ。とりあえず話だけ聞いて見ようと思って俺は一旦そいつに会ってみた。そいつのスペックはざっとまとめるとこんな感じだった。</p>
        <ul>
          <li>
            プロフィール
            <ul>
              <li>身長は中位、BMI23程度で普通体型っぽい</li>
              <li>有名私大理系学部卒で学歴はそこそこ良い方</li>
              <li>年収は世代平均より少しだけ高い</li>
            </ul>
          </li>
        </ul>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <ul>
            <li>
              会ってみた時の第一印象
              <ul>
                <li>小太りで、顔にやたら肉が多い</li>
                <li>目が死んでいて、とにかく覇気がねぇ</li>
                <li>なんかめっちゃ挙動不審</li>
              </ul>
            </li>
            <li>
              少し話してみて分かった表面的なこと
              <ul>
                <li>人の目を見て話せない</li>
                <li>会話のキャッチボールができない、基本自分の話ばかり</li>
                <li>人の話を聞くのが下手、良い感じに質問ができない</li>
                <li>空気が読めない、そもそも空気というものが分からない</li>
              </ul>
            </li>
            <li>
              根掘り葉掘り聞いて分かったこと・俺が気づいたこと
              <ul>
                <li>30過ぎなのに真性童貞(会った瞬間分かったが)</li>
                <li>周りが見えなさすぎて自分を客観視できていない</li>
                <li>本来めちゃくちゃ短気でプライドが高いが、周りが怖くて我慢してる</li>
                <li>クソ繊細すぎて嫌なことがあるとすぐ傷つくし、長いこと引きずる</li>
              </ul>
            </li>
          </ul>
          <p>
            正直重症すぎて俺の手には負えねえから依頼は断ろうと思った。
            だが、こいつは人間社会で胸張って生きられるくらい強くなりたいと言ってきた。この時に奴が言ってた理想像はこうだ。一応優先度順に書いていく。
          </p>
          <ul>
            <li>外見的にも内面的にも強い男になりたい</li>
            <li>彼女がいたことないので、まず彼女が欲しい</li>
            <li>自身の人間的成長のために結婚・子育てもしたい</li>
          </ul>
          <p>その心意気を聞いて俺は仕方なく奴の男磨きのためのコーチングを受けることにしたんだ。</p>
        </section>
        <section>
          <h2>育成記録</h2>
          <p>
            このアルティメット弱男のここ4年の育成記録を書いていこうと思う。
            奴に特化した内容が多いが、世の弱男どもの矯正に役立つことも結構あるかもな？
          </p>
        </section>
        <h2>1年目の取り組み</h2>
        <p>
          まず俺が真っ先に気になったのは、BMIがほぼ標準なのに見た目が小太りな所だな。そして顔付きと目に覇気がねぇって所だ。
          これはあからさまに筋肉とテストステロンが少ねぇ奴の特徴だ。
        </p>
        <p>
          だから筋トレと食生活の改善をさせたんだ。筋トレと言っても軽く汗をかく程度の運動じゃあダメだ。ジムでフリーウェイト中心に1時間半くらい限界まで追い込むトレーニングを週5以上でやらねぇとよっぽど才能がある奴以外は体も見た目も全く変わらねぇ。
          体を変えるには筋トレだけでなくタンパク質中心の食生活も必要になる。筋トレで筋繊維をぶっ壊しても、そいつらを再生してやるための栄養がなければ筋繊維は十分に回復せず、結果体はあまり変わんねぇ感じになるからな。
        </p>
        <p>
          幸いにもそいつは筋トレのやる気はあったみたいだから、正しい知識さえ頭に叩き込んでやれば変われるって期待はできた。
          詳細には語らねぇが、筋トレ関連で奴にこの1年間でやらせたことはこうだ。
        </p>
        <ul>
          <li>筋肉・脂肪関係なくめちゃめちゃ体重を増やす期間(増量期)と脂肪を削って体を絞る時期(減量期)を半年周期で実施</li>
          <li>ジムに週5回以上で通わせた</li>
        </ul>
      </Page>
      <Page pageNumber={startPage + 2}>
        <ul>
          <li>増量期は筋トレのみ、減量期は筋トレに加えてその後有酸素運動もさせた</li>
          <li>筋トレ種目はダンベルやバーベルを使うフリーウェイト中心。目安としてはギリギリ10回3セットできるくらい。これを5-6種目程度</li>
          <li>脂っこい外食やコンビニ飯中心の食生活を、基本自炊に変えさせた</li>
          <li>増量期・減量期関係なくタンパク質を1日最低でも体重✖︎2.5倍g摂取させた</li>
          <li>増量期は目一杯食えるだけ食わせた。多分1日4000kcalくらいは摂ってたんじゃね？</li>
          <li>減量期は基本的に脂質制限をして、1日の脂質を30g程度、糖質量は徐々に減した</li>
          <li>減量期の食事は基本的に鶏胸肉、ブロッコリー、玄米、卵、納豆が主だった</li>
          <li>間食としてプロテインを1日2-3回は摂取させた</li>
          <li>サプリは食事で毎日マルチビタミン、マルチミネラル、亜鉛を摂らせていた</li>
        </ul>
        <p>
          筋トレ自体は活き活きとできてたが、減量期の食事は辛そうにしていたな？
          案の定あいつはクソな性格だから、あまりに食事が辛いからって美味そうな飯を食ってるダチに「俺は我慢してこんな不味いものを食ってるのに一々美味いもの見せてくんな！」って感じでキレ散らかしてたな？そして俺にまで不機嫌をぶつけてきやがったから何度も説教してやったよ。「お前が勝手に選んだことで俺もお前のダチもなんも強制してねぇんだよ、他人に当たるな！」ってな。
          その苦労もあってか体自体は並の男よりはちょい良い感じくらいになったと思うよ。面構えにも覇気が宿って多少マシになったな。
        </p>
        <p>
          そして筋トレをして終わりではなくボディビル大会にも出場させてやった。理由はいくつかある。
          まず、筋トレ初心者の身でボディビルに出ることでメンタルが図太くなれる。
          こういう大会では、公衆の面前でパンツ一丁でドヤ顔しながらてめえ自身を最大限にナルシストに見せる必要がある。しかもこんな弱者なんかよりずっと良い体をした男達しかいない中でだ。人生でトップレベルで恥ずかしいことだろうなぁ？だが、逆を言えばこれより恥ずかしいことなんて滅多にない。だからこそ今後ちょっとやそっとの失敗も女にアプローチかけることも大概のことは一切怖くなくなる。
          次に、単純により良い体になれるってことだ。
          人は目標があるとより頑張れるから自然と結果も付いてくる。そして何より人様の前でパンツ一丁の姿を強制的に見せつけることになるから、大体の奴は最大限に良い体に仕上げようと頑張るだろうな。そしてあの弱者も例に漏れず頑張っていたらしく、体脂肪率は最終的に6%程度までいったらしい。大会の結果自体は予選落ちだったが、奴自身は人生初の仕上がった体に手応えも感じていたようだったがな。
          筋トレ以外では、周りの人間の言動を観察・分析するってこともやらせてみた。
        </p>
        <p>
          信じられねぇ話かもしれんが、なんと奴は30年以上の人生でほとんどそういった人間観察をしてこなかったようで、何をどう観察すれば良いのか全く分かっていなかった。とりあえず、テメェと同じようなクソな内面・性格を持っている奴の言動を見て、なぜそのような行動するのか自分なりに推測するように教えてやった。
          そのお陰か自分自身のクソな内面を自覚し出して改めるようになった。そういうわけで、空気が読めねぇとか内心思いっきり人を見下すといった人間関係の構築において致命的な部分は多少マシになったみてぇだ。
        </p>
        <h3>成果振り返り(1年目)</h3>
        <p>
          1年目は肉体改造とテストステロンの増加を中心にトレーニングを行なわせた。それと並行して奴と同じようなクソな内面を持つ奴の観察・分析も行わせた。その成果は↓の通りだ。
        </p>
        <ul>
          <li>並の男以上の体つきになった</li>
          <li>面構えと目つきに覇気が宿った</li>
          <li>メンタルが強くなって、他人や失敗への恐怖がなくなった</li>
          <li>テメェのクソな部分を自覚できるようになった</li>
          <li>多少空気を読む努力をするようになった</li>
        </ul>
      </Page>
      <Page pageNumber={startPage + 3}>
        <h2>2年目の取り組み</h2>
        <p>
          1年目の努力もあって奴はテストステロン量は増えて、中々男らしい体つきと顔つきになった。<br/>
          ただここで大きな問題が表面化してしまった。奴は全くもって自分を客観視できていなかった。筋トレして体つきが変わったことでかなり自信過剰になっていた。<br/>
          その結果、大したことねぇ筋肉なのに周りには筋肉をやたら自慢するようになったし、なんならよく人様の前で上裸やパンツ一丁になるようにもなっちまった。。<br/>
          自分の教え子がこんなクソになっちまって俺は死ぬほど恥をかかされたよ。だから「クソ貧相な体を自慢げに見せて馬鹿なのか？？どんなデブやヒョロガリでもちょっと頑張ればお前程度にはなれるんだよ、そんな情けねぇ自慢する暇があったら死ぬ気で努力しやがれ！！」って説教してやった。だが、奴は馬鹿だから改心も自覚もしなかった。
        </p>
        <p>
          だから奴自身を客観視させるために奴のパンツ一丁の体を撮ってやった。<br/>
          ここで重要なのが、鏡でてめえ自身を見ることではなくカメラ越しのてめえ自身を見ることだ。お前らもこんな経験はないか？鏡で見るとてめえ自身の顔や体は中々良い男に見えるんだが、いざ無造作に撮られた写真を見ると超絶不細工というやつだ。残念だが、周りから見えてるてめえの姿は後者の方なんだよ。この原因は諸説あるが、俺はライティングの問題だと思ってる。鏡が置いてある所は大体ライティングが良い感じになってるから鏡で見ると、顔の凸凹感は消えるし体だって筋肉が10割増くらいで映えて見えるようになってしまう。だからこそ奴も勘違いしてしまったんだろうな。
          実際に写真をいくつか撮らせてみたら奴は想像以上の筋肉の無さと脂肪の多さに絶望していたな。今まで鏡で見てた姿は嘘だったのかと嘆いてたよ。<br/>
          それと同時に、奴自身の動きを動画として録画もしてやったよ。実は大体の人間はイメージ通りに動けているつもりでも全然動けていないものだからな。そして奴自身もそうだった。奴の動きは30年前のロボットみてぇにクソぎこちねぇし、姿勢もクソ悪くて類人猿の方がまともなレベルだった。奴は動画でてめえ自身の姿を見て死ぬほどショックを受けてたな。
        </p>
        <p>
          そんなこんなで、てめえ自身がクソかっこ悪いことを自覚した奴はまたボディビル大会の出場を目指してより一層筋トレに励むようになった。
          そして奴は前回大会以上に体を仕上げてバルクばりばりのマッチョとまではいかねぇが軽量級のプロ格闘家と言っても信じてもらえるくらいの体になったし、ビデオで何度もてめえ自身の姿を撮ってトライアンドエラーで人への魅せ方も上達した。
          大会で良い線を狙えると正直思ってたが、大会の結果は良い線どころかまた予選落ちだった。奴はやはり死ぬほど落ち込んでいたが、俺は不可解すぎて色々調べてみたよ。その結果、あの大会はSNSやYoutubeとかでネットで目立ってたり、テレビとかのメディアに露出している奴ほど評価される大会だということが分かったよ。
          それと後になって分かったが、あの大会は舞台上で選手の写真を撮ってくれるんだが映えている選手ほど写真の数が多く、奴の写真の数は上位層の奴と同じくらい多かった。やっぱ分かってる奴はいるんだな、世の中捨てたもんじゃねぇと俺は思ったよ。奴もその事実だけで救われた気持ちになってたな。
        </p>
        <p>
          だが、奴の男磨きはこれで終わりじゃねぇ。次に向けた男磨きを開始したわけだ。
          次というのは具体的には女と付き合うって話だ。<br/>
          だが、女と付き合うどうこうの前に奴には女がよく言う清潔感というものが一切なかった。いくら男らしい面構えや体になろうともそんな状態で現代の女の前に現れようもんなら、間違いなくサツに通報されちまう。
          だから俺は奴が女に会う前に見てくれの面でも色々お膳立てをしてやったんだ。実際にやったお膳立ては以下の通りだ。
        </p>
        <ul>
          <li>服装
            <ul>
              <li>まず前のくせえ服や手垢まみれの眼鏡は論外なので全部捨てさせた</li>
              <li>ガタイが良い奴は何着ても似合うから極論TPO外さなけりゃ何着ても良い</li>
              <li>奴は強そうに見える服を希望したから、濃いめのスーツを勧めてやった</li>
            </ul>
          </li>
        </ul>
      </Page>
      <Page pageNumber={startPage + 4}>
        <ul>
          <li>髪型
            <ul>
              <li>とりあえずショートのツーブロックを勧めてやった。ヒョロガリには似合わねぇが、ある程度以上ガタイが良ければスゲー映える髪型だからだ</li>
              <li>奴は直毛でバリバリに硬い髪質だからパーマかけることも勧めた</li>
              <li>その他髪について詳しいことはスタイリストに聞けと言っておいた</li>
            </ul>
          </li>
          <li>髭
            <ul>
              <li>奴の髭は正直濃かった、髭を剃っても青髭が残っていた</li>
              <li>髭脱毛もしくは逆に良い感じに髭を伸ばして手入れする選択肢を用意してやったら奴は後者を選んだ</li>
            </ul>
          </li>
          <li>肌
            <ul>
              <li>奴は既に正しくたんぱく質を摂取できてたからそれなりに良い肌質だった</li>
              <li>ただすぐニキビができる体質らしいから、朝は毎日洗顔クリームで洗うこと、夜は化粧水と乳液塗ってから寝ることを勧めてやった</li>
            </ul>
          </li>
          <li>表情
            <ul>
              <li>奴は自然な笑顔というものができなかった。笑うと遊戯王の「強欲な壺」カードみてぇな顔になるので、まずはそれをやめさせた</li>
              <li>俳優やイケメンがよくやる爽やかな笑顔を鏡の前で何度も練習させた</li>
            </ul>
          </li>
          <li>姿勢
            <ul>
              <li>ボディビル大会に出場を目指していた頃に猫背・巻き肩は直してやった</li>
              <li>ストレートネックについては引き続き矯正中だがな</li>
            </ul>
          </li>
          <li>爪
            <ul>
              <li>なげぇ爪は印象が悪りぃ。爪の間に黒いものが挟まっている奴は論外だ</li>
              <li>奴には週1か女と会う前に指の爪を切ってやすりで整えるよう言ってやった</li>
            </ul>
          </li>
          <li>靴
            <ul>
              <li>それなりに小奇麗で余程センスが悪くない靴なら問題ない</li>
              <li>とりあえず服がスーツなら靴は茶色か黒の革靴一択だと言っておいた</li>
            </ul>
          </li>
          <li>体臭
            <ul>
              <li>正直服がくせえだけだと思ってたから、奴には毎日風呂入るようにだけ言っておいた(奴は2日に1回くらいしか風呂に入ってなかったらしい)</li>
              <li>あとボディーソープとしてデオドラントを使うくらいだな</li>
            </ul>
          </li>
          <li>口臭
            <ul>
              <li>奴は3日連続歯を磨かない時があるらしいから、毎日歯を磨くようにさせた</li>
              <li>歯ブラシだけでなくフロスとか歯間ブラシも使わせた</li>
              <li>歯茎のケア用に口腔洗浄器も使わせた</li>
              <li>ついでに毎日寝る前にマウスウオッシュでうがいもさせた</li>
              <li>歯医者にも通院させ、全ての虫歯を半年程かけて治させた</li>
              <li>あと虫歯でなくとも3ヶ月おきに定期検診を受けてこいとも言ってやった</li>
            </ul>
          </li>
        </ul>
        <p>
          こんな感じで清潔感を出してやったから、これなら通報はされねぇと俺は思った。だから俺は奴に女と会ったり話したりする経験を積むように言ってやった。<br/>
          奴は就職以降プライベートでほとんど女と話すことがなかったせいか、奴にとっては女は神話上の生物みてえな感覚だから、女に会った瞬間脳がフリーズしちまうらしい。まずは女は現代で生きる人間だということを奴に理解させる必要があった。<br/>
          だから、普段女と関わりがねぇ奴に俺はマッチングアプリを勧めてやった。
          清潔感を整えた奴の写真と俺が添削してやったプロフィール文のおかげで、それなりに良い感じでマッチングすることはできた。
          問題は実際に会うようになってからだな。初めのうちは緊張しすぎて全く会話のキャッチボールってもんができなかったらしい。
        </p>
      </Page>
      <Page pageNumber={startPage + 5}>
        <p>
          当然1回目のデート終了後にブロックされることが日常茶飯事だった。だが、色々な女に会う度に女は神話ではなく人間だという感覚が芽生えて会話が自然にできるようになったらしい。
        </p>
        <h3>成果振り返り(2年目)</h3>
        <p>
          この年は奴の外面が1番進化した年だったと思う。あと内面的にも奴はてめえ自身を客観的に見られるようになったと思うし、女を神話上の生物ではなく同じ現代で生きる人間だと思えるようになったことも進歩だと思う。具体的な成果は↓の通りだ。
        </p>
        <ul>
          <li>てめえ自身を客観視できるようになった</li>
          <li>体つき、顔つきがさらに良くなった</li>
          <li>他人へのてめえの見せ方を覚えた</li>
          <li>清潔感のある見た目に整った</li>
          <li>女と自然に話せるようになった</li>
        </ul>
        <h2>3年目の取り組み</h2>
        <p>
          清潔感のある見た目になってそれなりに女と話すこともできるようになったし、そろそろ奴も女を作れる時期かと俺は思っていた。だが現実は甘くなかった。<br/>
          奴にマッチングアプリで女と会ってどんな感じか、どういう話をしているかを聞いてみたんだが、クソ童貞丸出しって感じで最悪だった。
          デートプランを女に丸投げ、てめえの趣味を延々と話すが恋愛観とか付き合う前提の話といった本題を全く話さねぇ、挙げ句の果てにはムードもへったくれもねぇ人様がワラワラいる所での告白など、奴はデートにおけるアンチパターンをわざとやってんのかってくらい実践しまくっていた。
          俺は言葉を失った。恋愛の知識が無さすぎるのはもちろんだが、人付き合いにおける基本的なこと・考えが何一つできちゃいねぇ。
        </p>
        <p>
          そこで俺は荒療治として奴を早急に俺の住む田舎に引っ越しさせることにした。
          俺の住んでいる所は廃れ目の市で結構な田舎だから人付き合い慣れさせるにはちょうど良い所だった。<br/>
          で、奴が引っ越してきてからはご近所さんへの挨拶・町内会への参加をさせてやった。<br/>
          俺が所属してる地域の草野球チームにも加入させた。
          チームスポーツはコミュニケーションが必要だから奴にとって良い薬になると考えた。あとは奴よりずっと年上の気の良いおっさんが多いからその人達のコミュニケーションを間近で観察できるのも良いだろうと思っていた。<br/>
          地元政治家のスタッフもやらせた。その政治家ってのが俺の兄貴なんだが、兄貴が人手が足りなくて困っていると言ってたから奴をスタッフとして紹介してやった。スタッフの仕事は電話対応とか、兄貴の支持者のおっさんのなげぇ与太話に付き合うとかだな。<br/>
          そんな感じで、人と話す経験をガッツリと増やしてやった所、奴のコミュニケーションスキルは大幅に向上した。
          まずは人の話を聞くということができるようになった。俺の住んでいる田舎は年寄りが多く、なぜかどの年寄りもめちゃめちゃ話好きなんだよ。あの年寄り達はこっちから話をする隙すら与えてくれねぇから、ひたすら聞く側に徹するしかねぇ。そうするとな、自然と人の話をどう聞けば良いのか何を質問すれば盛り上がるのか嬉しいのかが大体わかるようになるんだ。そんな感じで奴も人の話の聞き方というのを覚えてそれが同時に会話のキャッチボールになって人間の会話というものもできるようになった。
          奴はちゃんと人の目を見て話せるようにもなった。言葉より相手の表情や仕草が重要ということも奴は経験で学んだんだ。その経験で言葉だけでなく、相手の目や表情にも気を配れるようになったと言ってたな。
        </p>
        <p>
          もちろん人付き合いスキルだけではなく、恋愛に関する勉強もさせてやった。<br/>
          足掛かりとしてマッチングアプリや恋活・婚活関連について動画で学ばせることにした。一応目安として1日1時間以上は動画を見て学んだことをノートにメモさせるようにした。<br/>
          奴のノートを見る限り、アプリで会ってから告白までの過程までは良い感じに学べていたな。
        </p>
      </Page>
      <Page pageNumber={startPage + 6}>
        <p>
          そして田舎暮らしで頻度は減っていたが、奴は引き続きマッチングアプリとかで女と会って着々と経験値を上げていた。
        </p>
        <p>
          そんな中、事は突然起きた。ついに奴に女ができたらしい。3X歳にして初の彼女だ。<br/>
          相手はマッチングアプリではなくダチから紹介された女だそうだ。で、奴からその女に告白をしたらしいが、返事を保留にされ返答が返ってきたのは10日後くらいだったらしい。
          その話を奴から聞いて俺は違和感を覚えたんだが、奴は3X年の長い氷河期人生にして初の春が来たことに幸せを噛み締めていたんで、そこに速攻で水を差すのはデリカシーのねぇクソヤボ男のやることだと思ったから敢えて言わなかった。
          だが女ができたことは男として非常に喜ばしいことだから俺からも祝福してやったよ。<br/>
          その女との付き合いが始まったんだが、それから奴は俺に相談しなくなった。状況を聞いても順調だとしか言わなかった。童貞が最初から順調に付き合いを続けられるわけがねぇ、多分奴は浮かれすぎてその事実に気づいてねぇだけだと思ってはいた。だが奴の恋愛事情にこっちから首を突っ込む義理はねぇと思い、俺も敢えて深くは突っ込まなかった。
        </p>
        <p>
          そして数ヶ月後、ようやく奴は俺に相談を持ちかけてきた。どうやら奴はてめえの女に体臭がくせぇと言われたらしい。奴は半日寝込むくらいショックだったらしい。だが、奴は同時にどこか他人行儀だったてめえの女が思っていることを正直に直接奴自身に言うようになったことに対して喜びを覚えていたらしい。だが、俺はどうしても違和感が増すばかりだった。てめえの不満を言うだけ言って奴に対して何も歩み寄りしねえなと俺は思った。<br/>
          俺は違和感を抱えたままだったが、奴自身は体臭問題を解決したがってたし、それ自体は清潔感を高めるために必要だと俺も思ったから、改善のために手を貸してやることにした。<br/>
          話を聞いてみると実は奴自身も汗かいた時の体臭が少し気になっていて、それを誤魔化すために安物の香水を使っていたらしい。どうせ奴は香水を多めに振ってただろうから、奴は汗臭さと安物の香水臭さという二重の臭さを纏っていたわけだ。そりゃあ臭かっただろうな。<br/>
          だから対策としてまずは香水をやめさせた。次に体臭だが、多分体臭というより汗がくせぇんだろう。汗がくせぇ原因は腸内環境が悪いからだ。
          腸内環境が悪くなる原因はいろいろあるが、おそらく奴の場合は食生活に依るものだろうな。奴は引き続き筋トレを続けていたから食生活もタンパク質中心になっていて、鶏胸肉とかホエイプロテインとか動物性タンパク質を大量に摂取していたようだ。動物性タンパク質の摂りすぎは腸内環境を悪くするんだよ。<br/>
          対策として、可能な限りタンパク質は植物性のやつに代えて、同時に体臭をなくすらしい食材を毎食摂るよう指示した。そしてダメ押しで出かける前は必ず風呂に入ってかつ風呂上がりにデオドラントクリームを塗らせた。
          これらの対策によって奴の体臭は無くなったらしく、それ以降奴の女は奴にくせえという事はなくなったそうだ。
        </p>
        <h3>成果振り返り(3年目)</h3>
        <p>
          この一年、奴は人付き合いにおいて大幅にレベルアップしたと思う。その甲斐あってか彼女もできて奴にとって貴重な恋愛経験を積めた期間となった。具体的な成果は以下の通りだ。
        </p>
        <ul>
          <li>田舎に移住させ人付き合いとコミュニケーションについて学んだ</li>
          <li>マッチングアプリや恋活・婚活関連の動画から、出会ってから告白までの過程を学んだ</li>
          <li>3X歳にして人生初彼女ができた</li>
          <li>今まで一度も積めなかった恋愛経験がつめた</li>
          <li>体臭の改善ができた</li>
        </ul>
        <h2>4年目の取り組み</h2>
        <p>
          年明け早々事件が起こった。俺がなんとなく感じていた違和感と悪い予感は的中した。
        </p>
      </Page>
      <Page pageNumber={startPage + 7}>
        <p>
          奴は一方的に女に振られた。クリスマスデートの後2週間LINEを未読スルーされ、2週間ぶりに送られてきたLINEで振られたそうだ。<br/>
          当然奴は大号泣した。ストロングゼロを大量に買い、朝方まで飲み干し泣き続けたそうだ。<br/>
          それでも奴は全く発散できず一睡もしないままダチの集団に会ってヤケ酒に散々付き合ってもらったらしい。だがそこで奴はさらに傷つき激怒した。<br/>
          初の彼女に訳もわからずに一方的に振られたことはクソほどショックだったらしいが、ヤケ酒に付き合ってくれたダチに言われてことも相当頭にきていたらしい。奴はサンドバッグを全力で殴りつけながら、愚痴を限界まで叫び散らかしてやがった。
          「僕はこんなにも努力したのになんで報われねえんだよおおおおお！！！！友達は女と話せとか実際の恋愛は漫画・アニメと違うとか童貞を諭すようなことを言ってきやがったああああ！！！！僕はたまたま運良く彼女に拾ってもらった童貞じゃねえんだよおおおおお！！！！僕は普通の奴の1000倍努力してようやく彼女を作ったんだよおおおおおお！！！！僕と僕の努力を舐め腐りやがって！！！しかも僕に彼女を紹介した友達は彼女から僕の愚痴を色々聞いていたらしいなあああ？？？なんで今まで黙ってたあああ？？？？？そしてなんでみんながいる前でそれを言いふらす？？？？？そんなに僕を笑い物にしたいのか？？？？クソクソクソクソおおお！！！！！！」って感じで俺も初めて見るほどに奴はブチギレていた。何百発何千発か分からねえが奴は気が済むまでサンドバッグを殴り続けた。
          奴の拳もサンドバッグもボロボロになった所で殴るのをやめ、また泣き始めた。奴はストロングゼロを何十本も飲んで三日三晩泣き続けたらしい。
        </p>
        <p>
          1-2週間くらい経っただろうか。奴はようやく落ち着きを取り戻したようでまた俺に会いにきてこう言った。「僕は完全に恋愛に溺れていました。僕自身何が欲しいのか全く理解できて
          いませんでした。でも、あの後落ち着いて色々考えてみました。前よりずっと僕自身の理想が分かってきました。僕は理想の女性に出会い、その人と付き合い、その人と家庭を築きたいです。あと1年だけそのためのお手伝いをしていただけないでしょうか？」とな。
          奴の懺悔と決意を聞いて俺は正直嬉しかった。中々良い男になってきたじゃねえかと思ったよ。だから俺はその依頼を快諾してコーチングを再開することにした。<br/>
          まず手始めに前の女となぜうまくいかなかったのかの反省会を行った。そこで俺は奴に俺の感じていた違和感を全て言語化して伝えてやった。伝えてやった内容はこうだ。
          結論から言うと奴の前の女は奴のことを別に好きではなかった。これは推測だが、奴と付き合い始めたのは単純に紹介してくれたダチに気を遣っていたからだろう。
          多分付き合う中で好きになろうとしたんだろうが、結局好きになれなかったんだろうな。<br/>
          そして好きになれなかった原因は奴自身にあると俺は考えている。
          そもそも奴は付き合うまでの過程について学んではいたが、付き合ってからのイロハを何1つ知らなかった。当然だが、「童貞だから分からないんだ！ごめん！」と言ってもほとんどの女は許しちゃあくれねえ。童貞だろうがヤリチンだろうが目溢しは一切なく同じ評価基準で見られちまう。つまり奴があまりに恋愛を知らなすぎたからその女の興味ゲージが削りに削れて0になっちまったんだろうな。<br/>
          だが、原因は分かったのだから後はその対策をするだけだ。
          まず奴には思い出せる限り今までのデートであったことを語らせ、NGポイントを俺が片っ端から指摘してそれをノートに取らせた。
          引き続き恋愛に関する動画の視聴も習慣的に行わせた。今度は付き合う前だけでなく、付き合った後や結婚後に関することも込みで学ばせた。
          そして奴はマッチングアプリを再開して、更には街コンにも手を出しててめえの理想の女を探そうとした。<br/>
          だが、奴の女探しは難航した。行動はしていたが、3〜4ヶ月経っても何も進まなかった。
        </p>
        <p>
          奴を結婚相談所に入会させることを俺は考えていたんだが、そんな中また構えてねぇ時に良い知らせがきやがった。奴に新しい女ができたらしい。<br/>
          その女とはマッチングアプリで会ったらしく、1回目会った時点から何やら波長が合うなと感じ、2回目会った時にお互い似たような境遇で生きてきたことや似たような感性を持ってることで意気投合したらしい。で、その後何回か会い、奴から告白をして即OKをもらったそうだ。<br/>
        </p>
      </Page>
      <Page pageNumber={startPage + 8}>
        <p>
          俺はそれを聞いて今度はうまくいくんじゃねえかと強く思ったよ。<br/>
          俺の予想通り、奴は奴の女との関係を良い感じに構築できていったそうだ。<br/>
          奴の話を聞いた感じ、元々性格の相性が良かったのか衝突することはあまりなかったらしく、あってもお互い話し合うことで解決案や妥協案を探ったりできてたそうだ。
          そういう感じだから前の女とは話せなかった価値観とか結婚観とか将来に向けた話をお互い包み隠さずに意見交換もできたそうだ。それ以外にもお互いの境遇や内面とかについても話したりして、自身を見直す機会ができてありがたかったとも言ってたな。<br/>
          そして、女と会う頻度も最初週1だったが、日を追うごとに会う頻度が増えていき、結構早いうちからお互いの家を行き来する半同棲みたいな状態にまでなったそうだ。
          俺が奴の女と会うことはなかったが、奴から度々写真を見せてもらうことはあった。お互いに今が1番楽しいって面してたよ。事実、奴は今が人生で1番楽しいと言ってやがったな。ここまで努力してきて本当に良かったと言って俺に泣きながら感謝してきたりもしたな。<br/>
          まぁ、そんなこんなで話はトントン拍子で進み、奴はプロポーズする準備をしていたし、年末年始でお互いの両親に挨拶する予定も決めていた。「気の合う彼女なので今後問題が起きても話し合ったりとかで何とかできる」と奴は言ってたな。
          ついに奴も独り立ちできるのか、ここまで長かったが面倒見てきた甲斐があったなと俺も感慨深く思っていた。
        </p>
        <p>
          だがな、ここからは2年前にあるチンピラが残した言葉をそのまま引用させてもらう。
        </p>
        <blockquote>この同人誌は「サイバーメタルチンピラ」である。<br/>ここまでフラグを立てまくったので、そろそろボッコボコに折られなければいけない。<br/>当然ハッピーエンドなわけがないだろう。
        </blockquote>
        <p>
          まさしくこの言葉の通りだった。綺麗に立てたフラグは一瞬にして跡形もなく粉々に砕かれたんだ。どうやら胸糞悪いことも構えてねぇ時に来るらしい。<br/>
          端的に言うと、破局した。<br/>
          信じられるか？ほぼほぼお互いに結婚を決めていた状態からだぞ？昔の新海誠のアニメの脚本じゃねえんだぞ？今時こんな脚本は大衆ウケしねえんだよ。<br/>
          破局原因について具体的な事は話せねえんだが、簡単に言っちまえば奴自身の心の弱さによるものだ。奴は弱ええ自分を制御しきれず(殴ったりしたわけじゃねえが)、その弱さをてめえの女にぶつけて傷付けてしまったそうだ。その女にとってその心の傷が深すぎて歩み寄りはまず考えられないとのことだったそうだ。奴もここで歩み寄りが無理なら結婚してもどっちみち似たようなことが起こってしまうだろうと考え、破局となったらしい。<br/>
          奴にとって突然過ぎて何日か立ち直れない日々が続いたが、一度失恋を経験しているからかある程度お互い納得した別れだったからか前回よりも落ち着いていて立ち直りも早かった。<br/>
        </p>
        <p>
          当然、奴と反省会を行った。色々話を聞く中でいくつか分かったことがあった。<br/>
          そもそも奴は女に依存していた。なんならその女がいないと生きられないレベルにまで思ってしまっていたらしい。だが奴のこれまでの人生を聞くとそれも納得できるから一概に全否定はできねえんだ。というのも奴は弱男時代に世の女から散々な扱いを受けてきたらしい。そんな中で人生で初めて奴を肯定して愛してくれる女が現れたらどんな強え奴でもコロッと落っちまうよ。だが、どちらかが相手に依存する関係は健全な状態じゃねえ、一時的には良くても必ずどこかでボロが出てしまう。それが今回出てしまったんだろうがな。<br/>
          それと奴はその女に甘えていたみたいだ。今まで誰にも甘えられなかった反動からか奴は無意識レベルで女に甘えていて、更にはこれまでのトレーニングや失恋で負った傷も甘えることで回復しようとしてたんじゃねえかと俺は思ってるよ。<br/>
          これらの対策なんだが、他人の評価軸や価値に左右されない自分軸を作って強固にすることと、てめえ自身を理想的な実の親のように心から可愛がってやること、今後はこの2つの心構えを徹底することを奴に教えてやったよ。
        </p>
      </Page>
      <Page pageNumber={startPage + 9}>
        <h3>成果振り返り(4年目)</h3>
        <p>
          成果自体は以下の通りで、これだけ見ると1番成長が少なかった年に見えるかもしれねぇ。<br/>
          だが、この1年は奴にとってこれまでで1番精神の成長機会が多い1年だったと思う。
        </p>
        <ul>
          <li>人生初の失恋から恋愛を学んだ</li>
          <li>てめえ自身の理想が言語化できるようになった</li>
          <li>てめえのクソな内面と向き合えるようになった</li>
          <li>てめえの心の弱さを自覚した</li>
        </ul>
        <h2>元弱男のこれからについて</h2>
        <p>
          元弱男の奴のこれからについてだが、4年で目標を全て達成することはできなかった。<br/>
          確かにまだメンタル面に弱さがあって真の男とは言い難い。だが、これまでの努力で一端の男にはなったんじゃねえかと俺は評価している。だから俺のコーチングはこれで卒業だ。<br/>
          正直奴は今のままでもそれなりにいい人生は送れるのかもだが、奴はそれじゃあ満足しねぇって言っている。奴の理想は今の奴の能力以上の高い所にある。だからこそ理想を叶えるためには特にメンタル面での成長が必須になる。<br/>
          奴は幸せのためにまたしばらくの間茨の道を歩む事になると思うが、その先に真の男として幸せを掴むことを俺は心の底から願ってるし、応援しているよ。
        </p>
        <h2>俺自身の気づきと決意</h2>
        <p>
          今回の弱男のコーチングを通して、正直俺もメンズコーチとして力不足を強く痛感させられたよ。今後は今回の反省点をメンズコーチ業に活かしていこうと思うよ。<br/>
        </p>
        <p>
          ちょいとばかし語らせてもらうんだが、俺にもメンズコーチとしての夢と理想がある。
          それは現代の日本の男どもの底上げ、全日本男児強者化計画だ。<br/>
          というのも今の日本の男どものレベルは昔に比べて死ぬほど下がっている。中には真の男もいるが、世の中にはナヨナヨした男どもがクッソ多い。<br/>
          少し話は逸れるが、最近の婚活している女はまるで口癖かのように「普通の男でいいのに」と言っている。最近の風潮ではこれに対して「高望み乙〜w」って感じに女側の高望みとして一蹴する傾向にある。確かにそれもあるかもしれねぇ。ただそれ以上にこの「普通の男」を高望みと笑う今の風潮、普通レベルの男すら少ないこの現状に危機感持った方がいいよ。<br/>
          いいか、「普通の男」は本来普通レベルの男なんだ。今だと全部平均レベルの「普通の男」は強いみたいに言われている。冷静に考えておかしくないか？<br/>
          じゃあなぜこんな認識が広まったのか？答えは簡単だ、現状に胡座をかきたがる奴、苦労したくねえ奴が増えたからだよ。<br/>
          確かに対価に見合わなかったりあまり意味がねぇ苦労はバカのする事だしそれは避けた方がいい。でもな、自分の成長のための苦労まで避けるのは違うだろ？その苦労は買ってでもすべきだと思う。特に弱ええ奴が多い今この時代に必要な苦労だと思う。<br/>
          俺はこの事実をできるだけ多くの男に伝えて、できるだけ多くの男の意識を変えてやりてぇと思ってる。そういう意識のやつが増えれば日本は再生できると思うし、少子化問題だって解決すると思ってる。これこそが本当の異次元の少子化対策だよ。そうだろ？岸田？石破？<br/>
        </p>
        <p>
          俺はこの理想を叶えるためにもあの弱男だけじゃなく俺自身も努力を続けていこうと思う。<br/>
          そして俺の助けが必要であればいつでも呼んでくれ、お前も一端の男にしてやるからよ。
        </p>
      </Page>
    </div>
  )
}
