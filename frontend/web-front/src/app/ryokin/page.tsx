import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'
import { Header } from '../components/top/header/Header'
import { CommonHero } from '../components/common/CommonHero'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink, faPerson, faPersonRays } from '@fortawesome/free-solid-svg-icons'

export default function Ryokin() {
    return (
      <>
        <Header fixed={true} />
        <main style={{ backgroundImage: "url('/bg.png')" }} className="bg-fixed min-h-screen">
          <CommonHero />
          <section>
            <div id="breadCramp" className="mx-auto pt-4 w-full max-w-5xl">
              <div className="w-full h-12 py-3 px-8 rounded-full bg-slate-600/[.06] text-slate-500">
                <Link href="/" className="">HOME</Link> &gt; 料金メニュー
              </div>
            </div>
          </section>
          <section>
            <div className="mx-auto px-12 w-full max-w-5xl flex relative">
              <aside className="w-2/6 mt-12 sticky top-0">
                <ul className="w-5/6 text-slate-800">
                  <li className="w-full h-16 border-dashed border-y border-stone-400 flex items-center justify-start">
                    <Link href="#" className="ml-2 text-lg text-center group relative">
                      <FontAwesomeIcon icon={faPerson} className="text-3xl w-6" />
                      <div className="ml-4 inline-block relative">
                        <span className="relative z-10">全身ほぐし</span>
                        <div className="absolute top-1/2 inset-x-0 h-1/2 bg-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full h-16 border-dashed border-b border-stone-400 flex items-center justify-start">
                    <Link href="#" className="ml-2 text-lg text-center group relative">
                      <FontAwesomeIcon icon={faPersonRays} className="text-3xl w-6" />
                      <div className="ml-4 inline-block relative">
                        <span className="relative z-10">筋膜リリース＋骨盤調整</span>
                        <div className="absolute top-1/2 inset-x-0 h-1/2 bg-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full h-16 border-dashed border-b border-stone-400 flex items-center justify-start">
                    <Link href="#" className="ml-2 text-lg text-center group relative">
                      <FontAwesomeIcon icon={faFaceSmileWink} className="text-3xl w-6" />
                      <div className="ml-4 inline-block relative">
                        <span className="relative z-10">小顔調整</span>
                        <div className="absolute top-1/2 inset-x-0 h-1/2 bg-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </aside>
              <article className="w-4/6 mt-12">
                <div className="w-full aspect-video bg-slate-600 rounded-t-3xl">
                  <img src="/voice3.jpg" alt="料金メニュー" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="rounded-b-3xl bg-white">
                <ul className="p-8 grid grid-cols-2 list-inside text-lime-800/75">
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>慢性的な腰痛にお悩みの方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>ウエストを引き締めたい方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>慢性的な肩こりにお悩みの方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>猫背などの姿勢を治したい方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>産後の骨盤の開きが気になる方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>体温が低く何となく体がだるい方</li>
                  <li className=""><span className="text-emerald-400/50 mr-2 text-2xl">●</span>産前の体型になかなか戻らない方</li>
                </ul>
                </div>
                <p className="pt-8 px-6 text-lg text-slate-600/75 leading-8">
                  当院では「
                  <span className="relative">
                    <span className="relative z-10">アクティベータ・メソッド</span>
                    <span className="absolute top-1/2 inset-x-0 h-1/2 bg-yellow-200"></span>
                  </span>
                  」・「
                  <span className="relative">
                    <span className="relative z-10">トムソンテクニック</span>
                    <span className="absolute top-1/2 inset-x-0 h-1/2 bg-yellow-200"></span>
                  </span>
                  」というカイロプラクティックのテクニックを用いて骨盤矯正・骨格矯正を行っています。いずれもボキボキしない痛くない安全な施術ですのでお子様からご年配の方まで安心して受けていただけます。
                </p>
                <h2 className="text-3xl font-bold mb-8">コース1</h2>
                <p>コース1の説明</p>
                <h2 className="text-3xl font-bold mb-8">コース2</h2>
                <p>コース2の説明</p>
              </article>
            </div>
          </section>
          <section>
            <div className="mx-auto w-full max-w-4xl">
              <h2 className="text-3xl text-center font-bold mb-8">料金表</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-300">コース</th>
                    <th className="border border-gray-300">料金</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300">コース1</td>
                    <td className="border border-gray-300">¥10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">コース2</td>
                    <td className="border border-gray-300">¥20,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">コース3</td>
                    <td className="border border-gray-300">¥30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </>
    )
}