import React from 'react'
import PropTypes from 'prop-types'
import './Cell.css'

export default function Cell({ row, col, isEmpty, onMouseDown, onMouseUp }) {

  const typeOfCell = isEmpty ?
    'cell-water' : 'cell-land'

	return (
    <div
      key={`cell-${row}-${col}`}
      className={`cell ${typeOfCell}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
      >
		</div>
	)
}

Cell.propTypes = {
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
}
