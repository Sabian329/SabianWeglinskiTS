import React, { useEffect } from "react";
import { Wrapper } from "./Styled";
import { projects } from "../../Constans/Projects";
import { ProjectWrapper } from "../../components/ProjectWrapper/Index";

export const MyProjectView = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Wrapper>
      {projects.map((item) => (
        <ProjectWrapper {...item} key={item.name} />
      ))}
    </Wrapper>
  );
};
