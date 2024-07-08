import { LitElement, html, css } from 'lit';
import { HotModuleReplacementPlugin } from 'webpack';

class ToDos extends LitElement {
  static properties = {
    ordered: {
      type: Boolean,
      reflect: true,
    },
    todos: {
      type: Array,
      reflect: true,
    },
  };
  static styles = css``;
  constructor() {
    super();
    this.ordered = false;
  }
  render() {
    return html` ${this.ordered ? this._templateOrderedList() : this._templateUnorderedList()} `;
  }

  _templateOrderedList() {
    return html`
      <ol>
        ${this.todos.map((item) => this._templateListItem(item))}
      </ol>
    `;
  }
  _templateUnorderedList() {
    return html`
      <ul>
        ${this.todos.map((item) => this._templateListItem(item))}
      </ul>
    `;
  }
  _templateListItem() {
    return html`
      <li ?completed=${todo.completed}>
        <span class="todo-title"> ${todo.title} </span>
        <button @click=${() => this._completeTodo(todo)}>
          ${todo.completed ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
        </button>
      </li>
    `;
  }
  _completeTodo(todo) {
    todo.completed = !todo.completed;
    this.requestUpdate();
  }
}

customElements.define('todos', ToDos);
