import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Header } from '../header/Header';

const treatments = [
  { href: "#", icon: faHome, title: "ポキポキしない、やさしい", subtitle: "骨盤・骨格矯正", detail: "当院では「アクティベータ・メソッド」・「トムソンテクニック」というカイロプラクティックのテクニックを用いて骨盤矯正・骨格矯正を行っております。いずれもボキボキせず痛くない安全な施術ですのでお子様からご年配の方まで安心して受けていただけます。", src: "/voice1.jpg", alt: "voice1" },
  { href: "#", icon: faHome, title: "ポキポキしない、やさしい", subtitle: "骨盤・骨格矯正", detail: "当院では「アクティベータ・メソッド」・「トムソンテクニック」というカイロプラクティックのテクニックを用いて骨盤矯正・骨格矯正を行っております。いずれもボキボキせず痛くない安全な施術ですのでお子様からご年配の方まで安心して受けていただけます。", src: "/voice2.jpg", alt: "voice2" },
  { href: "#", icon: faHome, title: "ポキポキしない、やさしい", subtitle: "骨盤・骨格矯正", detail: "当院では「アクティベータ・メソッド」・「トムソンテクニック」というカイロプラクティックのテクニックを用いて骨盤矯正・骨格矯正を行っております。いずれもボキボキせず痛くない安全な施術ですのでお子様からご年配の方まで安心して受けていただけます。", src: "/voice3.jpg", alt: "voice3"},
]

export const Treatment = () => {
  return (
    <section className="mx-auto pt-24 w-full text-slate max-w-6xl">

      <div className="rounded-3xl p-12 mx-auto w-1/2 bg-white">
        <h2 className="text-4xl font-bold text-slate-700 text-center">モニター様募集🐶🐱</h2>
        <p className="pt-8 text-center text-slate-700 leading-8">
          こんにちは🍀　当院は今年３年目を迎え、新たにペット整体もする事になりました🐶🐱

          それに伴いモニター様限定１０名様募集いたします。
          料金は１匹につき¥3,000＋交通費とし、ご自宅にお伺い致します。
          日時については、DMかお電話にてご相談させていただきます🍀

          尚お電話は、施術中等で出られない場合がございます。
          その際は折り返しお電話させていただきますのでご了承ください。
        </p>
        <a href="#" className="rounded-3xl block w-1/2 mx-auto mt-12 p-4 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-500">詳細はこちら</a>
      </div>

      <div className="mt-24 max-w-4xl mx-auto grid gap-12 grid-cols-3">
        {treatments.map((treatment, index) => (
          <div key={index} className="flex flex-col text-slate-600">
            <div className="rounded-3xl py-4 flex flex-col items-center border-4 border-slate-600">
              <FontAwesomeIcon icon={faHome} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} className="group-hover:animate-bounce" />
              <p className="pt-1">{treatment.title}</p>
              <p className="pt-1 text-slate-700">{treatment.subtitle}</p>
            </div>
            <div className="mx-auto pt-4 w-11/12">
              <p className="text-sm">
                {treatment.detail}
              </p>
            </div>
            <div className="mx-auto pt-4 w-5/6">
              <img src={treatment.src} alt={treatment.alt} class="aspect-square rounded-3xl shadow-lg shadow-slate-600"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
