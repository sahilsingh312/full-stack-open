import React, { useState } from 'react'
import Button from './components/Button'
import StatisticLine from './components/StatisticLine'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => setGood(good + 1);
  const handleNeutralButton = () => setNeutral(neutral + 1);
  const handleBadButton = () => setBad(bad + 1);

  const sum = good + neutral + bad;


  return (
    <div>
      <h2> give feedback </h2>
     <Button text={'good'} onClick={handleGoodButton}/>
     <Button text={'neutral'} onClick={handleNeutralButton}/>
     <Button text={'bad'} onClick={handleBadButton}/>
     <h2>statistics</h2>



    {sum == 0 ? <p>No feedback given</p> : <Statistics good = {good} neutral ={neutral} bad = {bad} sum = {sum} />}



    </div>
  )
}

export default App