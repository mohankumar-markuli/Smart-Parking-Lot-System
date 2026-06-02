# Smart-Parking-Lot-System
Low-level architecture for a backend system of a smart parking lot. This system will handle vehicle entry and exit management, parking space allocation, and fee calculation.

Functional Requirements:

- Parking Spot Allocation: Automatically assign an available parking spot to a vehicle when it enters, based on the vehicle’s size (e.g., motorcycle, car, bus).
- Check-In and Check-Out: Record the entry and exit times of vehicles.
- Parking Fee Calculation: Calculate fees based on the duration of stay and vehicle type.
- Real-Time Availability Update: Update the availability of parking spots in real-time as vehicles enter and leave.

Design Aspects to Consider:

- Data Model: Design a database schema to manage parking spots, vehicles, and parking transactions.
- Algorithm for Spot Allocation: Develop an algorithm to efficiently assign parking spots to incoming vehicles.
- Fee Calculation Logic: Implement logic to calculate fees based on parking duration and vehicle type.
- Concurrency Handling: Ensure the system can handle multiple vehicles entering or exiting simultaneously.
