"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SinglyLinkedList_1 = require("../../structures/SinglyLinkedList");
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
        this.component = null;
    }
    Component.prototype.empty = function () {
        this.component.innerHTML = '';
    };
    Component.prototype.render = function () {
        return this.component;
    };
    return Component;
}());
var GetContainerById = /** @class */ (function (_super) {
    __extends(GetContainerById, _super);
    function GetContainerById(props) {
        var _this = _super.call(this, props) || this;
        _this.component = _this.create();
        return _this;
    }
    GetContainerById.prototype.create = function () {
        return document.getElementById(this.props.id);
    };
    return GetContainerById;
}(Component));
var CreateElement = /** @class */ (function (_super) {
    __extends(CreateElement, _super);
    function CreateElement(props) {
        var _this = _super.call(this, props) || this;
        _this.component = _this.create();
        return _this;
    }
    CreateElement.prototype.create = function () {
        var _a = this.props, tag = _a.tag, options = _a.options, onClickHandler = _a.onClickHandler;
        var Element = document.createElement(tag);
        for (var option in options) {
            Element[option] = options[option];
        }
        Element.onclick = onClickHandler;
        return Element;
    };
    return CreateElement;
}(Component));
var ListComponent = /** @class */ (function () {
    function ListComponent(list) {
        this.list = list;
    }
    ListComponent.prototype.size = function () {
        return this.list.size;
    };
    ListComponent.prototype.getHead = function () {
        return this.list.getHead().data;
    };
    ListComponent.prototype.getTail = function () {
        return this.list.getTail().data;
    };
    ListComponent.prototype.push = function (component) {
        return this.list.push(component);
    };
    ListComponent.prototype.pop = function () {
        return this.list.pop();
    };
    ListComponent.prototype.shift = function () {
        return this.list.shift();
    };
    ListComponent.prototype.unshift = function (component) {
        return this.list.unshift(component);
    };
    ListComponent.prototype.get = function (index) {
        var _a;
        return (_a = this.list.get(index)) === null || _a === void 0 ? void 0 : _a.data;
    };
    ListComponent.prototype.insert = function (index, component) {
        return this.list.insert(index, component);
    };
    ListComponent.prototype.remove = function (index) {
        return this.list.remove(index);
    };
    ListComponent.prototype.reverse = function () {
        return this.list.reverse();
    };
    ListComponent.prototype.render = function (renderToElement) {
        renderToElement.empty();
        var currentNode = this.list.getHead();
        while (currentNode) {
            renderToElement.render().append(currentNode.data.render());
            currentNode = currentNode.next;
        }
    };
    return ListComponent;
}());
var ListController = /** @class */ (function () {
    function ListController(List) {
        this.list = List;
        this.container = new GetContainerById({ id: 'singly-linked-list' });
        this.outputContainer = new GetContainerById({ id: 'output' });
        this.nodeIndex = new GetContainerById({ id: 'node-index' });
        this.counter = new GetContainerById({ id: 'counter' });
        // Run render on every call
        var handler = {
            get: function (obj, prop) {
                return typeof obj[prop] !== 'function'
                    ? obj[prop]
                    : function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        obj[prop].apply(obj, args);
                        obj.render(prop);
                        obj.updateCounter(prop);
                    };
            },
        };
        return new Proxy(this, handler);
    }
    ListController.prototype.getHeadHandler = function () {
        var data = this.list.getHead().data;
        this.setOutput(data);
    };
    ListController.prototype.getTailHandler = function () {
        var data = this.list.getTail().data;
        this.setOutput(data);
    };
    ListController.prototype.pushHandler = function (newValue) {
        if (newValue === void 0) { newValue = ''; }
        this.list.push(this.createNewNode(newValue));
    };
    ListController.prototype.popNodeHandler = function () {
        this.list.pop();
    };
    ListController.prototype.shiftHandler = function () {
        this.list.shift();
    };
    ListController.prototype.unshiftHandler = function (newValue) {
        if (newValue === void 0) { newValue = ''; }
        var newNode = this.createNewNode(newValue);
        this.list.unshift(newNode);
    };
    ListController.prototype.getHandler = function () {
        var index = +this.nodeIndex.component.value;
        var component = this.list.get(index);
        this.setOutput(component);
    };
    ListController.prototype.insertHandler = function () {
        var index = +this.nodeIndex.component.value;
        this.list.insert(index, this.createNewNode());
    };
    ListController.prototype.removeHandler = function () {
        var value = document.getElementById('node-index').value;
        this.list.remove(+value);
    };
    ListController.prototype.removeItemHandler = function (event) {
        var collection = Array.from(this.container.component.children);
        var index = collection.indexOf(event.target);
        this.list.remove(index);
        this.render();
    };
    ListController.prototype.reverseHandler = function () {
        this.list.reverse();
    };
    ListController.prototype.getValue = function (newValue) {
        if (newValue === void 0) { newValue = ''; }
        return newValue ? newValue : document.getElementById('add-node').value;
    };
    ListController.prototype.createNewNode = function (newValue) {
        if (newValue === void 0) { newValue = ''; }
        var value = this.getValue(newValue);
        return new CreateElement({
            tag: 'li',
            options: {
                className: 'list-node',
                innerText: value,
            },
            onClickHandler: this.removeItemHandler.bind(this),
        });
    };
    ListController.prototype.setOutput = function (component) {
        var placeholder = (new CreateElement({
            tag: 'li',
            options: {
                className: 'list-node',
                innerText: 'Item not found',
            },
        })).component;
        this.outputContainer.empty();
        if (component) {
            placeholder = component.cloneNode(true);
        }
        this.outputContainer.component.appendChild(placeholder);
    };
    ListController.prototype.updateCounter = function () {
        this.counter.component.innerText = this.list.size;
    };
    ListController.prototype.render = function () {
        this.list.render(this.container);
    };
    return ListController;
}());
var listController = new ListController(new ListComponent(new SinglyLinkedList_1.default()));
for (var i = 0; i < 5; i++) {
    listController.pushHandler("".concat(i));
}
//# sourceMappingURL=index.js.map