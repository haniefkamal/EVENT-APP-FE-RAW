import React from "react";
import NavbarCreate from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/components/create/navbar-create.jsx";
import Footbar from "../components/create/footbar";
import CardCreate from "../components/create/card-create";

function CreateEvent() {
  return (
    <>
      <NavbarCreate />
      <div className="">
        <CardCreate />
      </div>
      <Footbar />
    </>
  );
}
export default CreateEvent;
