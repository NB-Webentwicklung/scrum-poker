import React from "react";
import NavigationHeader from "../NavigationHeader";
import { Form, Formik } from "formik";
import InputUI from "../../ui/InputUI";
import ButtonUI from "../../ui/ButtonUI";
import { GameScheama } from "@/schemas/schema";
import { useUserStore } from "@/store/user-store";
import { generateRandomId } from "@/utils/randomId";

interface CreateGameProps {
  createGameAction: (game: string) => void;
  goBack: () => void;
}

const CreateGame = ({ createGameAction, goBack }: CreateGameProps) => {
  return (
    <div className='w-1/2 mx-auto'>
      <NavigationHeader goBack={goBack} />
      <Formik
        initialValues={{ game: "" }}
        validationSchema={GameScheama}
        onSubmit={(values) => {
          createGameAction(values.game);
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
