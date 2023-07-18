import Articles from './Articles';
import Article from './Article';
import * as React from 'react';

export default function Blog (props) {
    const {
        website: {
            routingComponents: { RouteSwitcher }
        }
    } = props;

    if (props.block.params.blog_page) {
        return <RouteSwitcher {...{ Cards: Articles, Item: Article, ...props }}></RouteSwitcher>;
    } else {
        return <Articles {...props}></Articles>;
    }
}