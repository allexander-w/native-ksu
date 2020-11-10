import React, { useState } from "react";

import { UpMenu } from "../components/UpMenu";
import { InfoComponent } from "../components/upmenu/InfoComponent";
import { ReadComponent } from "../components/upmenu/ReadComponent";
import { PaymentComponent } from "../components/upmenu/PaymentComponent";
import { UserLayout } from "../layouts/UserLayout";

export const Main = () => {
  const [component, setComponent] = useState(0);
  let content = <InfoComponent />;
  switch (component) {
    case 0:
      content = <InfoComponent />;
      break;
    case 1:
      content = <PaymentComponent />;
      break;
    case 2:
      content = <ReadComponent />;
      break;
    default:
      break;
  }

  return (
    <UserLayout>
      <UpMenu setComponent={setComponent} />

      {content}
    </UserLayout>
  );
};
