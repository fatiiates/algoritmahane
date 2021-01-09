interface TypeState {
    ROOT: {
        DRAWER: {
            OPEN: boolean
        }
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: object,
            SELECTED_ALGORITHM: object,
            STEPPER: {
                ACTIVE_STEP: number
            },
            SWITCH_DATASET: boolean
        }
    }
}

export default TypeState;