
import React, { ReactNode, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


const FormLayoutMain: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="hidden" >
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>

          <main>
            <div className="mx-auto my-20 max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FormLayoutMain;
