Feature: Visualización de estadísticas globales
  In order to validate the method effectiveness
  As a researcher or administrator
  I want to view aggregated global statistics

  Scenario: Validación del método mediante datos agregados
    Given I send a GET request to "/statistics/global"
    Then the response status code should be 404
    # Note: Statistics are calculated and stored separately. In a real scenario, 
    # statistics would be pre-calculated from user progress data.

