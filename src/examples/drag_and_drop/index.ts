const NUMBER_OF_DRAG_BOXES = 100;
const NUMBER_OF_DROP_ZONES = 20;
const MAX_CHILDREN_PER_ZONE = 5;

class Point {
  readonly x;
  readonly y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getCoordinates() {
    return [this.x, this.y];
  }

  static isBetween(first: number, second: number, point: number) {
    return point >= first && point <= second;
  }
}

class Rect {
  readonly rect;

  constructor(rect: DOMRect) {
    this.rect = rect;
  }

  get points() {
    return {
      leftTop: new Point(this.rect.left, this.rect.top),
      rightTop: new Point(this.rect.right, this.rect.top),
      rightBottom: new Point(this.rect.right, this.rect.bottom),
      leftBottom: new Point(this.rect.left, this.rect.bottom)
    }
  }

  /**
   * Larger rect completely covers smaller rect
   * @param rect
   */
  covers(rect: Rect) {
    return false;
  }

  /**
   * Smaller rect is completely in larger rect
   * @param rect
   */
  envelopes(rect: Rect) {
    return false;
  }

  /**
   * This rect has a point inside rectToCheck
   * @param rectToCheck
   */
  overlaps(rectToCheck: Rect) {
    return [
      Rect.checkCollision(rectToCheck, this.points.leftTop),
      Rect.checkCollision(rectToCheck, this.points.rightTop),
      Rect.checkCollision(rectToCheck, this.points.rightBottom),
      Rect.checkCollision(rectToCheck, this.points.leftBottom)
    ].includes(true);
  }

  static checkCollision(rectToCheck: Rect, cornerToCheck: Point) {
    return Point.isBetween(rectToCheck.rect.left, rectToCheck.rect.right, cornerToCheck.x) &&
        Point.isBetween(rectToCheck.rect.top, rectToCheck.rect.bottom, cornerToCheck.y)
  }
}

abstract class Component {
  readonly element: HTMLElement;
  public children = [];

  protected constructor(element: HTMLElement) {
    this.element = element

    element.style.borderColor = Component.randomColor();

    // Run render on every call
    const handler = {
      get: function (obj, prop) {
        return typeof obj[prop] !== 'function'
            ? obj[prop]
            : function (...args) {
              obj[prop].apply(obj, args)
              obj.render()
            }
      },
    }

    return new Proxy(this, handler)
  }

  get rect() {
    return this.element.getBoundingClientRect()
  }

  static randomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += (bit).toString(16);
    }
    return color;
  }

  static toKebabCase(str: string) {
    return str.toLowerCase().split(' ').join('-');
  }

  push(element: HTMLElement) {
    if (!this.children.includes(element)) {
      this.children.push(element);
    }
  }

  remove(element: HTMLElement) {
    this.children = this.children.filter(child => child !== element);
  }

  empty(childSelector = undefined) {
    let element = this.element;

    if (childSelector) {
      element = element.querySelector(childSelector)
    }

    element.innerHTML = '';
  }

  abstract render()
}

class DragBox extends Component {
  constructor(name) {
    super(DragBox.create(name));
  }

  static create(name: string) {
    const DragBox = document.createElement('div');

    DragBox.id = Component.toKebabCase(name);
    DragBox.textContent = name;
    DragBox.className = 'drag-zone__box drag-zone__box--large';
    DragBox.setAttribute("data-attribute", "draggable");

    DragBox.onmousedown = function (event) {
      let shiftX = event.clientX - DragBox.getBoundingClientRect().left;
      let shiftY = event.clientY - DragBox.getBoundingClientRect().top;

      DragBox.style.position = 'absolute';
      DragBox.style.zIndex = '1000';

      document.body.append(DragBox);

      moveAt(event.pageX, event.pageY);

      // move the DragBox along the coordinates (pageX, pageY)
      // taking into account the initial shifts
      function moveAt(pageX, pageY) {
        DragBox.style.left = pageX - shiftX + 'px';
        DragBox.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // move the DragBox to the  mousemove
      document.addEventListener('mousemove', onMouseMove);

      // drop the DragBox, remove unneeded handlers
      DragBox.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        DragBox.onmouseup = null;
      };
    };

    DragBox.ondragstart = function () {
      return false;
    };

    return DragBox;
  }

  render() {
    return this.element;
  }
}

class DragZone extends Component {
  constructor(zone: HTMLElement) {
    super(zone);
  }

  create(name) {
    this.children.push((new DragBox(name)).element);
  }

  append(dragBox: HTMLElement) {
    dragBox.style.position = 'static';
    dragBox.style.zIndex = '1';
    dragBox.className = 'drag-zone__box drag-zone__box--large';

    this.element.append(dragBox);
  }

  render() {
    this.empty();
    this.children.forEach(element => this.append(element));
  }
}

class DropZone extends Component {
  constructor(zone: HTMLElement) {
    super(zone);
  }

  static create(name: string) {
    const Wrapper = document.createElement('div');
    const Header = document.createElement('h6');
    const List = document.createElement('ul');

    Wrapper.id = Component.toKebabCase(name);
    Wrapper.className = 'drop-zone__box';

    Header.textContent = name;

    Wrapper.appendChild(Header);
    Wrapper.appendChild(List);

    return Wrapper;
  }

  append(dragBox: HTMLElement) {
    const ListItem = document.createElement('li');

    ListItem.className = 'drop-zone__list-item';

    dragBox.style.position = 'static';
    dragBox.style.zIndex = '1';
    dragBox.className = 'drag-zone__box drag-zone__box--small';

    ListItem.append(dragBox);

    this.element.querySelector('ul').append(ListItem)
  }

  render() {
    this.empty('ul');
    this.children.forEach(element => this.append(element));
  }
}

function main() {
  const dropZones = [];
  const DragZoneContainer = new DragZone(document.getElementById('drag-zone'));
  const DropZoneContainer = new DragZone(document.getElementById('drop-zone'));

  for (let i = 1; i < NUMBER_OF_DROP_ZONES + 1; i++) {
    const dropZone = new DropZone(DropZone.create(`Drop Zone ${i}`));
    dropZones.push(dropZone);
    DropZoneContainer.element.appendChild(dropZone.element);
  }

  for (let i = 1; i < NUMBER_OF_DRAG_BOXES + 1; i++) {
    DragZoneContainer.create(`DragBox ${i}`)
  }

  document.onmouseup = function (event) {
    function checkCollision(rectOne: DOMRect, rectTwo: DOMRect) {
      return (new Rect(rectOne)).overlaps(new Rect(rectTwo));
    }

    // @ts-ignore
    const dragBox: HTMLElement = event.target;
    const isDraggableElement = dragBox &&
        dragBox.hasAttribute("data-attribute") &&
        dragBox.getAttribute("data-attribute") === "draggable";

    if (isDraggableElement) {
      let collisionDetected = false;
      const dragBoxRect = dragBox.getBoundingClientRect();

      dropZones.forEach(function (dropZone) {
        if (checkCollision(dragBoxRect, dropZone.rect) && dropZone.children.length < MAX_CHILDREN_PER_ZONE) {
          dropZone.push(dragBox);
          DragZoneContainer.remove(dragBox);
          dropZones.filter(zone => zone !== dropZone).forEach(element => element.remove(dragBox));
          collisionDetected = true;
          return;
        }
      })

      if (!collisionDetected) {
        dropZones.forEach(element => element.remove(dragBox));
        DragZoneContainer.push(dragBox)
      }
    }
  }
}

window.onload = () => main()