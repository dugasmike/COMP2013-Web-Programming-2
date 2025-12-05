import './App.css'
import DiamondWorld from './Components/DiamondWorld';
import Card from './Components/card';
function App() {

  return (
    <>
      <h1>Diamond World</h1>
      <div className="main-container">
        <Card 
          price="$1,350.00" 
          title="Princess" 
          image="src\assets\images\3.jpg"
        />
        <Card 
          price="$1,090.00" 
          title="Swan" 
          image="src\assets\images\2.jpg"
          sale={true}
        />
        <Card 
          price="$899.00" 
          title="Ice Lake" 
          image="src\assets\images\1.jpg"
        />
      </div>
    </>
  )
}

export default App
