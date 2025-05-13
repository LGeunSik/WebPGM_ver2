11주차 내용입니다.
<option selected value="grape">포도</option>
제일 처음 선택되어 표기됨


📘 React - Lists & Keys 요약 <br>
🔹 리스트와 key의 개념 <br>
리스트는 배열 데이터를 기반으로 여러 컴포넌트를 렌더링할 때 사용된다. <br>

각 리스트 항목은 고유한 key 값을 가져야 한다. <br>

key는 React가 어떤 항목이 변경/추가/삭제되었는지를 효율적으로 파악할 수 있도록 도와준다. <br>

🔹 배열의 map() 함수 <br>
배열의 각 요소에 함수를 적용하여 새로운 배열을 생성한다. <br>

기존 배열은 변경하지 않으며, React에서 JSX를 반복 출력할 때 매우 유용하다. <br>

js
복사
편집
const numbers = [1, 2, 3];
const listItems = numbers.map((number) => <li>{number}</li>);
위 예시는 배열을 기반으로 <li> 요소 리스트를 만든다. <br>

🔹 리스트 렌더링 기본 예제 <br>
jsx
복사
편집
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li>{number}</li>
  );
  return <ul>{listItems}</ul>;
}
이 코드는 props.numbers 배열을 받아 리스트로 출력한다. <br>

이때 key가 없으면 React는 경고를 출력한다. <br>

🔹 key의 중요성과 설정 방법 <br>
key는 각 요소를 유일하게 식별할 수 있어야 한다. <br>

일반적으로 객체의 id 값을 사용하는 것이 좋다. <br>

배열의 index를 key로 사용하는 것은 권장되지 않는다 (리스트 순서가 바뀔 경우 문제 발생 가능). <br>

jsx
복사
편집
const todoItems = todos.map((todo) => 
  <li key={todo.id}>
    {todo.text}
  </li>
);
🔹 실습 예시: 출석부 만들기 <br>
jsx
복사
편집
const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
];

function AttendanceBook() {
  return (
    <ul>
      {students.map((student) => 
        <li key={student.id}>{student.name}</li>
      )}
    </ul>
  );
}
학생 이름 배열을 기반으로 리스트를 출력하는 컴포넌트 <br>

각 항목에 key로 student.id를 부여함 <br>

📌 핵심 요약 <br>
리스트 렌더링 시 map()을 사용한다. <br>

각 리스트 항목에는 고유한 key를 지정해야 한다. <br>

key는 일반적으로 id 속성 사용, index는 되도록 지양한다. <br>





📚 React - Lifting State Up 요약 <br>
🔼 상태 끌어올리기란? (Lifting State Up) <br>
하위 컴포넌트의 상태를 부모 컴포넌트로 이동시켜 중앙에서 관리하는 패턴이다. <br>

여러 하위 컴포넌트가 동일한 데이터를 공유해야 할 때 유용하다. <br>

React는 단방향 데이터 흐름을 따르므로, 자식 컴포넌트가 부모의 상태를 직접 변경할 수 없다. <br>

해결 방법은 부모에서 상태를 정의하고, 자식에게 props로 상태와 상태 변경 함수를 전달하는 것이다. <br>

🛠 구현 방법 <br>
상태 정의: 부모 컴포넌트에 상태를 정의한다. <br>

상태 변경 함수 정의: 부모 컴포넌트에서 상태 변경 함수를 만든다. <br>

자식에게 함수 전달: 자식 컴포넌트에 props로 해당 함수를 전달한다. <br>

자식에서 호출: 자식 컴포넌트에서 이벤트 발생 시, 전달받은 함수로 부모 상태를 변경한다. <br>

⚠️ 잘못된 예시: 자식이 각각 상태를 갖는 경우 <br>
jsx
복사
편집
function ChildA() {
  const [text, setText] = useState("");
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function ChildB() {
  const [text, setText] = useState("");
  return <p>{text}</p>;
}
ChildA와 ChildB가 각자 다른 상태를 갖고 있어 동기화되지 않는다. <br>

✅ 올바른 예시: 부모가 상태를 관리하는 경우 <br>
jsx
복사
편집
function Parent() {
  const [text, setText] = useState("");
  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}
부모 컴포넌트가 상태를 관리하고, 자식은 이를 props로 받아 사용한다. <br>

🌡 실습 예시: 온도 변환기 (섭씨 / 화씨 동기화) <br>
2개의 입력창이 서로 상태를 공유해야 하므로 lifting state up이 필요하다. <br>

주요 구조
Calculator: 부모 컴포넌트, 상태와 로직 관리 <br>

TemperatureInput: 입력창 컴포넌트, 부모의 상태를 props로 받아 사용 <br>

BoilingVerdict: 섭씨 온도가 100 이상이면 “물이 끓습니다” 출력 <br>

💡 상태 공유 로직 요약
jsx
복사
편집
const [temperature, setTemperature] = useState("");
const [scale, setScale] = useState("c");

const handleCelsiusChange = temp => {
  setTemperature(temp);
  setScale("c");
};

const handleFahrenheitChange = temp => {
  setTemperature(temp);
  setScale("f");
};
섭씨/화씨 입력 시 scale을 저장하여 어느 입력창에서 바뀐 것인지 구분 <br>

입력값은 tryConvert 함수로 변환 <br>

🧱 Composition vs Inheritance (합성 vs 상속) <br>
React는 **합성(Composition)**을 권장하고, **상속(Inheritance)**은 거의 사용하지 않는다. <br>

합성은 컴포넌트를 조합하여 더 큰 컴포넌트를 만드는 방식이다. <br>

상속은 컴포넌트 간 강한 결합이 생겨 유지보수가 어려워질 수 있다. <br>

📦 합성의 예시: Containment (children 활용) <br>
jsx
복사
편집
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>안녕하세요</h2>
      <p>이것은 카드입니다.</p>
    </Card>
  );
}
children을 사용하면 유연하게 내부 콘텐츠를 구성할 수 있다. <br>

⚙️ 합성의 예시: Specialization (특화된 하위 컴포넌트) <br>
jsx
복사
편집
function Dialog({ title, message }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

function WarningDialog() {
  return <Dialog title="경고!" message="이 작업은 위험합니다." />;
}
상위 컴포넌트를 재사용하면서, 필요한 부분만 다르게 사용한다. <br>

🔁 고급 합성: Higher-Order Component (HOC) <br>
jsx
복사
편집
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("렌더링:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
컴포넌트를 감싸서 기능을 확장하는 패턴 <br>

최근에는 Custom Hook이 HOC보다 더 자주 사용된다. <br>

