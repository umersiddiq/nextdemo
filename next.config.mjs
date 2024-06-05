/** @type {import('next').NextConfig} */
const nextConfig = {
    //output:'export'
    redirects:async()=>{
        return[
            // {
            //     source:'/users',
            //     destination:'/',
            //     permanent:false
            // },
            // {
            //     source:'/users/:userid',
            //     destination:'/',
            //     permanent:false
            // },
        ]
    }
};

export default nextConfig;
