3주차 수업 내용입니다
Clock 리액트 내용입니다
리액트 엘리먼트 컴포넌트의 관계도 확인
⚛️ React Element & Rendering 완전 정리
📘 웹프로그래밍2 – 소플의 처음 만난 React

🔹 1. React Element란?
React 앱의 최소 구성 단위

HTML 태그처럼 생겼지만, 실제 DOM이 아닌 Virtual DOM 객체

JavaScript 객체로 구성되며, 화면에 표시될 내용을 정의

jsx
복사
편집
const element = <h1>Hello, React!</h1>;
위 코드는 실제로는 다음과 같이 변환됨:

js
복사
편집
const element = React.createElement("h1", null, "Hello, React!");
렌더링 예시:

js
복사
편집
ReactDOM.render(element, document.getElementById("root"));
🛠️ 2. Element 생성 방법
✅ JSX
jsx
복사
편집
const element = <div>Hello, world!</div>;
✅ React.createElement()
js
복사
편집
const element = React.createElement('div', null, 'Hello, world!');
JSX는 Babel을 통해 createElement 호출로 변환됨

🔧 3. Component (컴포넌트)
Element를 생성 및 조합하는 함수 또는 클래스

재사용 가능한 UI 조각

하나의 컴포넌트는 여러 Element를 포함할 수 있음

함수형 컴포넌트
jsx
복사
편집
function Welcome() {
  return <h1>Hello, React Component!</h1>;
}
클래스형 컴포넌트
jsx
복사
편집
class Welcome extends React.Component {
  render() {
    return <h1>Hello, React Component!</h1>;
  }
}
🔍 4. Element vs Component
구분	React Element	React Component
정의	UI의 최소 단위	UI 구성 단위 (함수/클래스)
형식	불변 객체	함수 or 클래스
재사용성	❌ 없음	✅ 가능
상태 관리	❌ 불가	✅ 가능 (state 사용)
렌더링 변경	새 element 생성	state 변경으로 자동 리렌더링

🔒 5. Element는 불변(immutable)
Element는 생성 후 수정 불가능

변경하려면 새로운 Element를 만들어야 함

jsx
복사
편집
const element = <h1>Hello</h1>;
element.props.children = "Hi"; // ❌ 불가능

const newElement = <h1>Hi</h1>; // ✅ 새로 생성
변경 사항은 Virtual DOM끼리 비교(diffing) 후, 실제 DOM에 최소한의 변경만 적용됨

🔄 6. 렌더링 프로세스
1️⃣ 초기 렌더링
컴포넌트를 기반으로 가상 DOM 생성

실제 DOM에 첫 반영

2️⃣ 상태 변화(state/props 변경)
변경 감지 → 새로운 Virtual DOM 생성

3️⃣ 비교 (Diffing)
변경된 부분을 탐지

4️⃣ 실제 DOM 업데이트
변경된 부분만 실제 DOM에 반영 (최소 조작)

🧱 7. Root DOM Node 설정
HTML에서 시작점 지정:

html
복사
편집
<!-- public/index.html -->
<div id="root"></div>
React 앱 렌더링:

js
복사
편집
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
createRoot()는 React 18 이상에서 필수

⏰ 8. 실시간 시계 예제
Clock.jsx
jsx
복사
편집
function Clock() {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
App.js
jsx
복사
편집
import Clock from "./Clock";

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}
index.js
jsx
복사
편집
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => root.render(<App />), 1000);
🧪 9. DOM 직접 구현 예제 (JS + Babel)
clock_test1.html
html
복사
편집
<script type="text/babel">
setInterval(() => {
  const elem = (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("root"));
}, 1000);
</script>
⏳ 10. 바이너리 시계 예제 요약
현재 시간 → 문자열 → 2진수로 변환

각 자릿수(0,1)를 ○ 또는 ●로 렌더링

js
복사
편집
const binStr = hh + mm + ss;
const lines = [];

for (let i = 0; i < binStr.length; i++) {
  const v = parseInt(binStr[i]);
  const bin = ("0000" + v.toString(2)).slice(-4);

  for (let j = 0; j < bin.length; j++) {
    lines.push(
      <span style={bin[j] === "1" ? style1 : style0}>
        {bin[j] === "1" ? "●" : "○"}
      </span>
    );
  }
  lines.push(<br />);
}

ReactDOM.render(<div>{lines}</div>, document.getElementById("disp"));
✅ 마무리 요약
Element: UI를 구성하는 최소 단위 (불변 객체)

Component: Element들을 조합한 재사용 가능한 블록

Virtual DOM: React의 핵심 기술 – 변경된 부분만 실제 DOM에 반영

JSX: HTML처럼 쓰는 JavaScript 확장 문법

ReactDOM.render(): 리액트 요소를 DOM에 반영하는 메서드

