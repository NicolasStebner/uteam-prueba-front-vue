<!-- src/views/Home.vue -->
<template>
  <div>
    <Title text="Prueba técnica Front end VueJS" />
    <InformationContainer>
      <Subtitle text="Consigna" />
      <Description
        text="Se requiere desarrollar una pequeña web con el framework de VUEJS.
        El objetivo de esta prueba es poder evaluar la creación e interacción de componentes de
        Angular y la conexión con servicios Api Rest. Se requiere: "
      />
      <ul>
        <li>
          Generar una interfaz de usuario donde exista a lo menos 3 componentes
          anidados entre sí.
        </li>
        <li>
          Los componentes creados deben hacer uso de los binding necesarios para
          el traspaso de información y acciones para su interacción.
        </li>
        <li>
          Cada componente debe tener su Lifecycle (ciclo de vida) necesario.
        </li>
        <li>
          La información desplegada debe venir desde api Rest
          (https://developer.marvel.com/).
        </li>
        <li>
          Con la información desplegada desde el Api Rest, hacer un CRUD
          funcional.
        </li>
      </ul>
    </InformationContainer>
  </div>
</template>

<script>
import Title from "../ui/Title.vue";
import Subtitle from "../ui/Subtitle.vue";
import Description from "../ui/Description.vue";
import InformationContainer from "../components/information-container/InformationContainer.vue";
export default {
  name: "HomeView",
  components: {
    Title,
    Subtitle,
    Description,
    InformationContainer,
  },
};
</script>
