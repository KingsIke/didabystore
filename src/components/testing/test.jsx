import React from 'react';

const MultiColumnLayout = () => {
  return (
    <div className="flex">
      {/* Left Sticky Column */}
      <div className="sticky top-0 h-screen w-1/4 bg-gray-200 px-4 py-8">
        {/* Content for the sticky column */}
        Sticky Column
      </div>

      {/* Constrained Content */}
      <div className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-7xl p-8">
          {/* Your content here */}
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 bg-white p-4 shadow">
              Column 1 Content
            </div>
            <div className="col-span-1 bg-white p-4 shadow">
              Column 2 Content
            </div>
            <div className="col-span-1 bg-white p-4 shadow">
              Column 3 Content
            </div>
          </div>
        </div>













        
      </div>
    </div>
  );
};

export default MultiColumnLayout;
