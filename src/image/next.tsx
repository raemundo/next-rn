import React from "react";
import NextImage from "next/image";

const styleToString = (style) => {
  return Object.keys(style).reduce((acc, key) => (
      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';\n'
  ), '');
};

function Image({ style: styleObj, source: { uri, width, height }, accessibilityLabel }) {
  return (
    <>
      <NextImage className="style" src={uri} width={width} height={height} alt={accessibilityLabel} />
      <style jsx>{`
        .style {
          ${styleToString(styleObj)}
        }
      `}</style>
    </>

  );
}

export default Image;
