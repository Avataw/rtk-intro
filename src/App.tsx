import { useState } from "react"
import SimpleFetching from "./solutions/1_simple_fetching/SimpleFetching"
import LoadingStates from "./solutions/2_loading_states/LoadingStates"
import QueryFetching from "./solutions/3_fetching_query/QueryFetching"
import ErrorHandling from "./solutions/4_error_handling/ErrorHandling"
import Selecting from "./solutions/5_selecting/Selecting"
import PostMutation from "./solutions/6_mutation/PostMutation"

function App() {

  const [exercise, setExercise] = useState("1")

  return (
    <>
      <select onChange={(e) => setExercise(e.target.value)}>
        <option value="1">Exercise 1: Simple Fetching</option>
        <option value="2">Exercise 2: Loading States</option>
        <option value="3">Exercise 3: Fetching with a query parameter</option>
        <option value="4">Exercise 4: Errorhandling</option>
        <option value="5">Exercise 5: Selecting from the response</option>
        <option value="6">Exercise 6: A simple post mutation</option>
      </select>

      {exercise === "1" && <SimpleFetching />}
      {exercise === "2" && <LoadingStates />}
      {exercise === "3" && <QueryFetching />}
      {exercise === "4" && <ErrorHandling />}
      {exercise === "5" && <Selecting />}
      {exercise === "6" && <PostMutation />}
    </>
  )
}

export default App
