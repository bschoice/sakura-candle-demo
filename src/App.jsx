const works = [
  { category: 'Gradation Candle', title: 'グラデーションキャンドル', text: '料金　　　３,０００円\n所要時間　９０分' },
  { category: 'Botanical Candle', title: 'ボタニカルキャンドル', text: '料金　　　３,０００円\n所要時間　９０分' },
  { category: 'Gel Candle', title: 'ぷるぷるキャンドル', text: '料金　　　３,０００円\n所要時間　９０分' },
]

const shopItems = [
  { name: 'Sakura Bloom', variant: 'pink' },
  { name: 'Rose Whisper', variant: 'rose' },
  { name: 'Moon Light', variant: 'ivory' },
]

const socialLinks = [
  { name: 'Instagram', label: 'Instagram', href: '#' },
  { name: 'YouTube', label: 'You tube', href: '#' },
  { name: 'LINE', label: 'LINE', href: '#' },
]

function SocialIcon({ name }) {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="14" width="36" height="36" rx="11" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="43.5" cy="20.5" r="2.5" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'YouTube') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="18" width="40" height="28" rx="10" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <path d="M28 25.5L40 32L28 38.5V25.5Z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 14C20.4 14 11 21.8 11 31.4C11 40 18.5 47.2 28.7 48.5L26.6 55L35.7 49C47.3 48.1 53 40.5 53 31.4C53 21.8 43.6 14 32 14Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M19 28V37H24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 28V37" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" />
      <path d="M32 37V28L39 37V28" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 28V37M44 28H50M44 32.5H49M44 37H50" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  return (
    <main className="site">
      <header className="header">
        <a href="#top" className="brand">Sakura Candle</a>
        <nav className="nav"><a href="#about">ABOUT</a><a href="#shop">SHOP</a><a href="#works">LESSON</a><a href="#social">SNS</a><a href="#contact">CONTACT</a></nav>
        <a className="orderButton" href="#shop">ORDER</a>
      </header>

      <section id="top" className="hero">
        <div className="blur blurPink" /><div className="blur blurBeige" />
        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">CANDLE ARTIST HARU</p>
            <h1 className="heroTitle"><span className="brandInitial">S</span>akura<br /><span className="brandInitial">C</span>andle</h1>
            <p className="lead">Sakura Candleは、キャンドルアーティストHaruが手がける架空の公式サイトです。桜のようにやわらかく、火のように静かに心へ残る、花と灯りのキャンドル作品を紹介します。</p>
            <div className="heroActions"><a href="#works" className="primaryButton">VIEW LESSON</a><a href="#about" className="secondaryButton">ABOUT HARU</a></div>
          </div>
          <div className="visualWrap"><div className="visualCard"><div className="visualTag">SAKURA 2026</div><div className="flameOuter" /><div className="flameInner" /><div className="candleBody"><div className="flowerMark" /><p>Haru</p></div><div className="shadow" /></div></div>
        </div>
      </section>

      <section id="about" className="darkSection"><div className="sectionGrid"><div><p className="eyebrow pink">ABOUT</p><h2>静かな時間を、<br />デザインする。</h2></div><div className="aboutText"><p>Haruは、花材・香り・色の重なりを大切にするキャンドルアーティスト。Sakura Candleでは、ただ美しいだけではなく、「飾っている時間」「灯している時間」「誰かに贈る時間」まで含めて、ひとつの作品として考えます。</p><p>このサイトは練習用の架空サイトです。実在のサービスではありませんが、個人アーティストの公式サイトとして使える構成・導線・コピーを想定しています。</p></div></div></section>

      <section id="shop" className="shopSection"><div className="sectionHead shopHead"><div><p className="eyebrow">ONLINE SHOP</p><h2>オンラインショップ</h2></div><p>Sakura Candleのオンラインショップでは、季節のキャンドルやギフト向けアイテムを紹介します。暮らしにそっと寄り添う灯りを、やさしく選べる場所です。</p></div><div className="shopGrid">{shopItems.map((item, index) => <article className={`shopCard ${item.variant}`} key={item.name}><div className="shopImage"><span className="shopNumber">0{index + 1}</span><div className="shopCandle"><span className="shopFlame" /><span className="shopWax" /><span className="shopLabel" /></div><span className="shopShadow" /></div><div className="shopContent"><p className="shopMeta">Sakura Candle</p><h3>{item.name}</h3><a href="#contact">ご注文はこちら</a></div></article>)}</div></section>

      <section id="works" className="worksSection"><div className="worksInner"><div className="worksTitle lessonTitle"><div><p className="eyebrow">LESSON</p><h2>レッスン</h2></div><p className="lessonIntro">初心者の方も多くご参加いただいています。<br />楽しく作ることを第一に、特別な時間をお過ごしください。</p></div><div className="workList">{works.map((work, index) => <article className="workItem" key={work.category}><div className="workVisual"><p>{work.category}</p><span>0{index + 1}</span><div className="miniCandle" /><div className="miniFlame" /></div><div className="workContent"><p className="workCategory">{work.category}</p><h3>{work.title}</h3><p>{work.text}</p></div></article>)}</div></div></section>

      <section className="profileSection"><div className="profileCard"><p className="eyebrow pink">PROFILE</p><h2>Haru</h2><p>花と香りをテーマに制作するキャンドルアーティスト。やさしい色づかいと、余白のあるデザインを得意とする。</p></div><div className="messageBlock"><p className="eyebrow">MESSAGE</p><h2>ふつうの日に、<br />少しだけ詩を。</h2><p>特別な日だけではなく、なんでもない夜にもキャンドルを灯してほしい。Sakura Candleは、そんな小さな願いから生まれました。作品を通して、暮らしの中に静かな美しさを届けます。</p></div></section>

      <section id="social" className="socialSection"><div className="socialInner"><div className="socialHead"><div><p className="eyebrow">SNS</p><h2>SNS</h2></div><p className="socialLead">新作キャンドル、レッスンの様子、季節の灯りの楽しみ方を発信しています。気になる場所から、Sakura Candleの世界をのぞいてみてください。</p></div><div className="socialGrid">{socialLinks.map((social) => <a className={`socialCard socialCard-${social.name.toLowerCase()}`} href={social.href} key={social.name} target="_blank" rel="noreferrer"><div className="socialIcon"><SocialIcon name={social.name} /></div><h3>{social.label}</h3></a>)}</div></div></section>

      <section id="contact" className="contactSection"><div className="contactGlow" /><div className="contactInner"><p className="eyebrow white">CONTACT</p><h2>お問い合わせ</h2><div className="contactBottom"><p>オーダー制作、レッスン、イベント装飾のご相談はこちらから。架空サイトのため、ボタンはデザイン確認用です。</p><a href="mailto:hello@example.com">SEND MESSAGE</a></div></div></section>

      <footer className="footer"><p>Sakura Candle</p><small>© 2026 Sakura Candle / Haru. Fictional practice website.</small></footer>
    </main>
  )
}

export default App
