import {createToast} from "mosha-vue-toastify";

export const toast = {
    success: (text: string) => {
        createToast({
                title: "Successful",
                description: text
            },
            {
                position: 'top-center',
                type: "success",
                transition: 'slide',
                timeout: 3000,
            })
    },
    warning: (text: string) => {
        createToast({
                title: "Warning",
                description: text
            },
            {
                position: 'top-center',
                type: "warning",
                transition: 'slide',
                timeout: 3000,
            })
    },
    error: (text: string) => {
        createToast({
                title: "Error",
                description: text
            },
            {
                position: 'top-center',
                type: "danger",
                transition: 'slide',
                timeout: 3000,
            })
    },
    info: (text: string) => {
        createToast({
                title: "Info",
                description: text
            },
            {
                position: 'top-center',
                type: "info",
                transition: 'slide',
                timeout: 3000,
            })
    },
}