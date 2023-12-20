import React, { useState } from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSignupErrorMessage from "@/Components/messageComponents/LoginSignupErrorMessage";
import { IoIosArrowBack, IoMdArrowForward } from "react-icons/io";
import { POST } from "@/repository/AxiosRepository";

const FORM_STEPS = {
  USERNAME: "username",
  PASSWORD: "password",
};

const login = () => {
  const [formStep, setFormStep] = useState(FORM_STEPS.USERNAME);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchemaUsername = Yup.object({
    username: Yup.string().required("Username is required"),
  });

  const validationSchemaPassword = Yup.object({
    password: Yup.string().required("Password is required"),
  });

  const initialValuesUsername = {
    username: "",
  };

  const initialValuesPassword = {
    password: "",
  };

  const onSubmitUsername = (values) => {
    setFormStep(FORM_STEPS.PASSWORD);
  };

  const onSubmitPassword = (values) => {
    console.log("Password submitted with values:", values);
    POST('/users/login' ,  {username:values.username , password:values.password})
  };

  const userNameForm = (formikProps) => {
    return (
      <div className={styles["login-signup-container"]}>
        <div className={styles["logo-wrapper"]}>
          <img
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="Logo"
            className={styles["brand-logo"]}
          />
        </div>
        <div className={styles["authentication-content"]}>
          <h3 className={styles["auth-title"]}>ورود | ثبت‌ نام</h3>
          <span className={styles["greeting-text"]}>سلام!</span>
          <br />
          <span className={styles["instruction-text"]}>
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </span>
          <div>
            <Field
              className={styles["user-input"]}
              type="text"
              name="username"
              id="username"
              placeholder="شماره موبایل یا ایمیل"
            />
            <ErrorMessage name="username" component={LoginSignupErrorMessage} />
            <button
              type="button"
              className={styles["login-btn"]}
              onClick={formikProps.handleSubmit}
            >
              ورود
            </button>
          </div>
          <div />
        </div>
      </div>
    );
  };

  const passwordForm = () => {
    return (
      <div className={styles["login-container"]}>
        <div className={styles["logo-wrapper"]}>
          <img
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="Logo"
            className={styles["brand-logo"]}
          />
          <IoMdArrowForward
            className={styles["arrow-forward"]}
            onClick={() => setFormStep(FORM_STEPS.USERNAME)}
          />
        </div>
        <div className={styles["authentication-content"]}>
          <h3 className={styles["auth-title"]}>رمز عبور را وارد کنید</h3>
        </div>
        <Field
          className={styles["user-input-password"]}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <div className={styles["another-way-enter"]}>
          <span>ورود با رمز یکبار مصرف</span>
          <IoIosArrowBack />
          <span>فراموشی رمز عبور</span>
          <IoIosArrowBack />
        </div>
        <button
          type="submit"
          className={styles["login-btn-password"]}
        >
          تایید
        </button>
      </div>
    );
  };

  return (
    <div className={styles["main-wrapper"]}>

      <Formik
        initialValues={
          formStep === FORM_STEPS.USERNAME
          ? initialValuesUsername
          : initialValuesPassword
        }
        validationSchema={
          formStep === FORM_STEPS.USERNAME
          ? validationSchemaUsername
          : validationSchemaPassword
        }
        onSubmit={
          formStep === FORM_STEPS.USERNAME ? onSubmitUsername : onSubmitPassword
        }
        >
        {(formikProps) => (
          <Form>
          {formStep === FORM_STEPS.USERNAME ? userNameForm(formikProps) : passwordForm()}
        </Form>
        )}
      </Formik>
        </div>
  );
};

export default login;
