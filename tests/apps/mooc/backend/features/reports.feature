Feature: Exportación de reportes
  In order to generate scientific evidence
  As a researcher
  I want to export reports in different formats with anonymized data

  Scenario: Generación de evidencia científica
    Given I send a POST request to "/reports/generate" with body:
    """
    {
      "id": "report-123",
      "format": "pdf",
      "data": {
        "anonymized": true,
        "statistics": []
      },
      "fileUrl": "https://example.com/report.pdf"
    }
    """
    Then the response status code should be 201
    And the response should be empty

