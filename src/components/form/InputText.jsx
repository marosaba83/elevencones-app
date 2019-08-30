import React from "react";
import classNames from "classnames/bind";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

const InputText = ({
  field: { ...fields },
  form: { touched, errors, ...rest },
  ...props
}) => {
  const classNameLabel = classNames({
    hide: !props.label
  });

  const classNameInput = classNames({
    "form-control": true,
    "is-valid": Boolean(
      touched[fields.name] && !errors[fields.name] && fields.value
    ),
    "is-invalid": Boolean(touched[fields.name] && errors[fields.name])
  });

  console.log(fields);
  console.log(rest);

  return (
    <>
      <Label for={props.id} className={classNameLabel}>
        <strong>{props.label}</strong>
      </Label>
      <FormGroup>
        <Input {...props} {...fields} className={classNameInput} />
        <FormFeedback>
          <ErrorMessage name={fields.name} />
        </FormFeedback>
      </FormGroup>
    </>
  );
};
export default InputText;
