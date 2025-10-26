const body = document.querySelector('body')
const runBtn = document.querySelector('.run-btn')

let quarter1 = [250, 186, 109]
let quarter2 = [20, 207, 245]
let quarter3 = [136, 214, 116]
let quarter4 = [246, 139, 230]

function createIndividual(){
  const position = generateAleatoryPosition()
  const color = generateAleatoryRGB()
  return [0, ...position, ...color ]
}

function generateAleatoryPosition() {
  const max = 90
  const min = (100 - max)/2
  return [...Array(2)].map( () => Math.random() * (max - min) + min)
}

function generateAleatoryRGB() {
  return [...Array(3)].map(() => Math.floor(Math.random() * (255 + 1)))
}

function generateAleatoryIntegerNumber(n) {
  return Math.floor(Math.random() * (n + 1))
}

function generateInicialPopulation(n) {
  return [...Array(n)].map(e => createIndividual())
}

function clearDisplay() {
    const butterfly = document.querySelectorAll('.butterfly');
    butterfly.forEach(bt => bt.remove());
}

function show(population) {
  population.forEach( cromossome => {
    const [fit, h, w, r, g, b] = cromossome
    const bt = document.createElement('div')
    const rgb = `rgb(${r}, ${g}, ${b})`
    const len = 60
    bt.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${len}" height="${len}" viewBox="0 0 256 256" xml:space="preserve">
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M 81.158 57.056 l -4.229 -5.942 l -29.56 3.653 v 0.661 l 2.093 12.599 c 0.802 5.205 4.05 9.71 8.735 12.116 l 2.066 1.061 c 7.643 3.924 17.019 1.299 21.512 -6.023 C 85.224 69.562 84.981 62.427 81.158 57.056 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 42.626 54.767 l -29.554 -3.653 l -4.229 5.942 c -3.823 5.371 -4.066 12.506 -0.618 18.125 c 4.494 7.323 13.869 9.948 21.512 6.023 l 2.066 -1.061 c 4.685 -2.406 7.933 -6.911 8.735 -12.116 l 2.087 -12.565 V 54.767 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 81.414 7.32 C 70.066 4.265 58.717 22.093 47.369 46.928 c -1.031 2.731 -1.121 5.365 0 7.876 c 9.787 2.176 22.657 4.013 33.52 -5.803 C 89.027 42.302 93.893 11.786 81.414 7.32 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 18.227 75.181 c -3.448 -5.619 -3.205 -12.754 0.618 -18.125 l 3.421 -4.806 l -9.194 -1.136 l -4.229 5.942 c -3.823 5.371 -4.066 12.506 -0.618 18.125 c 4.014 6.541 11.922 9.319 19.012 7.043 C 23.606 81.064 20.362 78.66 18.227 75.181 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 71.773 75.181 c 3.448 -5.619 3.205 -12.754 -0.618 -18.125 l -3.421 -4.806 l 9.194 -1.136 l 4.229 5.942 c 3.823 5.371 4.066 12.506 0.618 18.125 c -4.014 6.541 -11.922 9.319 -19.012 7.043 C 66.394 81.064 69.638 78.66 71.773 75.181 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 42.626 46.916 C 31.279 22.087 19.932 4.265 8.586 7.32 c -12.479 4.466 -7.612 34.981 0.525 41.681 c 10.861 9.814 23.728 7.98 33.515 5.805 C 43.73 52.293 43.64 49.653 42.626 46.916 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 19.114 49.001 c -7.643 -6.292 -12.398 -33.589 -2.609 -40.585 c -2.64 -1.374 -5.279 -1.806 -7.919 -1.095 c -12.479 4.466 -7.612 34.981 0.525 41.681 c 8.095 7.315 17.304 8.157 25.521 7.212 C 29.363 55.496 24.033 53.446 19.114 49.001 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 70.886 49.001 c 7.643 -6.292 12.398 -33.589 2.609 -40.585 c 2.64 -1.374 5.279 -1.806 7.919 -1.095 c 12.479 4.466 7.612 34.981 -0.525 41.681 c -8.095 7.315 -17.304 8.157 -25.521 7.212 C 60.637 55.496 65.967 53.446 70.886 49.001 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 46.226 71.907 l -0.45 2.667 c -0.148 0.879 -1.411 0.879 -1.559 0 l -0.45 -2.667 c -0.76 -4.51 -1.142 -9.076 -1.142 -13.649 V 39.284 c 0 -1.31 1.062 -2.371 2.371 -2.371 h 0 c 1.31 0 2.371 1.062 2.371 2.371 v 18.974 C 47.369 62.832 46.987 67.397 46.226 71.907 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 49.129 34.888 c 0 2.249 -1.823 4.072 -4.072 4.072 c -2.249 0 -4.072 -1.823 -4.072 -4.072 c 0 -2.249 1.823 -6.331 4.072 -6.331 C 47.306 28.557 49.129 32.639 49.129 34.888 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${rgb}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 45.057 39.96 c -2.797 0 -5.072 -2.275 -5.072 -5.072 c 0 -2.517 1.975 -7.332 5.072 -7.332 s 5.072 4.814 5.072 7.332 C 50.129 37.685 47.854 39.96 45.057 39.96 z M 45.057 29.557 c -1.394 0 -3.072 3.274 -3.072 5.331 c 0 1.694 1.378 3.072 3.072 3.072 c 1.693 0 3.072 -1.378 3.072 -3.072 C 48.129 32.831 46.452 29.557 45.057 29.557 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 48.027 32.051 c -0.544 0 -0.99 -0.435 -1 -0.981 c -0.101 -5.252 2.634 -11.888 6.965 -16.906 c 0.359 -0.419 0.993 -0.465 1.411 -0.104 c 0.418 0.361 0.465 0.992 0.104 1.411 c -3.965 4.593 -6.569 10.847 -6.478 15.561 c 0.011 0.552 -0.429 1.009 -0.981 1.019 C 48.04 32.051 48.033 32.051 48.027 32.051 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 29.396 57.501 c -7.166 0 -14.429 -1.86 -20.956 -7.758 c -5.839 -4.805 -9.874 -20.919 -7.96 -31.898 C 1.537 11.784 4.223 7.819 8.249 6.379 c 13.384 -3.608 25.885 19.548 35.287 40.121 c 0.23 0.503 0.008 1.096 -0.494 1.326 c -0.503 0.231 -1.096 0.009 -1.326 -0.493 C 33.349 29.023 20.845 5.054 8.846 8.286 c -4.102 1.472 -5.749 6.2 -6.394 9.903 c -1.78 10.214 1.97 25.655 7.296 30.039 c 10.043 9.074 21.629 8.052 32.662 5.6 c 0.539 -0.113 1.074 0.221 1.193 0.76 c 0.12 0.539 -0.22 1.074 -0.759 1.194 C 38.546 56.736 33.991 57.501 29.396 57.501 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 60.617 57.502 c -4.6 0 -9.162 -0.765 -13.465 -1.721 c -0.539 -0.12 -0.879 -0.654 -0.76 -1.194 c 0.12 -0.539 0.656 -0.873 1.194 -0.76 c 11.032 2.455 22.624 3.476 32.633 -5.569 c 5.361 -4.414 9.111 -19.855 7.331 -30.069 c -0.646 -3.703 -2.292 -8.431 -6.471 -9.927 c -11.921 -3.208 -24.431 20.769 -32.8 39.083 c -0.23 0.501 -0.822 0.724 -1.326 0.493 c -0.502 -0.23 -0.723 -0.822 -0.493 -1.326 C 55.863 25.933 68.365 2.771 81.675 6.354 c 4.103 1.465 6.789 5.43 7.845 11.492 c 1.914 10.979 -2.121 27.092 -7.994 31.928 C 75.024 55.647 67.775 57.502 60.617 57.502 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 67.708 84 c -2.678 0 -5.385 -0.614 -7.901 -1.907 l -2.067 -1.061 c -4.954 -2.545 -8.418 -7.35 -9.266 -12.853 l -2.091 -12.587 c -0.009 -0.055 -0.014 -0.109 -0.014 -0.164 V 54.77 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 v 0.576 l 2.08 12.517 c 0.753 4.884 3.819 9.137 8.205 11.39 l 2.067 1.061 c 7.131 3.665 16.007 1.18 20.202 -5.657 c 3.245 -5.287 3.017 -11.968 -0.579 -17.021 l -3.785 -5.317 c -0.32 -0.45 -0.216 -1.074 0.234 -1.395 c 0.451 -0.319 1.075 -0.214 1.395 0.234 l 3.785 5.317 c 4.064 5.709 4.32 13.256 0.655 19.229 C 79.368 81.014 73.609 84 67.708 84 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 22.292 84 c -5.901 0 -11.661 -2.985 -14.92 -8.296 c -3.666 -5.972 -3.408 -13.52 0.655 -19.229 l 3.784 -5.317 c 0.32 -0.449 0.944 -0.554 1.395 -0.234 c 0.45 0.32 0.555 0.945 0.235 1.395 l -3.784 5.317 c -3.597 5.053 -3.825 11.735 -0.58 17.021 c 4.195 6.837 13.07 9.321 20.203 5.657 l 2.067 -1.061 c 4.385 -2.253 7.452 -6.506 8.203 -11.378 l 2.076 -12.494 v -0.611 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 v 0.694 c 0 0.055 -0.004 0.109 -0.014 0.164 l -2.087 12.565 c -0.846 5.493 -4.311 10.297 -9.265 12.841 l -2.067 1.061 C 27.678 83.385 24.97 84 22.292 84 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 44.997 76.234 c -0.891 0 -1.617 -0.613 -1.766 -1.493 l -0.45 -2.668 c -0.767 -4.55 -1.156 -9.199 -1.156 -13.815 V 39.284 c 0 -0.487 0.102 -0.958 0.303 -1.398 l 1.82 0.831 c -0.081 0.177 -0.122 0.368 -0.122 0.567 v 18.974 c 0 4.506 0.379 9.042 1.128 13.483 l 0.243 1.439 l 0.242 -1.439 c 0.749 -4.441 1.129 -8.976 1.129 -13.483 V 39.284 c 0 -0.186 -0.036 -0.365 -0.107 -0.532 l 1.84 -0.784 c 0.178 0.417 0.268 0.86 0.268 1.317 v 18.974 c 0 4.617 -0.389 9.266 -1.157 13.815 l -0.449 2.667 C 46.615 75.619 45.889 76.234 44.997 76.234 C 44.998 76.234 44.998 76.234 44.997 76.234 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            <path d="M 42.084 32.051 c -0.007 0 -0.013 0 -0.02 0 c -0.552 -0.011 -0.991 -0.467 -0.981 -1.019 c 0.091 -4.713 -2.512 -10.966 -6.478 -15.561 c -0.361 -0.418 -0.315 -1.05 0.104 -1.411 c 0.418 -0.361 1.05 -0.315 1.411 0.104 c 4.332 5.018 7.065 11.654 6.964 16.906 C 43.073 31.616 42.627 32.051 42.084 32.051 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          </g>
        </svg>`;
      bt.style.position = 'fixed'
      bt.style.top = `${h}vh`
      bt.style.left = `${w}vw`
      bt.classList.add('butterfly')
      body.appendChild(bt)
  })
}

function mutation(cromossome) {
  let [_, h, w, r, g, b] = cromossome
  
  //Implemente aqui seu algoritmo de mutação...
  return [0, h, w, ...newRGB]
}

function crossover(cromossomeA, cromossomeB) {
  const [fitA, hA, wA, rA, gA, bA] = cromossomeA;
  const [fitB, hB, wB, rB, gB, bB] = cromossomeB;

  // Implemente aqui seu algoritmo de crossover

  return [0, h, w, r, g, b];
}

function calculateEuclidianDistanceToRGB(rgb1, rgb2) {
  const rDiff = rgb1[0] - rgb2[0]
  const gDiff = rgb1[1] - rgb2[1]
  const bDiff = rgb1[2] - rgb2[2]
  return Math.sqrt((rDiff ** 2)+(gDiff ** 2)+(bDiff ** 2))
}

function findQuadrant(vh, vw) {
  if (vh < 50 && vw < 50) return 1;
  if (vh < 50 && vw >= 50) return 2;
  if (vh >= 50 && vw < 50) return 3;
  if (vh >= 50 && vw >= 50) return 4;
}

function evaluate(cromossome) {
  let [_, h, w, r, g, b] = cromossome
  const quadrant = findQuadrant(h, w)
  switch (quadrant) {
    case 1:
        cromossome[0] = calculateEuclidianDistanceToRGB([r,g,b], quarter1)
        return cromossome
    case 2:
        cromossome[0] = calculateEuclidianDistanceToRGB([r,g,b], quarter2)
        return cromossome
    case 3:
        cromossome[0] = calculateEuclidianDistanceToRGB([r,g,b], quarter3)
        return cromossome
    case 4:
        cromossome[0] = calculateEuclidianDistanceToRGB([r,g,b], quarter4)
        return cromossome
  }
}

function positionPerturbation(cromossome) {
    const PERTURBATION_STRENGTH = 1;
    let [fit, h, w, r, g, b] = cromossome;
    const currentQuadrant = findQuadrant(h, w);
    let minH, maxH, minW, maxW;
    switch (currentQuadrant) {
        case 1:
            [minH, maxH, minW, maxW] = [0, 40, 0, 40];
            break;
        case 2:
            [minH, maxH, minW, maxW] = [0, 40, 40, 90];
            break;
        case 3:
            [minH, maxH, minW, maxW] = [40, 90, 0, 40];
            break;
        case 4:
            [minH, maxH, minW, maxW] = [40, 90, 40, 90];
            break;
        default:
            return cromossome; 
    }
    const deltaH = (Math.random() * 2 * PERTURBATION_STRENGTH) - PERTURBATION_STRENGTH;
    const deltaW = (Math.random() * 2 * PERTURBATION_STRENGTH) - PERTURBATION_STRENGTH;
    let newH = h + deltaH;
    let newW = w + deltaW;
    newH = Math.max(minH, Math.min(maxH, newH));
    newW = Math.max(minW, Math.min(maxW, newW));
    return [fit, newH, newW, r, g, b];
}

function changeQuatersRGBColors() {
  const boxA = document.querySelector('.box.a ')
  const boxB = document.querySelector('.box.b ')
  const boxC = document.querySelector('.box.c ')
  const boxD = document.querySelector('.box.d ')
  const elements = [boxA, boxB, boxC, boxD]
  const globalQuarters = [quarter1, quarter2, quarter3, quarter4]
  for(let i=0; i<4; i++) {
    const [r,g,b] = generateAleatoryRGB()
    elements[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    globalQuarters[i][0] = r;
    globalQuarters[i][1] = g;
    globalQuarters[i][2] = b;
  }
}

const sleep = (ms) => new Promise( resolve => setTimeout(resolve, ms))

runBtn.addEventListener('click', async () => {
  const NGEM = parseInt(document.querySelector('.ngem')?.value) || 2000
  const POP_SIZE = parseInt(document.querySelector('.ps')?.value) || 600
  const MUT_RATE = parseFloat(document.querySelector('.mr')?.value) || 0.02
  const CROSS_RATE = parseFloat(document.querySelector('.cr')?.value) || 0.05
  const SPEED = parseFloat(document.querySelector('.speed'))?.value || 20
  
  let population = generateInicialPopulation(POP_SIZE)
  for(const individual of population ) {
    evaluate(individual)
  }
  population.sort( (indA, indB) => indA[0] - indB[0])
  for(let i = 0; i < NGEM; i++) {    
    population = population.map( individual => positionPerturbation(individual))
    clearDisplay()
    show(population)
    await sleep(SPEED)
    
    //Cruzamento
    let childs  = []
    for(let i=0; i < POP_SIZE; i+=2) {
      if(Math.random() < CROSS_RATE) {
        const child = crossover(population[i], population[i+1])
        evaluate(child)
        childs.push(child)
      }
    }
    population = [...population, ...childs]
    
    //Mutação
    let mutatedIndividuals = []
    for(const individual of population) {
      if(Math.random() < MUT_RATE) {
        const mutatedIndividual = mutation(individual)
        evaluate(mutatedIndividual)
        mutatedIndividuals.push(mutatedIndividual)
      }
    }
    population = [...population, ...mutatedIndividuals]
    if(Math.random() < 0.2) {
        population.sort( (indA, indB) => indA[0] - indB[0])
    }  
    const qt = document.querySelector('.qt-ind')
    const ng = document.querySelector('.geracoes')
    qt.innerHTML = `População: ${population.length}`
    ng.innerHTML = `Geração: ${i}/${NGEM}`

    population = population.slice(0, POP_SIZE)
    population = population.map( individual => positionPerturbation(individual))
  }
  clearDisplay();
  show(population);
  qt.innerHTML = ''
  ng.innerHTML = ''
})

