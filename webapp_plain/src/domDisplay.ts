import {Product, Order} from './data/entities';

export class DomDisplay {
    props: {
        products: Product[],
        order: Order,
    };

    getElementText(): string {
        return `${this.props.products.length} Products, Order Total: $${this.props.order.total}`;
    }

    getContent(): HTMLElement {
        const elem = document.createElement('h3');
        elem.innerText = this.getElementText();
        elem.classList.add(
            'bg-primary',
            'text-center',
            'text-white',
            'p-2',
        );
        return elem;
    }
}
