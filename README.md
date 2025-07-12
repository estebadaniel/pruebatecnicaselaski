# Prueba técnica de automatización Selaski

Este repositorio contiene la solución automatizada para la prueba técnica solicitada, implementada utilizando Cypress junto con el preprocesador Cucumber para el enfoque BDD (Behavior Driven Development).

## Estructura del proyecto

- `cypress/e2e/features/`: Contiene los archivos `.feature` escritos en lenguaje Gherkin que describen los escenarios de prueba.
- `cypress/support/step_definitions/`: Implementaciones de los pasos definidos en los archivos feature.
- `cypress.config.js`: Archivo de configuración principal de Cypress con la integración de Cucumber y el reporter.
- `package.json`: Manejo de dependencias y scripts del proyecto.

## Escenarios automatizados

Se automatizaron los siguientes flujos definidos en la prueba técnica:

1. Autenticación con PIN válido
2. Autenticación con PIN inválido
3. Selección del filtro "Embarque"
4. Búsqueda por número de embarque
5. Visualización de los resultados esperados
6. Validación del mensaje cuando no se encuentra un embarque

Todos los pasos consideran tiempos de espera y selectores robustos para garantizar la estabilidad en ejecución.

## Tecnologías utilizadas

- Cypress
- @badeball/cypress-cucumber-preprocessor
- Mochawesome Reporter
- Node.js

## deraciones adicionales

- Se utilizó el preprocesador `@badeball/cypress-cucumber-preprocessor` para la ejecución de pruebas escritas en Gherkin.
- El proyecto está configurado para generar reportes con `cypress-mochawesome-reporter`.
- Se implementaron buenas prácticas como el uso de `data-driven selectors`, validaciones visibles y esperas controladas.
- Se utilizaron expresiones regulares y filtros DOM para interactuar únicamente con los elementos esperados, minimizando la posibilidad de interferencia con elementos similares en la interfaz.
- al validar que es una web bastante amplia se decido usar un POM para poder hacer un modelo escalable

## Autor

Daniel Esteban Ortiz Molano
