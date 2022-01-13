import React from 'react'

const TableRow = ({ item, index }) => {
  return (
    <div className="flex">
      <div>{index + 1}</div>&nbsp;{' | '}&nbsp;
      <div className="border p-1">
        <div className="flex">
          <a href={item.url}>{item.title}</a>&nbsp;{' | '}&nbsp;
          <a className="truncate w-64 text-rose-300" href={item.url}>{item.url}</a>&nbsp;{' | '}&nbsp;
        </div>
        <div className="flex">
          <p>{item.by}</p>&nbsp;{' | '}&nbsp;
          <p>{item.kids?.length}</p>
        </div>
      </div>
    </div>
  )
}

export default TableRow
