import "./App.css";
import colors from './Data/data'
import ColorBox from './Components/ColorBox'

function App() {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  };
  return (

    <div className='colorBoxDiv'>

        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>

        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>

        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>

        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>

        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>
        <ColorBox color={getRandomColor()}/>

    </div>

  )
}

export default App
