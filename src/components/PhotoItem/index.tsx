import * as C from './styles';
import { BsFillTrashFill } from 'react-icons/bs';

type Props = {
  url: string;
  name: string;
  handleDelete: (url: string) => void;
};

export const PhotoItem = ({ url, name, handleDelete }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}
      <BsFillTrashFill onClick={() => handleDelete(url)} size={25} />
    </C.Container>
  );
};
