import { Booking } from "../booking/Booking";
import { Facility } from "../facility/Facility";

export type Partner = {
  address: string | null;
  bookings?: Array<Booking>;
  contactEmail: string | null;
  createdAt: Date;
  facilities?: Array<Facility>;
  facility?: Facility | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
