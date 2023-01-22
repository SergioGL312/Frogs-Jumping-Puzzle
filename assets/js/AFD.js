import { croak, win, lose } from './sonidos.js';
import { displayModal } from './modal.js';

const Q = 72;
const alfabeto = ['1', '2', '3', '4', '5', '6'];
const q0 = 1;
const F = ['16', '31'];

let δ = [
['1', '1', '2', '17', '1', '1'],
['2', '32', '2', '3', '2', '2'],
['3', '3', '33', '3', '4', '3'],
['4', '4', '5', '4', '4', '72'],
['5', '6', '5', '5', '34', '5'],
['7', '6', '6', '35', '6', '6'],
['7', '7', '7', '8', '7', '7'],
['72', '8', '8', '8', '9', '8'],
['9', '36', '9', '9', '9', '10'],
['10', '10', '11', '10', '10', '10'],
['11', '12', '11', '11', '11', '11'],
['13', '12', '12', '12', '12', '72'],
['13', '13', '13', '13', '14', '13'],
['14', '14', '14', '14', '14', '15'],
['16', '15', '15', '15', '15', '15'],
['16', '16', '16', '16', '16', '16'],
['17', '17', '18', '17', '52', '17'],
['18', '19', '18', '53', '18', '18'],
['72', '19', '19', '20', '19', '19'],
['20', '54', '20', '20', '21', '20'],
['21', '21', '55', '21', '21', '22'],
['22', '22', '23', '22', '22', '22'],
['23', '24', '23', '23', '23', '72'],
['25', '56', '24', '24', '24', '24'],
['25', '25', '25', '26', '25', '25'],
['26', '26', '26', '26', '27', '26'],
['72', '27', '27', '27', '27', '28'],
['28', '29', '28', '28', '28', '28'],
['30', '29', '29', '29', '29', '29'],
['30', '30', '30', '30', '30', '31'],
['31', '31', '31', '31', '31', '31'],
['72', '32', '32', '32', '32', '32'],
['33', '37', '33', '33', '38', '33'],
['34', '34', '34', '34', '34', '39'],
['40', '35', '35', '35', '41', '35'],
['42', '36', '36', '36', '36', '36'],
['43', '37', '37', '44', '37', '37'],
['38', '38', '46', '38', '38', '45'],
['39', '39', '72', '39', '39', '39'],
['40', '40', '40', '72', '40', '40'],
['41', '72', '41', '41', '41', '47'],
['42', '42', '42', '42', '72', '42'],
['43', '43', '43', '48', '43', '43'],
['49', '44', '44', '44', '44', '44'],
['45', '45', '50', '45', '45', '45'],
['46', '46', '46', '46', '46', '51'],
['47', '47', '72', '47', '47', '47'],
['72', '48', '48', '48', '48', '48'],
['49', '49', '49', '72', '49', '49'],
['50', '50', '50', '50', '50', '72'],
['51', '51', '72', '51', '51', '51'],
['52', '52', '52', '52', '52', '72'],
['53', '58', '53', '53', '57', '53'],
['59', '54', '54', '54', '54', '54'],
['55', '61', '55', '55', '55', '60'],
['56', '56', '56', '56', '56', '62'],
['57', '57', '63', '57', '57', '64'],
['66', '58', '58', '65', '58', '58'],
['59', '59', '59', '72', '59', '59'],
['60', '60', '72', '60', '60', '60'],
['67', '61', '61', '61', '72', '61'],
['62', '72', '62', '62', '62', '62'],
['63', '63', '63', '63', '63', '68'],
['63', '63', '69', '63', '63', '63'],
['70', '65', '65', '65', '65', '65'],
['66', '66', '66', '71', '66', '66'],
['67', '67', '67', '72', '67', '67'],
['68', '68', '72', '68', '68', '68'],
['69', '69', '69', '69', '69', '72'],
['70', '70', '70', '72', '70', '70'],
['72', '71', '71', '71', '71', '71'],
['72', '72', '72', '72', '72', '72']
];

let qa = q0;

let tablaT = [];

let clicks = 0;

function tablaTransicionMatriz() {
  let matriz = δ;
  let tablaTransicion = {};
  for (let i = 0; i < matriz.length; i++) {
    let estadoActual = i + 1;
    tablaTransicion[estadoActual] = {};
    for (let j = 0; j < matriz[i].length; j++) {
      let simbolo = j + 1;
      tablaTransicion[estadoActual][simbolo] = matriz[i][j];
    }
  }
  
  for (const [estado, simbolos] of Object.entries(tablaTransicion)) {
    for (const [simbolo, sigEstado] of Object.entries(simbolos)) {
      tablaT.push([estado.toString(), simbolo.toString(), sigEstado]);
    }
  }
}

function perteneceAlfabeto(cadena) {
  let bandera = true;
  let tablaC = [];

  tablaTransicionMatriz();

  if (cadena !== "") {
    clicks += 1;
    for (const caracter of cadena) {
      if (alfabeto.includes(caracter)) {
        for (const transiciones of tablaT) {
          if (transiciones[1].includes(caracter) && qa == transiciones[0]) {
            
            if (qa == transiciones[2]) {
              console.log(`Es el mismo estado`);
            } else {
              croak();
              intercamabiar(document.getElementById(cadena), document.getElementById('0'));
            }
  
            if (transiciones[2] == δ.length) {
              displayModal(false, clicks)
              lose();
              console.log('Lose');
            }
  
            tablaC.push([qa, caracter, transiciones[2]])
            qa = transiciones[2];
            break;
          }
        }
      } else {
        bandera = false;
      }
  
      if (F.includes(qa) && bandera === true) {
        displayModal(true, clicks);
        win();
        plantillaTabla(tablaC);
        console.log(`\n\t\tPalabra w = ${cadena} ACEPTADA\n`);
      } else {
        plantillaTabla(tablaC);
        console.log(`\n\t\tPalabra w = ${cadena} NO ACEPTADA\n`);
      }
    }
  }
}

function plantillaTabla(tablaC) {
  console.log("\nEstado Actual\tCarácter Leido\tEstado Siguiente");
  for (let i = 0; i < tablaC.length; i += 1) {
    console.log(`\t${tablaC[i][0]}\t\t\t\t\t${tablaC[i][1]}\t\t\t\t${tablaC[i][2]}`);
  }
}

function intercamabiar(div1, vacio) {
  let padreVacio = vacio.parentNode;
  let hijoVacio = vacio.nextSibling;
  if (hijoVacio === div1) {
      padreVacio.insertBefore(div1, vacio);
  } else {
      div1.parentNode.insertBefore(vacio, div1);
      if (hijoVacio) {
          padreVacio.insertBefore(div1, hijoVacio);
      } else {
          padreVacio.appendChild(div1);
      }
  }
}

function saltar() {
  perteneceAlfabeto(this.id);
}

const divs = [...document.querySelectorAll('#tablero div')];

divs.forEach(function (div) {
  div.addEventListener('click', saltar, false);
});