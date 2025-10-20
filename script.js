const body = document.querySelector('body')
const runBtn = document.querySelector('.run-btn')

const quarter1 = [250, 186, 109]
const quarter2 = [67, 140, 151]
const quarter3 = [136, 214, 116]
const quarter4 = [246, 139, 230]

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
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.remove());
}

function show(population) {
  population.forEach( cromossome => {
    const individual = document.createElement('div')
    individual.classList.add('ball')
    individual.style.position = 'fixed'
    const [fit, h, w, r, g, b] = cromossome
    individual.style.top = `${h}vh`
    individual.style.left = `${w}vw`
    individual.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    body.appendChild(individual)
  })
}

function mutation(cromossome) {
  let [_, h, w, r, g, b] = cromossome
  //Implemente seu algoritmo de mutação aqui
  return [0, h, w, ...newRGB]
}

function crossover(cromossomeA, cromossomeB) {
  //implemente seu algoritmo de crossover aqui  return [];
}

function calculateEuclidianDistanceToRGB(rgb1, rgb2) {
  //Implemente aqui o calculo da distância euclideana
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

