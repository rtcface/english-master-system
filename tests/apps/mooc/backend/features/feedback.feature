Feature: Retroalimentación personalizada del tutor virtual
  In order to improve my performance
  As a user
  I want to receive personalized feedback after completing tasks

  Scenario: Generación de feedback adaptativo
    Given I send a GET request to "/feedback/task-123"
    Then the response status code should be 404
    # Note: Feedback is generated automatically when a task is completed

