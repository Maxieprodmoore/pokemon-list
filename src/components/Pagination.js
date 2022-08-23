import React from 'react'
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

export default function Pagination({gotoPrevPage, gotoNextPage}) {
  return (
    <div className='paginationNav'>
        {gotoPrevPage  ? 
          <SlButton onClick={gotoPrevPage}><SlIcon slot='prefix' name='caret-left-fill' /> Previous page</SlButton> : 
          <SlButton onClick={gotoPrevPage} disabled><SlIcon slot='prefix' name='caret-left-fill' /> Previous page</SlButton>
        } 
        {/*If previous has no entries available (gotoPrevPage === null), disable previous page button. Otherwise set previous page button to active.*/}

        {gotoNextPage && <SlButton onClick={gotoNextPage}>Next page <SlIcon slot='suffix' name='caret-right-fill' /></SlButton>}
    </div>
  )
}
