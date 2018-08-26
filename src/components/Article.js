import React from 'react';

export function Article(props){
    const { article } = props;
    const body = <section> { article.text } </section>;
    debugger;
    return (
        <div className='hello' style={{color: 'red'}}>
            <h2> {article.title } </h2>
            { body }
            <h3>Creation Date: { (new Date(article.date)).toDateString() }</h3>
        </div>
    )
}

