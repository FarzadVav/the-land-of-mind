"use client";

import { useSearchParams } from "next/navigation";
import { SubmitEventHandler, useState } from "react";
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { CheckIcon, ChevronDownIcon, SearchIcon } from "lucide-react";

import { TODO_TYPES } from "../../constants";
import { ConstantT } from "@/types/app.types";
import { HABITS } from "@/features/habits/mockData";
import InputLabel from "@/components/ui/InputLabel/InputLabel";

const HABITS_CONSTANT: ConstantT<string>[] = HABITS.data.map(item => ({
  name: item.title,
  value: item.id.toString()
}))

function NewTodoForm() {
  const sp = useSearchParams();

  const spType = sp.get("type");
  const defaultType = TODO_TYPES.find(item => item.value === spType);

  const [selectedType, setSelectedType] =
    useState<SelectBoxOptionT | null>(defaultType || null);
  const [selectedHabits, setSelectedHabits] =
    useState<SelectBoxOptionT[]>([]);

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const fd = new FormData(ev.target);

    selectedType && fd.append("type", selectedType.value);
    fd.append("relatedHabits", JSON.stringify(selectedHabits.map(item => item.value)));

    console.log("title --->", fd.get("title"));
    console.log("description --->", fd.get("description"));
    console.log("type --->", fd.get("type"));
    console.log("deadlineDate --->", fd.get("deadlineDate"));
    console.log("deadlineTime --->", fd.get("deadlineTime"));
    console.log("subTasks --->", fd.get("subTasks"));
    console.log("relatedHabits --->", fd.get("relatedHabits"));
  }

  return (
    <form
      onSubmit={submitHandler}
      className="wrapper"
    >
      <InputLabel required htmlFor="title">
        Title
      </InputLabel>
      <label htmlFor="title" className="input input-outline">
        <input
          id="title"
          type="text"
          name="title"
          className="input-field"
          placeholder="Something to do..."
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
          placeholder="Explain your todo..."
        />
      </label>

      <InputLabel required htmlFor="type-field">
        Type
      </InputLabel>
      <SelectBox
        direction="y"
        options={TODO_TYPES}
        optionValue={selectedType}
        setOptionValue={setSelectedType}
      >
        <SelectBox.Input className="select-box-input input input-outline group" htmlFor="type-field">
          <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
          <SelectBox.Field
            id="type-field"
            type="text"
            name="type-field"
            className="input-field"
            placeholder="Select a type..."
          />
          <SelectBox.List className="select-box-list offset bg-background-thin">
            <SelectBox.Options
              className="select-box-option data-[state=false]:element-rounded-full data-[state=false]:btn-soft data-[state=true]:btn-fill"
            />
          </SelectBox.List>
        </SelectBox.Input>
      </SelectBox>

      {selectedType && selectedType.value !== "future" ? (
        <>
          {/* TODO: add a DatePicker */}
          <InputLabel required htmlFor="deadlineDate">
            Deadline
          </InputLabel>
          <label htmlFor="deadlineDate" className="input input-outline">
            <input
              type="date"
              id="deadlineDate"
              name="deadlineDate"
              className="input-field"
            />
          </label>
          {/* TODO: add a TimePicker */}
          {selectedType.value === "daily" ? (
            <label htmlFor="deadlineTime" className="input input-outline mt-2">
              <input
                type="date"
                id="deadlineTime"
                name="deadlineTime"
                className="input-field"
              />
            </label>
          ) : null}

          {/* TODO: add AddInput and in the following */}
          <InputLabel htmlFor="subTasks">
            Sub tasks
          </InputLabel>
          <label htmlFor="subTasks" className="input input-outline">
            <input
              type="text"
              id="subTasks"
              name="subTasks"
              className="input-field"
              placeholder="Something to do..."
            />
          </label>

          <InputLabel htmlFor="relatedHabits-field">
            Related habits
          </InputLabel>
          <SelectBox
            multiSelect
            direction="y"
            options={HABITS_CONSTANT}
            optionValue={selectedHabits}
            setOptionValue={setSelectedHabits}
          >
            <SelectBox.Input className="select-box-input input input-outline group" htmlFor="subTasks">
              <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
              <SelectBox.Field
                type="text"
                className="input-field"
                id="relatedHabits-field"
                name="relatedHabits-field"
                placeholder="Select some habits..."
              />
              <SelectBox.List className="select-box-list offset bg-background-thin">
                <SelectBox.SearchInput className="input input-outline">
                  <SearchIcon className="element-icon-size" />
                  <SelectBox.SearchField className="input-field" />
                </SelectBox.SearchInput>
                <SelectBox.Options
                  className="select-box-option data-[state=false]:element-rounded-full data-[state=false]:btn-soft data-[state=true]:btn-fill"
                />
              </SelectBox.List>
            </SelectBox.Input>
          </SelectBox>
        </>
      ) : null}

      <button className="btn btn-soft element-rounded-full mx-auto palette-success mt-12">
        <span>Submit</span>
        <CheckIcon />
      </button>
    </form>
  )
}

export default NewTodoForm;