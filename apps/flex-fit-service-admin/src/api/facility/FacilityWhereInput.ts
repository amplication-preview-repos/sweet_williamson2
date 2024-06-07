import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { PartnerListRelationFilter } from "../partner/PartnerListRelationFilter";

export type FacilityWhereInput = {
  booking?: BookingWhereUniqueInput;
  bookings?: BookingListRelationFilter;
  capacity?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  partner?: PartnerWhereUniqueInput;
  partners?: PartnerListRelationFilter;
};
