import * as Yup from "yup";

export const GameScheama = Yup.object().shape({
  game: Yup.string()
    .min(3, "* min 3 chars")
    .max(40, "* max 40 chars")
    .required("* Game name is required"),
});

export const NameSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "* min 3 chars")
    .max(40, "* max 40 chars")
    .required("* Name is required"),
});
