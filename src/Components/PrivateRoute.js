import { Route, Redirect } from "react-router-dom";

import { useStateValue } from "../StateProvider";

export default function PrivateRoute({ component, ...rest }) {
  const [{ user }, _] = useStateValue();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <children {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
