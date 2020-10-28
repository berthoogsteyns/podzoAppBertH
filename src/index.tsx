import * as React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App  from './App'
import store from './redux/store/store'
const dotenv = require('dotenv').config()
// import 'bootstrap/dist/css/bootstrap.min.css';   

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('app')
    )
}

render()

// render(<App/>, document.getElementById('app'))
