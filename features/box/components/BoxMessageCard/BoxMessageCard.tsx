"use client";

import Link from "next/link";
import Image from "next/image";
import { Modal } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { DownloadIcon, MoreVerticalIcon, ReplyIcon } from "lucide-react";

import { MessageT } from "../../types";
import { getDetailDate } from "@/lib/date";

type BoxMessageCardPropsT = ComponentProps<"div"> & {
  messageData: MessageT;
}

function BoxMessageCard({ messageData, className }: BoxMessageCardPropsT) {
  return (
    <div
      id={messageData.id.toString()}
      className={cn(
        "card card-y bg-background-thin w-fix",
        className
      )}
    >
      {messageData.replyTo ? (
        <div
          className="border-l-2 border-foreground bg-foreground/10 p-3 rounded-e-xl sub-text cursor-pointer hover:bg-foreground/12 transition-colors"
          onClick={() => {
            // Add containerRef to a context and scroll the container to the correct position
          }}
        >
          <ReplyIcon className="element-icon-size -scale-x-100 inline" />
          {" "}
          <p className="inline">
            {(messageData.replyTo.text?.length || 0) > 64
              ? `${messageData.replyTo.text?.slice(0, 64)}...`
              : messageData.replyTo.text}
            {messageData.replyTo.files?.length ? (
              <>
                {", "}
                {messageData.replyTo.files.map(
                  item =>
                    item.type === "vioce"
                      ? "Voice Message"
                      : item.name
                        ? `${item.name}.${item.format}`
                        : `${item.format.toUpperCase()}`).join(", ")}
              </>
            ) : null}
          </p>
        </div>
      ) : null}

      {messageData.files?.length ?
        messageData.files.map(item => (
          <div className="h-12 flex items-center gap-3" key={item.id}>
            <div className="h-full aspect-square rounded-xl bg-background overflow-hidden">
              {item.type === "image" ? (
                <Modal>
                  <Modal.Toggle className="hover:brightness-75 transition-all">
                    <Image
                      width={48}
                      height={48}
                      src={item.link}
                      alt={item.name || item.id}
                      className="size-full shrink-0"
                    />
                  </Modal.Toggle>

                  <Modal.Portal className="modal-portal justify-center items-center">
                    <Modal.Body className="modal-body">
                      <Modal.Content className="modal-content">
                        <Image
                          width={1000}
                          height={1000}
                          src={item.link}
                          alt={item.name || item.id}
                          className="w-fix h-fix rounded-xl"
                        />

                        <Link
                          download
                          href={item.link}
                          className="block w-fix mx-auto mt-3"
                        >
                          <Modal.Toggle className="btn mx-auto mt-3 btn-soft palette-primary element-rounded-full">
                            <span>Download</span>
                            <DownloadIcon className="element-icon-size" />
                          </Modal.Toggle>
                        </Link>
                      </Modal.Content>
                    </Modal.Body>
                  </Modal.Portal>
                </Modal>
              ) : (
                <Modal>
                  <Modal.Toggle className="size-full flex items-center justify-center hover:bg-background-thin/10 transition-colors shrink-0">
                    <DownloadIcon className="element-icon-size" />
                  </Modal.Toggle>

                  <Modal.Portal className="modal-portal justify-center items-center">
                    <Modal.Body className="modal-body">
                      <Modal.Content className="modal-content">
                        <p className="title text-center">Do you want to get this image?</p>
                        <Link
                          download
                          href={item.link}
                          className="block w-fix mx-auto mt-3"
                        >
                          <Modal.Toggle className="btn btn-soft palette-primary element-rounded-full">
                            <span>Download</span>
                            <DownloadIcon className="element-icon-size" />
                          </Modal.Toggle>
                        </Link>
                      </Modal.Content>
                    </Modal.Body>
                  </Modal.Portal>
                </Modal>
              )}
            </div>
            <div className="h-full flex flex-col justify-evenly">
              <p className="sub-text">{item.type === "vioce" ? "Voice Message" : `${item.name}.${item.format}`}</p>
              <p className="sub-text text-foreground-thin">{item.size} KB {item.type === "vioce" ? null : item.format.toUpperCase()}</p>
            </div>
            {item.type === "image" ? (
              <Modal>
                <Modal.Toggle className="btn btn-ghost element-square-size element-rounded-full ml-auto element-sm shrink-0">
                  <MoreVerticalIcon className="element-icon-size" />
                </Modal.Toggle>

                <Modal.Portal className="modal-portal justify-center items-center">
                  <Modal.Body className="modal-body">
                    <Modal.Content className="modal-content">
                      <p className="title text-center">Do you want to get this image?</p>
                      <Link
                        download
                        href={item.link}
                        className="block w-fix mx-auto mt-3"
                      >
                        <Modal.Toggle className="btn mx-auto mt-3 btn-soft palette-primary element-rounded-full">
                          <span>Download</span>
                          <DownloadIcon className="element-icon-size" />
                        </Modal.Toggle>
                      </Link>
                    </Modal.Content>
                  </Modal.Body>
                </Modal.Portal>
              </Modal>
            ) : null}
          </div>
        ))
        : null}

      {messageData.text ? (
        <p className="text-body w-fix py-3">
          {messageData.text}
        </p>
      ) : null}

      <p className="sub-text">
        {getDetailDate(messageData.createdAt)}
        {messageData.updatedAt ? (
          <>
            {", "}
            <span className="text-foreground-thin">
              Edit at ${getDetailDate(messageData.updatedAt)}
            </span>
          </>
        ) : null}
      </p>
    </div>
  )
}

export default BoxMessageCard;