export default interface IMainProps {
  _id: string;
  changeProjectName: (project: string) => void;
  projectName: string;
}
