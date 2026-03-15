"use client";

import { Sheet } from "@kadoui/react";
import { SubmitEventHandler, useState } from "react";
import { CheckIcon, PlusIcon, Trash2Icon } from "lucide-react";

import { ExperienceCategoryT } from "../../types";
import { EXPERIENCE_CATEGORIES } from "../../mockData";
import InputLabel from "@/components/ui/InputLabel/InputLabel";

function ExperiencesCategoriesForm() {
  const [categories, setCategories] = useState<ExperienceCategoryT[]>(EXPERIENCE_CATEGORIES.data);
  const [deletedCategories, setDeletedCategories] = useState<string[]>([]);
  const [newCategories, setNewCategories] = useState<ExperienceCategoryT[]>([]);

  const [newCategoryTitle, setNewCategoryTitle] = useState("");

  const allCategories = [...categories, ...newCategories];

  // TODO: add zod validation
  const submitHandler: SubmitEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    console.log("deletedCategories --->", JSON.stringify(deletedCategories));
    console.log("newCategories --->", JSON.stringify(newCategories.map(item => item.title)));
  }

  return (
    <form
      className="wrapper"
      onSubmit={submitHandler}
    >
      {allCategories.map(item => (
        <div key={item.id} className="card card-x border border-background-thin not-first:mt-3">
          <p>
            {item.title}
          </p>
          <button
            type="button"
            className="btn btn-soft element-square-size element-rounded-full palette-error shrink-0"
            onClick={() => {
              if (allCategories.length > 1) {
                if (categories.find(delItem => item.id === delItem.id)) {
                  setCategories(categories.filter(delItem => item.id !== delItem.id));
                  setDeletedCategories([...deletedCategories, item.id.toString()]);
                }
                if (newCategories.find(delItem => item.id === delItem.id)) {
                  setNewCategories(newCategories.filter(delItem => item.id !== delItem.id));
                }
              } else {
                // TODO: add toast to kadoui and use the following
                alert("You need one category at least");
              }
            }}
          >
            <Trash2Icon className="element-icon-size" />
          </button>
        </div>
      ))}

      <Sheet>
        <Sheet.Toggle className="btn btn-soft palette-primary element-rounded-full mx-auto mt-3">
          <span>Add New Category</span>
          <PlusIcon className="element-icon-size" />
        </Sheet.Toggle>

        <Sheet.Portal className="sheet-portal">
          <Sheet.Body className="sheet-body">
            <Sheet.Header className="sheet-header">
              <Sheet.Handlebar className="sheet-handlebar" />
            </Sheet.Header>
            <Sheet.Content className="sheet-content">
              <InputLabel required htmlFor="title">
                Title
              </InputLabel>
              <label htmlFor="title" className="input input-outline">
                <input
                  id="title"
                  type="text"
                  className="input-field"
                  value={newCategoryTitle}
                  placeholder="Experience..."
                  onChange={ev => setNewCategoryTitle(ev.target.value)}
                />
              </label>

              <Sheet.Toggle
                disabled={newCategoryTitle.trim().length === 0}
                className="btn btn-soft palette-primary element-rounded-full mx-auto mt-6"
                onClick={(ev) => {
                  const isCategoryExist = allCategories.find(item => item.title === newCategoryTitle.trim());

                  if (isCategoryExist) {
                    // TODO: add toast to kadoui and use the following
                    alert("Category exist already");
                    // TODO: prevent to close Sheet in kadoui
                  } else {
                    setNewCategories([
                      ...newCategories,
                      { id: Math.random(), title: newCategoryTitle.trim() }]
                    );
                    setNewCategoryTitle("");
                  }
                }}
              >
                <span>Add</span>
                <PlusIcon className="element-icon-size" />
              </Sheet.Toggle>
            </Sheet.Content>
          </Sheet.Body>
        </Sheet.Portal>
      </Sheet>

      <button className="btn btn-soft element-rounded-full mx-auto palette-success mt-12">
        <span>Save</span>
        <CheckIcon className="element-icon-size" />
      </button>
    </form>
  )
}

export default ExperiencesCategoriesForm;