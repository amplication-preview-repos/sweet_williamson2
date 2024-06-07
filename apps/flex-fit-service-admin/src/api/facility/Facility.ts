import { Booking } from "../booking/Booking";
import { Partner } from "../partner/Partner";

export type Facility = {
  booking?: Booking | null;
  bookings?: Array<Booking>;
  capacity: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  partner?: Partner | null;
  partners?: Array<Partner>;
  updatedAt: Date;
};
