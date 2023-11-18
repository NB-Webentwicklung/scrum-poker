import React from "react";
import NavigationHeader from "./NavigationHeader";
import { Field, Form, Formik } from "formik";
import InputUI from "../ui/InputUI";
import ButtonUI from "../ui/ButtonUI";
import * as Yup from "yup";

interface CreateGameProps {
  startGameAction: () => void;
  goBack: () => void;
}

const CreateGame = ({ startGameAction, goBack }: CreateGameProps) => {
  const GameScheama = Yup.object().shape({
    game: Yup.string().required("* Game name is required"),
  });

  return (
    <div className='w-1/2 mx-auto'>
      <NavigationHeader goBack={goBack} />
      <Formik
        initialValues={{ game: "" }}
        validationSchema={GameScheama}
        onSubmit={() => {
          startGameAction();
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
