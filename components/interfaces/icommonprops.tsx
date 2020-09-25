import ISection from './isection';
import ICard from './icard';

export default interface ICommonProps {
  currentCard: ICard;
  currentColumn: ISection;
}
