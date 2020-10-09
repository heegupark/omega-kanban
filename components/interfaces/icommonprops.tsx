import IColumnItem from './icolumnitem';
import ICard from './icard';

export default interface ICommonProps {
  currentCard: ICard;
  currentColumn: IColumnItem;
}
