import apiSlice from "../../app/apiSlice";

const familiesApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllFamilies: build.query({
            query: () => ({
                url: "/api/family"
            })
        }),
        addFamily:build.mutation({
            query:(employee)=>({
                url:"/api/family",
                method:"POST",
                body:employee
            })
        })
    })
})
export const { useGetAllFamiliesQuery,useAddFamilyMutation } = familiesApiSlice