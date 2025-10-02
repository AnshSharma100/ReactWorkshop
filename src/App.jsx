import "./App.css";

function App() {
  // Click handler function
  const handleGetStarted = () => {
    alert("Welcome to React! 🚀 Let's start learning!");
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">React Workshop</h2>
        <nav>
          <a href="#">Home</a>
          <a href="https://www.linkedin.com/in/ansh-sharma-softwareengineer/" target="_blank" rel="noopener noreferrer">About</a>

          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>🚀 Welcome to the React Workshop</h1>
        <p>Learn React step by step by building real components.</p>
        <button className="cta" onClick={handleGetStarted}>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>📦 Components</h3>
          <p>Understand how to break your UI into reusable pieces.</p>
        </div>
        <div className="feature-card2">
          <h3>⚡ State</h3>
          <p>Make your app dynamic with React’s useState hook.</p>
        </div>
        <div className="feature-card3">
          <h3>🌐 Props</h3>
          <p>Pass data between components and build flexible UIs.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} React Workshop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
