import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className="h-24 bg-pink-50 text-white p-4">
      <nav className="w-full max-w-6xl mx-auto h-full">
        <ul className="w-full px-72 flex justify-between items-center space-x-4 text-slate-800">
          <li className="flex-col justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faHome} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} />
              HOME
            </a>
          </li>
          <li className="flex-col justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faTag} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} />
              料金表
            </a>
          </li>
          <li className="flex-col justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} />
              お問い合わせ
            </a>
          </li>
          <li className="flex-col justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faBook} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} />
              ゆるふわ日記
            </a>
          </li>
          <li className="flex-col justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faComments} style={{ margin: '0 auto 10', width: '2rem', height: '2rem' }} />
              お客様の声
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
