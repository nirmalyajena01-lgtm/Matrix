# Campus Safety Intelligence

**Sellable product:** analytics and prevention intelligence for university management.

## Buyer value
Measure response performance, identify hotspots, track SLA compliance and turn incident history into prevention actions.

## API

### POST `/api/v1/events`
Ingest a normalized incident event:
```json
{
  "incidentId":"INC-1042",
  "category":"MEDICAL",
  "severity":"CRITICAL",
  "status":"RESOLVED",
  "building":"Block C",
  "responseMinutes":4.2
}
```

### GET `/api/v1/events`
List ingested events.

### GET `/api/v1/summary`
Returns:
- total incidents
- resolved percentage
- average response time
- critical count
- top hotspots

### GET `/api/v1/health`
Health check.

## Demo
Open `/`. The dashboard includes KPI cards, hotspot ranking, category mix, peak hours, SLA performance and a prevention insight.

## Export
The MVP uses browser print/export so the module stays dependency-light. A production deployment can add server-side PDF/CSV exports.

## Integration
Point the Command Center event sink at this module's `/api/v1/events`. No shared database is required.
