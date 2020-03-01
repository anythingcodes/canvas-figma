import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { theme } from './theme'
import { SampleComponent } from './components/SampleComponent';

declare function require(path: string): any

class App extends React.Component {
  // textbox: HTMLInputElement

  render() {
    return (
      <div>
        <img alt="Logo" src={require('./img/logo.svg').default} />
        <SampleComponent theme={theme}>Hurray!</SampleComponent>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
