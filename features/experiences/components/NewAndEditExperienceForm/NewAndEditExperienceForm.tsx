"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { SubmitEventHandler, useEffect, useState } from "react";
import { PlusIcon, ChevronDownIcon, EditIcon, SearchIcon } from "lucide-react";

import { ConstantT } from "@/types/app.types";
import InputLabel from "@/components/ui/InputLabel/InputLabel";
import { EXPERIENCE_CATEGORIES, EXPERIENCES } from "../../mockData";

type NewAndEditExperienceFormPropsT = {
  isEditMode?: boolean;
  experienceId?: number;
}

function NewAndEditExperienceForm({ experienceId, isEditMode }: NewAndEditExperienceFormPropsT) {
  console.log(experienceId);

  const sp = useSearchParams();

  const defaultExperience = EXPERIENCES.data.find(item => item.id === experienceId);

  const categoriesConstant: ConstantT<string>[] = EXPERIENCE_CATEGORIES.data.map(item => ({
    name: item.title,
    value: item.id.toString()
  }));

  const [selectedCategory, setSelectedCategory] =
    useState<SelectBoxOptionT | null>(null);

  useEffect(() => {
    if (defaultExperience) {
      setSelectedCategory({
        name: defaultExperience.category.title,
        value: defaultExperience.category.id.toString()
      });
    }
  }, []);

  useEffect(() => {
    const categoryId = sp.get("category");
    if (categoryId) {
      const defaultCategory = EXPERIENCE_CATEGORIES.data.find(item => item.id === +categoryId);
      if (defaultCategory) {
        setSelectedCategory({
          name: defaultCategory.title,
          value: defaultCategory.id.toString()
        });
      }
    }
  }, [sp]);

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const fd = new FormData(ev.target);

    selectedCategory && fd.append("category", selectedCategory.value);

    console.log("title --->", fd.get("title"));
    console.log("description --->", fd.get("description"));
    console.log("category --->", fd.get("category"));
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
          placeholder="Experience..."
          defaultValue={defaultExperience?.title}
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
          placeholder="Explain your experience..."
          defaultValue={defaultExperience?.description || undefined}
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

            <p className="mt-3 font-bold">You need another category?</p>
            <Link
              href={"/land/experiences/categories"}
              className="btn btn-soft element-rounded-full element-w-full palette-primary"
            >
              <span>Edit Categories</span>
              <EditIcon className="element-icon-size" />
            </Link>
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