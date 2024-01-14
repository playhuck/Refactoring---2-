import { Province } from "./province";
import { sampleProvinceData } from "./province.fixture";

describe("Province", () => {

    it('생산 부족분 검증', async() => {

        const asia = new Province(sampleProvinceData()); // fixture 설정   

        expect(asia.shortfall).toBe(5);

    });
});