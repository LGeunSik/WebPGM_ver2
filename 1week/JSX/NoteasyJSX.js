const name = "React";
function Greeting() {
    return React.createElement("h1", null, `Hello, ${name}!`);
}

function Greeting({ isLoggedIn }) {
    return React.createElement(
        "h1",
        null,
        isLoggedIn ? "Welcome back!" : "Please log in"
    );
}

const buttonStyle = { backgroundColor: "blue", color: "white" };
function Button() {
    return React.createElement("button", { style: buttonStyle }, "Click me");
}
