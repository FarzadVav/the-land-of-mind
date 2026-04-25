"use client";

import { ChevronDownIcon } from "lucide-react";
import { ComponentProps, useState } from "react";
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";

import { THEMES } from "@/features/user/lib/user.constants";

type LogoutBtnPropsT = ComponentProps<"div">;

function ThemeBtn({ ...p }: LogoutBtnPropsT) {
  const [selectedIngage, setSelectedIngage] =
    useState<SelectBoxOptionT | null>(THEMES[0]);

  return (
    <SelectBox
      direction="y"
      options={THEMES}
      optionValue={selectedIngage}
      setOptionValue={setSelectedIngage}
    >
      <SelectBox.Input className="select-box-input input input-outline element-rounded-full group" htmlFor="theme">
        <SelectBox.Field
          id="theme"
          type="text"
          name="theme"
          className="input-field"
        />
        <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
        <SelectBox.List className="select-box-list offset bg-background-thin rounded-xl">
          <SelectBox.Options
            className="select-box-option data-[state=false]:element-rounded-full data-[state=false]:btn-soft data-[state=true]:btn-fill"
          />
        </SelectBox.List>
      </SelectBox.Input>
    </SelectBox>
  )
}

export default ThemeBtn;