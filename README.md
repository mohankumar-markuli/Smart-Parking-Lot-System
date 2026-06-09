# Smart Parking Lot System

## Overview

This project implements a Smart Parking Lot System capable of:

- Vehicle Check-In and Check-Out
- Automatic Parking Spot Allocation
- Parking Fee Calculation
- Real-Time Availability Tracking
- Multi-Floor Parking Management
- Basic Concurrency Considerations

The design follows Low-Level Design (LLD) principles and uses extensible design patterns to support future enhancements.

## Functional Requirements

### Parking Spot Allocation

- Automatically assign an available parking spot based on vehicle type and spot availability.
- Support multiple spot types:
  - Motorcycle
  - Compact
  - Large

### Vehicle Check-In

- Record vehicle entry.
- Allocate a parking spot.
- Generate a parking ticket.

### Vehicle Check-Out

- Record vehicle exit.
- Calculate parking fee.
- Generate payment details.
- Release occupied parking spot.

### Real-Time Availability

- Maintain updated parking availability across floors.
- Display current parking status.

### Maintenance Support

- Parking Spot level maintenance.
- Parking Floor level maintenance.
- Parking Lot level maintenance.

## Assumptions

- One vehicle occupies one parking spot.
- Drivers park in the allocated parking spot.
- Parking spots are preconfigured during system initialization.
- Parking duration is calculated using system timestamps.
- Payment is collected during vehicle exit.
- Physical entry and exit gates are abstracted by the ParkingLot entity.
- Maintenance operations are performed by administrators.
- Parking history is not maintained after ticket closure.
- Advance booking is not supported.

## Design Principles

### Single Responsibility Principle (SRP)

Each class has a single responsibility.

Examples:

- ParkingSpot manages spot occupancy.
- Ticket manages parking session information.
- Payment manages payment information.

### Open Closed Principle (OCP)

New parking allocation and fee calculation algorithms can be added without modifying existing code.

### Composition Over Inheritance

ParkingLot contains ParkingFloors.

ParkingFloor contains ParkingSpots.

### Strategy Pattern

Behavior that changes is encapsulated behind interfaces.

## Design Patterns Used

### Parking Allocation Strategy

```text
ParkingLot --> ParkingAllocationStrategy
```

Current Implementation:

```text
FirstAvailableSpotStrategy
```

### Fee Calculation Strategy

```text
ParkingLot --> FeeCalculationStrategy
```

Current Implementation:

```text
HourlyFeeCalculationStrategy
```

## Core Check-In Flow

```text
ParkingLot.checkIn(vehicle)
    |
    +--> ParkingAllocationStrategy.allocateSpot()
    |
    +--> ParkingSpot.parkVehicle()
    |
    +--> Ticket Creation
    |
    +--> Display Refresh
```

## Core Check-Out Flow

```text
ParkingLot.checkOut(ticketId)
    |
    +--> Ticket.closeTicket()
    |
    +--> FeeCalculationStrategy.calculateFee()
    |
    +--> Payment Creation
    |
    +--> ParkingSpot.unparkVehicle()
    |
    +--> Display Refresh
```

## Project LLD Structure

```text
SMART-PARKING-LOT-SYSTEM

docs/
├── 01_Requirements.md
├── 02_EntitiesOfTheSystem.md
├── 03_DetailDesign.md
├── 04_ClassDiagram.md
└── 05_SequenceDiagram.md\

src/
├── entities/
│   ├── DisplayPanel.ts
│   ├── ParkingFloor.ts
│   ├── ParkingLot.ts
│   ├── ParkingSpot.ts
│   ├── Payment.ts
│   ├── Ticket.ts
│   └── Vehicle.ts
│
├── enums/
│   ├── FloorStatus.ts
│   ├── ParkingLotStatus.ts
│   ├── PaymentMethod.ts
│   ├── PaymentStatus.ts
│   ├── SpotStatus.ts
│   ├── SpotType.ts
│   ├── TicketStatus.ts
│   └── VehicleType.ts
│
└── strategies/
    ├── ParkingAllocationStrategy.ts
    ├── FirstAvailableSpotStrategy.ts
    ├── FeeCalculationStrategy.ts
    └── HourlyFeeCalculationStrategy.ts


```

---

## Key Entities

- ParkingLot
- ParkingFloor
- ParkingSpot
- Vehicle
- Ticket
- Payment
- DisplayPanel

## Strategy Components

### ParkingAllocationStrategy

Responsible for selecting the most suitable parking spot.

Current implementation:

```text
FirstAvailableSpotStrategy
```

### FeeCalculationStrategy

Responsible for parking fee calculation.

Current implementation:

```text
HourlyFeeCalculationStrategy
```

## UML Overview

```text
ParkingLot
 ├── ParkingFloor
 │     └── ParkingSpot
 │             └── Vehicle
 │
 ├── Ticket
 ├── Payment
 ├── DisplayPanel
 │
 ├── ParkingAllocationStrategy
 └── FeeCalculationStrategy
```
