import { Modal } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { LogOutIcon } from "lucide-react";

type LogoutBtnPropsT = ComponentProps<"button">;

function LogoutBtn({ className, ...p }: LogoutBtnPropsT) {
  return (
    // TODO: convert this modal to ConfirmModal
    <Modal>
      <Modal.Toggle
        className={cn(
          "btn palette-error element-rounded-full",
          className
        )}
        {...p}
      >
        <span>Logout</span>
        <LogOutIcon className="element-icon-size" />
      </Modal.Toggle>

      <Modal.Portal className="modal-portal">
        <Modal.Body className="modal-body">
          <Modal.Header className="modal-header">
            <p className="w-full font-bold text-center">
              Are you sure about it?
            </p>
          </Modal.Header>
          <Modal.Content className="modal-content">
            <div className="flex gap-3 ">
              <Modal.Toggle className="btn btn-soft palette-error element-rounded-full w-1/2">
                Yes
              </Modal.Toggle>
              <Modal.Toggle className="btn btn-ghost element-rounded-full w-1/2">
                Cancel
              </Modal.Toggle>
            </div>
          </Modal.Content>
        </Modal.Body>
      </Modal.Portal>
    </Modal>
  )
}

export default LogoutBtn;