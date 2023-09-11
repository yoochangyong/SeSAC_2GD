import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
      </ul>
    </nav>
  );
}
