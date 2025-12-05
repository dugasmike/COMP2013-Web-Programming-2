import './App.css'
import Resorts from './Components/Resorts';
import Title from './Components/Title';
function App() {
  return (<>
    <div className="Main-Container">
      <Title />
      <div className="Secondary-Container">
        <Resorts 
          image="src\assets\images\1.jpg" 
          location="Indonesia" 
          brand="Gili Air Hotel"
          rating="4.8"
          price="$589"
        />
        <Resorts 
          image="src\assets\images\2.jpg" 
          location="Seychelles" 
          brand="Hilton Resort"
          rating="4.2"
          price="$629"
        />
        <Resorts 
          image="src\assets\images\3.jpg" 
          location="US Virgin Islands" 
          brand="GOA Resort"
          rating="3.5"
          price="$485"
        />
        <Resorts 
          image="src\assets\images\4.jpg" 
          location="Bahamas" 
          brand="Kuredu Resort"
          rating="4.1"
          price="$729"
        />
        <Resorts 
          image="src\assets\images\5.jpg" 
          location="Mauritius" 
          brand="Trou D'eau Douce"
          rating="4.9"
          price="$877"
        />
        <Resorts 
          image="src\assets\images\6.jpg" 
          location="Bermuda" 
          brand="Staniel Cay Hotel"
          rating="3.2"
          price="$365"
        />
      </div>
    </div>
  </>)
}

export default App
