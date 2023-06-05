import { RepoType } from "@/app/@types/global"

export type Action = 
| {type: 'open_modal', payload: boolean}

export const repoReducer = (state: RepoType, action: Action) => {
    switch(action.type) {
        case 'open_modal': {
            return {
                ...state,
                openModal: true
            }
        }
    }
}