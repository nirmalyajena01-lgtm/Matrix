# Emergency Reporting Engine

**Sellable product:** embeddable SOS + incident reporting infrastructure for existing campus apps.

## Buyer value
Add emergency reporting without rebuilding your app.

## API

### POST `/api/v1/incidents`
Creates and prioritizes an incident.

Required:
- `category`: MEDICAL | FIRE | HARASSMENT | UNSAFE_LOCATION | INFRASTRUCTURE_FAILURE | ACCIDENT | OTHER
- `description`

Optional:
- `anonymous`
- `reporterName`
- `latitude`
- `longitude`
- `building`
- `landmark`
- `evidenceUrl`

Response:
```json
{
  "incidentId":"INC-1042",
  "priority":{"severity":"CRITICAL"},
  "data":{"status":"REPORTED"}
}
```

### GET `/api/v1/incidents`
Returns incident records for the buyer's integration.

### PATCH `/api/v1/incidents/:id/status`
```json
{"status":"RESPONDING"}
```

### GET `/api/v1/health`
Module health check.

## Example
```bash
curl -X POST http://localhost:3000/api/v1/incidents   -H "Content-Type: application/json"   -d '{"category":"MEDICAL","description":"Student collapsed near Block C","anonymous":true,"latitude":20.3524,"longitude":85.8185,"building":"Block C"}'
```

## Embeddable React widget
`components/ReportingWidget.tsx` is intentionally self-contained. Copy it into a buyer app and point submission to their deployed `/api/v1/incidents`.

## Demo
Open `/`, submit a medical emergency, then open My Reports.

## Privacy note
The prototype models anonymous mode by storing `reporterName=null` in the incident record. Production should physically separate identity records into a restricted identity store and use scoped access/audit logs.
