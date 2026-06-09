## Functional Requirements

### 1. Parking Spot Allocation

- The system shall automatically allocate a parking spot when a vehicle enters.
- Allocation shall be based on:
  - Vehicle type (Motorcycle, Car, Bus)
  - Spot availability

- Only compatible parking spots can be assigned to a vehicle.

### 2. Vehicle Check-In

- The system shall record vehicle entry.
- The system shall generate a parking ticket.
- The ticket shall contain:
  - Ticket ID
  - Vehicle information
  - Assigned parking spot
  - Entry timestamp

### 3. Vehicle Check-Out

- The system shall record vehicle exit.
- The system shall capture the exit timestamp.
- The allocated parking spot shall be released and become available again.

### 4. Parking Fee Calculation

- The system shall calculate parking fees during check-out.
- Fee calculation shall be based on:
  - Vehicle type
  - Parking duration

### 5. Real-Time Availability Management

- The system shall maintain real-time occupancy information.
- Availability shall be updated whenever a vehicle enters or exits.
- The system shall provide availability information at floor level and parking lot level.

### 6. Multi-Floor Support

- The parking lot shall support multiple floors.
- Each floor shall contain multiple parking spots.
- Parking spot allocation may occur across floors.

### 7. Maintenance Management

- The system shall support marking a parking spot as:
  - Available
  - Occupied
  - Under Maintenance

- The system shall support marking a parking floor as:
  - Active
  - Under Maintenance

- The system shall support marking the entire parking lot as:
  - Open
  - Under Maintenance
  - Closed

- Parking spots, floors, or parking lots under maintenance shall not participate in spot allocation.

## Non-Functional Requirements

### Concurrency

- The system shall support multiple simultaneous vehicle entries and exits.
- A parking spot must never be allocated to more than one vehicle at the same time.
- Availability counts must remain consistent under concurrent operations.

### Performance

- Spot allocation should be efficient.
- Availability lookup should be fast and avoid scanning all parking spots whenever possible.

### Extensibility

- The system should support adding new vehicle types.
- The system should support new spot allocation strategies.
- The system should support new fee calculation strategies.

### Reliability

- Ticket information must remain consistent.
- Spot occupancy and availability counts must always remain synchronized.

## Assumptions

- The parking lot contains a predefined number of floors and parking spots.
- One vehicle occupies one parking spot.
- Drivers park in the assigned parking spot.
- System time is used to calculate parking duration.
- Payment processing is outside the scope; only fee calculation is handled by the system.
- Maintenance state changes are performed by an administrator and are outside the normal vehicle entry/exit workflow.
- No advance booking, valet parking, notification system, or parking history management is required.
