import * as React from "react";

export interface Props {
  userName: string;
}

export const HelloComponent = (props: Props) => {
  return <h2>Hello user: {props.userName}</h2>;
};
