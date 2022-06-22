import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.load}>
      <BallTriangle color="#3f51b5" height={140} width={140} />
    </div>
  );
};

export default Loader;
