import hello from "./modulo.mjs"
import {getData} from "./modulo.mjs"
hello()

export function solution() {
    
    const lista = getData()
    return getData().then(movies => movies)
  }
  
  solution();