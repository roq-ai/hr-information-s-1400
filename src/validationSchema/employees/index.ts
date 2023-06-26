import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  salary: yup.number().integer().required(),
  vacation_days: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
