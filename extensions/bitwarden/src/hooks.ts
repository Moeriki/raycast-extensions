import { LocalStorage, confirmAlert, Icon, popToRoot } from "@raycast/api";
import { useState, useEffect, useReducer } from "react";
import { Bitwarden } from "./api";
import { DEFAULT_PASSWORD_OPTIONS, LOCAL_STORAGE_KEY } from "./const";
import { PasswordGeneratorOptions } from "./types";

const initialState = {
  password: undefined as string | undefined,
  isGenerating: false,
};

type State = typeof initialState;

type Action =
  | { type: "generate" }
  | { type: "setPassword"; password: string }
  | { type: "fail" }
  | { type: "clear"; password: string };

const passwordReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "generate":
      return { ...state, isGenerating: true };
    case "setPassword":
      return { password: action.password, isGenerating: false };
    case "fail":
      return { ...state, isGenerating: false };
    case "clear":
      return { isGenerating: false, password: undefined };
  }
};

export function usePasswordGenerator(
  bitwardenApi: Bitwarden,
  options: PasswordGeneratorOptions | undefined,
  hookOptions?: { regenerateOnOptionChange: boolean }
) {
  const { regenerateOnOptionChange = true } = hookOptions ?? {};
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  const generatePassword = async () => {
    try {
      if (state.isGenerating) return;
      dispatch({ type: "generate" });
      const password = await bitwardenApi.generatePassword(options);
      dispatch({ type: "setPassword", password });
    } catch (error) {
      dispatch({ type: "fail" });
    }
  };

  useEffect(() => {
    if (!regenerateOnOptionChange || !options) return;
    generatePassword();
  }, [options]);

  return { ...state, regeneratePassword: generatePassword };
}

export const usePasswordOptions = () => {
  const [options, setOptions] = useState<PasswordGeneratorOptions>();

  const setOption = async <Option extends keyof PasswordGeneratorOptions>(
    option: Option,
    value: PasswordGeneratorOptions[Option]
  ) => {
    if (!options || options[option] === value) return;
    const newOptions = { ...options, [option]: value };
    setOptions(newOptions);
    await LocalStorage.setItem(LOCAL_STORAGE_KEY.PASSWORD_OPTIONS, JSON.stringify(newOptions));
  };

  const restoreStoredOptions = async () => {
    const storedOptions = await LocalStorage.getItem<string>(LOCAL_STORAGE_KEY.PASSWORD_OPTIONS);
    const newOptions = { ...DEFAULT_PASSWORD_OPTIONS, ...(storedOptions ? JSON.parse(storedOptions) : {}) };
    setOptions(newOptions);
  };

  useEffect(() => {
    restoreStoredOptions();
  }, []);

  return { options, setOption };
};

export const useOneTimePasswordHistoryWarning = async () => {
  const handleDismissAction = () => popToRoot({ clearSearchBar: false });

  const handlePrimaryAction = () => LocalStorage.setItem(LOCAL_STORAGE_KEY.PASSWORD_ONE_TIME_WARNING, true);

  const displayWarning = async () => {
    const alertWasShown = await LocalStorage.getItem<boolean>(LOCAL_STORAGE_KEY.PASSWORD_ONE_TIME_WARNING);
    if (alertWasShown) return;

    await confirmAlert({
      title: "Warning",
      message: "Password history is not available yet, so make sure to store the password after generating it!",
      icon: Icon.ExclamationMark,
      dismissAction: {
        title: "Go back",
        onAction: handleDismissAction,
      },
      primaryAction: {
        title: "I understand",
        onAction: handlePrimaryAction,
      },
    });
  };

  useEffect(() => {
    displayWarning();
  }, []);
};