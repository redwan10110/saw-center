import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const {
        data: reviews,
        isLoading,
        refetch,
      } = useQuery("reviews", () =>
        fetch(`https://saw-center.herokuapp.com/reviews`).then((res) => res.json())
      );
      if(isLoading){
          return <Loading></Loading>
      }
    return (
        <div>
            <h1 className="text-center text-4xl text-secondary my-10 font-bold">Reviews</h1> 
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 lg:px-12 px-6'>
                {
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;