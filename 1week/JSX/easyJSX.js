const name = "React";
function Greeting() {
    return <h1>Hello, {name}!</h1>;
}

function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}

const buttonStyle = { backgroundColor: "blue", color: "white" };
function Button() {
    return <button style={buttonStyle}>Click me</button>;
}