import React from 'react';

function AppView(props) {
    return (
        <div>
            <Header {...props}></Header>
            <NewTodo {...props}/>
            <Main {...props}></Main>
            <Footer {...props}></Footer>
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
        </header>
    );
}

function NewTodo(props) {
    return (
        <section id="new-todo">
            <input
                type="input"
                className="toggle"
                value={props.todoDraft}
                onChange={
                    e => {props.onUpdateDraft(e.target.value)}
                }
            />
            <button className="newTodo"
                    onClick={
                        () => {
                            props.onAddTodo(props.todoDraft)
                            props.onUpdateDraft('')
                        }
                    }
            >Add!</button>
        </section>
    )
}

function Main(props) {
    if (props.todos.size === 0) {
        return null;
    }
    return (
        <section id="main">
            <ul id="todo-list">
                {
                    [...props.todos.values()].reverse().map(todo => (
                        <li key={todo.id}>
                            <div className="view">
                                <input
                                    type="checkbox"
                                    className="toggle"
                                    checked={todo.complete}
                                    onChange={
                                        () => {props.onToggleTodo(todo.id)}
                                    }
                                />
                                <label>{todo.text}</label>
                                <button className="destroy"
                                        onClick={() => props.onDeleteTodo(todo.id)}
                                ></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const remaining = props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';

    return (
        <footer id="footer">
          <span id="todo-count">
              <strong>
                  { remaining }
              </strong>
              { phrase }
          </span>
        </footer>
    );
}

export default AppView;
