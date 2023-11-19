import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Juego lúdico en señas</h1>
      <div style={{ width: "90vw" }}>
        <iframe
          allowfullscreen
          style={{ maxWidth: "100%" }}
          src="https://wordwall.net/es/embed/9f8c3170d79a406c8c26adc4b5a7fad0?themeId=1&templateId=3&fontStackId=0"
          width="1200"
          height="700"
          frameborder="0"
          title="game"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
