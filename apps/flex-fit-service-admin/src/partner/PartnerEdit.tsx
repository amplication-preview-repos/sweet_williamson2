import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { FacilityTitle } from "../facility/FacilityTitle";

export const PartnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <ReferenceArrayInput
          source="facilities"
          reference="Facility"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FacilityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="Facility"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
