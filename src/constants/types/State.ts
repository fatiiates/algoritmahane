interface TypeState {
    ROOT: {
        DRAWER: {
            OPEN: boolean
        },
        THEME: boolean
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: object,
            SELECTED_ALGORITHM: object,
            STEPPER: {
                ACTIVE_STEP: number
            },
            SWITCH_DATASET: boolean,
            OUT: object,
            FORMS: {
                DATASET: {
                    SPECIAL_DATASET: string,
                    RANDOM_DATASET: {
                        MIN: string,
                        MAX: string,
                        PIECE: string
                    },
                    SEARCHED: string
                }
            }
        }
    }
}

export default TypeState;