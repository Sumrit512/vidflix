import {PrismaClient} from '@prisma/client';

const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;

// whenever we change something the next js do hot reloading, and that hot reloading creates a lot of prisma client and that gives an error of creating too much prisma clients, to handle this what we do is create a prisma client and then store it in global so that it won't create a new prisma client after every hot reloading if there is alredy a gobal prisma client// 
