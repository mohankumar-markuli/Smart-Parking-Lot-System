# Entities Of Parking Lot System

### 1. ParkingLot

    Represents the entire parking facility.
    Maintains parking floors, overall availability, parking lot status.

### 2. ParkingFloor

    Represents a floor within the parking lot.
    Maintains parking spots, floor-level availability, and floor status.

### 3. ParkingSpot

    Represents an individual parking space.
    Maintains occupancy status, maintenance status, assigned vehicle information, and supported spot type.

### 4. Vehicle

    Represents a vehicle entering the parking lot.
    Contains vehicle information and vehicle type.

### 5. Ticket

    Represents a parking session.
    Stores vehicle information, allocated parking spot, entry time, exit time, and ticket status.

### 6. Payment

    Represents a payment transaction associated with a parking session.
    Stores payment amount, method, and status.

### 7. DisplayPanel

    Displays real-time parking availability information at the floor level or parking lot level.
