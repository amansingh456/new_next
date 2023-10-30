import { NextApiRequest, NextApiResponse } from "next";

import WorkOS from "@workos-inc/node"

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID as string


export default async(req:NextApiRequest, res: NextApiResponse) => {
    if(req.method==="POST"){
        try{
            const {domain} = req.body
            console.log(domain)
            const authorizationURL = workos.sso.getAuthorizationURL({
                domain,
                clientID,
                redirectURI:"http://localhost:3001/api/auth/callback"
            });
            res.status(200).json({authorizationURL});
        }
        catch(e:unknown){
            res.status(400).json({message: e});
        }
    }
    else{
        res.status(405).end()
    }
    
}