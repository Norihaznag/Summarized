import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagsField = () => {
  const [selected, setSelected] = useState([""]);

  return (
    <div>
      <h1>Add Tags</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter or comma to add new tag</em>
    </div>
  );
};

export default TagsField;