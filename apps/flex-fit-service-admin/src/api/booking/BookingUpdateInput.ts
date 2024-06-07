import { FacilityUpdateManyWithoutBookingsInput } from "./FacilityUpdateManyWithoutBookingsInput";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingTime?: Date | null;
  facilities?: FacilityUpdateManyWithoutBookingsInput;
  facility?: FacilityWhereUniqueInput | null;
  partner?: PartnerWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
