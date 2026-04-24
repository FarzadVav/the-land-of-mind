import { SparklesIcon } from "lucide-react";

import ThemeBtn from "../../templates/themeBtn/ThemeBtn";
import LogoutBtn from "../../templates/logoutBtn/LogoutBtn";
import { TodoTypeT } from "@/features/todos/lib/todos.types";
import { getTodoType } from "@/features/todos/lib/todos.utils";
import { HABITS } from "@/features/habits/lib/habits.constants";
import { TODOS_ANALYSIS } from "@/features/todos/lib/todos.constants";
import { getPeriodValue } from "@/features/general/lib/general.utils";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import { EXPERIENCE_CATEGORIES, EXPERIENCES } from "@/features/experiences/lib/experiences.constants";

function ProfilePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Profile
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <div className="wrapper">
        <p className="font-bold">Todos:</p>
        {Object.keys(TODOS_ANALYSIS.data).map((item) => (
          <p
            key={item}
            className="flex items-center flex-wrap mt-3"
          >
            <span>
              {getTodoType(item as TodoTypeT)}
            </span>
            <span className="ms-auto text-sm text-foreground-thin">
              {TODOS_ANALYSIS.data[item as TodoTypeT].done}
              {" / "}
              {TODOS_ANALYSIS.data[item as TodoTypeT].all}
            </span>
          </p>
        ))}
        <p className="text-primary flex items-center gap-1.5 mt-3">
          <SparklesIcon className="size-4" />
          <span>
            You can crush a mountain
          </span>
        </p>

        <p className="font-bold pt-6 mt-6 border-t-2 border-background-thin">Habits:</p>
        {HABITS.data.map((item) => (
          <p
            key={item.id}
            className="flex items-center flex-wrap mt-3"
          >
            <span>
              {item.title}
            </span>
            <span className="ms-auto text-sm text-foreground-thin">
              {item.doingCount}
              {" / "}
              {getPeriodValue(item.ingage).word}
            </span>
          </p>
        ))}
        <p className="text-primary flex items-center gap-1.5 mt-3">
          <SparklesIcon className="size-4" />
          <span>
            You,ve a strong will
          </span>
        </p>

        <p className="font-bold pt-6 mt-6 border-t-2 border-background-thin">Experiences:</p>
        <p className="mt-3">
          {EXPERIENCES.data.length} note in {EXPERIENCE_CATEGORIES.data.length} category
        </p>
        <p className="text-primary flex items-center gap-1.5 mt-3">
          <SparklesIcon className="size-4" />
          <span>
            You're a god bro
          </span>
        </p>

        <div className="pt-6 mt-6 border-t-2 border-background-thin">
          <ThemeBtn />
          <LogoutBtn className="element-w-full justify-between btn-soft mt-3" />
        </div>
      </div>
    </>
  )
}

export default ProfilePage;