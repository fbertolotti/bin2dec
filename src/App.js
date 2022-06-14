import './App.css'
import React from 'react'
import DecimalNumber from './DecimalNumber'
import BinaryNumberString from './BinaryNumberString'

class App extends React.Component
{
  constructor(props) {
    super(props)

    this.state = {
      decimalNumber: null,
    }
  }

  handleBinaryNumberStringChange(binaryNumberString) {
    if ('' !== binaryNumberString && !binaryNumberString.match(/^[01]+$/)) {
      return
    }

    let decimalNumber = null

    if ('' !== binaryNumberString) {
      decimalNumber = parseInt(binaryNumberString, 2)
    }

    this.setState({
      decimalNumber,
    })
  }

  render() {
    return (
      <div className="App">
        <BinaryNumberString
          maxLength = "8"
          onComponentChange = {e => this.handleBinaryNumberStringChange(e)}
        />
        <DecimalNumber
          value={this.state.decimalNumber}
        />
      </div>
    );
  }
}

export default App
