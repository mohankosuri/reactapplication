import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countslice"
 
import formReducer from '../redux/formslice';


export const Store = configureStore({
          reducer:{

            counter: counterReducer,
            form: formReducer,
            
            
          }
})