Feature: Análisis de pronunciación
  In order to improve my pronunciation
  As a user
  I want to receive pronunciation analysis with scores and feedback

  Scenario: Evaluación automática del speaking
    Given I send a POST request to "/pronunciation/analyze" with body:
    """
    {
      "id": "analysis-123",
      "userId": "user-456",
      "audioUrl": "https://example.com/audio.mp3",
      "score": {
        "pronunciation": 85,
        "fluency": 80,
        "coherence": 90
      },
      "feedback": {
        "message": "Good pronunciation overall, work on fluency",
        "suggestions": ["Practice speaking more slowly", "Focus on word stress"]
      }
    }
    """
    Then the response status code should be 201
    And the response should be empty

