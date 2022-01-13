import React from 'react'
import TableRow from './TableRow'

const NewsTable = ({ tableData }) => {
  return (
    <>
      {
        tableData?.map((item, index) => {
          return (
            <TableRow index={index} item={item.data} key={index} />
          )
        })
      }

    </>
  )
}

export default NewsTable
