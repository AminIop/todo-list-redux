import { ActionTypeUser } from "../constants/actions-types/user";

export const userGetActionGetAllCreator = _ => (
    {
        type: ActionTypeUser.get.GET_ALL
    }
)

export const userGetActionGetOneCreator = userId => (
    {
        type: ActionTypeUser.get.GET_ALL,
        payload: userId
    }
)

export const userGetActionPostCreator = user => (
    {
        type: ActionTypeUser.get.POST,
        payload: user
    }
)

export const userGetActionPutCreator = user => (
    {
        type: ActionTypeUser.get.POST,
        payload: user
    }
)

export const userGetActionPatchCreator = user => (
    {
        type: ActionTypeUser.get.POST,
        payload: user
    }
)

export const userGetActionDeleteCreator = userId => (
    {
        type: ActionTypeUser.get.POST,
        payload: userId
    }
)