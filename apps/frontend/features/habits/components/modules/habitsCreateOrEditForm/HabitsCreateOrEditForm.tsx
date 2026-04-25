"use client";

import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { SubmitEventHandler, useEffect, useState } from "react";
import { PlusIcon, ChevronDownIcon, EditIcon } from "lucide-react";

import { HABIT_INGAGES, HABITS } from "@/features/habits/lib/habits.constants";
import InputLabel from "@/features/general/components/modules/inputLabel/InputLabel";

type HabitsCreateOrEditFormPropsT = {
  habitId?: number;
  isEditMode?: boolean;
}

function HabitsCreateOrEditForm({ habitId, isEditMode }: HabitsCreateOrEditFormPropsT) {
  console.log(habitId);

  const defaultHabit = HABITS.data.find(item => item.id === habitId);

  const [selectedIngage, setSelectedIngage] =
    useState<SelectBoxOptionT | null>(null);

  useEffect(() => {
    if (defaultHabit) {
      setSelectedIngage(HABIT_INGAGES.find(item => item.value === defaultHabit.ingage) || null);
    }
  }, []);

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const fd = new FormData(ev.target);

    selectedIngage && fd.append("ingege", selectedIngage.value);

    console.log("title --->", fd.get("title"));
    console.log("description --->", fd.get("description"));
    console.log("ingege --->", fd.get("ingege"));
  }

  return (
    <form
      className="wrapper"
      onSubmit={submitHandler}
    >
      <InputLabel required htmlFor="title">
        Title
      </InputLabel>
      <label htmlFor="title" className="input input-outline">
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Habit..."
          className="input-field"
          defaultValue={defaultHabit?.title}
        />
      </label>

      <InputLabel htmlFor="description">
        Description
      </InputLabel>
      <label htmlFor="description" className="input input-outline">
        <textarea
          id="description"
          name="description"
          className="input-field"
          placeholder="Explain your habit..."
          defaultValue={defaultHabit?.description || undefined}
        />
      </label>

      <InputLabel required htmlFor="ingage-field">
        Ingage
      </InputLabel>
      <SelectBox
        direction="y"
        options={HABIT_INGAGES}
        optionValue={selectedIngage}
        setOptionValue={setSelectedIngage}
      >
        <SelectBox.Input className="select-box-input input input-outline group" htmlFor="ingage-field">
          <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
          <SelectBox.Field
            type="text"
            id="ingage-field"
            name="ingage-field"
            className="input-field"
            placeholder="Select a ingage..."
          />
          <SelectBox.List className="select-box-list offset bg-background-thin">
            <SelectBox.Options
              className="select-box-option data-[state=false]:element-rounded-full data-[state=false]:btn-soft data-[state=true]:btn-fill"
            />
          </SelectBox.List>
        </SelectBox.Input>
      </SelectBox>

      <button className="btn btn-soft element-rounded-full mx-auto palette-success mt-12">
        <span>
          {isEditMode ? "Edit" : "Create"}
        </span>
        {isEditMode ? <EditIcon className="element-icon-size" /> : <PlusIcon className="element-icon-size" />}
      </button>
    </form>
  )
}

export default HabitsCreateOrEditForm;