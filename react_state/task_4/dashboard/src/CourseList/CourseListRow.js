import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.cell, styles.headerCell)} colSpan={2}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={css(styles.headerRow)}>
        <th className={css(styles.cell, styles.headerCell)}>{textFirstCell}</th>
        <th className={css(styles.cell, styles.headerCell)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr
      className={css(styles.row, isChecked && styles.rowChecked)}
    >
      <td className={css(styles.cell)}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {textFirstCell}
      </td>
      <td className={css(styles.cell)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  cell: {
    border: '1px solid #e1e1e1',
    padding: '8px 12px',
  },
  headerCell: {
    backgroundColor: '#f5f5f5',
  },
});

export default CourseListRow;
