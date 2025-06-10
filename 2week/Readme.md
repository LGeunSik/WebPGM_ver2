웹 프로그래밍 강의 2주차 입니다.
JSA 사용법
반드시 하나의 부모 요소로 감싸야 한다.
⚛️ React Element & 렌더링 마크다운 요약
웹프로그래밍2 – 소플의 처음 만난 React

🔹 React Element란?
React 앱의 가장 작은 단위

HTML 요소와 유사하지만 실제 DOM이 아닌 Virtual DOM 객체

화면에 그리기 위해 **ReactDOM.render()**로 렌더링

jsx
복사
편집
const element = <h1>Hello, React!</h1>;
js
복사
편집
const element = React.createElement('h1', null, 'Hello, React!');
🔸 JSX vs createElement
구분	JSX	React.createElement
문법	HTML 유사	함수 호출 형식
예시	<div>Hello</div>	React.createElement("div", null, "Hello")
가독성	높음	낮음

🔹 Component란?
여러 Element를 조합한 UI 구성 단위

재사용 가능하고, 독립적 기능을 가짐

✅ 함수형 컴포넌트
jsx
복사
편집
function Welcome() {
  return <h1>Hello, React Component!</h1>;
}
✅ 클래스형 컴포넌트
jsx
복사
편집
class Welcome extends React.Component {
  render() {
    return <h1>Hello, React Component!</h1>;
  }
}
🔸 Element vs Component
구분	Element	Component
정의	UI의 최소 단위	재사용 가능한 UI 블록
형태	변경 불가능 객체	함수 또는 클래스
재사용	불가	가능
업데이트	새 Element 필요	상태 변화로 자동 업데이트

🔹 React Element는 불변(Immutable)
jsx
복사
편집
const element = <h1>Hello</h1>;
element.props.children = "Hi"; // ❌ 수정 불가
const newElement = <h1>Hi</h1>; // ✅ 새로 생성
React는 Virtual DOM을 사용하여 변경된 부분만 실제 DOM에 반영

🔄 렌더링 과정 (Rendering Lifecycle)
초기 렌더링
컴포넌트 → 가상 DOM → 실제 DOM으로 렌더링

상태 변화 감지 (State/Props)
컴포넌트 업데이트 → 새로운 가상 DOM 생성

비교(Diffing)
이전 가상 DOM과 새 DOM을 비교

업데이트(Update)
변경된 부분만 실제 DOM 반영

🧱 Root DOM Node 설정
html
복사
편집
<!-- public/index.html -->
<div id="root"></div>
js
복사
편집
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
React 18 이상에서는 createRoot() 사용 필수

⏰ React로 실시간 시계 구현 예제
✅ JSX로 Clock 구현
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
js
복사
편집
setInterval(() => {
  root.render(<Clock />);
}, 1000);
🔢 바이너리 시계 예제 핵심
시, 분, 초를 2진수로 변환

○, ●으로 표현 (style 적용)

JSX 배열을 활용하여 시각 표현

jsx
복사
편집
const bin = "0101";
const elements = bin.split("").map(b =>
  b === "1" ? <span style={red}>●</span> : <span style={brown}>○</span>
);
✅ 리액트의 DOM 업데이트 장점
전체 DOM이 아닌 일부만 업데이트

성능 최적화에 탁월

화면 렌더링 효율 극대화
