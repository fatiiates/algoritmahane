import TypeState from '../../constants/types/State';

const initialState: TypeState = {
    ROOT: {
        DRAWER: {
            OPEN: false,
        }
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: {
                search: [],
                sort: []
            },
            SELECTED_ALGORITHM: ""
        }
    }
};

export default initialState;