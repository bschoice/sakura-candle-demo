import heroImage from '../18_40_55.png'
import accessImage from '../8_42_01.png'
import sakura01 from '../sakura01.png'
import sakura02 from '../sakura02.png'
import sakura03 from '../sakura03.png'
import sakura04 from '../sakura04.png'
import sakura05 from '../sakura05.png'
import sakura06 from '../sakura06.png'
import sakura07 from '../sakura07.png'

const works = [
  { category: 'Gradation Candle', title: 'グラデーションキャンドル', text: '料金　　　３,０００円\n所要時間　９０分', image: sakura04 },
  { category: 'Botanical Candle', title: 'ボタニカルキャンドル', mobileTitle: ['ボタニカル', 'キャンドル'], text: '料金　　　３,０００円\n所要時間　９０分', image: sakura05 },
  { category: 'Gel Candle', title: 'ぷるぷるキャンドル', mobileTitle: ['ぷるぷる', 'キャンドル'], text: '料金　　　３,０００円\n所要時間　９０分', image: sakura06 },
]

const shopItems = [
  { name: 'Sakura Bloom', variant: 'pink', image: sakura01 },
  { name: 'Rose Whisper', variant: 'rose', image: sakura02 },
  { name: 'Moon Light', variant: 'ivory', image: sakura03 },
]

const socialLinks = [
  { name: 'Instagram', label: 'Instagram', href: '#' },
  { name: 'YouTube', label: 'You tube', href: '#' },
  { name: 'LINE', label: 'LINE', href: '#' },
]

const menuLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SHOP', href: '#shop' },
  { label: 'LESSON', href: '#works' },
  { label: 'SNS', href: '#social' },
  { label: 'ACCESS', href: '#access' },
  { label: 'CONTACT', href: '#contact' },
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
      <path d="M32 14C20.7 14 11.5 21.5 11.5 30.9C11.5 39.5 19 46.4 28.7 47.8L27 53.8L35.6 48.9C46.5 48.3 52.5 41.2 52.5 30.9C52.5 21.5 43.3 14 32 14Z" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round" />
      <text x="32" y="35.6" textAnchor="middle" dominantBaseline="middle" fontSize="9.6" fontWeight="900" fontFamily="Noto Sans JP, system-ui, sans-serif" letterSpacing="0.02em" fill="currentColor">LINE</text>
    </svg>
  )
}

function WorkTitle({ work }) {
  if (!work.mobileTitle) {
    return <>{work.title}</>
  }

  return (
    <>
      <span>{work.mobileTitle[0]}</span>
      <br className="mobileOnlyBreak" />
      <span>{work.mobileTitle[1]}</span>
    </>
  )
}

