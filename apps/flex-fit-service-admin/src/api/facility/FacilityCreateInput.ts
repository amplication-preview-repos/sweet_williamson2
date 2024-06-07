import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingCreateNestedManyWithoutFacilitiesInput } from "./BookingCreateNestedManyWithoutFacilitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { PartnerCreateNestedManyWithoutFacilitiesInput } from "./PartnerCreateNestedManyWithoutFacilitiesInput";

export type FacilityCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutFacilitiesInput;
  capacity?: number | null;
  description?: string | null;
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  partners?: PartnerCreateNestedManyWithoutFacilitiesInput;
};
