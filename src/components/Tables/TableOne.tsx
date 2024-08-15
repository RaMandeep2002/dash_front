import { useEffect, useState } from 'react';
import { BRAND } from '../../types/brand';
import { USERS } from '../../types/users';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../../redux/userSlice"
import { AppDispatch, RootState } from '../../store/store';


const TableOne: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Correctly typed dispatch


  const { isLoading, data, isError } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }

  if (!data || !data.users || !Array.isArray(data.users)) {
    return <div>No users available.</div>;
  }

  const userdetail = data.users;
  console.log("userdetail ====> ", userdetail)
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Users
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ranks
            </h5>
          </div>
          <div className=" p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location
            </h5>
          </div>
        </div>

        {userdetail.map((users: any, key: number) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${key === userdetail.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className=" text-black dark:text-white ">
                {users.username}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{users.rank}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-5">{users.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
