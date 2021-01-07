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
            SELECTED_ALGORITHM: "",
            STEPPER: {
                ACTIVE_STEP: 0
            }
        }
    }
};

export default initialState;