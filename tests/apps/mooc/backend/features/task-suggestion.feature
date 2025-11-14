Feature: Sugerencia de tareas auténticas
  In order to practice with authentic tasks
  As a user
  I want to receive weekly task suggestions based on my progress

  Scenario: Recomendación de tarea semanal
    Given I send a GET request to "/tasks/suggestions?userId=user-123&profession=Software Engineer"
    Then the response status code should be 200
    And the response should contain a task suggestion

