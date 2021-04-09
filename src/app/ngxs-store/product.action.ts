
export class GetCart {
    static readonly type = '[Cart] Get';
}

export class AddCart {
    static readonly type = '[Cart] Add';

    constructor(public payload: string) {
    }
}

export class DeleteCart {
    static readonly type = '[Todo] Delete';

    constructor(public payload:string) {
    }
}

