import "./App.css";
import reactLogo from "./assets/react.svg";

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Nikil Paul S</h1>
                <p>Welcome to my personal website</p>
            </header>
            <main>
                <img src={reactLogo} alt="React Logo" className="logo" />
                <p>This is a basic React website with Vite.</p>
            </main>
        </div>
    );
};

export default App;
