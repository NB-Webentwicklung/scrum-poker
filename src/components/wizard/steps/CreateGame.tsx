import React from "react";
import { GameScheama } from "@/schemas/schema";
import { Form, Formik } from "formik";

import ButtonUI from "../../ui/ButtonUI";
import InputUI from "../../ui/InputUI";
import WizardNavigation from "../WizardNavigation";

interface CreateGameProps {
  createGameAction: (game: string) => void;
  goBack: () => void;
}

const CreateGame = ({ createGameAction, goBack }: CreateGameProps) => {
  return (
    <div className='w-1/2 mx-auto'>
      <WizardNavigation goBack={goBack} />
      <Formik
        initialValues={{ game: "" }}
        validationSchema={GameScheama}
        onSubmit={(values) => {
          createGameAction(values.game);
          // TODO: go direct to game if localStorage has a name
          // if (user.name) {
          //   router.push(`/?roomId=${user?.game?.id}`);
          // }
        }}
      >
        {({ errors }) => (
          <Form>
            <InputUI
              label='Game'
              placeholder="Game's name"
              name='game'
              error={errors.game}
            />
            <ButtonUI label='Create Game' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateGame;
