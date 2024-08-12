# Prueba técnica Front end VueJS

## Consigna

Se requiere desarrollar una pequeña web con el framework de VUEJS.
El objetivo de esta prueba es poder evaluar la creación e interacción de componentes de
Angular y la conexión con servicios Api Rest.
<br>
Se requiere:

1. Generar una interfaz de usuario donde exista a lo menos 3 componentes anidados entre sí.
2. Los componentes creados deben hacer uso de los binding necesarios para el traspaso de información y acciones para su interacción.
3. Cada componente debe tener su Lifecycl (ciclo de vida) necesario.
4. La información desplegada debe venir desde api Rest (https://developer.marvel.com/).
5. Con la información desplegada desde el Api Rest, hacer un CRUD funcional.

## Recomendacion y uso

Además de la instalación de paquetes con `npm i`, crear un archivo _.env_ dentro de _src_.
Ahi colocaremos nuestras variables de entorno (respetar los nombres de las mismas)
<br>

```
  VITE_API_KEY='YOUR_PUBLIC_KEY'
  VITE_TS='YOUR_TS'
  VITE_HASH='YOUR_HASH'
```
