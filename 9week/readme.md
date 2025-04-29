웹프 프로젝트
교수님이 바라는 것 맞추기-> 
서버->Flask
서버 구축 PPT 제작
(고등학생이 따라 할 수 있도록) 
웹페이지(리액트로 제작)
회원관리(database 활용)->API활용가능 OR 회원가입 받아 저장
게시판(database 활용)디비 구축하기.
dead line->5월 20일까지
전체과정 PPT 제작
전문용어 및
프론트엔드 -웹페이지
SSH, 디비 관리, 보안, 세션관리등-백엔드(게시판 쿠기사용가능)

9주차 내용입니다.
이벤트-> 사용자가 만듬
React의 SyntheticEvent가 이벤트 객체를 풀링(pooling)하는 특성을 이해하고, 필요할 때 event.persist()를 사용해야 한다.


📚 React - Event Handler 정리<br>
1. Event Handler란?<br>
사용자 인터페이스에서 발생하는 이벤트(클릭, 입력 등)에 응답하여 실행되는 함수<br>

DOM 이벤트 vs React 이벤트 구분 필요<br>

2. React에서 이벤트 핸들러 사용법<br>
camelCase로 작성하고, 함수를 직접 전달<br>

jsx
복사
편집
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
<br>
3. 이벤트 객체 사용 (SyntheticEvent)<br>
이벤트 핸들러 첫 번째 매개변수로 SyntheticEvent 객체가 전달됨<br>

event.target.value 등을 통해 입력값 활용 가능<br>

jsx
복사
편집
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
<br>
4. 클래스 컴포넌트에서 이벤트 핸들러<br>
this 바인딩이 필요할 수 있음<br>

class field syntax 또는 bind 사용<br>

jsx
복사
편집
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
<br>
5. 이벤트 핸들러에 인자 전달하기<br>
화살표 함수나 bind 메서드 사용<br>

jsx
복사
편집
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
<br>
6. 이벤트 핸들러에서 상태 변경<br>
useState로 상태를 변경<br>

jsx
복사
편집
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
<br>
7. 기본 이벤트 동작 방지 (preventDefault)<br>
jsx
복사
편집
function FormComponent() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">제출</button>
    </form>
  );
}
<br>
8. 이벤트 전파 중지 (stopPropagation)<br>
jsx
복사
편집
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
  }
  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
<br>
9. 이벤트 핸들러 최적화 (useCallback)<br>
불필요한 핸들러 재생성 방지<br>

jsx
복사
편집
import { useState, useCallback } from "react";
function OptimizedComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
<br>
10. DOM 이벤트 vs React 이벤트 비교<br>

항목	DOM 이벤트	React 이벤트
이벤트 등록	addEventListener	JSX 속성(onClick 등)
이벤트 제거	removeEventListener 필요	컴포넌트 언마운트 시 자동 제거
이벤트 이름	소문자 (click)	카멜케이스 (onClick)
이벤트 객체	네이티브 Event	SyntheticEvent
이벤트 위임	수동 설정	자동 위임(document 관리)
최적화	수동 최적화	useCallback 사용 가능
<br>

🌟 React - Conditional Rendering 정리<br><br>
✅ Conditional Rendering이란?<br>
특정 조건에 따라 다른 UI 요소를 보여주는 것<br>

사용자 입력, 데이터 상태 등에 따라 콘텐츠를 동적으로 변경<br><br>

✅ Truthy, Falsy 개념<br>
Truthy: true처럼 평가되는 값<br>

Falsy: false처럼 평가되는 값<br>

주요 Falsy 값: false, 0, "", null, undefined, NaN<br><br>

✅ Truthy, Falsy 활용법<br>
|| (OR 연산자): 앞이 falsy면 뒤를 반환<br>

&& (AND 연산자): 앞이 truthy면 뒤를 반환<br>

?? (Null 병합 연산자): null/undefined일 때만 기본값 대입<br><br>

✅ Element Variables<br>
JSX 코드를 변수에 저장하여 조건부 렌더링에 활용<br>

JSX 변수는 {}로 감싸서 렌더링<br>

jsx
복사
편집
const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
return <div>{greeting}</div>;
```<br><br>

## ✅ Inline Condition (인라인 조건문)<br>
- 삼항 연산자(`? :`)를 이용해 한 줄로 표현<br>
- `&&` 연산자를 사용해 조건이 참일 때만 렌더링<br>
- `||` 연산자를 사용해 기본값 설정<br><br>

## ✅ 주요 조건부 렌더링 방법<br>

| 방법 | 설명 |
|:-----|:-----|
| 삼항 연산자 | `{condition ? A : B}` |
| 논리 연산자(&&) | `{condition && A}` |
| if 문 | `if (condition) return A;` |
| 별도 컴포넌트 분리 | `<ComponentA />`, `<ComponentB />` |
| 즉시 실행 함수 (IIFE) | `{(() => { return A; })()}` |
| switch 문 | 여러 경우를 처리할 때 사용 |
| useState + 이벤트 | 동적 UI 구현 가능 |<br><br>

## ✅ 실습 예시 코드<br>

### ✔ 삼항 연산자<br>

```jsx
<h1>{isLoggedIn ? '환영합니다!' : '로그인 해주세요.'}</h1>
<br>
✔ 논리 연산자(&&)<br>
jsx
복사
편집
{isLoggedIn && <p>로그인 상태입니다.</p>}
<br>
✔ 별도 함수 사용<br>
jsx
복사
편집
const renderContent = () => {
  if (isLoggedIn) return <h1>환영합니다!</h1>;
  return <h1>로그인 해주세요.</h1>;
};
return <div>{renderContent()}</div>;
<br>
✔ 버튼 이벤트로 토글<br>
jsx
복사
편집
<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
  {isLoggedIn ? '로그아웃' : '로그인'}
</button>
<br><br>

✅ 심화 실습: 로그인 툴바 만들기<br>
Toolbar 컴포넌트와 LandingPage 컴포넌트를 분리<br>

props로 isLoggedIn, onClickLogin, onClickLogout 전달<br>

jsx
복사
편집
<Toolbar
  isLoggedIn={isLoggedIn}
  onClickLogin={onClickLogin}
  onClickLogout={onClickLogout}
/>
<br><br>
11. 실습 예제<br>
클래스 컴포넌트와 함수형 컴포넌트로 ConfirmButton 구현<br>

버튼 클릭 시 "확인됨"으로 상태 변경<br>
