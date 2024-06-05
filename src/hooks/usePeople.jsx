import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInit, fetchSuccess, fetchFailure } from '../store/people/actions';
import { getPeople } from '../api/people';

const usePeople = (page, search) => {
  const dispatch = useDispatch();
  const { people, count, isLoading } = useSelector(state => state.people);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchInit());
      getPeople(page, search)
        .then(data => {
          dispatch(fetchSuccess({ results: data.results, count: data.count }));
        })
        .catch(() => {
          dispatch(fetchFailure());
        });
    };

    fetchData();
  }, [dispatch, page, search]);

  return { people, count, isLoading };
};

export default usePeople;
