import {AppComponent} from "./App";
import * as ReactDOM from "react-dom";
import {dataFromStore} from "./data";

it ('App renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AppComponent questionsData = {dataFromStore}  requestDataFetch={()=>{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})
