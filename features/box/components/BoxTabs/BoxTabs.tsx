"use client";

import { PaginationWithSearchParams } from "@kadoui/react";

import BoxAllMessages from "./BoxAllMessages";
import BoxTextMessages from "./BoxTextMessages";
import BoxFileMessages from "./BoxFileMessages";
import BoxImageMessages from "./BoxImageMessages";
import BoxVideoMessages from "./BoxVideoMessages";
import BoxVoiceMessages from "./BoxVoiceMessages";
import BoxAudioMessages from "./BoxAudioMessages";

function BoxTabs() {
  const PAGES = [
    {
      name: "All",
      component: <BoxAllMessages />
    },
    {
      name: "Text",
      component: <BoxTextMessages />
    },
    {
      name: "Image",
      component: <BoxImageMessages />
    },
    {
      name: "Vidoe",
      component: <BoxVideoMessages />
    },
    {
      name: "Voice",
      component: <BoxVoiceMessages />
    },
    {
      name: "Audio",
      component: <BoxAudioMessages />
    },
    {
      name: "File",
      component: <BoxFileMessages />
    },
  ];

  return (
    // TODO: add preventHistoryMode to PaginationWithSearchParams
    // TODO: fix height when keyboard is open
    <PaginationWithSearchParams className="h-[calc(100dvh-(3.5rem+1.5rem+1.5rem))]" pages={PAGES} pageKey="type">
      <div className="wrapper h-16">
        <div className="join join-border overflow-x-auto pb-3">
          <PaginationWithSearchParams.Counts
            enableNextClick
            // TODO: add min-w-max to kadoui-tailwindcss btn class
            className="btn data-[state=true]:btn-fill data-[state=false]:btn-soft element-rounded-full flex-1 min-w-max"
          >
            {
              (count) => (
                <span>{PAGES[count - 1].name}</span>
              )
            }
          </PaginationWithSearchParams.Counts>
        </div>
      </div>

      <div className="wrapper max-h-[calc(100%-(4rem))] pb-20 overflow-y-auto">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default BoxTabs;