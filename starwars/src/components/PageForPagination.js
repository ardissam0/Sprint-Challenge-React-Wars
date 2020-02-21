import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageForPagination = props => {
    console.log(props);
    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink previous onClick={() => props.url(props.previous)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={() => props.url(props.next)} />
            </PaginationItem>
        </Pagination>
    );
};


export default PageForPagination;