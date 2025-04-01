import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Introduction 
                name="이근석" 
                major="소프트웨어 학과" 
                studentId="202153047" 
            />
            <Footer />
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <h1>자기소개 페이지</h1>
        </header>
    );
};

const Introduction = ({ name, major, studentId }) => {
    return (
        <section>
            <h2>안녕하세요, 제 이름은 {name}입니다.</h2>
            <p>전공: {major}</p>
            <p>학번: {studentId}</p>
        </section>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>© 2023 이근석</p>
        </footer>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));