# Responder Command Center

**Sellable product:** the operational control room for campus security, medical, fire and authority teams.

## Buyer value
Turn raw reports into a prioritized dispatch workflow.

## API

### POST `/api/v1/incidents`
Accepts an incident from any reporting engine.

### GET `/api/v1/incidents`
Returns active incidents.

### POST `/api/v1/incidents/:id/assign`
Selects the nearest available responder and calculates ETA.

### PATCH `/api/v1/incidents/:id`
Updates status/responder/ETA.

### POST `/api/v1/alerts`
Creates a geofenced broadcast alert record.

### GET `/api/v1/analytics/summary`
Returns a lightweight operational summary for analytics integrations.

### GET `/api/v1/health`
Health check.

## Demo
Open `/`. Select an incident → Assign Best Responder → Mark Responding → Resolve.

## Integration
Configure `REPORTING_ENGINE_URL`. The command center will push status changes back to the reporting engine.

## Security boundary
Production authority endpoints must require role-based authorization and audit logging. Never expose responder controls to students.
