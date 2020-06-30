import React from 'react';
import { PaginationItem,Pagination, PaginationLink } from 'reactstrap';

const Rdhs_Hospital_Paging = ({dataPerPage,totalData,paginate}) => {
    const pageNumbers = [];
    for(let i =1; i<= Math.ceil(totalData/dataPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <Pagination>
            <PaginationItem disabled><PaginationLink previous tag="button" >Prev</PaginationLink></PaginationItem>
                {pageNumbers.map(number =>(
                    <PaginationItem key={number}>
                        <PaginationLink tag="button" onClick={() => paginate(number)} >
                        {number}
                        </PaginationLink>
                    </PaginationItem>    
                ))}
            <PaginationItem disabled><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
            </Pagination>
        </nav>
    )
}

export default Rdhs_Hospital_Paging