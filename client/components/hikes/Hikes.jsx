import React from 'react';

import HikeSearch from './HikeSearch.jsx';
import HikeResults from './HikeResults.jsx';
import HikeFavList from './HikeFavList.jsx';

const Hikes = () => {

  return (
    <div className="hikes">
      <HikeSearch />
      <HikeResults />
      <HikeFavList />
    </div>
  )
}

export default Hikes;
