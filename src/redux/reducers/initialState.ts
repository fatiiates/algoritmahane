import TypeState from '../../constants/types/State';

const initialState: TypeState = {
    ROOT: {
        DRAWER: {
            OPEN: false,
        }
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: null,
            SELECTED_ALGORITHM: null,
            STEPPER: {
                ACTIVE_STEP: 0
            },
            SWITCH_DATASET: true,
            OUT: null,
            FORMS: {
                DATASET: {
                    SPEACIAL_DATASET: {
                        ERROR_TEXT: '',
                        TEXT: ''
                    },
                    RANDOM_DATASET: {
                        ERROR_TEXT: '',
                        TEXT: ''
                    }
                }
            }
        }
    }
};

export default initialState;