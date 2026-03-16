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
    <PaginationWithSearchParams className="wrapper" pages={PAGES} pageKey="type">
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

      <div className="mt-3">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default BoxTabs;