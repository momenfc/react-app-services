# react-app-services

react-app-services is a package of services that help you create the applications.

## Usage

```jsx
import { useFixedHeaderStyle } from "react-app-services";

function App() {
  const { headerStyle, isFixed } = useFixedHeaderStyle();

  return <header style={headerStyle}>Hello World</header>;
}

export default App;
```

# useFixedHeaderStyle

Make your header fixed with nice animation.

## Usage

```jsx
import { useFixedHeaderStyle } from "react-app-services";

function App() {
  const { headerStyle, isFixed } = useFixedHeaderStyle();

  return (
    <header
      style={{ ...headerStyle, background: isFixed ? "orange" : "orangered" }}
    >
      I AM A FIXED HEADER
    </header>
  );
}

export default App;
```

## useFixedHeaderStyle arguments

1. header height (**_optional_**)

- default is **69**

2. scroll Y to be fixed (**_optional_**)

- default is **120**

## Preview

![Preview useFixedHeaderStyle!](/packages/useFixedHeaderStyle/assets/preview.gif "useFixedHeaderStyle in use")
