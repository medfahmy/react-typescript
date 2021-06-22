import { Child } from "./Child";

const Parent = () => {
  return (
    <Child
      color="turquois"
      onClick={() => {
        console.log("clicked");
      }}
    />
  );
};

export default Parent;
