import React from "react";
import styled from "styled-components";
import TextInput from "../../components/Input/TextInput";
import { Btn, Input } from "../../Styled";
import { useTheme } from "styled-components";

const Example = () => {
  const Card = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.3);
    /* margin: 1rem; */
  `;

  const theme = useTheme();
  console.log(theme);

  return (
    <div>
      <Card>
        <Btn onClick="">Click Me</Btn>
        <Input type="text" placeholder="Placeholder here" onChange={""} />
        <Input type="file" />
      </Card>
    </div>
  );
};

export default Example;
