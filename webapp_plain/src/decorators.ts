import 'reflect-metadata';

export const minimumValue = (propName: string, min: number) =>
    (constructor: any, methodName: string, descriptor: PropertyDescriptor) => {
        const origFunction = descriptor.value;
        descriptor.value = async function (...args) {
            const result = await origFunction.apply(this, args);
            return result.map(r => ({...r, [propName]: r[propName] < min ? min : r[propName]}));
        };
    };

export const addClass = (selector: string, ...classNames: string[]) =>
    (constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
        if (Reflect.getMetadata('design:returnType', constructor, methodName) === HTMLElement) {
            const origFunction = descriptor.value;
            descriptor.value = function (...args) {
                const content: HTMLElement = origFunction.apply(this, args);
                content.querySelectorAll(selector)
                    .forEach(elem => classNames
                        .forEach(c => elem.classList.add(c)));
                return content;
            };
        }
    };
