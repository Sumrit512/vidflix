import { NextPageContext } from 'next';
import { getSession , signOut } from 'next-auth/react';
import useCurrentUser from '../hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '../components/MovieList'
import useMovieList from '@/hooks/useMovie';
import useFavorite from '@/hooks/useFavorite';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {

  // const { data : user } = useCurrentUser();
  const {data: movies = [] } =useMovieList();
const {data: favorites = [] } = useFavorite(); 

  return (
    <>
  <Navbar />
  <Billboard />
  <div className='
  pb-40
  '>
  <MovieList title='Trending Now' data={movies}/>
  <MovieList title='My List' data={favorites} />
  </div>
 
    </>
  )
}
