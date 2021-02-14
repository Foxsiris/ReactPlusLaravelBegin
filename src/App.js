import React from 'react'
import './App.css';
import {Route,Switch} from "react-router-dom";
import General from "./routes/General/General";
import Courses from "./routes/Courser/Courses";
import Shop from "./routes/Shop/Shop";
import News from "./routes/News/News";
import ContexData from "./context/Data/ContextData";
import ReducerData from "./context/Data/ReducerData";
import StateData from "./context/Data/StateData";

function App() {
    const [stateData,dispatchData] = React.useReducer(ReducerData,StateData)
    return (
        <Switch>
            <ContexData.Provider value={{stateData,dispatchData}}>
                <Route path="/" exact component={General}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/courses" component={Courses}/>
                <Route path="/news" component={News}/>
            </ContexData.Provider>
        </Switch>
    );
}

export default App;
