import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import datos from "../../fixtures/datos.json";

Given("el usuario accede a la plataforma", () => {
  cy.visit("https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfeae"); // Reemplazar con URL real
});

When("ingresa el PIN correcto", () => {
  const pin = "5569";
  pin.split('').forEach((num, index) => {
    cy.get(`#digit${index + 1}`).clear().type(num);
  });
  cy.contains("Ingresar").click();
});


When("ingresa un PIN inválido {string}", (pinInvalido) => {
  pinInvalido.split('').forEach((num, index) => {
    cy.get(`#digit${index + 1}`).clear().type(num);
  });
  cy.contains("Ingresar").click();
});


When("selecciona el filtro {string}", (filtro) => {
  // 1. paso para seleccionar los filtros
  cy.get('div.filter-tab')
    .should('be.visible')
    .click();

  // 2.buscar encotrar y hacer click en "Seleccionar"
  cy.contains('div.select-btn', 'Seleccionar')
    .should('be.visible')
    .click({ force: true });

  // 3.seleccionar la opcion pedida en la prueba 
  cy.get('div.search-options')
    .should('be.visible')
    .find('p')
    .filter((_, el) => el.textContent.trim() === filtro)
    .first()
    .click({ force: true });
});




When("busca el número de embarque", () => {
  // 1.tiem out para reenderizados 
  cy.wait(500);

  // 2. encontrar el input para escribir el embarque a buscar 
  cy.get('input[placeholder="Escribe aquí tu búsqueda"]', { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .should('not.be.disabled')
    .clear()
    .type("prueba 1{enter}");


     cy.wait(500);
});




Then("se muestra la información del embarque correctamente", () => {
  //  identificar patron de confirmacion que la busqueda fue exitosa
  cy.contains('p', 'Prueba 1-02', { timeout: 10000 })
    .should('be.visible');
});


///// inicio de escenarios negativos para robustez 

Then("se muestra un mensaje de error de autenticación", () => {
  cy.contains("PIN incorrecto", { matchCase: false }).should("be.visible");
});

Then("se muestra un mensaje indicando que no se encontró el embarque", () => {
  // Asegura que no haya resultados visibles
  cy.get("div.table-first-element").should("not.exist");

  // Valida el mensaje de error
  cy.contains("No se encontró", { matchCase: false }).should("be.visible");
});
