import apiSlice from "../../app/apiSlice";

const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllEmployees: build.query({
            query: () => ({
                url: "/api/employee"
            })
        }),
        addEmployee:build.mutation({
            query:(employee)=>({
                url:"/api/employee",
                method:"POST",
                body:employee
            })
        })
    })
})
export const { useGetAllEmployeesQuery,useAddEmployeeMutation } = employeeApiSlice