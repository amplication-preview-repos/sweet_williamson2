import { BookingCreateNestedManyWithoutPartnersInput } from "./BookingCreateNestedManyWithoutPartnersInput";
import { FacilityCreateNestedManyWithoutPartnersInput } from "./FacilityCreateNestedManyWithoutPartnersInput";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";

export type PartnerCreateInput = {
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutPartnersInput;
  contactEmail?: string | null;
  facilities?: FacilityCreateNestedManyWithoutPartnersInput;
  facility?: FacilityWhereUniqueInput | null;
  name?: string | null;
};
