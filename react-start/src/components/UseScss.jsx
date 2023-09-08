import "../styles/style.scss";
import img1 from "../img/img1.png";
export default function UseScss() {
  return (
    <>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>
      <div className="container">
        {/* .box1*3+p.circle*3+.box2{HI$}*4 */}
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">HI1</div>
        <div className="box2">HI2</div>
        <div className="box2">HI3</div>
        <div className="box2">HI4</div>
      </div>
      <h2> &gt;image inserts</h2>
      <img src="../img/img1.png" alt="route" />
      <img src={img1} alt="import" width={"100px"} />
      <div className="src-img img-test"></div>

      <h4>2.public 폴더 내부의 이미지 가져오기</h4>
      <img src="/img1.png" alt="public folder photo access" width={"100px"} />
      <img src={process.env.PUBLIC_URL + "/img1.png"} width={"100px"} />

      <div className="public-img img-test"></div>

      <div className="practice">
        <h1>실습문제</h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
