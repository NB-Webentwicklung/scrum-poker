import React from "react";
import { useRouter } from "next/navigation";
import { NameSchema } from "@/schemas/schema";
import { useUserStore } from "@/store/user-store";
import { Form, Formik } from "formik";

import ButtonUI from "../../ui/ButtonUI";
import InputUI from "../../ui/InputUI";
import NavigationHeader from "../NavigationHeader";

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
