// eslint-disable-next-line no-unused-vars
import {createElement} from './tools/jsxFactory';

export const ALL_CATEGORY = 'ALL';
export class CategoryList {
    props: {
        categories: string[],
        selectedCategory: string,
        // eslint-disable-next-line no-unused-vars
        callback: (selected: string) => void,
    };

    getContent(): HTMLElement {
        return (
            <div>
                { [ALL_CATEGORY, ...this.props.categories].map(c => this.getCategoryButton(c))}
            </div>
        );
    }

    getCategoryButton(cat?: string): HTMLElement {
        const selected = this.props.selectedCategory === undefined
            ? ALL_CATEGORY
            : this.props.selectedCategory;

        const btnClass = selected === cat ? 'btn-primary' : 'btn-secondary';
        return (
            <button
                className={`btn btn-block ${btnClass}`}
                onclick={() => this.props.callback(cat)}
            >
                {cat}
            </button>
        );
    }
}
