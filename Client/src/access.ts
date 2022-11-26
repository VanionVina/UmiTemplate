import { CurrentUser } from "./typings";

export default function access(initialState: CurrentUser) {
  const { token, userName } = initialState || {};

  console.log(token, userName);

  return {
    canUser: (token !== null),
    canTest: false
  };
}
