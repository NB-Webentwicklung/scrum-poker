import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import NavigationHeader from "./NavigationHeader";
import { Form, Formik } from "formik";
import InputUI from "../ui/InputUI";
import ButtonUI from "../ui/ButtonUI";
import * as Yup from "yup";

interface ChooseNameProps {
  joinGameAction: () => void;
  goBack: () => void;
}

const ChooseName = ({ joinGameAction, goBack }: ChooseNameProps) => {
  const NameSchema = Yup.object().shape({
    name: Yup.string().required("* Name is required"),
  });

  return (
    <div className='w-1/2 mx-auto'>
      <NavigationHeader goBack={goBack} />
      <Formik
        initialValues={{ name: "" }}
        validationSchema={NameSchema}
        onSubmit={() => {
          joinGameAction();
        }}
      >
        {({ errors }) => (
          <Form>
            <InputUI
              label='Name'
              placeholder='Display Name'
              name='name'
              error={errors.name}
            />
            <ButtonUI label='Join Game' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChooseName;
