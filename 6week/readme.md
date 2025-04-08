6주차<br>
오늘의 주제: usestate<br>
🎣 7장 훅(Hooks)
🔍 7.1 훅이란 무엇인가?
함수형 컴포넌트에서도 state, 생명주기 메서드 등의 기능을 사용할 수 있도록 도와주는 API 🧩<br>

클래스 컴포넌트의 복잡함을 줄이고, 코드 간결화에 도움<br>

React v16.8부터 도입된 기능<br>

SPA(Single Page Application) 개발 시 필수 요소 ✨<br><br>

🧠 7.2 useState
상태값을 관리하는 기본 훅<br>

[값, set값] = useState(초기값) 형태로 사용<br>

컴포넌트 내에서 동적인 데이터를 다룰 때 사용 (ex. 카운터, 입력값 등) 🔢<br><br>

⚡ 7.3 useEffect
부수 효과(side effect)를 처리하기 위한 훅<br>

예: API 요청, 타이머 설정, DOM 직접 조작 등<br>

의존성 배열 사용으로 동작 조건을 설정 가능<br>

빈 배열 []: 컴포넌트 처음 렌더링 시 한 번만 실행<br>

특정 값 포함: 그 값이 변경될 때만 실행<br>

componentDidMount, componentDidUpdate, componentWillUnmount를 대체 🌀<br><br>

💾 7.4 useMemo
복잡하거나 연산량이 많은 계산 결과를 기억(Memoization) 하여 성능 최적화<br>

[메모된값] = useMemo(함수, [의존성])<br>

의존성 값이 바뀌지 않는 한, 이전 결과 재사용으로 리렌더링 방지 🚀<br><br>

🔁 7.5 useCallback
useMemo와 유사하지만, 함수 자체를 메모이제이션<br>

자식 컴포넌트에게 콜백 함수를 전달할 때 유용<br>

불필요한 리렌더링 방지에 효과적 🔄<br><br>

📍 7.6 useRef
DOM 요소나 컴포넌트에 직접 접근할 수 있는 참조 객체<br>

.current 속성으로 값을 참조하거나 변경 가능<br>

렌더링에 영향을 주지 않으면서 값을 저장할 수 있음<br>

주로 focus 제어, 타이머 ID 저장 등에 사용 💡<br><br>

📏 7.7 훅의 규칙
항상 컴포넌트의 최상위 레벨에서 호출 (조건문, 반복문 ❌)<br>

리액트 함수형 컴포넌트나 커스텀 훅 내에서만 사용 가능<br>

호출 순서가 바뀌면 안 됨, 그래서 "use"로 시작하는 이름 필수 📐<br><br>

🧪 7.8 나만의 훅 만들기 (Custom Hook)
중복되는 로직을 하나의 함수로 만들고 여러 컴포넌트에서 재사용 가능<br>

use로 시작하는 함수명 필수 (예: useUserStatus)<br>

내부에서 다른 훅을 사용할 수 있음<br>

예시:

UserStatus: isOnline 상태를 표시하는 컴포넌트<br>

UserListItem: 온라인 사용자 이름을 초록색으로 표시 🎨<br><br>

🧩 7.9 훅을 사용한 컴포넌트 개발
useCounter()라는 커스텀 훅을 만들어 상태 관리<br>

Accommodate 컴포넌트에서 상태 변화에 따른 이펙트 적용<br>

useEffect에 의존성 배열 유무에 따라 호출 시점이 달라짐<br>

상태가 일정 조건(count === 10)을 만족하면 더 이상 이펙트 실행 안됨 ✔️<br><br>

✅ 요약
훅은 리액트 함수 컴포넌트에서 상태 관리와 생명주기 처리를 가능하게 하는 기능<br>

useState, useEffect는 가장 많이 쓰이며, 성능 최적화를 위해 useMemo, useCallback, useRef도 중요<br>

코드 재사용성을 높이기 위해 커스텀 훅을 직접 만들 수 있음 🔨<br><br>

기억할것<br>
const [state, setState] = useState(initialValue);<br>
 state: 현재 상태 값<br>
 setState: 상태를 변경하는 함수<br>
 initialValue: 상태의 초기 값<br>
