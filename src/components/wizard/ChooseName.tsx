import React from "react";

import NavigationHeader from "./NavigationHeader";
import { Form, Formik } from "formik";
import InputUI from "../ui/InputUI";
import ButtonUI from "../ui/ButtonUI";
import { NameSchema } from "@/schemas/schema";
import { useUserStore } from "@/store/user-store";
import { generateRandomId } from "@/utils/randomId";

interface ChooseNameProps {
  joinGameAction: () => void;
  goBack: () => void;
}

const ChooseName = ({ joinGameAction, goBack }: ChooseNameProps) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div className='w-1/2 mx-auto'>
      <NavigationHeader goBack={goBack} />
      <Formik
        initialValues={{ name: "" }}
        validationSchema={NameSchema}
        onSubmit={(values) => {
          setUser({
            id: user?.id ?? generateRandomId(),
            game: user?.game ?? null,
            name: values.name,
          });
          joinGameAction();
        }}
      >
        {({ errors }) => (
          <Form>
            <InputUI
              label='Name'
              placeholder='Your Name'
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
