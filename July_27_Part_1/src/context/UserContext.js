import { createContext } from "react"

export const UserData = {
  userName : "Prasanna",
  company : "Hexaware",
  topic : "React Training"   
}

export const UserConText = createContext(UserData);