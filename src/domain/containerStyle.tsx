import React from "react";
type ContainerStyleProps = {
  styles: React.CSSProperties;
};
const ContainerStyle = (props: ContainerStyleProps) => {
  return (
    <div style={props.styles}>
      <h3>Test props style</h3>
    </div>
  );
};
export default ContainerStyle;
