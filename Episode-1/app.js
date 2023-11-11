const heading1 = React.createElement(
  "h1",
  { className: "heading" },
  "Sudeep from First React"
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);

/*
<div id="parent">
    <div id="children">
        <p>I am trying to learn react from namaste react</p>
    </div>
</div>
*/

const heading2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement(
      "p",
      {},
      "I am trying to learn react from namaste react"
    )
  )
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(heading2);

/*
<div>
    <div id="children1">
        <h1>This is the first heading from children 1</h1>
        <h2>This is the second heading from children 1</h2>
    </div>

    <div id="children2">
        <h1>This is the first heading from children 2</h1>
        <h2>This is the second heading from children 2</h2>
    </div>

</div>
*/

const heading3 = React.createElement("div", {}, [
  React.createElement("div", { id: "children1" }, [
    React.createElement(
      "h1",
      { className: "first" },
      "This is the first heading from children 1"
    ),
    React.createElement(
      "h2",
      { className: "second" },
      "This is the second heading from children 1"
    ),
  ]),

  React.createElement("div", { id: "children2" }, [
    React.createElement(
      "h1",
      { className: "first" },
      "This is the first heading from children 2"
    ),
    React.createElement(
      "h2",
      { className: "second" },
      "This is the second heading from children 2"
    ),
  ]),
]);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(heading3);
