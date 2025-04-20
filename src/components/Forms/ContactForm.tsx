"use client";

import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';

import { contactFormSchema } from '@/lib/schemas';

export const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  const onSubmitForm = (values: typeof initialValues, formikHelpers: FormikHelpers<typeof initialValues>) => {
    alert("Your message was sent ✅");
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <Field
          required
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          className="w-full mb-6 border-grey10 placeholder:text-black100 text-black100"
        />
        <Field
          required
          id='email'
          name='email'
          type='email'
          placeholder='Email Address'
          className="w-full mb-6 border-grey10 placeholder:text-black100 text-black100"
        />
        <Field
          id='message'
          name='message'
          type='text'
          as='textarea'
          placeholder='Message'
          rows="5"
          className="w-full mb-6 resize-y max-h-[300px] min-h-[120px] border-grey10 placeholder:text-black100 text-black100"
        />
        <button
          type="submit"
          className="w-full flex-none rounded-full py-5 px-10 bg-pink100 text-white hover:shadow-md shadow-pink font-medium transition-shadow"
        >
          Send
        </button>
      </Form>
    </Formik>
  )
}
