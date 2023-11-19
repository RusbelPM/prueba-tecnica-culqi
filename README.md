# Culqi App - Rosvit

Prueba técnica

## Tecnologias  Usadas

`Vue` 3: utilizado para construir la interfaz de usuario.
`Vue` Router 4: Para el enrutamiento en la aplicación.
`Axios`: Una biblioteca para realizar solicitudes HTTP.
`Pinia`: Para la gestión del estado de la aplicación.
`Material` Design Icons: Iconos utilizados en el diseño de materiales.
`Vue3` Loading Overlay: Para mostrar overlays de carga en la aplicación.
`Tailwind` CSS: Un marco de diseño utilitario para diseñar la interfaz de usuario.
`Vite`: Un entorno de desarrollo rápido para proyectos Vue.
`TypeScript`: Un superconjunto tipado de JavaScript.
`Autoprefixer`, PostCSS: Herramientas para procesar y aplicar estilos CSS automáticamente.
`npm-run-all2`: Para ejecutar múltiples scripts npm en paralelo o en serie.

## Configuración recomendada del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y desactiva Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Soporte de Tipo para Importaciones `.vue` en TS

TypeScript no puede manejar información de tipo para importaciones `.vue` de manera predeterminada, por lo que reemplazamos la CLI `tsc` con `vue-tsc` para la verificación de tipos. En los editores, necesitamos [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) para que el servicio TypeScript sea consciente de los tipos `.vue`.

Si el complemento independiente de TypeScript no es lo suficientemente rápido para ti, Volar también ha implementado un [Modo de Toma de Control](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) que es más eficiente. Puedes habilitarlo con los siguientes pasos:

1. Deshabilita la Extensión de TypeScript incorporada
    1) Ejecuta `Extensions: Show Built-in Extensions` desde la paleta de comandos de VSCode
    2) Encuentra `TypeScript and JavaScript Language Features`, haz clic derecho y selecciona `Disable (Workspace)`
2. Recarga la ventana de VSCode ejecutando `Developer: Reload Window` desde la paleta de comandos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Ingresa al directorio: `cd tu-proyecto`
3. Instala las dependencias: `npm install`


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Contribución

Si deseas contribuir, sigue estos pasos:

1. Realiza un fork del proyecto.
2. Crea una nueva rama para tu contribución: `git checkout -b feature/nueva-funcionalidad`
3. Realiza los cambios y realiza un commit: `git commit -m "Añade nueva funcionalidad"`
4. Realiza un push a tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

[![Build Status](https://travis-ci.org/tu-usuario/tu-proyecto.svg?branch=master)](https://travis-ci.org/tu-usuario/tu-proyecto)

