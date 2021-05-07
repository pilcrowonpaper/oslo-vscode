export const colors = [
    { name: "color2", hex: "#546E7A", ui: "color 1" },  
    { name: "color4", hex: "#82AAFF", ui: "color 2" }, 
    { name: "color5", hex: "#89DDFF", ui: "color 3" }, 
    { name: "color6", hex: "#B2CCD6", ui: "color 4" }, 
    { name: "color7", hex: "#C3E88D", ui: "color 5" }, 
    { name: "color8", hex: "#C792EA", ui: "color 6" }, 
    { name: "color9", hex: "#EEFFFF", ui: "color 7" }, 
    { name: "color10", hex: "#f07178", ui: "color 8" }, 
    { name: "color11", hex: "#F78C6C", ui: "color 9" }, 
    { name: "color12", hex: "#FF5370", ui: "color 10" }, 
    { name: "color13", hex: "#FFCB6B", ui: "color 11" }, 
    { name: "color14", hex: "#ffffff", ui: "color 12" }, 
    { name: "editor bg", hex: "#24272F", ui: "editor bg"  },
    { name: "sidebar bg", hex: "#1D1F26", ui: "sidebar bg"  },
    { name: "sidebar text", hex: "#CCCCCC", ui: "sidebar text"  },
    { name: "activity bar bg", hex: "#18191C", ui: "activity bar bg"  },
    { name: "activity bar text", hex: "#D1D1D1", ui: "activity bar text"  }
]

import {writable} from "svelte/store"

export const newMap = new Map()
newMap.set("color1", "#000000")
newMap.set("color2", "#546E7A")
newMap.set("color3", "#546E7A")
newMap.set("color4", "#82AAFF")
newMap.set("color5", "#89DDFF")
newMap.set("color6", "#B2CCD6")
newMap.set("color7", "#C3E88D")
newMap.set("color8", "#C792EA")
newMap.set("color9", "#EEFFFF")
newMap.set("color10", "#f07178")
newMap.set("color11", "#F78C6C")
newMap.set("color12", "#FF5370")
newMap.set("color13", "#FFCB6B")
newMap.set("color14", "#ffffff")
newMap.set("editor bg", "#24272F")
newMap.set("sidebar bg", "#1D1F26")
newMap.set("sidebar text", "#CCCCCC")
newMap.set("activity bar bg", "#18191C")
newMap.set("activity bar text", "#D1D1D1")

export const colorMap = writable(newMap)

export const codeType = writable("js")

export const exportType = writable("organized")
export const pageType = writable('editor')
export const boopCount = writable("...")
