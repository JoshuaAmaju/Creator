# Creator
Makes inserting elements into the DOM a breeze.

## Usage
```<script src"creator.js"></script>```

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

### Create and *Style* element
```
Creator.createNode({
  elementType: "div",
  classes: ["demo"],
  parent: ".app",
  ```
  **```style: {
    background: "#333",
    fontSize:"0.9em"
  }```**
  ### OR
  **```style: "background: #333; font-size: 0.9em"```**
```
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
  parent: ".app",
  attributes: {
    type: "checkbox"
  }
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

#### ```after```, ```before``` and ```parent``` can be an element or selector

### Hold a reference to the created element
```
let li = Creator.createNode({
  elementType: "li",
  parent: "ul"
});
```

Complex nesting is supported also, but not advisable
For example, creating a tree like structure:
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
        text: "demo text",
        children: [
          {
            elementType: "ul",
            children: [
              {
                elementType: "li"
              }
            ]
          }
        ]
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
```span```, ```li``` and ```div``` are all children of ```.app```
