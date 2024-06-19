export type propsType = {
    booksList: {
        books: Array<bookType>,
    },
};

export type bookType = {
        id: number,
        author: string,
        price: number,
        image: string,
        title: string,
        level: string,
        tags: string[],
        amount?: number,
        shortDescription: string,
        description: string,
};
