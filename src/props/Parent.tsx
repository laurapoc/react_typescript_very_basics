import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      fgsfsgdf
    </ChildAsFC>
  );
};

export default Parent;
