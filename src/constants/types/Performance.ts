export interface IPerformance {
    numberOfTransactions: number;
    performance: number;
    readonly dataset: string;
    readonly algorithmInfo: string;
};

export interface ISearchPerformance extends IPerformance {
    index: number;
};

export interface ISortPerformance extends IPerformance {
    sortedDataset: string;
};

// With optional parameters
export interface IOptionalPerformance {
    numberOfTransactions?: number;
    performance?: number;
    dataset?: string;
    algorithmInfo?: string;
};

export interface IOptionalSearchPerformance extends IOptionalPerformance {
    index?: number;
};

export interface IOptionalSortPerformance extends IOptionalPerformance {
    sortedDataset?: string;
};

type TPerformance = ISearchPerformance | ISortPerformance | null;

export default TPerformance;