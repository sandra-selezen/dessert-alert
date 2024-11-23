import * as yup from 'yup';
import { emailRegExp } from './regexes';

export const subscribeFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
});
