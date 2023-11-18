import React from "react";

import NavigationHeader from "../NavigationHeader";
import { Form, Formik } from "formik";
import InputUI from "../../ui/InputUI";
import ButtonUI from "../../ui/ButtonUI";
import { NameSchema } from "@/schemas/schema";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";

interface ChooseNameProps {
  joinGameAction: (name: string) => void;
  goBack: () => void;
}

const ChooseName = ({ joinGameAction, goBack }: ChooseNameProps) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  return (
    <div className='w-1/2 mx-auto'>
      <NavigationHeader goBack={goBack} />
      <Formik
        initialValues={{ name: "" }}
        validationSchema={NameSchema}
        onSubmit={(values) => {
          joinGameAction(values.name);
          router.push(`/?id=${user?.game?.id}`);
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
