import { useState } from "react";
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"
import Header from "./components/header"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration > 0

  const handleChange = (identifier, value) => {
    setUserInput((prevInput) => (
      {
        ...prevInput,
        [identifier]: +value,
      }
    ))
  }
  // console.log(userInput)

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>

    {inputIsValid ? <ResultsTable userInput={userInput} /> : <p className="center">Enter a valid duration of 1 year or above!</p>}
    </>
  )
}

export default App
