import React from 'react'

const TableRow = ({ item, index }) => {
  return (
    <div className="flex border">
      <div className="m-4">{index + 1}</div>
      <div className="m-1 border p-1 w-full">
        <div className="flex">
          <a href={item.url}>{item.title}</a>
          <a className="truncate w-64 text-rose-300 mx-4" href={item.url}>{item.url}</a>
        </div>
        <div className="flex">
          <p>{item.by}</p>
          <p className="mx-4">{item.kids?.length}</p>
        </div>
      </div>
    </div>
  )
}

export default TableRow
