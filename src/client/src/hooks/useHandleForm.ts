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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const onReset = () => {
    setUserInput({
      username: "",
      description: "",
      duration: "",
      date: selectedDate,
    });
  };

  return {
    userInput,
    setUserInput,
    selectedDate,
    onReset,
    handleDateChange,
  };
}
