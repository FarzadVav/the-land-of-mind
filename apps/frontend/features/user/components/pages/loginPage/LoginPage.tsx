import { PasswordInput } from "@kadoui/react";
import { ArrowRightIcon, CheckIcon, EyeClosedIcon, EyeIcon, UserIcon } from "lucide-react";

import InputLabel from "@/features/general/components/modules/inputLabel/InputLabel";

function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl leading-tight font-black *:text-4xl *:leading-tight">
        WELCOME
        <br />
        TO{" "}
        <span className="text-primary inline">
          THE LAND
          <br />
          OF MIND
        </span>
      </h1>

      <div className="w-full wrapper mt-16">
        <InputLabel required htmlFor="username">
          Username
        </InputLabel>
        <label htmlFor="username" className="input input-outline">
          <UserIcon className="element-icon-size" />
          <input
            type="text"
            id="username"
            className="input-field"
          />
        </label>

        <InputLabel required htmlFor="password" className="mt-6">
          Password
        </InputLabel>
        <PasswordInput className="input input-outline" htmlFor="password">
          <PasswordInput.Toggle
            className="btn btn-ghost element-sm"
            visibleChildren={(
              <EyeIcon className="element-icon-size" />
            )}
          >
            <EyeClosedIcon className="element-icon-size" />
          </PasswordInput.Toggle>
          <PasswordInput.Field
            id="password"
            className="input-field"
          />
        </PasswordInput>

        <button className="btn btn-soft palette-success element-rounded-full mx-auto mt-9">
          <span>Login</span>
          <ArrowRightIcon className="element-icon-size" />
        </button>
      </div>
    </div>
  )
}

export default LoginPage