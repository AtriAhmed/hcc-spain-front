import { Transition } from "@headlessui/react"
import React, { useState } from "react"
import YouTube from "react-youtube"
import { useUIToolsContext } from "../contexts/UIToolsProvider"

function Video() {
  const { videoOpen, setVideoOpen, viewportWidth } = useUIToolsContext()
  const [yt, setYt] = useState(null)

  const opts = {
    height: viewportWidth * 0.8 * 0.5,
    width: `${viewportWidth * 0.8}`,
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-[1000] ${
        videoOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Transition
        show={videoOpen}
        enter="transition duration-1000"
        enterFrom="opacity-0 "
        enterTo="opacity-100 "
        leave="transition duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
      >
        <div
          className="bg-[rgba(0,0,0,.5)] w-full h-screen absolute top-0 right-0 cursor-pointer"
          onClick={() => setVideoOpen(false)}
        ></div>
      </Transition>
      <Transition
        show={videoOpen}
        as={React.Fragment}
        enter="transition duration-1000"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transition duration-1000"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-50"
        unmount={false}
        beforeLeave={() => yt?.pauseVideo()}
      >
        <div className="w-full h-screen flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <YouTube
              videoId="aAhEU0bTmbA"
              opts={opts}
              onReady={e => setYt(e.target)}
            />
            ;
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Video
