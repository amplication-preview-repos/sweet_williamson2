import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingUpdateManyWithoutFacilitiesInput } from "./BookingUpdateManyWithoutFacilitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { PartnerUpdateManyWithoutFacilitiesInput } from "./PartnerUpdateManyWithoutFacilitiesInput";

export type FacilityUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutFacilitiesInput;
  capacity?: number | null;
  description?: string | null;
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  partners?: PartnerUpdateManyWithoutFacilitiesInput;
};
