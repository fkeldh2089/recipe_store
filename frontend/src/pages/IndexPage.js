import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div>
      <h1>개발용 페이지 이동</h1>
      <Link to="/start">시작 페이지</Link>
      <br />
      <Link to="/main">메인 페이지</Link>
      <br />
      <Link to="/detail">디테일 페이지</Link>
      <br />
    </div>
  );
}
