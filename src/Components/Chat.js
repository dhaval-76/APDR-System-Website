import React from "react";

import Drawer from "./Drawer";

export default function Chat() {
  return (
    <>
      <Drawer />
      <div className="container_chat">
        <div>
          <section>Driver 2: Alert!!! vehicle behind is drowsy </section>
        </div>
        <div>
          <section>Driver 1: Warning!!! vehicle engine overheated</section>
        </div>
        <div>
          <section>
            Driver 3: The driver behind you is drunk be aware !!!
          </section>
        </div>
      </div>
    </>
  );
}
