    export interface Item {
        name: string;
        description: string;
        price: number;
        imagelink: string;
        rating: string;
        stock: string;
        category: string;
        subcategory: string;
    }

    export interface Subcategory {
        name: string;
        items: Item[];
    }

    export interface IProduct {
        category: string;
        subcategories: Subcategory[];
    }



