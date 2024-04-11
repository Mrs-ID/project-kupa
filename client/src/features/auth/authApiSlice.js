import apiSlice from "../../app/apiSlice";
import { logout } from "./authSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (userData) => ({
                url: "/api/auth/login",
                method: "POST",
                body: userData
            })
        }),
        sendLogout: build.mutation({
            query: () => ({
                url: "/api/auth/logout",
                method: "POST",
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    //const {data}=
                    await queryFulfilled
                    //console.log(data)
                    dispatch(logout())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        refresh: build.mutation({
            query: () => ({
                url: "/api/auth/refresh",
                method: "GET"
            })
        })
    })
})
export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice