import First from './components/first'
import Second from './components/second'

function App() {
  return (
    <>
      <div align="center">
        <h1>React Tutorial Persian</h1>
        <span>Arash Yeganeh</span>
        <i style={{ 'margin': '0 0.2rem' }}>|</i>
        <a href="https://github.com/arashyeganeh/React-Tutorial-Persian" rel="noreferrer" target='_blank'>GitHub</a>
        <hr />
      </div>
      <First /> { /* Or <First> </First> */}
      <br />
      <Second> </Second> { /* Or <Second /> */}
    </>
  );
}

export default App;
