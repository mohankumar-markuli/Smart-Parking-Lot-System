# Entities Of Parking Lot System

### 1. ParkingLot

    Represents the entire parking facility. Maintains parking floors, overall availability, and parking lot status.

### 2. ParkingFloor

    Represents a floor within the parking lot. Maintains parking spots, floor-level availability, and floor status.

### 3. ParkingSpot

    Represents an individual parking space. Maintains occupancy status,maintenance status, and supported spot type. [small, mediam, large, ...]

### 4. Vehicle

    Represents a vehicle entering the parking lot. Contains vehicle information and vehicle type. [Motorcycle, Car, Bus]

### 5. Ticket

    Represents a parking session. Stores vehicle information, allocated parking spot, entry time, exit time, and ticket status.

### 6. Payment

    Represents a payment transaction associated with a parking session. Stores payment amount, method, and status.

### 7. EntryGate

    Represents the entry point of the parking lot. Responsible for initiating vehicle check-in.

### 8. ExitGate

    Represents the exit point of the parking lot. Responsible for initiating vehicle check-out.

### 9. DisplayPanel

    Displays real-time parking availability information at the floor level or parking lot level.
