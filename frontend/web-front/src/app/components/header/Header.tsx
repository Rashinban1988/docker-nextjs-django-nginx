import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faEnvelope, faBook, faComments } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className="h-24 bg-pink-50 text-white p-4">
      <nav className="max-w-6xl flex justify-between items-center mx-auto h-full">
        <ul className="flex space-x-4 text-slate-800">
          <li><FontAwesomeIcon icon={faHome} /> HOME</li>
          <li><FontAwesomeIcon icon={faTag} /> 料金表</li>
          <li><FontAwesomeIcon icon={faEnvelope} /> お問い合わせ</li>
          <li><FontAwesomeIcon icon={faBook} /> ゆるふわ日記</li>
          <li><FontAwesomeIcon icon={faComments} /> お客様の声</li>
        </ul>
      </nav>
    </header>
  )
}