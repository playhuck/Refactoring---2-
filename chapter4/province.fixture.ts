export function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            {
                name: "Kevin", // 생산자 producer
                cost: 10, // 비용
                production: 9 // 생산량
            },
            {
                name: "Lay",
                cost: 10,
                production: 10
            },
            {
                name: "Luke",
                cost: 10,
                production: 6
            }
        ],
        demand: 30,
        price: 20
    }
};