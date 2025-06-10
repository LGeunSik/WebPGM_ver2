1주차
HTML과 CSS
React
📘 HTML & CSS 요약본 (Web Programming Ⅱ)
소플의 처음 만난 React 기반

🧱 HTML이란? (HyperText Markup Language)
웹 페이지의 뼈대를 구성하는 마크업 언어

문서에 구조와 의미를 부여

참고: Wikipedia - HTML

🏷️ 마크업 언어 vs 메타데이터
항목	마크업 언어 (Markup Language)	메타데이터 (Metadata)
정의	문서 구조화 및 서식 지정	데이터를 설명하는 정보
목적	구조와 표현 지정	속성, 의미, 관계 설명
형식	태그(tag) 사용	key-value 형태
대상	문서 (텍스트, 이미지 등)	데이터 (파일, 웹 등)
예시	HTML, XML, Markdown	<meta>, EXIF, JSON-LD

📚 HTML 표준 문서
W3C: HTML5 명세

MDN: HTML 태그 문서

WHATWG: Living Standard

⚡ Emmet
HTML/CSS 빠른 코드 작성을 위한 도구

VS Code 등에서 사용

공식 사이트: emmet.io

Cheat Sheet

🧑‍🏫 HTML 튜토리얼 자료
W3Schools

Opentutorials

GeeksforGeeks

🧭 MPA vs SPA
MPA (Multi Page App)	SPA (Single Page App)
여러 HTML 파일 구성	단일 HTML 파일 + JS 라우팅
새 페이지 요청마다 새로고침	URL 변경만으로 내용 변경

🧪 MPA 코드 예시
html
복사
편집
<!-- index.html -->
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
</nav>
🔁 SPA 코드 예시
javascript
복사
편집
const routes = {
  home: "<h2>Home</h2><p>홈 페이지입니다.</p>",
  about: "<h2>About</h2><p>회사 소개 페이지입니다.</p>"
};

function navigate(page) {
  document.getElementById("app").innerHTML = routes[page];
  window.history.pushState({ page }, page, `#${page}`);
}
🎨 CSS (Cascading Style Sheets)
웹 페이지의 스타일, 레이아웃을 담당

예시: 색상, 폰트, 여백 등 설정

🌸 CSS Zen Garden
하나의 HTML로 다양한 CSS 디자인 가능성 표현

CSS Zen Garden

⚙️ Node.js
JS 실행 환경 (Runtime Environment)

브라우저 밖에서도 JS 실행 가능

공식 사이트: nodejs.org

🧩 Platform vs Environment vs Framework vs Runtime
개념	설명	예시
Platform	실행 기반	OS, AWS 등
Environment	구성된 실행 조건	Node.js 환경
Framework	개발 구조 제공	React, Express
Runtime	실행 중 환경	Node.js, JRE

Node.js는 OS가 아닌 실행 환경(Environment)
Java의 JRE처럼 서버에서도 JS 실행 가능

🧪 Node.js 기본 사용법
bash
복사
편집
# 설치 확인
node -v
npm -v

# 간단 실행
node
> console.log("Hello, Node.js!")

# hello.js 파일 실행
copy con hello.js
console.log("Hello, Node.js!")
^Z
node hello.js
🛠️ IDE (통합 개발 환경)
주요 기능
코드 편집

디버깅

빌드 자동화

버전관리(Git)

패키지 연동(npm 등)

🖥️ 주요 IDE & 편집기
도구	언어	특징
Visual Studio	C#, JS 등	.NET 최적화
IntelliJ	Java 등	스마트 보완
PyCharm	Python	Python 전용
VS Code	다수	가볍고 빠름
Sublime Text	다수	빠름, 최소 기능
Atom	(종료됨)	GitHub 제작

🪟 VS Code
크로스 플랫폼

확장기능 풍부

커뮤니티 활발

다운로드: VS Code

⚛️ React & CRA 마크다운 요약본
웹프로그래밍2 - 소플의 처음 만난 React

📌 React 시작하기: CRA vs Vite
🔧 Create React App (CRA)
bash
복사
편집
npx create-react-app my-app --use-npm
cd my-app
npm start
⚡ Vite
bash
복사
편집
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
CRA vs Vite 비교
항목	CRA	Vite
빌드 속도	느림	빠름
설정 복잡도	보통	간단
사용성	React 전용	React, Vue 등 다양
번들링	전체 번들	필요 시만 번들

📦 npm vs npx
구분	npm	npx
역할	패키지 설치 및 관리	패키지 실행
설치 여부	필요	불필요 (일회성 실행)
예시	npm install axios	npx create-react-app my-app

💡 JSX란?
JavaScript + XML

React 컴포넌트를 HTML처럼 표현하는 문법

Babel이 JavaScript로 변환해 실행됨

jsx
복사
편집
const element = <h1>Hello, JSX!</h1>;
// ↓ Babel 변환 ↓
const element = React.createElement("h1", null, "Hello, JSX!");
✅ JSX의 주요 특징
✅ HTML과 유사한 문법 사용
class → className

for → htmlFor

✅ 하나의 부모 요소로 감싸야 함
jsx
복사
편집
return (
  <div>
    <h1>Hello</h1>
    <p>JSX 문법</p>
  </div>
);
또는 Fragment(<>...</>) 사용 가능

🎯 JSX 장점 요약
항목	JSX 사용	JSX 미사용
가독성	높음	낮음
문법	직관적	복잡함
유지보수	쉬움	어려움
요소 생성	태그 기반	createElement() 사용

🧠 JSX 문법 사용 예시
💬 자바스크립트 표현식 사용
jsx
복사
편집
const name = "React";
<h1>Hello, {name}!</h1>
🧷 속성(props) 사용
jsx
복사
편집
<img src="..." alt="..." />
<h1 className="title">제목</h1>
<h1 style={{ color: "blue" }}>스타일</h1>
🔁 반복 렌더링
jsx
복사
편집
const list = ["A", "B"];
<ul>
  {list.map((item, idx) => <li key={idx}>{item}</li>)}
</ul>
🔀 조건부 렌더링
jsx
복사
편집
{isLogin ? <h1>Welcome</h1> : <h1>Please log in</h1>}
{isAdmin && <p>관리자입니다</p>}
🧲 이벤트 핸들링
jsx
복사
편집
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
🧪 JSX 실습 예제
Book.jsx
jsx
복사
편집
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`총 ${props.numOfPage}페이지입니다.`}</h2>
    </div>
  );
}
Library.jsx
jsx
복사
편집
import Book from "./Book";

function Library() {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}
index.js
jsx
복사
편집
import ReactDOM from "react-dom/client";
import Library from "./chapter_03/Library";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Library />);
