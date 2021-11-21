import React from "react";
import { Wrapper } from "./Styled";
import { projects } from "../../Constans/Projects";
import { ProjectWrapper } from "../../components/ProjectWrapper/Index";

export const MyProjectView = () => {
  return (
    <Wrapper>
      {projects.map((item) => (
        <ProjectWrapper {...item} />
      ))}
    </Wrapper>
  );
};
