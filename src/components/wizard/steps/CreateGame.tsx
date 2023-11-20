import React from "react";
import { useRouter } from "next/navigation";
import { GameScheama } from "@/schemas/schema";
import { useUserStore } from "@/store/userStore";
import { Form, Formik } from "formik";

import ButtonUI from "../../ui/ButtonUI";
import InputUI from "../../ui/InputUI";
import WizardNavigation from "../WizardNavigation";

interface CreateGameProps {
  createGameAction: (game: string) => void;
  createGameDirectAction: (game: string) => void;
  goBack: () => void;
}

const CreateGame = ({
  createGameAction,
  createGameDirectAction,
  goBack,
}: CreateGameProps) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  return (
    <div className='w-1/2 mx-auto'>
      <WizardNavigation goBack={goBack} />
      <Formik
        initialValues={{ game: "" }}
        validationSchema={GameScheama}
        onSubmit={async (values) => {
          if (user.name) {
            // NOTE: await has an impact
            const roomId = await createGameDirectAction(values.game);
            router.push(`/?roomId=${roomId}`);
          } else {
            createGameAction(values.game);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <InputUI
              label='Game'
              placeholder="Game's name"
              name='game'
              error={errors.game}
              autofocus
            />
            <ButtonUI label='Create Game' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateGame;
