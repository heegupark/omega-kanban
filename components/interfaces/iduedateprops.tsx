import ICommonProps from './icommonprops';
import INewCard from './inewcard';

export default interface IDueDateProps extends ICommonProps {
  updateCard: (columnId: string, card: INewCard) => void;
  convertDate: (date: Date) => string;
}
