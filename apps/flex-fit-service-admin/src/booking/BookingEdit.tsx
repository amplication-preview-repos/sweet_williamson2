import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FacilityTitle } from "../facility/FacilityTitle";
import { PartnerTitle } from "../partner/PartnerTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingTime" source="bookingTime" />
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
        <ReferenceInput source="partner.id" reference="Partner" label="Partner">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
