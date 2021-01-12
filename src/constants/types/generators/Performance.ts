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
            dataset = ""
        }:IOptionalPerformance
    ): IPerformance => {
    return {
        performance,
        numberOfTransactions,
        dataset   
    };
};

export const createSearchPerformance = ({
            index = 0,
            performance = 0,
            numberOfTransactions = 0,
            dataset = ""
        }:IOptionalSearchPerformance
    ): ISearchPerformance => {
    return {
        index,
        performance,
        numberOfTransactions,
        dataset  
    };
};

export const createSortPerformance = ({
            sortedDataset = "",
            performance = 0,
            numberOfTransactions = 0,
            dataset = ""
        }:IOptionalSortPerformance
    ): ISortPerformance => {
    return {
        sortedDataset,
        performance,
        numberOfTransactions,
        dataset
    };
};

