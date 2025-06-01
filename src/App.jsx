import './App.css'
import Functional from './Components/Functional'
import Class from './Components/Class'
import Counter from './Components/Counter'
import EventHandling from './Components/EventHandling'
import Parent from './Components/Parent'
import ConditionalRendering from './Components/ConditionalRendering'
import ListRendering from './Components/ListRendering'
import Styling from './Components/Styling'

function App() {

  return (
    <>
      <Styling />

      {/* <ListRendering /> */}

      {/* <ConditionalRendering /> */}

      {/* <Parent /> */}

      {/* <EventHandling /> */}

      {/* <Counter /> */}

      {/* <Functional name="Tony Stark" heroName="Iron man">
        <p>Jarvis is from children props</p>
      </Functional> */}
      {/* <Functional name="Steve Rogers" heroName="Captian America"/> */}
      {/* <Class name="Bruce Banner" heroName="Hulk">
        <p>She Hulk is from children props</p>
      </Class> */}
      {/* <Class name="Peter parker" heroName="Spider man"/> */}
    </>
  )
}

export default App
