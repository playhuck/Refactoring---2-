export class Producer {

    _province: {
        _name: string,
        _producers: any,
        _totalProduction: number,
        _demand: number,
        _price: number
      };
    _cost: number;
    _name: string;
    _production: number;

    constructor(aProvince, data){

        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    };

    get name() {
        return this._name;
    };

    get cost() {
        return this._cost;
    };

    set cost(arg) {
        this._cost = parseInt(arg as unknown as string);
    };

    get production() {
        return this._production;
    };

    set production(amountStr) {
        const amount = parseInt(amountStr as unknown as string);
        const newProduction = Number.isNaN(amount) ? 0 : amount;

        this._province._totalProduction += newProduction - this._production;
        this._production = newProduction
    };
}