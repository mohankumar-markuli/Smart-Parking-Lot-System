import { PaymentMethod } from "../enums/paymentMethod";
import { PaymentStatus } from "../enums/paymentStatus";

export class Payment {
  public paymentStatus =
    PaymentStatus.PENDING;

  public paymentMethod =
    PaymentMethod.UPI;

  constructor(
    public paymentId: string,
    public amount: number
  ) {}

  markCompleted(): void {
    this.paymentStatus =
      PaymentStatus.COMPLETED;
  }

  markFailed(): void {
    this.paymentStatus =
      PaymentStatus.FAILED;
  }
}