import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";

export default async function handler (req: NextApiRequest, res: NextApiResponse){

if(req.method !== 'GET'){
    return res.status(405).end();
}

try{

    const {currentUser} = await serverAuth(req);
     
    const {movieId} = req.query;

    if(typeof movieId !== 'string'){
        throw new Error('Invalid Id');
    }

    if(!movieId) {
        throw new Error('Inavlid Id');
    }

    const movie = await prismadb.movie.findUnique({
        where: {
           id: movieId, 
        }
    })

    if(!movie) {
        throw new Error('Invalid Id')
    }

 return res.status(200).json(movie)
} catch(e){
    console.log(e)
    return res.status(400).end()
}

}
