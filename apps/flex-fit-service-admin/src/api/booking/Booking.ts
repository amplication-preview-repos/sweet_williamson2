import { Facility } from "../facility/Facility";
import { Partner } from "../partner/Partner";
import { User } from "../user/User";

export type Booking = {
  bookingTime: Date | null;
  createdAt: Date;
  facilities?: Array<Facility>;
  facility?: Facility | null;
  id: string;
  partner?: Partner | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
