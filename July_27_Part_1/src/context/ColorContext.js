import { createContext } from "react"

export const themes = {
  light: {
      background: "yellow",
      text: "purple",
    }
}
export const ColorContext = createContext(themes.light);