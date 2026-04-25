import { Portal } from "@kadoui/react";
import { MicIcon, MoreVerticalIcon } from "lucide-react";

function BoxChatInput() {
  return (
    <Portal>
      <div className="px-3 h-20 flex items-center justify-center bg-linear-to-t from-background/50 to-transparent fixed left-0 right-0 bottom-0">
        <div className="w-full rounded-full px-3 shadow-xs shadow-foreground/10 inset-shadow-2xs inset-shadow-foreground/5 flex h-14 items-center element-rounded-full element-sm bg-background">
          <button className="btn btn-ghost element-square-size">
            <MoreVerticalIcon className="element-icon-size" />
          </button>

          {/* TODO: remove outline on focus on ghost input in kadoui */}
          <label className="input flex-1">
            <input
              type="text"
              className="input-field"
              placeholder="Message..."
            />
          </label>

          <button className="btn btn-fill palette-primary element-square-size ms-1.5">
            <MicIcon className="element-icon-size" />
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default BoxChatInput;