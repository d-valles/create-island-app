import React from 'react'
import './Cell.css'

export default function Cell({ row, col, isEmpty, onMouseDown, onMouseUp }) {

  const typeOfCell = isEmpty ?
    'cell-water' : 'cell-land'

	return (
    <div
      id={`cell-${row}-${col}`}
      className={`cell ${typeOfCell}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
      >
		</div>
	)
}