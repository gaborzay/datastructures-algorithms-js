import SinglyLinkedList from '../../structures/SinglyLinkedList';

class Component {
  props
  component

  constructor(props) {
    this.props = props
    this.component = null
  }

  empty() {
    this.component.innerHTML = ''
  }

  render() {
    return this.component
  }
}

class CreateElement extends Component {
  constructor(props) {
    super(props)
    this.component = this.create()
  }

  create() {
    const {tag, options, onClickHandler} = this.props
    const Element = document.createElement(tag)

    for (const option in options) {
      Element[option] = options[option]
    }

    Element.onclick = onClickHandler

    return Element
  }
}

class ListController {
  private tag: string = 'li';
  private list: any;
  private listContainer: any;

  constructor(list, listContainer, counterContainer) {
    this.list = list
    this.listContainer = listContainer

    // Run render on every call
    const handler = {
      get: function (obj, prop) {
        return typeof obj[prop] !== 'function'
            ? obj[prop]
            : function (...args) {
              obj[prop].apply(obj, args)
              obj.render()
              obj.updateCounter(counterContainer)
            }
      },
    }
    return new Proxy(this, handler)
  }

  getHeadHandler(container, event) {
    const {data} = this.list.getHead()
    this.setOutput(data, container)
  }

  getTailHandler(container, event) {
    const {data} = this.list.getTail()
    this.setOutput(data, container)
  }

  pushHandler(container, event) {
    this.list.push(this.createNewNode(container))
  }

  popNodeHandler() {
    this.list.pop()
  }

  shiftHandler() {
    this.list.shift()
  }

  unshiftHandler(container, event) {
    this.list.unshift(this.createNewNode(container))
  }

  getHandler(indexContainer, outputContainer, event) {
    const {value: index = 0} = indexContainer
    const component = this.list.get(+index)
    this.setOutput(component, outputContainer)
  }

  insertHandler(indexContainer, valueContainer, event) {
    const {value: index = 0} = indexContainer
    this.list.insert(+index, this.createNewNode(valueContainer))
  }

  removeHandler(indexContainer, event) {
    const {value: index = 0} = indexContainer
    this.list.remove(+index)
  }

  removeItemHandler(event) {
    const collection = Array.from(this.listContainer.children)
    const index = collection.indexOf(event.target)
    this.list.remove(index)
    this.render()
  }

  reverseHandler(event) {
    this.list.reverse()
  }

  createNewNode(valueContainer) {
    const {value} = valueContainer;

    return new CreateElement({
      tag: this.tag,
      options: {
        className: 'list-node',
        innerText: value,
      },
      onClickHandler: this.removeItemHandler.bind(this),
    })
  }

  setOutput(component, container) {
    const Element = component.component ?
        component.component.cloneNode(true) :
        (new CreateElement({
          tag: this.tag,
          options: {
            className: 'list-node',
            innerText: 'Item not found',
          },
        })).component

    container.innerHTML = '';
    container.appendChild(Element)
  }

  updateCounter(container) {
    container.innerText = this.list.size
  }

  render() {
    this.listContainer.innerHTML = '';

    let currentNode = this.list.getHead()

    while (currentNode) {
      this.listContainer.append(currentNode.data.render())
      currentNode = currentNode.next
    }
  }
}

function main() {
  // Inputs / Outputs
  const ValueContainer = document.getElementById('node-value');
  const IndexContainer = document.getElementById('node-index');
  const OutputContainer = document.getElementById('output')
  const CounterContainer = document.getElementById('counter');
  const SinglyListContainer = document.getElementById('singly-linked-list')
  // Controls
  const PushButton = document.getElementById('controller-push');
  const UnShiftButton = document.getElementById('controller-unshift');
  const GetButton = document.getElementById('controller-get');
  const InsertButton = document.getElementById('controller-insert');
  const RemoveButton = document.getElementById('controller-remove');
  const PopButton = document.getElementById('controller-pop');
  const ShiftButton = document.getElementById('controller-shift');
  const GetHeadButton = document.getElementById('controller-get-head');
  const GetTailButton = document.getElementById('controller-get-tail');
  const ReverseButton = document.getElementById('controller-reverse');

  const listController = new ListController(
      new SinglyLinkedList(),
      SinglyListContainer,
      CounterContainer
  )

  PushButton.onclick = listController.pushHandler.bind(null, ValueContainer);
  UnShiftButton.onclick = listController.unshiftHandler.bind(null, ValueContainer);
  GetButton.onclick = listController.getHandler.bind(null, IndexContainer, OutputContainer);
  InsertButton.onclick = listController.insertHandler.bind(null, IndexContainer, ValueContainer);
  RemoveButton.onclick = listController.removeHandler.bind(null, IndexContainer);
  PopButton.onclick = listController.popNodeHandler;
  ShiftButton.onclick = listController.shiftHandler;
  GetHeadButton.onclick = listController.getHeadHandler.bind(null, OutputContainer);
  GetTailButton.onclick = listController.getTailHandler.bind(null, OutputContainer);
  ReverseButton.onclick = listController.reverseHandler;
}

window.onload = () => main()