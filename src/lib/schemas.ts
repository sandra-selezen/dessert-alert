import * as yup from 'yup';
import { emailRegExp } from './regexes';

export const subscribeFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
});

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(emailRegExp, 'Must be a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be no more than 1000 characters')
    .matches(/^[^<>]*$/, 'Message cannot contain HTML tags'),
});
