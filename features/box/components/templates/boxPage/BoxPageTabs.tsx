"use client";

import { PaginationWithSearchParams } from "@kadoui/react";

import BoxPageAllMessages from "./BoxPageAllMessages";
import BoxPageTextMessages from "./BoxPageTextMessages";
import BoxPageFileMessages from "./BoxPageFileMessages";
import BoxPageImageMessages from "./BoxPageImageMessages";
import BoxPageVideoMessages from "./BoxPageVideoMessages";
import BoxPageVoiceMessages from "./BoxPageVoiceMessages";
import BoxPageAudioMessages from "./BoxPageAudioMessages";

function BoxPageTabs() {
  const PAGES = [
    {
      name: "All",
      component: <BoxPageAllMessages />
    },
    {
      name: "Text",
      component: <BoxPageTextMessages />
    },
    {
      name: "Image",
      component: <BoxPageImageMessages />
    },
    {
      name: "Vidoe",
      component: <BoxPageVideoMessages />
    },
    {
      name: "Voice",
      component: <BoxPageVoiceMessages />
    },
    {
      name: "Audio",
      component: <BoxPageAudioMessages />
    },
    {
      name: "File",
      component: <BoxPageFileMessages />
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

export default BoxPageTabs;