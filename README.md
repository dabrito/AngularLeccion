Desarrolle una aplicación front-end con angular que consuma la información del siguiente servicio:

https://www.themealdb.com/api/json/v1/1/search.php?s=

La url posee información acerca de recetas de cocina (incluyendo imagen del plato). Muestre la información en elementos a su elección [No es necesario que muestre toda la información de un plato-seleccione la información relevante, la imagen es obligatoria].

La estructura de página debe estar dividida en mínimo los siguientes componentes:

**header: Cabecera con datos de la empresa
**menu: Menú de opciones [Home-Platos]
**home: con información del Restaurante [a su gusto, debe utilizar diferentes componentes para mostrar la información, el carrusel es obligatorio.]
**platos: Carga información del servicio
**footer: Información del desarrollador

**service/meal: Servicio que extrae la informacion de la api

La organización de los componentes queda a su criterio, el componente Home y platos debe cargarse mediante rutas accesibles desde el menú de opciones.