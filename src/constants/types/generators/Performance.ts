import { IPerformance } from "../Performance";

const createIPerformance = (): IPerformance => {
    return {
        index: 0,
        performance: 0
    };
};

export default createIPerformance;