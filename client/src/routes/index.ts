import React from "react";
import LoginPage from "../pages/login-page";
import RegistrationPage from "../pages/reg-page";
import userPage from "../pages/user-page";

export interface IRoute {
    key: string;
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    REGISTRATION = '/reg',
    USER = '/user'
}


export const publicRoutes: IRoute[] = [
    {
        key: RouteNames.LOGIN,
        path: RouteNames.LOGIN,
        element: LoginPage
    },
    {
        key: RouteNames.REGISTRATION,
        path: RouteNames.REGISTRATION,
        element: RegistrationPage
    },
];

export const privateRoutes: IRoute[] = [
    {
        key: RouteNames.USER,
        path: RouteNames.USER,
        element: userPage
    }
];