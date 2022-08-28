// import { accessToken } from "./storage";

import { SERVER_URL } from "apis/endpoints";

export const SERVER = SERVER_URL;

function generateHeader(object?: any) {
    const header: any = {};
    //   if (accessToken.get() && accessToken.get().length > 0) {
    //     header["Authorization"] = "jwt " + accessToken.get();
    //   }
    for (const key of Object.keys(object)) {
        header[key] = object[key];
    }
    return header;
}

export function del(url: string, body: any) {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: generateHeader({ "Content-Type": "application/json" }),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function post(url: string, body: any) {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: "POST",
            headers: generateHeader({ "Content-Type": "application/json" }),
            body: JSON.stringify(body),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function form(url: string, body: any) {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: "POST",
            body: body,
            headers: generateHeader(),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}
export function put(url: string, body: any) {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: generateHeader({ "Content-Type": "application/json" }),
        })
            .then(function (response) {
                status = response.status;
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function patch(url: string, body: any) {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: generateHeader({ "Content-Type": "application/json" }),
        })
            .then(function (response) {
                status = response.status;
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function get(url: string, params: any = {}) {
    const generatedUrl = new URL(SERVER + url);
    Object.keys(params).forEach((key) => {
        if (params[key]) {
            generatedUrl.searchParams.append(key, params[key]);
        }
    });
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(generatedUrl.hostname, {
            method: "GET",
            headers: generateHeader({ "Content-Type": "application/json" }),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function responseValidator(status: number) {
    return status >= 200 && status < 300;
}
