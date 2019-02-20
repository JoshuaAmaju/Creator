// Transform dashed string into apropraite camel case.
const camelCase = (function (input) {
    return input.toLowerCase().replace(/-(.)/g, function(match, group) {
        return group.toUpperCase();
    });
});

// Styles element
const styleElement = (function (element, style) {
  if (typeof style === "string") {
    element.style.cssText = style;
  } else {
    for (const key in style) {
        if (style.hasOwnProperty(key)) {
            element.style[key] = style[key];
        }
    }
  }
});

// Adds attributes to element
const addAttribute = (function (element, attributes) {
  for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
          element.setAttribute(key, attributes[key]);
      }
  }
});

// Adds classes to element
const addClass = (function (element, classes) {
  classes.forEach(_class => element.classList.add(_class));
});

const createNode = (function (options) {

  // Element creation property pool.
  let {
    elementType, nodeType, id,
    classes, text, html, attributes,
    parent, callback, children, style,
    before, after
  } = options;

  let el = document.createElement(elementType);

  // Check if the parent is an element or a selector.
  // if parent is a selector, it goes ahead to select the element from the DOM
  if (typeof parent === "string") parent = document.querySelector(parent);

  if (id !== undefined) el.id = id;
  if (html !== undefined) el.innerHTML = html;
  if (text !== undefined) el.textContent = text;

  if (style !== undefined) styleElement(el, style);
  if (classes !== undefined) addClass(el, classes);
  if (attributes !== undefined) addAttribute(el, attributes);

  // this._el = el;
  if (parent !== undefined) {
    if (before !== undefined) {
      parent.insertBefore(el, before);
    } else if (after !== undefined) {
      parent.insertBefore(el, after.nextElementSibling);
    } else {
      parent.appendChild(el);
    }
  }

  if (typeof callback === "function") callback();

  if (children !== undefined) {
    for (var i = 0; i < children.length; i++) {
      children[i].parent = el;
      createNode(children[i]);
    }
  }

  return el;
});

const removeNode = (function(parent, ...child) {
  for (var i = 0; i < child.length; i++) parent.removeChild(child[i]);
});

const Creator = {
  createNode: createNode,
  removeNode: removeNode
};
