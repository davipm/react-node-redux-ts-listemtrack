import { useReducer, useState } from "react";
import { Interface } from "../components/ExerciseCreate";

export function useHandleForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [userInput, setUserInput] = useReducer(
    (state: Interface, newState: Interface) => ({
      ...state,
      ...newState,
    }),
    {
      username: "",
      description: "",
      duration: "",
      date: selectedDate,
    }
  );

  const onReset = () => {
    setUserInput({
      username: "",
      description: "",
      duration: "",
      date: selectedDate,
    });
  };

  return { userInput, setUserInput, setSelectedDate, selectedDate, onReset };
}
