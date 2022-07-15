import React from 'react';
import {Formik} from "formik";

export const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{email: '', password: '',rememberMe: false}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {

                    props.onSubmit(values)
                    setSubmitting(false);

                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                placeholder={'email'}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div>
                            <input
                                placeholder={'password'}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        <div>
                            <input type="checkbox"
                                   name="rememberMe"
                                   value={values.rememberMe}
                                   onChange={handleChange}
                                   onBlur={handleBlur}/>remember me
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

