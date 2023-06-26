import FlexDiv from "../../atoms/FlexDiv";
import './index.scss';

const PlanFooter = ({handleBack, handleNext}) => {
  return (
    <FlexDiv additionalClassName='custom-container' id='plan-footer'>
      <button onClick={handleBack}>戻る</button>
      {/* <button>下書き保存</button> */}
      <button onClick={handleNext}>次へ</button>
    </FlexDiv>
  );
}

export default PlanFooter;