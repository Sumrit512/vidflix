import useSwr from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
    const {data, error, isLoading, mutate} = useSwr('/api/current' , fetcher)

    return {
        data, 
        error,
        isLoading,
        mutate
    
    }
}


export default useCurrentUser;
//swr is use to fetch data, if data is already present then it won't make api calls, 
//this way we don't have to use redux or any state management

