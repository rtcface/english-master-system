Feature: Gestión de usuarios
  In order to manage users and their roles
  As an administrator
  I want to create users and assign roles

  Scenario: Control de roles y acceso
    Given I send a POST request to "/users" with body:
    """
    {
      "id": "user-123",
      "email": "admin@example.com",
      "name": "Admin User",
      "role": "researcher"
    }
    """
    Then the response status code should be 201
    And the response should be empty
    When I send a PUT request to "/users/user-123/role" with body:
    """
    {
      "role": "tutor_ia"
    }
    """
    Then the response status code should be 200
    And the response should be empty

