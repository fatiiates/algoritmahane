interface TypeState {
    ROOT: {
        DRAWER: {
            OPEN: boolean
        }
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: object,
            SELECTED_ALGORITHM: string,
            STEPPER: {
                ACTIVE_STEP: number
            }
        }
    }
}

export default TypeState;