function App() {
  return (
    <main className="site">
      <header className="header">
        <a href="#top" className="brand">Sakura Candle</a>
        <nav className="nav"><a href="#about">ABOUT</a><a href="#shop">SHOP</a><a href="#works">LESSON</a><a href="#social">SNS</a><a href="#access">ACCESS</a><a href="#contact">CONTACT</a></nav>
        <div className="headerAction">
          <a className="orderButton desktopOrder" href="#shop">ORDER</a>
          <details className="mobileMenu">
            <summary>MENU</summary>
            <div className="mobileMenuPanel">
              {menuLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </div>
          </details>
        </div>
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
          <div className="visualWrap"><div className="visualCard imageCard"><img className="heroImage" src={heroImage} alt="Sakura Candleのメインビジュアル" /></div></div>
        </div>
      </section>

      <section id="about" className="darkSection"><div className="sectionGrid"><div><p className="eyebrow pink">ABOUT</p><h2>静かな時間を、<br />デザインする。</h2></div><div className="aboutText"><p>Haruは、花材・香り・色の重なりを大切にするキャンドルアーティスト。Sakura Candleでは、ただ美しいだけではなく、「飾っている時間」「灯している時間」「誰かに贈る時間」まで含めて、ひとつの作品として考えます。</p><p>このサイトは練習用の架空サイトです。実在のサービスではありませんが、個人アーティストの公式サイトとして使える構成・導線・コピーを想定しています。</p></div></div></section>

      <section id="shop" className="shopSection"><div className="sectionHead shopHead"><div><p className="eyebrow">ONLINE SHOP</p><h2>オンラインショップ</h2></div><p>Sakura Candleのオンラインショップでは、季節のキャンドルやギフト向けアイテムを紹介します。暮らしにそっと寄り添う灯りを、やさしく選べる場所です。</p></div><div className="shopGrid">{shopItems.map((item) => <article className={`shopCard ${item.variant}`} key={item.name}><div className="shopImage"><img className="shopProductImage" src={item.image} alt={`${item.name}のキャンドル画像`} /></div><div className="shopContent"><p className="shopMeta">Sakura Candle</p><h3>{item.name}</h3><a href="#contact">ご注文はこちら</a></div></article>)}</div></section>

      <section id="works" className="worksSection"><div className="worksInner"><div className="worksTitle lessonTitle"><div><p className="eyebrow">LESSON</p><h2>レッスン</h2></div><p className="lessonIntro">初心者の方も多くご参加いただいています。<br />楽しく作ることを第一に、特別な時間をお過ごしください。</p></div><div className="workList">{works.map((work) => <article className="workItem" key={work.category}><div className="workVisual lessonImageVisual"><img className="workImage" src={work.image} alt={`${work.title}のレッスン画像`} /></div><div className="workContent"><p className="workCategory">{work.category}</p><h3><WorkTitle work={work} /></h3><p>{work.text}</p></div></article>)}</div></div></section>

      <section className="profileSection"><div className="profileCard profileImageCard"><img className="profileImage" src={sakura07} alt="キャンドルアーティストHaruのプロフィール画像" /></div><div className="profileDetails"><p className="eyebrow">PROFILE</p><h2>プロフィール</h2><dl><div><dt>講師</dt><dd>Haru</dd></div><div><dt>経歴</dt><dd>キャンドルアーティストとして作品制作・レッスンを行い、花材・色・香りを活かしたオリジナルキャンドルを制作。</dd></div></dl></div></section>

      <section id="social" className="socialSection"><div className="socialInner"><div className="socialHead"><div><p className="eyebrow">SNS</p><h2>SNS</h2></div><p className="socialLead">新作キャンドル、レッスンの様子、季節の灯りの楽しみ方を発信しています。気になる場所から、Sakura Candleの世界をのぞいてみてください。</p></div><div className="socialGrid">{socialLinks.map((social) => <a className={`socialCard socialCard-${social.name.toLowerCase()}`} href={social.href} key={social.name} target="_blank" rel="noreferrer"><div className="socialIcon"><SocialIcon name={social.name} /></div><h3>{social.label}</h3></a>)}</div></div></section>

      <section id="access" className="accessSection"><div className="accessInner"><div className="accessHead"><p className="eyebrow">ACCESS</p><h2>アクセス</h2></div><div className="accessCard"><div className="accessMap"><img className="accessImage" src={accessImage} alt="アクセスのイメージ画像" /></div><dl><div><dt>所在地</dt><dd>福岡県八女市近郊</dd></div><div><dt>営業時間</dt><dd>10:00 - 17:00</dd></div><div><dt>電話番号</dt><dd>0943-00-0000</dd></div><div><dt>メール</dt><dd>info@sakura-candle.example.com</dd></div><div><dt>駐車場</dt><dd>ご予約時にご案内します</dd></div></dl></div></div></section>

      <section id="contact" className="contactSection"><div className="contactGlow" /><div className="contactInner"><p className="eyebrow white">CONTACT</p><h2>お問い合わせ</h2><div className="contactBottom"><p>オーダー制作、レッスン、イベント装飾のご相談はこちらから。架空サイトのため、ボタンはデザイン確認用です。</p><a href="mailto:hello@example.com">SEND MESSAGE</a></div></div></section>

      <footer className="footer"><p>Sakura Candle</p><small>© 2026 Sakura Candle / Haru. Fictional practice website.</small></footer>
    </main>
  )
}

export default App
