import mainStyle from '../main.module.css';
import shrinkStyle from '../shrink.module.css';
import styles from './insertPlan.module.css';
import {useState} from "react";
import {PlanTag} from "../DailyPlanerContainer/DailyPlanerContainer.tsx";
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';

export default function InsertPlan() {
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<PlanTag[]>([]);
  
  return (
    <div className={`${mainStyle.roundedRectangle} + ${shrinkStyle.shrink}`}>
      
      <div className={styles.titleArea}>플랜 추가하기</div>
      
      <div className={styles.subTitleArea}>제목</div>
      
      <input type={'text'}
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className={styles.titleTextField}/>
      
      <div className={styles.subTitleArea}>
        태그 추가
        <img src={plus}
             onClick={() => setTags([{name: ''}, ...tags])}
             alt={'plus'}
             className={styles.plusMinusButton}/>
      </div>
      
      <div className={styles.tagArea}>
        {tags.map((tag, index) => (
          <div className={styles.tagElements} key={index}>
            <img src={minus}
                 onClick={() => setTags((prev) => {
                   prev.slice(index, 1);
                   return prev;
                 })}
                 alt={'minus'}
                 className={styles.plusMinusButton}/>
            <input type={'text'} value={tag.name} onChange={(e) => {
              setTags((prev) => {
                return prev.map((_tag, _index) =>
                  _index === index ? {...tag, name: e.target.value} : _tag
                );
              });
            }}/>
          </div>
        ))}
      </div>
    </div>
  )
}
