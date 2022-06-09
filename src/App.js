import './App.css'

function App() {
  const { useState } = require('react')

  const [name, setName] = useState('')
  const [isPalendrome, setPalendrome] = useState(null)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const checkPalanedrome = (word) => {
    if (word === '') return false
    const reversed = word.split('').reverse().join('')

    if (word === reversed) return true

    return false
  }

  const handleClick = (e) => {
    e.preventDefault()
    const checkP = checkPalanedrome(name)
    return checkP ? setPalendrome(true) : setPalendrome(false)
  }

  return (
    <div className='App'>
      <h1>Check if a word is a palandrome</h1>
      <form>
        <input
          onChange={handleChange}
          value={name}
          placeholder='Enter a word to check'
        ></input>
        <button onClick={handleClick}>Submit</button>
      </form>
      {isPalendrome === null ? (
        <div></div>
      ) : isPalendrome ? (
        <h3>This is a palandrome</h3>
      ) : (
        <h3>Not a palandrome</h3>
      )}
    </div>
  )
}

export default App
