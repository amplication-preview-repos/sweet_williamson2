import { BookingUpdateManyWithoutPartnersInput } from "./BookingUpdateManyWithoutPartnersInput";
import { FacilityUpdateManyWithoutPartnersInput } from "./FacilityUpdateManyWithoutPartnersInput";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";

export type PartnerUpdateInput = {
  address?: string | null;
  bookings?: BookingUpdateManyWithoutPartnersInput;
  contactEmail?: string | null;
  facilities?: FacilityUpdateManyWithoutPartnersInput;
  facility?: FacilityWhereUniqueInput | null;
  name?: string | null;
};
