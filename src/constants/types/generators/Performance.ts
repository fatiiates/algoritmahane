import { 
    IOptionalPerformance,        
    IOptionalSearchPerformance,         
    IOptionalSortPerformance,         
    IPerformance,         
    ISearchPerformance,         
    ISortPerformance 
} from "../Performance";

export const createPerformance = ({
            performance = 0,
            numberOfTransactions = 0,
            dataset = "",
            algorithmInfo = ""
        }:IOptionalPerformance
    ): IPerformance => {
    return {
        performance,
        numberOfTransactions,
        dataset,
        algorithmInfo   
    };
};

export const createSearchPerformance = ({
            index = 0,
            performance = 0,
            numberOfTransactions = 0,
            dataset = "",
            algorithmInfo = ""
        }:IOptionalSearchPerformance
    ): ISearchPerformance => {
    return {
        index,
        performance,
        numberOfTransactions,
        dataset,
        algorithmInfo   
    };
};

export const createSortPerformance = ({
            sortedDataset = "",
            performance = 0,
            numberOfTransactions = 0,
            dataset = "",
            algorithmInfo = ""
        }:IOptionalSortPerformance
    ): ISortPerformance => {
    return {
        sortedDataset,
        performance,
        numberOfTransactions,
        dataset,
        algorithmInfo
    };
};

