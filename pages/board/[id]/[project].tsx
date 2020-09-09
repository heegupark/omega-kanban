import Board from '../../../components/board';
import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter();
  const { id, project } = router.query;

  return <Board id={id} project={project} />;
}
