import React, { useState } from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSignupErrorMessage from "@/Components/messageComponents/LoginSignupErrorMessage";
import { IoIosArrowBack, IoMdArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "@/Redux/features/users/UsersSlice";
import {useRouter} from "next/router";

const FORM_STEPS = {
  USERNAME: "username",
  PASSWORD: "password",
};

const login = () => {
  const [formStep, setFormStep] = useState(FORM_STEPS.USERNAME);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.user)
  const router = useRouter()

  const validationSchemaUsername = Yup.object({
    username: Yup.string()
      .test(
        "email-or-phone-number",
        "لطفا یک ایمیل معتبر یا یک شماره تلفن معتبر وارد کنید.",
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneNumberRegex = /^(09)\d{9}$/;
          return emailRegex.test(value) || phoneNumberRegex.test(value);
        },
      )
      .required("لطفا این قسمت را خالی نگذارید."),
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

  const onSubmitUsername = () => {
    setFormStep(FORM_STEPS.PASSWORD);
  };

  const onSubmitPassword = (values) => {
    dispatch(loginUser(values))
    if(token){
      router.push('/')
    }
  };

  const userNameForm = (formikProps) => {
    return (
      <div className={styles["login-container"]}>
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
          <div className={styles["auth-form-container"]}>
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
        <div className={styles["auth-form-container"]}>
          <Field
            className={styles["user-input-password"]}
            type="password"
            name="password"
            id="password"
            placeholder=""
          />
          <div className={styles["another-way-enter"]}>
            <span>ورود با رمز یکبار مصرف</span>
            <IoIosArrowBack />
            <span>فراموشی رمز عبور</span>
            <IoIosArrowBack />
          </div>
          <button type="submit" className={styles["login-btn-password"]}>
            تایید
          </button>
        </div>
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
            {formStep === FORM_STEPS.USERNAME
              ? userNameForm(formikProps)
              : passwordForm()}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default login;
