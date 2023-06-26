import * as yup from 'yup';

export const customerRequestValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  customer_email: yup.string().required(),
  request: yup.string().required(),
  company_id: yup.string().nullable(),
});
