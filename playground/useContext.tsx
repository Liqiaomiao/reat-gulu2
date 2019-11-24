import React from "react";
import ReactDom from 'react-dom'
const rootElement = document.getElementById('root')
const themeContext = React.createContext(null)
function App(){
    const [theme, setTheme] = React.useState('red')
    return(
        <themeContext.Provider value={{theme, setTheme}}>
            <div>
                <p>{theme}</p>
                <Child/>
            </div>
        </themeContext.Provider>
    )
}

function Child() {
    const {theme,setTheme} = React.useContext(themeContext)
    return (
        <button onClick={() => setTheme('blue')} style={{'background':theme}}>blue</button>
    )
}
ReactDom.render(<App/>,rootElement)