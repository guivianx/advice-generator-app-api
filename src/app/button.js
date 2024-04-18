import { adviceGenerator } from './adviceGenerator.js'

adviceGenerator()

document.getElementsByClassName('btn-dice')[0].addEventListener('click', adviceGenerator)
