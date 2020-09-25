import ISection from './isection';
import ICard from './icard';

export default interface ICardProps {
  setCardForOpen: (columnId: string, cardId: string) => void;
  setOpen: (open: boolean) => void;
  column: ISection;
  card: ICard;
  convertDate: (date: Date) => string;
  provided: any;
  isDragging: boolean;
}
