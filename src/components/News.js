import React from 'react';
// Material UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const News = ({ news }) => {
  return (
    <Card>
        <CardTitle title={news.title} subtitle={news.subtitle} />
        <CardText>
        {/*Bug: 띄어쓰기 없으면 반응형 웹 안됨.*/}
            {news.text}
        </CardText>
        {/*<CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>*/}
    </Card>
  );
};

export default News;