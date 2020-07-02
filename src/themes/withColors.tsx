// higher order component to wrap the incoming component
// with the current active color object
import React from 'react';
import ThemeContext from './ThemeContext';
import ColorPalette from '../styles/colorPalette';

export default function (ComposedComponent) {
  return function (props: any) {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const Colors = ColorPalette[value];
          return <ComposedComponent {...props} Colors={Colors} />;
        }}
      </ThemeContext.Consumer>
    );
  };
}