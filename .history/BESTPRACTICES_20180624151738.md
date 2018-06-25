# Rappel Best Practicies

## Introduction

Philosophie: Un peu chaque jour... Comme le HOC

Posologie:

1.  Etre curieux, regarder les Tips and Tricks de ReactJS (1 par jour)
    Patterns: https://reactpatterns.com/
    Bits: https://legacy.gitbook.com/book/vasanthk/react-bits/details

2.  Connaitre et Apprendre les Design Pattern Redux (1 par jour)
    https://krasimir.gitbooks.io/react-in-patterns/content/

3.  ES6 Design pattern
    http://loredanacirstea.github.io/es6-design-patterns

4.  Design Pattern ES6 (1/2 par jour)

http://loredanacirstea.github.io/es6-design-patterns

## Rappel Best Practicies

Rappel dans le render: Extraction des props

```
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
```

Instead of

```
const sampleComponent = () => {
  return isTrue ? <p>True!</p> : null
};
```

Use short-circuit evaluation

```
const sampleComponent = () => {
    return isTrue && <p>True!</p>
};
```

Too many ternaries

```
const sampleComponent = () => {
  return (
    <div>
      {flag && flag2 && !flag3
        ? flag4
        ? <p>Blah</p>
        : flag5
        ? <p>Meh</p>
        : <p>Herp</p>
        : <p>Derp</p>
      }
    </div>
  )
};
```

Best approach: Move logic to sub-components

Hight Order Components is Best Practices

```
    const Logger = WrappedComponent => (
    class Logger extends Component {
        componentDidMount() {
        console.log(‘mounted’);
        }
        render() {
        return <WrappedComponent {...this.props} />
        }
    }
    );

    export default Logger(MyComponent);
```

Destructuring Function

```
    const Greeting = props => <div>Hi {props.name}!</div>
    const Greeting = ({ name }) => <div>Hi {name}!</div>
```

Recupérer mle reste des props:

```
const Greeting = ({ name, ...props }) =>
  <div>Hi {name}!</div>
```

Condition :

```
    {condition && <span>Rendered when `truthy`</span> }
```

Not Condition :

```
    {condition || <span>Rendered when `truthy`</span> }
```

If...else

```
    {condition
        ? <span>Rendered when `truthy`</span>
        : <span>Rendered when `falsey`</span>
    }
```

If...else block

```
{condition ? (
  <span>
    Rendered when `truthy`
  </span>
) : (
  <span>
    Rendered when `falsey`
  </span>
)}
```

Ceci:

```
<ul>
  {["first", "second"].map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

Equivalent à

```
<ul>
  {[
    <li>first</li>,
    <li>second</li>,
  ]}
</ul>
```

Render Callback

```
    const Width = ({ children }) => children(500)
```

Permet de:

```
    <Width>
      {width => <div>window is {width}</div>}
    </Width>
```

output:

```
    <div>window is 500</div>
```

And setup

```
<Width>
  {width =>
    width > 600
      ? <div>min-width requirement met!</div>
      : null
  }
</Width>
```

Utilisable et configurable avec 2 paramètres

```
const MinWidth = ({ width: minWidth, children }) =>
  <Width>
    {width =>
      width > minWidth
        ? children
        : null
    }
  </Width>
```

Handle Event Switch:

```
handleEvent({type}) {
  switch(type) {
    case "click":
      return require("./actions/doStuff")
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}
```

HOC: Hight order Components:

https://vasanthk.gitbooks.io/react-bits/ux-variations/03.HOC-feature-toggles.html
HOC for Feature Toggles

```
const isFeatureOn = function (featureName) {
  // return true or false
};
...


import { isFeatureOn } from './featureToggle';

const toggleOn = (featureName, ComposedComponent) => class HOC extends Component {
  render() {
    return isFeatureOn(featureName) ? <ComposedComponent {...this.props} /> : null;
  }
};

// Usage
    import AdsComponent from './Ads'
    const Ads = toggleOn('ads', AdsComponent);
```

Higher Order Component - Props proxy

```
    function HOC(WrappedComponent) {
    return class Test extends Component {
        render() {
        const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
        };

        return <WrappedComponent {...this.props} {...newProps} />
        }
    }
    }
```
