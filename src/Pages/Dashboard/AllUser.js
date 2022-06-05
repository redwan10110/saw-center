import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    const {data:users,isLoading,refetch} = useQuery('users', ()=> fetch(`https://saw-center.herokuapp.com/user`,{
        method: "GET",
        headers: {
          "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res=> res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-center text-4xl text-purple-900">All User: {users.length}</h1>
            <div className="md:px-12 px-6 relative overflow-x-auto">
                <table className="w-full text-left">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>NO</th>
                        <th>Email   </th>
                        <th>Status</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index) =><UserRow
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></UserRow>)
                    }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;