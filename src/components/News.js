import React from 'react';
// Material UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const News = ({ title, subtitle, text }) => (
    <Card>
        <CardTitle title={title} subtitle={subtitle} />
        <CardText>
        {/*Bug: 띄어쓰기 없으면 반응형 웹 안됨.*/}
            {text}
        </CardText>
        {/*<CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>*/}
    </Card>
);

export default News;