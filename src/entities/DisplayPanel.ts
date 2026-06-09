import { SpotType } from "../enums/spotType";

export class DisplayPanel {
  constructor(
    public panelId: string
  ) {}

  refresh(
    availability: Map<SpotType, number>
  ): void {
    console.log(
      "Parking Availability",
      Object.fromEntries(availability)
    );
  }
}