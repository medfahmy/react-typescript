import React, { useState } from "react";

const EventComponent: React.FC = () => {
  const [name, setName] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClick = () => {
    setName("");
    console.log(name);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input value={name} onChange={onChange} />
      <button onClick={onClick}></button>
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
