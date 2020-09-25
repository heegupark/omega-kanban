import IColumn from './icolumn';
import ISection from './isection';

export default interface IColumns {
  columns: IColumn;
  columnOrder: Array<string>;
  archive: ISection;
}
