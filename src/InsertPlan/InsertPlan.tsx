import mainStyle from '../main.module.css';
import shrinkStyle from '../shrink.module.css';
import styles from './insertPlan.module.css';
import {useContext, useState} from "react";
import {Plan, PlanTag} from "../DailyPlanerContainer/DailyPlanerContainer.tsx";
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import buttonStyle from "../DailyPlanerContainer/plusButton.module.css";
import {useNavigate} from "react-router-dom";
import {PlanContext} from "../context/PlanContext.ts";
import {ModalContext} from "../context/ModalContext.ts";

export default function InsertPlan() {
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<PlanTag[]>([]);
  
  const navigate = useNavigate();
  const planContext = useContext(PlanContext);
  const modalContext = useContext(ModalContext);
  
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
      
      <div style={{marginTop: '10px', marginBottom: '10px'}}/>
      
      <div className={buttonStyle.plusButton} onClick={() => {
        const plan: Plan = {
          date: (new Date()).toDateString(),
          name: title,
          isChecked: false,
          tags: tags,
          isDone: false
        }
        
        planContext.addPlan(plan);
        modalContext.setShowModal(true);
        navigate(-1);
      }}>
        +
      </div>
    </div>
  )
}
