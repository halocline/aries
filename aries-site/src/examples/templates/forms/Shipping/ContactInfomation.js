import React from 'react';
import { Box, FormField, MaskedInput, Text, TextInput } from 'grommet';
import { emailMask, emailValidation, phoneMask } from '../utils/FormValidation';
import PropTypes from 'prop-types';

export const ContactInformation = ({ name }) => (
  <Box>
    <Text size="large" margin={{ vertical: 'small' }}>
      Contact Information
    </Text>
    <FormField
      contentProps={{ width: 'medium' }}
      label="Full Name"
      required
      htmlFor={`full-name-${name}`}
      name="full-name"
    >
      <TextInput id={`full-name-${name}`} name="full-name" />
    </FormField>
    <FormField
      contentProps={{ width: 'medium' }}
      htmlFor={`phone-shipping-${name}}`}
      name="phone-shipping"
      label="Phone Number"
    >
      <MaskedInput
        id={`phone-shipping-${name}}`}
        name="phone-shipping"
        mask={phoneMask}
      />
    </FormField>
    <FormField
      contentProps={{ width: 'medium' }}
      htmlFor={`email-ship-${name}`}
      name="email-shipping"
      required
      label="Email Address"
      validate={emailValidation}
    >
      <MaskedInput
        id={`email-ship-${name}`}
        name="email-shipping"
        mask={emailMask}
      />
    </FormField>
  </Box>
);

ContactInformation.propTypes = {
  name: PropTypes.string.required,
};
