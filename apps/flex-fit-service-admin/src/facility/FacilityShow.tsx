import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FACILITY_TITLE_FIELD } from "./FacilityTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const FacilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Partner" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="facilityId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="bookingTime" source="bookingTime" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Facility"
              source="facility.id"
              reference="Facility"
            >
              <TextField source={FACILITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Partner"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Partner"
          target="facilityId"
          label="Partners"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <TextField label="contactEmail" source="contactEmail" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Facility"
              source="facility.id"
              reference="Facility"
            >
              <TextField source={FACILITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
