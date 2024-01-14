import { Producer } from "./producer";

export class Province {
    _name: any;
    _producers: any[];
    _totalProduction: number;
    _demand: any;
    _price: any;

    constructor(doc){

        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    };

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    };

    /** 생산 부족분 계산, 전체 수요 - 전체 생산량 */
    get shortfall(){
        return this._demand - this._totalProduction;
    };

    /** 수익 계산 */
    get profit(){
        return this.demandValue - this.demandCost;
    };

    get demandValue() {
        return this.satisfiedDemand * this._price;
    };

    get satisfiedDemand() {
        return Math.min(this._demand, this._totalProduction);
    };

    get demandCost() {
        let remainingDemand = this._demand;
        let result = 0;

        this._producers
            .sort((a, b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });

        return result;
    }

};
