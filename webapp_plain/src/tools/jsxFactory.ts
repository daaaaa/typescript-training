export function createElement(Tag: any, props: Object, ...children: Object[]): HTMLElement {
    function addChild(elem: HTMLElement, child: any) {
        elem.appendChild(child instanceof Node
            ? child
            : document.createTextNode(child.toString()));
    }

    if (typeof Tag === 'function') {
        return Object.assign(new Tag(), {props: props || {}}).getContent();
    }

    const elem = Object.assign(document.createElement(Tag), props || {});
    children.forEach(child => Array.isArray(child)
        ? child.forEach(c => addChild(elem, c))
        : addChild(elem, child),
    );
    return elem;
}

declare global {
    // eslint-disable-next-line no-unused-vars
    namespace JSX {
        // eslint-disable-next-line no-unused-vars
        interface ElementAttributesProperty { props; }
    }
}
