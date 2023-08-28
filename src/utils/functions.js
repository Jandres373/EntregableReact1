/* <-- Establecemos el archivo Functios como la base de la logica compartida entre diferentes componentes. Las variables, funciones y demás datos que depandan del estado, se pasarán a los children como props con excepcion de la funcion determineContrast(). La idea es agrupar aquí toda la logica restante para facilitar su uso en diferentes componentes independientemente del nivel de anidacion que tengan con respecto a su componente padre. --> */



// Importaciones
import { useEffect } from 'react';


export function randomizeNum(data) {
  return Math.floor(Math.random() * data.length);
}

//Randomize element obtiene 'data' como parametro, se aplica la funcion randomizeNum a data, de manera que data sirve como limite. devuelve un arreglo 
export function randomizeElement(data) {
  const randomElementIndex = randomizeNum(data);
  return data[randomElementIndex];
}

export function useInterval(callback, delay) {
  useEffect(() => {
    const target = setInterval(callback, delay);
    return () => clearInterval(target);
  }, [callback, delay]);
}

export function randomizeRGB() {
  return Math.floor(Math.random() * 255);
}

export function determineContrast(color) {
  const colorControl = {
    limit: 255,
    contrastRange: 127,
    treshold: 250,
    generateRandomContrastColor: function generate (shouldBeGreater, color) {
      let result;
      result = shouldBeGreater===true ? color+this.treshold : color-this.treshold;
      return result
    },
  };
  const { contrastRange } = colorControl;

  function getContrastColor(color) {
    let contrastColor;
    contrastColor = color < contrastRange ? colorControl.generateRandomContrastColor(true, color) : colorControl.generateRandomContrastColor(false, color);
    return contrastColor;
  }

  const rgbResult = {
    rgbPos1: getContrastColor(color.color1),
    rgbPos2: getContrastColor(color.color2),
    rgbPos3: getContrastColor(color.color3),
  };

  return `rgb(${rgbResult.rgbPos1}, ${rgbResult.rgbPos2}, ${rgbResult.rgbPos3})`;
}
