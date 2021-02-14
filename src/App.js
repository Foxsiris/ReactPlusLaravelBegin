import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import General from "./routes/General/General";
import Courses from "./routes/Courser/Courses";
import Shop from "./routes/Shop/Shop";
import News from "./routes/News/News";

function App() {
    return (
        <Switch>
            <Route path="/" exact component={General}/> //добавить параметр exact чтобы можно было делать роут по другим адресам
            <Route path="/shop" component={Shop}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/news" component={News}/>
        </Switch>
    );
}

export default App;
