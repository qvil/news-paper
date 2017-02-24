import React from 'react';
import News from './News';

const NewsList = ({ newsList }) => (
    <div>
        {newsList.map((news) => 
            <News
                key={news.id}
                {...news}
            />
        )}
    </div>
);

export default NewsList;