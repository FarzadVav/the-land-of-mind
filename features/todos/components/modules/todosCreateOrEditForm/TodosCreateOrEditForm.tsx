"use client";

import { useSearchParams } from "next/navigation";
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { SubmitEventHandler, useEffect, useState } from "react";
import { PlusIcon, ChevronDownIcon, EditIcon, SearchIcon } from "lucide-react";

import { HABITS } from "@/features/habits/lib/habits.constants";
import { TODO_TYPES, TODOS } from "../../../lib/todos.constants";
import { ConstantT } from "@/features/general/lib/general.types";
import InputLabel from "@/features/general/components/modules/inputLabel/InputLabel";

const HABITS_CONSTANT: ConstantT<string>[] = HABITS.data.map(item => ({
  name: item.title,
  value: item.id.toString()
}));

type TodosCreateOrEditFormPropsT = {
  todoId?: number;
  isEditMode?: boolean;
}

function TodosCreateOrEditForm({ todoId, isEditMode }: TodosCreateOrEditFormPropsT) {
  console.log(todoId);

  const sp = useSearchParams();

  const defaultTodo = TODOS.data.find(item => item.id === todoId);

  const [selectedType, setSelectedType] =
    useState<SelectBoxOptionT | null>(null);
  const [selectedHabits, setSelectedHabits] =
    useState<SelectBoxOptionT[]>([]);

  useEffect(() => {
    if (defaultTodo) {
      setSelectedType(
        TODO_TYPES.find(item => item.value === defaultTodo.type) || null
      );
      if (defaultTodo.relatedHabits?.length) {
        setSelectedHabits(
          defaultTodo.relatedHabits.map(item => ({ name: item.title, value: item.id.toString() }))
        );
      }
    }
  }, []);

  useEffect(() => {
    const spType = sp.get("type");
    const defaultType = TODO_TYPES.find(item => item.value === spType);
    if (defaultType) {
      setSelectedType(defaultType);
    }
  }, [sp]);

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const fd = new FormData(ev.target);

    selectedType && fd.append("type", selectedType.value);
    fd.append("relatedHabits", JSON.stringify(selectedHabits.map(item => item.value)));

    console.log("title --->", fd.get("title"));
    console.log("description --->", fd.get("description"));
    console.log("type --->", fd.get("type"));
    console.log("deadline --->", fd.get("deadline"));
    console.log("subTasks --->", fd.get("subTasks"));
    console.log("relatedHabits --->", fd.get("relatedHabits"));
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
          className="input-field"
          placeholder="Something to do..."
          defaultValue={defaultTodo?.title}
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
          defaultValue={defaultTodo?.description || undefined}
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

      {/* TODO: add TimePicker for daily and DatePicker for other */}
      <InputLabel required htmlFor="deadline">
        Deadline
      </InputLabel>
      <label htmlFor="deadline" className="input input-outline">
        <input
          type="date"
          id="deadline"
          name="deadline"
          className="input-field"
          defaultValue={defaultTodo?.deadline}
        />
      </label>

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
          defaultValue={defaultTodo?.subTasks ? JSON.stringify(defaultTodo.subTasks) : undefined}
        />
      </label>

      <InputLabel htmlFor="relatedHabits-field">
        Related habits
      </InputLabel>
      {/* TODO: add safe browser area position */}
      {/* TODO: fix offset logic */}
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

      <button className="btn btn-soft element-rounded-full mx-auto palette-success mt-12">
        <span>
          {isEditMode ? "Edit" : "Create"}
        </span>
        {isEditMode ? <EditIcon className="element-icon-size" /> : <PlusIcon className="element-icon-size" />}
      </button>
    </form>
  )
}

export default TodosCreateOrEditForm;