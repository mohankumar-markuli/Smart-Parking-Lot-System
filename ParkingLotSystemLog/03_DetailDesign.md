## 01. ParkingLot

### Attributes

- lotId: string
- parkingFloors: ParkingFloor[]
- displayPanel: DisplayPanel
- allocationStrategy: ParkingAllocationStrategy
- feeCalculationStrategy: FeeCalculationStrategy
- activeTickets: Map<string, Ticket>
- status: ParkingLotStatus

### Behaviors

- checkIn(vehicle: Vehicle): Ticket
- checkOut(ticketId: string): Payment
- allocateSpot(vehicle: Vehicle): ParkingSpot
- releaseSpot(ticket: Ticket): void
- getAvailability(): Map<SpotType, number>
- refreshDisplay(): void

### Relationships

- HAS-A (Strong) ParkingFloor
- HAS-A (Weak) DisplayPanel
- USES ParkingAllocationStrategy
- USES FeeCalculationStrategy
- USES Ticket
- USES Payment

## 02. ParkingFloor

### Attributes

- floorNumber: number
- parkingSpots: ParkingSpot[]
- status: FloorStatus

### Behaviors

- addSpot(spot: ParkingSpot): void
- removeSpot(spot: ParkingSpot): void
- getAvailableSpots(spotType: SpotType): ParkingSpot[]
- getAvailabilityCount(spotType: SpotType): number

### Relationships

- HAS-A (Strong) ParkingSpot

## 03. ParkingSpot

### Attributes

- spotId: string
- spotType: SpotType
- status: SpotStatus
- parkedVehicle: Vehicle | null

### Behaviors

- canFitVehicle(vehicle: Vehicle): boolean
- parkVehicle(vehicle: Vehicle): void
- unparkVehicle(): void
- isAvailable(): boolean

### Relationships

- HAS-A (Weak) Vehicle

## 04. Vehicle

### Attributes

- registrationNumber: string
- vehicleType: VehicleType

### Behaviors

- getVehicleType(): VehicleType

### Relationships

- ASSOCIATED WITH Ticket

## 05. Ticket

### Attributes

- ticketId: string
- vehicle: Vehicle
- parkingSpot: ParkingSpot
- entryTime: Date
- exitTime: Date | null
- status: TicketStatus

### Behaviors

- closeTicket(): void
- getParkingDuration(): number

### Relationships

- HAS-A Vehicle
- HAS-A ParkingSpot

## 06. Payment

### Attributes

- paymentId: string
- amount: number
- paymentMethod: PaymentMethod
- paymentStatus: PaymentStatus

### Behaviors

- processPayment(): boolean

### Relationships

- ASSOCIATED WITH Ticket

## 07. DisplayPanel

### Attributes

- panelId: string

### Behaviors

- displayAvailability(): void
- refresh(): void

### Relationships

- USES ParkingLot
- USES ParkingFloor

## ParkingAllocationStrategy

### Behaviors

- allocateSpot(vehicle: Vehicle, parkingLot: ParkingLot): ParkingSpot | null

### Relationships

- USED BY ParkingLot

## FeeCalculationStrategy

### Behaviors

- calculateFee(ticket: Ticket): number

### Relationships

- USED BY ParkingLot

## Relationship Summary

```

ParkingLot
    ->  HAS-A ParkingFloor (Strong)
    ->  HAS-A DisplayPanel (Weak)
    ->  USES ParkingAllocationStrategy
    ->  USES FeeCalculationStrategy
    ->  CREATES Ticket
    ->  CREATES Payment

ParkingFloor
    ->  HAS-A ParkingSpot (Strong)

ParkingSpot
    ->  HAS-A Vehicle (Weak)

Ticket
    ->  HAS-A Vehicle
    ->  HAS-A ParkingSpot

Payment
    ->  ASSOCIATED WITH Ticket

```

## System Flow

```
ParkingLot
  -> EntryGate
      -> AllocationStrategy

ParkingLot
  -> ExitGate
      -> FeeCalculationStrategy
```

```
ParkingLot.checkIn(vehicle)
    -> AllocationStrategy
    -> Ticket Creation

ParkingLot.checkOut(ticket)
    -> FeeCalculationStrategy
    -> Payment Creation
    -> Spot Release
```
