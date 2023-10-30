
import { NextApiRequest, NextApiResponse } from "next";
import WorkOS from "@workos-inc/node"

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID as string


export default async(req:NextApiRequest, res: NextApiResponse) => {
    if(req.method==='GET'){
        try{
            const code: string = typeof req.query.code === 'string' ? req.query.code : ''
            const profile = workos.sso.getProfileAndToken({
                code,
                clientID
            });
            console.log(profile)
            // res.redirect("/home")
        }
        catch(e:unknown){
            res.status(400).json({message: e});
        }
    }
    else{
        res.status(405).end()
    }
    
}