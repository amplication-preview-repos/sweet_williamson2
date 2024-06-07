import { FacilityCreateNestedManyWithoutBookingsInput } from "./FacilityCreateNestedManyWithoutBookingsInput";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  bookingTime?: Date | null;
  facilities?: FacilityCreateNestedManyWithoutBookingsInput;
  facility?: FacilityWhereUniqueInput | null;
  partner?: PartnerWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
