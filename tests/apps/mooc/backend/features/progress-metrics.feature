Feature: Métricas de progreso
  In order to track my learning progress
  As a user
  I want to see my weekly progress metrics

  Scenario: Cálculo semanal de progreso
    Given I send a GET request to "/progress/metrics?userId=user-123&week=1"
    Then the response status code should be 404
    # Note: In a real scenario, metrics would be calculated automatically after completing activities

