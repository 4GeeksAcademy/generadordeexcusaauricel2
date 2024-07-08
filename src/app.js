/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorDeExcusas() {
  const quienes = ["Mi Perro", "Mi Abuela", "Mis tortugas", "Mis pajaros"];
  const acciones = ["corrio", "rompio", "comio", "salto"];
  const quecosas = ["Mi Proyecto", "La bicicleta", "Mis llaves"];
  const momentos = [
    "Antes de Clases",
    "Justo a Tiempo",
    "Cuando termine",
    "Durante mi Almuerzo",
    "Mientras estaba Durmiendo"
  ];

  const quien = quienes[Math.floor(Math.random() * quienes.length)];
  const accion = acciones[Math.floor(Math.random() * quienes.length)];
  const que = quecosas[Math.floor(Math.random() * quienes.length)];
  const cuando = momentos[Math.floor(Math.random() * quienes.length)];

  return `${quien} ${accion} ${que} ${cuando}.`;
}

window.onload = function() {
  //write your code here
  document.getElementById(
    "excuse"
  ).innerHTML = `<p id = "excuse">${generadorDeExcusas()}</p>`;
};
