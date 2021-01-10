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
            SELECTED_ALGORITHM: {
                name: "",
                endPoint: "",
                info: ""
            },
            STEPPER: {
                ACTIVE_STEP: 1
            },
            SWITCH_DATASET: true
        },
        RESULT: {
            OUT: {}
        }
    }
};

export default initialState;