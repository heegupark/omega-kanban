import ICard from './icard';

export default interface IAddColumnProps {
  colorIndex: number;
  addColumn: (columnTitle: string, card: ICard | undefined) => void;
}
