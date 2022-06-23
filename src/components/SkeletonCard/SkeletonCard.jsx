import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
              <Skeleton count={3} />
          </p>
      </SkeletonTheme>
    );
  };
  
  export default SkeletonCard;
  