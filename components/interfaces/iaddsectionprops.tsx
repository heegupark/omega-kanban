import ICard from './icard';

export default interface IAddSectionProps {
  colorIndex: number;
  addSection: (sectionTitle: string, card: ICard | undefined) => void;
}
