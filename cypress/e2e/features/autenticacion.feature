Feature: Flujo de Autenticación y Búsqueda de Embarque

  Scenario: Autenticarse y consultar información de embarque
    Given el usuario accede a la plataforma
    When ingresa el PIN correcto
    And selecciona el filtro "Embarque"
    And busca el número de embarque
    Then se muestra la información del embarque correctamente

  Scenario: El usuario ingresa un PIN inválido
    Given el usuario accede a la plataforma
    When ingresa un PIN inválido "1234"
    Then se muestra un mensaje de error de autenticación

  Scenario: El usuario busca un embarque inexistente
    Given el usuario accede a la plataforma
    When ingresa el PIN correcto
    And selecciona el filtro "Embarque"
    And busca el número de embarque
    Then se muestra un mensaje indicando que no se encontró el embarque
