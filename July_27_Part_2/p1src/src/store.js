// import { createStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import NameReducer from "./NameReducer";

const Store = createStore(NameReducer)

export default Store;