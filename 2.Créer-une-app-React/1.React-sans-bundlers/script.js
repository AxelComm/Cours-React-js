function Title() {
    
    return React.createElement("h1", {className: "title"}, "Hello World")
}


ReactDom.createRoot(document.getElementById("root")).render(Title())