document.head.createElement('link').href = './code/main.css';

function addComponent(element, className, text, css) {
    const component = document.createElement(`${element}`);
    component.className = className;
    component.textContent = text;
    component.style.cssText = css || 'background-color: lightblue; padding: 10px; margin: 5px; border-radius: 5px;';
    document.body.appendChild(component);
    return component;
}

addComponent('div', 'header', 'Header');
addComponent('div', 'main', 'Main Content');