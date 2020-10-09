import IColumn from './icolumn';
import IColumnItem from './icolumnitem';

export default interface IColumns {
  columns: IColumn;
  columnOrder: Array<string>;
  archive: IColumnItem;
}
