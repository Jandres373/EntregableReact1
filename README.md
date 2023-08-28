#Entregable 1 modulo REACT.

##Recursos usados:
1) librería: Chakra UI para manejar el styling system y agilizar la maquetacion de la pagína. PD: (no se usaron componetes ya creados por la librería)
2) Librería: Framer motion para algunas animaciones basicas.
3) Librería: Use-sound para el sonido de la galleta que se rompe.

## Funcionalidades:

1) Deplegar un mensaje aleatorio por cada click, el mensaje no se repite y la mitad del texto cambia su color (esto para compensar la falta de un fondo cambiante). Dado que los dibujos son ralizados desde 0, (excepto por el pergamino que es tomado de internet) ejecutar un cambio de fondo implicaría crear más recursos de imagenes para mantener el estilo desplegado. Lo que implicaría más tiempo. (toma mucho tiempo dado que no manejo con fluidez los programas de diseño e ilustracion) 2)El color es aleatorio usando para ello un valor entre 0 y 255 en la escala RGB para cada una de las posiciones. Limitar la cantida de mensajes al total de entradas en el archivo .json.
3) Cambiar la imagen de fondo y ejecutar una animacion de transicion para hacer controlado el cambio al primer click, haciendo que el dibujo de la galleta se abra, se ejecute un sonido de ruptura y el mensaje se despliegue con un efecto de maquina de escribir.
4) Dependiendo del ancho del viewport la presentacion es una u otra para ajustar los tamaños a pantallas pequeñas y pantallas grandes. (no se establecieron breakpoints para pantallas medianas al no saber si estos breakpoints tambien eran requeridos para este entregable).

### Aspectos a mejorar:

Parece que hay cambios dependiendo del navegador en que se visualice la pagina, en algunos se precarga primero la imagen del pergamino, en otros la carga de la pagina en general no se completa. El diseño fue realizado usando como base Edge (basado en Chromium) Por lo que tanto en edge como en chrome debería verse correctamente. 

Aparentemente el problema de la precarga de la imagen se debe al uso del hook de Chakra UI 'useMediaQuery'. Esto podría cubrirse desplegando un loader en la pagina o solucionarse pidiendo que se renderice cuando la pagina se haya cargado por completo con un load event, sin embargo no estoy seguro de su utilidad al tratarse de react. 

Los diseños son aun muy basicos al igual que las animaciones. Salir del modelo dado en clases requiere la seguridad de poder implementar una solucion que cumpla los parametros pero a la vez que mantenga la estetica. A criterio personal considero que en pantallas grandes se logra, pero en pantallas pequeñas se queda corto. 
