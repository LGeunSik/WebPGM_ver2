import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Introduction 
                name="이근석"
                university="경성대학교"
                major="소프트웨어 개발자"
                studentId="2021563047"
                hobby="음악 및 영화 감상"
            />
            <Skills />
            <Footer />
        </div>
    );
};

export default App;
