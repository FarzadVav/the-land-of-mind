"use client";

import { SubmitEventHandler, useState } from "react";
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { PlusIcon, ChevronDownIcon, EditIcon, SearchIcon } from "lucide-react";

import InputLabel from "@/components/ui/InputLabel/InputLabel";
import { ConstantT } from "@/types/app.types";
import { EXPERIENCE_CATEGORIES } from "../../mockData";

type NewAndEditExperienceFormPropsT = {
  experienceId?: number;
  isEditMode?: boolean;
}

function NewAndEditExperienceForm({ experienceId, isEditMode }: NewAndEditExperienceFormPropsT) {
  console.log(experienceId);

  const categoriesConstant: ConstantT<string>[] = EXPERIENCE_CATEGORIES.data.map(item => ({
    name: item.title,
    value: item.id.toString()
  }))

  const [selectedCategory, setSelectedCategory] =
    useState<SelectBoxOptionT | null>(null);

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const fd = new FormData(ev.target);

    selectedCategory && fd.append("ingege", selectedCategory.value);

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

      <InputLabel required htmlFor="category-field">
        Category
      </InputLabel>
      <SelectBox
        direction="y"
        options={categoriesConstant}
        optionValue={selectedCategory}
        setOptionValue={setSelectedCategory}
      >
        <SelectBox.Input className="select-box-input input input-outline group" htmlFor="category-field">
          <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
          <SelectBox.Field
            type="text"
            id="category-field"
            name="category-field"
            className="input-field"
            placeholder="Select a category..."
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

export default NewAndEditExperienceForm;