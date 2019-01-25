# Creator
Makes inserting elements into the DOM a breeze.

## Usage
```<script src"creator.min.js"></script>```

### Simple demo
```
Creator.createNode({
  elementType: "div",
  classes: ["demo"],
  parent: ".app"
});
```
### Create element with children
```
Creator.createNode({
  elementType: "div",
  classes: ["demo"],
  parent: ".app",
  children: [
  {
    elementType: "div",
    classes: ["demo", "another-demo"]
  }
 ]
});
```

### Create element with attributes
```
Creator.createNode({
  elementType: "div",
  classes: ["demo"],
  parent: ".app",
  attributes: {
    "data-key": "demo-key",
    style: "background: #333"
  }
});
```

### Create elements with html or text content
```
Creator.createNode({
  elementType: "div",
  classes: ["demo"],
  text: "demo text",
  html: "<span>demo text for:&nbsp span</span>",
  parent: ".app"
});
```

### Create input type elements
```
Creator.createNode({
  elementType: "input",
  nodeType: "checkbox",
  parent: ".app"
});
```

### Create and insert element before another element
```
Creator.createNode({
  elementType: "span",
  parent: ".app",
  before: ".col"
});
```

### Create and insert element after another element
```
Creator.createNode({
  elementType: "span",
  parent: ".app",
  after: ".col"
});
```

### Add callbacks
```
Creator.createNode({
  elementType: "span",
  parent: ".app",
  callback: () => alert("Done creating element")
});
```

### Hold a reference to the created element
```
let li = Creator.createNode({
  elementType: "li",
  parent: "ul"
});
```

Complex nesting is supported also, creating a tree like structure for example:
```
Creator.createNode({
  elementType: "div",
  parent: ".app",
  children: [
  {
    elementType: "div",
    classes: ["demo"],
    children: [{
      elementType: "ul",
      classes: ["demo"],
      children: [
      {
        elementType: "li",
        text: "demo text"
      }
      ]
    },
    {
      elementType: "span",
      text: "demo text"
    }
    ]
  }
 ]
});
```

### Also remove elements
Creator.removeNode(```parent```, ```children```);

#### example
```Creator.removeNode(".app", span, li, div);```
