import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import styles from "./signup.module.css";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { POST } from "@/repository/AxiosRepository";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const index = () => {
  const router = useRouter();
  const initialValue = {
    phoneNumber: "",
    password: "",
  };

  const submitHandler = async (values) => {
    const data = {
      id: 0,
      username: values.phoneNumber,
      password: values.password,
      role: "string",
      active: true,
      enabled: true,
      lock: true,
      expired: true,
    };

    const response = await POST("/users/register", data);
    if (response.data.id !== 0) {
      router.push("/login");
    }
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("شماره موبایل الزامی است")
      .matches(/^[0-9]*$/, "شماره موبایل باید عددی باشد")
      .min(10, "شماره موبایل باید حداقل 10 رقم باشد")
      .max(12, "شماره موبایل باید حداکثر 12 رقم باشد"),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
  });

  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["login-container"]}>
        <div className={styles["logo-wrapper"]}>
          <img
            src={"/images/logo.svg"}
            alt="Logo"
            className={styles["brand-logo"]}
          />
        </div>
        <div className={styles["authentication-content"]}>
          <h3 className={styles["auth-title"]}>ثبت‌ نام</h3>
          <span className={styles["greeting-text"]}>سلام!</span>
          <br />
          <span className={styles["instruction-text"]}>
            شماره موبایل و رمز عبور خود را وارد کنید
          </span>
          <div />
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={submitHandler}
          >
            {({ errors, values, handleChange, handleBlur, touched }) => {
              const debouncedPhoneNumber = useDebounce(
                values.phoneNumber,
                1000,
              );
              return (
                <Form className={styles["auth-form"]}>
                  <Field
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles["user-input"]}
                    placeholder={"شماره موبایل"}
                  />
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    debouncedPhoneNumber === values.phoneNumber && (
                      <div>{errors.phoneNumber}</div>
                    )}
                  <Field
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles["user-input"]}
                    placeholder={"رمز عبور"}
                  />
                  {errors.password && touched.password && (<div>{errors.password}</div>)}
                  <button type="submit" className={styles["login-btn"]}>
                    ورود
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;