"use client";

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { subscribeFormSchema } from '@/lib/schemas';

export const SubscribeForm = () => {
  const initialValues = {
    email: '',
  }

  const onSubmitForm = (values: { email: string }, formikHelpers: FormikHelpers<{ email: string }>) => {
    alert(values.email);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={subscribeFormSchema}
      onSubmit={onSubmitForm}
    >
      <Form
        className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-5 items-center"
      >
        <div className="w-full">
          <Field
            required
            id='email'
            name='email'
            type='email'
            placeholder='Email Address'
            className="w-full border-white placeholder:text-white text-white"
          />
        </div>
        <button
          type="submit"
          className="w-48 flex-none rounded-full py-5 px-10 bg-white text-pink100 hover:shadow-md shadow-pink font-medium transition-shadow"
        >
          Subscribe Now
        </button>
      </Form>
    </Formik>
  )
}
