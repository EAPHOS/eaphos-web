import React, { useEffect } from 'react';
import comTop from '../../../assets/comTop.jpg';
import com01_01 from '../../../assets/com01-01.jpg';
import '../../../css/style.css';
import '../../../css/eha.css';

const Introduction = () => {
  useEffect(() => {
    // タブ機能の実装
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
      link.addEventListener('click', function (this: Element) {
        const tabId = this.getAttribute('data-tab');

        tabLinks.forEach(l => l.classList.remove('current'));
        tabContents.forEach(c => c.classList.remove('current'));

        this.classList.add('current');
        document.getElementById(tabId || '')?.classList.add('current');
      });
    });

    // 最初のタブを初期化
    const firstTab = document.querySelector('.tab-link');
    if (firstTab) {
      firstTab.classList.add('current');
      const firstTabId = firstTab.getAttribute('data-tab');
      if (firstTabId) {
        document.getElementById(firstTabId)?.classList.add('current');
      }
    }
  }, []);

  return (
    <>
      {/* 会社説明 */}
      <div className='s-comm container'>
        <h1 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          <span className='cl'>㈱EAPHOS</span>は急速に成長する{' '}
          <span className='bold'>二次電池リサイクル素材装備企業</span>です。
        </h1>
      </div>

      {/* メインコンテンツセクション */}
      <section className='container com01 s-pad-bt com-comm'>
        <p className='img01'>
          <img
            src={com01_01}
            alt=''
            className='res-img'
            style={{ width: '100%', height: 'auto' }}
          />
        </p>
        <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
          <p>水を誰が使うだろう？ </p>
          <br />
          WRIが発表する水ストレス指数を付ける基準を参考にすれば、大きく2つの消費主体に分けることができます。
          <br />
          一つは一般国民です。
          <br />
          そしてもう一つは、農業、産業、公共機関などの必須消費領域です。
          <br />
          水ストレスは、一般国民が使用する水が十分かどうかにかかっています。
          <br />
          2020年に環境部（日本の環境省に当たる）が発表した2020年の上水道統計資料によると、68%の水は家庭で使われ、
          残りの32%は農業、産業、公共機関などで使われています。
          <br />
          韓国の上水道普及率は高い方です。従って、水の供給が増えないと仮定することができます。
          <br />
          消費の場合、家庭で使用する水が減りにくくなります。
          <br />
          それなら、新規工場を建てる時に水が十分かどうかを考慮する必要があります。
          <br />
          例えば、1日5万トンを使う工場なら、30万世帯が使える水の量に匹敵する量です。
          <br />
          水は、私たちの家庭と産業にとって不可欠な必須資源です。
          <br />
          限られた水資源を生命のために使いながら、どうやって産業発展に必要な水を確保できるでしょうか？
          <br />
          <br />
          EAPHOSはこの問題を抱えて人間の生命を尊重し、それと同時に持続的な産業発展に寄与できるビジョンを持って社会的価値を創出しようとする企業です。
          <br />
          そのためにキレートとメンブレンを主力商品として開発しています。
          <br />
          目指す最終事業の形態は水処理事業です。そのために必要な技術や素材などのシステムを構築しています。
          <br />
          夢見る未来は韓国の主力企業たちがEAPHOSの水処理システムで国内だけでなく海外でも事業競争力と共に地域環境保護に努める企業になることです。
          <br />
          水処理システム事業に先立ち、キレート中の一物質を二次電池リサイクル用に優先単独事業化しました。
          <br />
          そしてメンブレンの開発が進んでいます。
          <br />
          EAPHOSは開発したキレートとメンブレンを独自の水処理システムの主要素材として適用します。
          <br />
          必要な技術や素材の開発とともに、製品の国産化率を高めるために努力しています。
          <br />
          <br />
          <span className='bold'>EAPHOS 代表</span>
          <span className='sign'>ムン・ヨンス</span>
        </h5>
      </section>

      {/* 会社所在地セクション */}
      <section className='container com01-01'>
        <div className='tabBox tab-comm'>
          <a href='#tab-1' className='on'>
            <p
              className='tab-link current'
              data-tab='tab-1'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              会社の本社及び研究所
            </p>
          </a>
          <a href='#tab-2'>
            <p
              className='tab-link'
              data-tab='tab-2'
              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
            >
              生産及び物流倉庫
            </p>
          </a>
        </div>

        <div
          id='tab-1'
          className='tab-content current'
          style={{ display: 'block' }}
        >
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>本社</span> : Inside Business Incubator, 55 Hanyang
            University, Sangnok-gu, Ansan-si, Gyeonggi-do
          </h5>
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>研究所</span> : 2F, Factory-dong, 20 Haebong-ro 255beon-gil,
            Danwon-gu, Ansan-si, Gyeonggi-do
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.9306339972563!2d126.83286402666053!3d37.29677778954925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6fbc268f0dc9%3A0x186644342ee6cdce!2sHanyang%20AI%20Center!5e0!3m2!1sen!2skr!4v1732252082731!5m2!1sen!2skr'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <div id='tab-2' className='tab-content' style={{ display: 'none' }}>
          <h5 style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
            <span>生産及び物流倉庫</span> : 43 Jeongoksandan 11-gil,
            Seosin-myeon, Hwaseong-si, Gyeonggi-do
          </h5>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.7226389327457!2d126.66749827665683!3d37.18306194602303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b096140732ee5%3A0x762f5ca9dc4b3d6b!2s43%20Jeongoksandan%2011-gil%2C%20Seosin-myeon%2C%20Hwaseong-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1732252103974!5m2!1sen!2skr'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>

      <div className='pdb80'></div>
    </>
  );
};

export default Introduction;
