import { FirebaseAuthTypes } from "@react-native-firebase/auth";

let confirmation: FirebaseAuthTypes.ConfirmationResult | null = null;

export const setConfirmation = (c: FirebaseAuthTypes.ConfirmationResult) => {
  confirmation = c;
};

export const getConfirmation = () => {
  return confirmation;
};
