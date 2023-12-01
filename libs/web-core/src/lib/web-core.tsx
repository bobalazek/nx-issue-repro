import { WebUi } from '@nx-issue-repro/web-ui';
import styles from './web-core.module.css';

/* eslint-disable-next-line */
export interface WebCoreProps {}

export function WebCore(props: WebCoreProps) {
  return (
    <div className={styles['container']}>
      <WebUi />
    </div>
  );
}

export default WebCore;
