import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const useMovie = (id? : string) => {

const { 
    data, error, isLoading
} = useSwr(id? `/api/movies/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnMount: false,
    revalidateOnFocus: false,
})

return { data, 
error, isLoading}
}

export default useMovie;