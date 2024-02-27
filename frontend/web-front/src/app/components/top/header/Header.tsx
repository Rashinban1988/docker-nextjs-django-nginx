'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  fixed?: boolean;
};

const navItems = [
  { href: "#", icon: faHome, text: "HOME" },
  { href: "#", icon: faTag, text: "料金表" },
  { href: "#", icon: faEnvelope, text: "お問い合わせ" },
  { href: "#", icon: faBook, text: "ゆるふわ日記" },
  { href: "#", icon: faComments, text: "お客様の声" },
];

export const Header = ({ fixed = false }: HeaderProps) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 画面の高さを超えたかどうかをチェック
      const shouldBeSticky = window.scrollY > window.innerHeight;
      if (shouldBeSticky !== isSticky) {
        setSticky(shouldBeSticky);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  let headerStyle = {};
  if (!fixed) {
    headerStyle = {};
  } else if (fixed && isSticky) {
    headerStyle = { position: 'fixed', top: '0px', left: '0px' };
  } else {
    headerStyle = { display: 'none' };
  }
  const bgColor = (fixed && isSticky) ? 'bg-white' : 'bg-transparent';

  return (
    <header style={ headerStyle } className={`w-full h-24 ${bgColor} text-white p-4`}>
      <nav className="w-full max-w-6xl mx-auto h-full">
        <ul className="w-full px-64 flex justify-between items-center space-x-4 text-slate-700">
          {navItems.map((item, index) => (
            <a href={item.href} key={index} className="hover:text-slate-500 group">
              <li className="flex flex-col w-24 justify-center items-center">
                <FontAwesomeIcon icon={item.icon} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} className="group-hover:animate-bounce" />
                {item.text}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  )
}
