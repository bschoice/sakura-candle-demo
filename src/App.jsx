const works = [
  { category: 'WEDDING', title: '記憶に残る、誓いの灯り。', text: 'ウェルカムスペースやギフトに合わせた、花の色と香りを閉じ込めたオーダーキャンドル。' },
  { category: 'LESSON', title: 'つくる時間まで、美しく。', text: '初心者でも楽しめる少人数制レッスン。火を灯す前から、心がほどける体験を。' },
  { category: 'GIFT', title: '贈る人の気持ちを、形にする。', text: '季節の花材や色を選び、誕生日・母の日・記念日に合わせた一点ものを制作。' },
]

const concepts = [
  ['01', '飾る', 'インテリアとして、空間に静かな華やかさを添えるキャンドル。'],
  ['02', '灯す', '火を灯した瞬間、日常の時間が少しだけ特別に変わる。'],
  ['03', '残す', '写真にも記憶にも残る、物語のあるキャンドルを届ける。'],
]

function App() {
  return (
    <main className="site">
      <header className="header">
        <a href="#top" className="brand">Sakura Candle</a>
        <nav className="nav"><a href="#about">ABOUT</a><a href="#concept">CONCEPT</a><a href="#works">WORKS</a><a href="#contact">CONTACT</a></nav>
        <a className="orderButton" href="#contact">ORDER</a>
      </header>

      <section id="top" className="hero">
        <div className="blur blurPink" /><div className="blur blurBeige" />
        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">CANDLE ARTIST HARU</p>
            <h1 className="heroTitle"><span className="brandInitial">S</span>akura<br /><span className="brandInitial">C</span>andle</h1>
            <p className="lead">Sakura Candleは、キャンドルアーティストHaruが手がける架空の公式サイトです。桜のようにやわらかく、火のように静かに心へ残る、花と灯りのキャンドル作品を紹介します。</p>
            <div className="heroActions"><a href="#works" className="primaryButton">VIEW WORKS</a><a href="#about" className="secondaryButton">ABOUT HARU</a></div>
          </div>
          <div className="visualWrap"><div className="visualCard"><div className="visualTag">SAKURA 2026</div><div className="flameOuter" /><div className="flameInner" /><div className="candleBody"><div className="flowerMark" /><p>Haru</p></div><div className="shadow" /></div></div>
        </div>
      </section>

      <section id="about" className="darkSection"><div className="sectionGrid"><div><p className="eyebrow pink">ABOUT</p><h2>静かな時間を、<br />デザインする。</h2></div><div className="aboutText"><p>Haruは、花材・香り・色の重なりを大切にするキャンドルアーティスト。Sakura Candleでは、ただ美しいだけではなく、「飾っている時間」「灯している時間」「誰かに贈る時間」まで含めて、ひとつの作品として考えます。</p><p>このサイトは練習用の架空サイトです。実在のサービスではありませんが、個人アーティストの公式サイトとして使える構成・導線・コピーを想定しています。</p></div></div></section>

      <section id="concept" className="conceptSection"><div className="sectionHead"><div><p className="eyebrow">CONCEPT</p><h2>灯りは、<br />小さな花束。</h2></div><p>Sakura Candleが大切にしているのは、作品そのものの美しさだけではありません。その人の暮らしに、どんな余白が生まれるかを考えています。</p></div><div className="conceptCards">{concepts.map(([num, title, text]) => <article className="conceptCard" key={num}><p className="num">{num}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="works" className="worksSection"><div className="worksInner"><div className="worksTitle"><p className="eyebrow">WORKS</p><h2>作品と、<br />体験。</h2></div><div className="workList">{works.map((work, index) => <article className="workItem" key={work.category}><div className="workVisual"><p>{work.category}</p><span>0{index + 1}</span><div className="miniCandle" /><div className="miniFlame" /></div><div className="workContent"><p className="workCategory">{work.category}</p><h3>{work.title}</h3><p>{work.text}</p></div></article>)}</div></div></section>

      <section className="profileSection"><div className="profileCard"><p className="eyebrow pink">PROFILE</p><h2>Haru</h2><p>花と香りをテーマに制作するキャンドルアーティスト。やさしい色づかいと、余白のあるデザインを得意とする。</p></div><div className="messageBlock"><p className="eyebrow">MESSAGE</p><h2>ふつうの日に、<br />少しだけ詩を。</h2><p>特別な日だけではなく、なんでもない夜にもキャンドルを灯してほしい。Sakura Candleは、そんな小さな願いから生まれました。作品を通して、暮らしの中に静かな美しさを届けます。</p></div></section>

      <section id="contact" className="contactSection"><div className="contactGlow" /><div className="contactInner"><p className="eyebrow white">CONTACT</p><h2>あなたの時間に、<br />灯りを咲かせる。</h2><div className="contactBottom"><p>オーダー制作、レッスン、イベント装飾のご相談はこちらから。架空サイトのため、ボタンはデザイン確認用です。</p><a href="mailto:hello@example.com">SEND MESSAGE</a></div></div></section>

      <footer className="footer"><p>Sakura Candle</p><small>© 2026 Sakura Candle / Haru. Fictional practice website.</small></footer>
    </main>
  )
}

export default App
