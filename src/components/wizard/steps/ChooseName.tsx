import React from "react";
import { useRouter } from "next/navigation";
import { NameSchema } from "@/schemas/schema";
import { useUserStore } from "@/store/userStore";
import { Form, Formik } from "formik";

import ButtonUI from "../../ui/ButtonUI";
import InputUI from "../../ui/InputUI";
import WizardNavigation from "../WizardNavigation";

interface ChooseNameProps {
  createUserAction: (name: string) => void;
  goBack: () => void;
}

const ChooseName = ({ createUserAction, goBack }: ChooseNameProps) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  return (
    <div className='w-1/2 mx-auto'>
      <WizardNavigation goBack={goBack} />
      <Formik
        initialValues={{ name: "" }}
        validationSchema={NameSchema}
        onSubmit={(values) => {
          createUserAction(values.name);
          router.push(`/?roomId=${user?.game?.id}`);
        }}
      >
        {({ errors }) => (
          <Form>
            <InputUI
              label='Name'
              placeholder='Your Name'
              name='name'
              error={errors.name}
              autofocus
            />
            <ButtonUI label='Join Game' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChooseName;
