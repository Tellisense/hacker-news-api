import React from 'react'
import TableRow from './TableRow'

const NewsTable = ({ tableData }) => {

  return (
    <div className="mx-32">
      <h1 className="m-4">Hacker News: </h1>
      {
        tableData?.map((item, index) => {
          return (
            <TableRow index={index} item={item.data} key={index} />
          )
        })
      }
    </div>
  )
}

export default NewsTable
