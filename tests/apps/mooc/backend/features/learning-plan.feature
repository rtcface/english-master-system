Feature: Plan personalizado de aprendizaje
  In order to have a personalized learning plan
  As a user
  I want to generate a personalized study plan based on my level, goal and availability

  Scenario: Generación del plan individualizado
    Given I send a POST request to "/learning-plans" with body:
    """
    {
      "id": "plan-123",
      "userId": "user-456",
      "currentLevel": "B1",
      "goal": "C2",
      "dailyAvailability": 60
    }
    """
    Then the response status code should be 201
    And the response should be empty

