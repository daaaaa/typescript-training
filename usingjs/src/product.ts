export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) {}
}

export enum SPORT {
    Running, Soccer, Watersports, Other,
}

export class SportsProduct extends Product {
    private sportsArray: SPORT[];

    constructor(
        public id: number,
        public name: string,
        public price: number,
        ...sportArray: SPORT[]
    ) {
        super(id, name, price);
        this.sportsArray = sportArray;
    }

    usedForSport(s: SPORT): boolean {
        return this.sportsArray.includes(s);
    }

    get sports(): SPORT[] {
        return this.sportsArray;
    }
}
